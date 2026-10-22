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

function getSupabaseConfig() {
  const url = process.env.SUPABASE_URL || 'https://lbxyproolnnvpggsowym.supabase.co';
  const key = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';
  return { url, key };
}

function readLocalDb() {
  try {
    if (!fs.existsSync(DB_FILE)) return { categories: [], products: [], orders: [] };
    return JSON.parse(fs.readFileSync(DB_FILE, 'utf-8'));
  } catch (err) {
    return { categories: [], products: [], orders: [] };
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
  if (Array.isArray(data) && data.length > 0) {
    const mapped = data.map(o => ({
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
      statusLabel: o.status_label || 'Order Received'
    }));
    const local = readLocalDb();
    local.orders = mapped;
    writeLocalDb(local);
    return mapped;
  }
  return readLocalDb().orders || [];
}

async function createOrder(order) {
  const payload = {
    id: order.id,
    timestamp: order.timestamp,
    date: order.date,
    created_at: Number(order.createdAt) || Date.now(),
    order_type: order.orderType,
    items: order.items || [],
    subtotal: Number(order.subtotal) || 0,
    service: Number(order.service) || 0,
    total: Number(order.total) || 0,
    status: order.status || 'received',
    status_label: order.statusLabel || 'Order Received'
  };

  await supabaseFetch('orders', 'POST', payload);

  const local = readLocalDb();
  local.orders = local.orders || [];
  local.orders.unshift(order);
  writeLocalDb(local);
  return { success: true, data: order };
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
  getExtras,
  saveExtra,
  patchExtraStock,
  deleteExtra
};
