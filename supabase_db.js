// ═══════════════════════════════════════════════════════════════════════
// SUPABASE DATABASE ADAPTER FOR ALEMAYA GRILL'D
// Connects Node backend directly to Supabase PostgREST API with
// automatic two-way fallback to local database.json.
// ═══════════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

// Load .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of envLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const k = trimmed.slice(0, eqIdx).trim();
      const v = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[k]) process.env[k] = v;
    }
  }
}

const DB_FILE = path.join(__dirname, 'database.json');
let bundledDb = null;
try {
  bundledDb = require('./database.json');
} catch (e) {
  bundledDb = { categories: [], products: [], orders: [], extras: [] };
}

function getSupabaseConfig() {
  let url = (process.env.SUPABASE_URL || 'https://lbxyproolnnvpggsowym.supabase.co').trim();
  url = url.replace(/^["']|["']$/g, '').replace(/\/+$/, '');
  let key = (process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '').trim();
  key = key.replace(/^["']|["']$/g, '');
  return { url, key };
}

function readLocalDb() {
  try {
    if (fs.existsSync(DB_FILE)) {
      return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
    }
    const altPath = path.join(process.cwd(), 'database.json');
    if (fs.existsSync(altPath)) {
      return JSON.parse(fs.readFileSync(altPath, 'utf-8'));
    }
    return bundledDb || { categories: [], products: [], orders: [], extras: [] };
  } catch (err) {
    return bundledDb || { categories: [], products: [], orders: [], extras: [] };
  }
}

function writeLocalDb(data) {
  try {
    fs.writeFileSync(DB_FILE, JSON.stringify(data, null, 2), 'utf-8');
    return true;
  } catch (err) {
    return false;
  }
}

async function supabaseFetch(endpoint, method = 'GET', body = null) {
  const { url, key } = getSupabaseConfig();
  if (!url || !key) return null;

  const headers = {
    'apikey': key,
    'Authorization': `Bearer ${key}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  };

  const opts = { method, headers };
  if (body !== null) opts.body = JSON.stringify(body);

  try {
    const res = await fetch(`${url}/rest/v1/${endpoint}`, opts);
    if (!res.ok) {
      const errText = await res.text();
      console.warn(`Supabase API [${method} ${endpoint}] returned ${res.status}:`, errText);
      return null;
    }
    const contentType = res.headers.get('content-type') || '';
    if (contentType.includes('application/json')) {
      return await res.json();
    }
    return true;
  } catch (err) {
    console.warn(`Supabase network error [${method} ${endpoint}]:`, err.message);
    return null;
  }
}

// ── CATEGORIES ──
async function getCategories() {
  const data = await supabaseFetch('categories?select=*&order=sort_order.asc');
  if (Array.isArray(data) && data.length > 0) {
    const mapped = data.map(c => ({
      id: c.id,
      name: c.name,
      icon: c.icon,
      order: c.sort_order
    }));
    // Sync local DB copy
    const local = readLocalDb();
    local.categories = mapped;
    writeLocalDb(local);
    return mapped;
  }
  return readLocalDb().categories || [];
}

async function saveCategory(cat, isEdit = false) {
  const payload = {
    id: cat.id,
    name: cat.name,
    icon: cat.icon || 'burger',
    sort_order: cat.order || 0
  };

  if (isEdit) {
    await supabaseFetch(`categories?id=eq.${encodeURIComponent(cat.id)}`, 'PATCH', payload);
  } else {
    await supabaseFetch('categories', 'POST', payload);
  }

  // Update local DB
  const local = readLocalDb();
  local.categories = local.categories || [];
  const idx = local.categories.findIndex(c => c.id === cat.id);
  if (idx !== -1) {
    local.categories[idx] = { ...local.categories[idx], ...cat };
  } else {
    local.categories.push(cat);
  }
  writeLocalDb(local);
  return { success: true, data: cat };
}

async function deleteCategory(id) {
  await supabaseFetch(`categories?id=eq.${encodeURIComponent(id)}`, 'DELETE');
  const local = readLocalDb();
  local.categories = (local.categories || []).filter(c => c.id !== id);
  writeLocalDb(local);
  return { success: true };
}

// ── PRODUCTS ──
async function getProducts() {
  const data = await supabaseFetch('products?select=*&order=created_at.asc');
  if (Array.isArray(data) && data.length > 0) {
    const mapped = data.map(p => ({
      id: p.id,
      categoryId: p.category_id,
      name: p.name,
      badge: p.badge || '',
      rating: Number(p.rating) || 4.8,
      reviewsCount: Number(p.reviews_count) || 100,
      description: p.description || '',
      ingredients: Array.isArray(p.ingredients) ? p.ingredients : [],
      basePrice: Number(p.base_price) || 0,
      image: p.image || 'burger_classic.jpg',
      available: p.available !== false,
      customizations: []
    }));
    const local = readLocalDb();
    local.products = mapped;
    writeLocalDb(local);
    return mapped;
  }
  return readLocalDb().products || [];
}

async function saveProduct(prod, isEdit = false) {
  const payload = {
    id: prod.id,
    category_id: prod.categoryId,
    name: prod.name,
    badge: prod.badge || null,
    rating: prod.rating || 4.8,
    reviews_count: prod.reviewsCount || 10,
    description: prod.description || '',
    ingredients: prod.ingredients || [],
    base_price: Number(prod.basePrice) || 0,
    image: prod.image || 'burger_classic.jpg',
    available: prod.available !== false
  };

  if (isEdit) {
    await supabaseFetch(`products?id=eq.${encodeURIComponent(prod.id)}`, 'PATCH', payload);
  } else {
    await supabaseFetch('products', 'POST', payload);
  }

  const local = readLocalDb();
  local.products = local.products || [];
  const idx = local.products.findIndex(p => p.id === prod.id);
  if (idx !== -1) {
    local.products[idx] = { ...local.products[idx], ...prod };
  } else {
    local.products.push(prod);
  }
  writeLocalDb(local);
  return { success: true, data: prod };
}

async function patchProductStock(id, available) {
  await supabaseFetch(`products?id=eq.${encodeURIComponent(id)}`, 'PATCH', { available });
  const local = readLocalDb();
  const prod = (local.products || []).find(p => p.id === id);
  if (prod) {
    prod.available = available;
    writeLocalDb(local);
  }
  return { success: true };
}

async function deleteProduct(id) {
  await supabaseFetch(`products?id=eq.${encodeURIComponent(id)}`, 'DELETE');
  const local = readLocalDb();
  local.products = (local.products || []).filter(p => p.id !== id);
  writeLocalDb(local);
  return { success: true };
}

// ── ORDERS ──
async function getOrders() {
  const data = await supabaseFetch('orders?select=*&order=created_at.desc');
  if (Array.isArray(data)) {
    const mapped = data.map(o => {
      let extractTable = null;
      if (o.order_type && o.order_type.includes('(')) {
        const m = o.order_type.match(/\(([^)]+)\)/);
        if (m && m[1]) extractTable = m[1].trim();
      }
      const resolvedTable = o.table_name || o.tableName || o.tableNumber || extractTable;
      const cleanNum = resolvedTable ? String(resolvedTable).replace(/^table[\s\-_]*/i, '').trim() : null;

      return {
        id: o.id,
        timestamp: o.timestamp,
        date: o.date,
        createdAt: Number(o.created_at) || Date.now(),
        orderType: o.order_type,
        items: Array.isArray(o.items) ? o.items : [],
        subtotal: Number(o.subtotal) || 0,
        service: Number(o.service) || 0,
        total: Number(o.total) || 0,
        status: o.status || 'received',
        statusLabel: o.status_label || 'Order Received',
        tableId: o.table_id || o.tableId || (cleanNum ? `table-${cleanNum}` : null),
        tableName: resolvedTable,
        tableToken: o.table_token || o.tableToken || cleanNum
      };
    });
    const local = readLocalDb();
    local.orders = mapped;
    writeLocalDb(local);
    return mapped;
  }
  return readLocalDb().orders || [];
}

async function createOrder(order) {
  const baseType = (order.orderType || 'Dine-in').replace(/\s*\(.*?\)\s*/g, '').trim();
  const formattedOrderType = order.tableName ? `${baseType} (${order.tableName})` : (order.orderType || 'Dine-in');

  const payload = {
    id: order.id,
    timestamp: order.timestamp,
    date: order.date,
    created_at: Number(order.createdAt) || Date.now(),
    order_type: formattedOrderType,
    items: order.items || [],
    subtotal: Number(order.subtotal) || 0,
    service: Number(order.service) || 0,
    total: Number(order.total) || 0,
    status: order.status || 'received',
    status_label: order.statusLabel || 'Order Received',
    table_id: order.tableId || null,
    table_name: order.tableName || order.tableNumber || null,
    table_token: order.tableToken || null
  };

  let res = await supabaseFetch('orders', 'POST', payload);
  if (!res) {
    // If Supabase schema does not have table_id/table_name columns yet, fallback to standard schema
    const fallbackPayload = {
      id: order.id,
      timestamp: order.timestamp,
      date: order.date,
      created_at: Number(order.createdAt) || Date.now(),
      order_type: formattedOrderType,
      items: order.items || [],
      subtotal: Number(order.subtotal) || 0,
      service: Number(order.service) || 0,
      total: Number(order.total) || 0,
      status: order.status || 'received',
      status_label: order.statusLabel || 'Order Received'
    };
    res = await supabaseFetch('orders', 'POST', fallbackPayload);
  }


  const local = readLocalDb();
  local.orders = local.orders || [];
  local.orders.unshift(order);
  writeLocalDb(local);
  return { success: true, data: order };
}



async function clearAllOrders() {
  try {
    await supabaseFetch('orders?id=neq.__none__', 'DELETE');
  } catch (e) {
    console.warn('Supabase clear orders warning:', e);
  }
  const local = readLocalDb();
  local.orders = [];
  writeLocalDb(local);
  return { success: true, message: 'All orders cleared' };
}

async function deleteOrder(id) {
  try {
    await supabaseFetch(`orders?id=eq.${encodeURIComponent(id)}`, 'DELETE');
  } catch (e) {
    console.warn('Supabase delete order warning:', e);
  }
  const local = readLocalDb();
  local.orders = (local.orders || []).filter(o => o.id !== id);
  writeLocalDb(local);
  return { success: true, message: `Order #${id} deleted` };
}

async function updateOrder(id, orderData) {
  const local = readLocalDb();
  const idx = (local.orders || []).findIndex(o => o.id === id);
  if (idx !== -1) {
    local.orders[idx] = { ...local.orders[idx], ...orderData };
    writeLocalDb(local);
  }
  try {
    const payload = {};
    if (orderData.items) payload.items = orderData.items;
    if (orderData.subtotal !== undefined) payload.subtotal = orderData.subtotal;
    if (orderData.total !== undefined) payload.total = orderData.total;
    if (orderData.status) payload.status = orderData.status;
    if (orderData.statusLabel) payload.status_label = orderData.statusLabel;
    await supabaseFetch(`orders?id=eq.${encodeURIComponent(id)}`, 'PATCH', payload);
  } catch (e) {
    console.warn('Supabase update order warning:', e);
  }
  return { success: true, data: (local.orders && local.orders[idx]) ? local.orders[idx] : orderData };
}

async function updateOrderStatus(id, status, statusLabel) {
  const payload = { status };
  if (statusLabel) payload.status_label = statusLabel;

  await supabaseFetch(`orders?id=eq.${encodeURIComponent(id)}`, 'PATCH', payload);

  const local = readLocalDb();
  const ord = (local.orders || []).find(o => o.id === id);
  if (ord) {
    ord.status = status;
    if (statusLabel) ord.statusLabel = statusLabel;
    writeLocalDb(local);
  }
  return { success: true };
}

// ── EXTRAS & ADD-ONS ──
async function getExtras() {
  const data = await supabaseFetch('extras?select=*&order=created_at.asc');
  if (Array.isArray(data) && data.length > 0) {
    const mapped = data.map(e => ({
      id: e.id,
      name: e.name,
      price: Number(e.price) || 0,
      categories: Array.isArray(e.categories) ? e.categories : ['all'],
      available: e.available !== false
    }));
    const local = readLocalDb();
    local.extras = mapped;
    writeLocalDb(local);
    return mapped;
  }
  return readLocalDb().extras || [];
}

async function saveExtra(extra, isEdit = false) {
  const payload = {
    id: extra.id,
    name: extra.name,
    price: Number(extra.price) || 0,
    categories: extra.categories || ['all'],
    available: extra.available !== false
  };

  if (isEdit) {
    await supabaseFetch(`extras?id=eq.${encodeURIComponent(extra.id)}`, 'PATCH', payload);
  } else {
    await supabaseFetch('extras', 'POST', payload);
  }

  const local = readLocalDb();
  local.extras = local.extras || [];
  const idx = local.extras.findIndex(e => e.id === extra.id);
  if (idx !== -1) {
    local.extras[idx] = { ...local.extras[idx], ...extra };
  } else {
    local.extras.push(extra);
  }
  writeLocalDb(local);
  return { success: true, data: extra };
}

async function patchExtraStock(id, available) {
  await supabaseFetch(`extras?id=eq.${encodeURIComponent(id)}`, 'PATCH', { available });
  const local = readLocalDb();
  local.extras = local.extras || [];
  const extra = local.extras.find(e => e.id === id);
  if (extra) {
    extra.available = available;
    writeLocalDb(local);
  }
  return { success: true };
}

async function deleteExtra(id) {
  await supabaseFetch(`extras?id=eq.${encodeURIComponent(id)}`, 'DELETE');
  const local = readLocalDb();
  local.extras = (local.extras || []).filter(e => e.id !== id);
  writeLocalDb(local);
  return { success: true };
}

// ── TABLES & UNIQUE QR TOKENS ──
function generateSecureToken() {
  const chars = 'abcdefghijklmnopqrstuvwxyz0123456789';
  let token = 't_';
  for (let i = 0; i < 8; i++) {
    token += chars.charAt(Math.floor(Math.random() * chars.length));
  }
  return token;
}

async function getTables() {
  const data = await supabaseFetch('tables?select=*&order=number.asc');
  if (Array.isArray(data) && data.length > 0) {
    const mapped = data.map(t => ({
      id: t.id,
      name: t.name,
      number: Number(t.number) || 0,
      token: t.token || ('t_' + t.id),
      active: t.active !== false,
      capacity: Number(t.capacity) || 4,
      createdAt: Number(t.created_at) || Date.now()
    }));
    const local = readLocalDb();
    local.tables = mapped;
    writeLocalDb(local);
    return mapped;
  }
  return readLocalDb().tables || [];
}

async function saveTable(table, isEdit = false) {
  const token = table.token || generateSecureToken();
  const tableData = {
    id: table.id || ('tbl_' + Date.now()),
    name: table.name,
    number: Number(table.number) || 0,
    token: token,
    active: table.active !== false,
    capacity: Number(table.capacity) || 4,
    created_at: table.createdAt || Date.now()
  };

  const payload = {
    id: tableData.id,
    name: tableData.name,
    number: tableData.number,
    token: tableData.token,
    active: tableData.active,
    capacity: tableData.capacity,
    created_at: tableData.created_at
  };

  if (isEdit) {
    await supabaseFetch(`tables?id=eq.${encodeURIComponent(table.id)}`, 'PATCH', payload);
  } else {
    await supabaseFetch('tables', 'POST', payload);
  }

  const local = readLocalDb();
  local.tables = local.tables || [];
  const idx = local.tables.findIndex(t => t.id === tableData.id);
  if (idx !== -1) {
    local.tables[idx] = { ...local.tables[idx], ...tableData };
  } else {
    local.tables.push(tableData);
  }
  local.tables.sort((a, b) => (a.number || 0) - (b.number || 0));
  writeLocalDb(local);
  return { success: true, data: tableData };
}

async function saveTablesBulk(tablesList) {
  const local = readLocalDb();
  local.tables = local.tables || [];

  const created = [];
  for (const t of tablesList) {
    const tableData = {
      id: t.id || ('tbl_' + Date.now() + '_' + Math.floor(Math.random() * 1000)),
      name: t.name,
      number: Number(t.number) || 0,
      token: t.token || generateSecureToken(),
      active: t.active !== false,
      capacity: Number(t.capacity) || 4,
      created_at: Date.now()
    };
    created.push(tableData);

    const idx = local.tables.findIndex(ex => ex.id === tableData.id || ex.name.toLowerCase() === tableData.name.toLowerCase());
    if (idx !== -1) {
      local.tables[idx] = { ...local.tables[idx], ...tableData };
    } else {
      local.tables.push(tableData);
    }
  }

  local.tables.sort((a, b) => (a.number || 0) - (b.number || 0));
  writeLocalDb(local);

  try {
    const payloads = created.map(t => ({
      id: t.id,
      name: t.name,
      number: t.number,
      token: t.token,
      active: t.active,
      capacity: t.capacity,
      created_at: t.created_at
    }));
    await supabaseFetch('tables', 'POST', payloads);
  } catch (e) {}

  return { success: true, count: created.length, data: local.tables };
}

async function patchTable(id, patch) {
  await supabaseFetch(`tables?id=eq.${encodeURIComponent(id)}`, 'PATCH', patch);
  const local = readLocalDb();
  local.tables = local.tables || [];
  const t = local.tables.find(item => item.id === id);
  if (t) {
    Object.assign(t, patch);
    writeLocalDb(local);
  }
  return { success: true, data: t };
}

async function regenerateTableToken(id) {
  const newToken = generateSecureToken();
  return await patchTable(id, { token: newToken });
}

async function deleteTable(id) {
  await supabaseFetch(`tables?id=eq.${encodeURIComponent(id)}`, 'DELETE');
  const local = readLocalDb();
  local.tables = (local.tables || []).filter(t => t.id !== id);
  writeLocalDb(local);
  return { success: true };
}

async function getTableByToken(token) {
  if (!token) return null;
  const local = readLocalDb();
  const tables = local.tables || [];
  const found = tables.find(t => t.token === token);
  if (found) return found;

  const data = await supabaseFetch(`tables?token=eq.${encodeURIComponent(token)}&select=*`);
  if (Array.isArray(data) && data.length > 0) {
    const t = data[0];
    return {
      id: t.id,
      name: t.name,
      number: Number(t.number) || 0,
      token: t.token,
      active: t.active !== false,
      capacity: Number(t.capacity) || 4
    };
  }
  return null;
}

module.exports = {
  getCategories,
  saveCategory,
  deleteCategory,
  getProducts,
  saveProduct,
  patchProductStock,
  deleteProduct,
  getOrders,
  createOrder,
  updateOrderStatus,
  clearAllOrders,
  deleteOrder,
  updateOrder,
  getExtras,
  saveExtra,
  patchExtraStock,
  deleteExtra,
  getTables,
  saveTable,
  saveTablesBulk,
  patchTable,
  regenerateTableToken,
  deleteTable,
  getTableByToken
};
