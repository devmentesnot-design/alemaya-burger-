// ═══════════════════════════════════════════════════════════════════════
// ALEMAYA GRILL'D - SUPABASE POSTGRESQL & CLOUDINARY BACKEND SERVER
// Serves static assets and provides REST endpoints connected directly to
// Supabase (lbxyproolnnvpggsowym.supabase.co) with local database fallback.
// ═══════════════════════════════════════════════════════════════════════

const http = require('http');
const fs = require('fs');
const path = require('path');
const url = require('url');

// Load .env file if present
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

const PORT = process.env.PORT || 3000;
const DB_FILE = path.join(__dirname, 'database.json');
const supabaseDb = require('./supabase_db');

// MIME types for static assets
const MIME_TYPES = {
  '.html': 'text/html; charset=utf-8',
  '.css': 'text/css; charset=utf-8',
  '.js': 'application/javascript; charset=utf-8',
  '.json': 'application/json; charset=utf-8',
  '.png': 'image/png',
  '.jpg': 'image/jpeg',
  '.jpeg': 'image/jpeg',
  '.svg': 'image/svg+xml',
  '.ico': 'image/x-icon',
  '.webp': 'image/webp'
};

// Helper to parse JSON body with 15MB limit (supports Vercel pre-parsed body)
function parseJsonBody(req) {
  return new Promise((resolve, reject) => {
    if (req.body && typeof req.body === 'object') {
      return resolve(req.body);
    }
    if (typeof req.body === 'string') {
      try { return resolve(JSON.parse(req.body)); } catch (e) { return resolve({}); }
    }
    if (req.readableEnded) {
      return resolve({});
    }
    let body = '';
    let settled = false;
    const timer = setTimeout(() => {
      if (!settled) {
        settled = true;
        resolve({});
      }
    }, 4000);

    req.on('data', chunk => {
      body += chunk.toString();
      if (body.length > 15 * 1024 * 1024) { // 15MB limit for images
        if (!settled) {
          settled = true;
          clearTimeout(timer);
          reject(new Error('Payload too large'));
        }
      }
    });
    req.on('end', () => {
      if (!settled) {
        settled = true;
        clearTimeout(timer);
        if (!body) return resolve({});
        try {
          resolve(JSON.parse(body));
        } catch (e) {
          reject(new Error('Invalid JSON'));
        }
      }
    });
    req.on('error', err => {
      if (!settled) {
        settled = true;
        clearTimeout(timer);
        reject(err);
      }
    });
  });
}

function sendJson(res, statusCode, data) {
  res.writeHead(statusCode, {
    'Content-Type': 'application/json; charset=utf-8',
    'Access-Control-Allow-Origin': '*',
    'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
    'Access-Control-Allow-Headers': 'Content-Type, Authorization'
  });
  res.end(JSON.stringify(data));
}

// ══ HTTP SERVER & ROUTING ══
async function handleRequest(req, res) {
  // CORS preflight
  if (req.method === 'OPTIONS') {
    res.writeHead(204, {
      'Access-Control-Allow-Origin': '*',
      'Access-Control-Allow-Methods': 'GET, POST, PUT, PATCH, DELETE, OPTIONS',
      'Access-Control-Allow-Headers': 'Content-Type, Authorization'
    });
    return res.end();
  }

  const parsedUrl = url.parse(req.url, true);
  const pathname = parsedUrl.pathname;

  // ═════════════════════════════════════════════════════════════════
  // REST API ROUTES (/api/*)
  // ═════════════════════════════════════════════════════════════════
  if (pathname === '/api' || pathname.startsWith('/api/')) {
    try {
      if (pathname === '/api' || pathname === '/api/') {
        return sendJson(res, 200, {
          success: true,
          name: "Alemaya Grill'd Live API",
          status: "online",
          database: "supabase",
          endpoints: [
            "/api/categories",
            "/api/products",
            "/api/orders",
            "/api/extras",
            "/api/tables",
            "/api/stats",
            "/api/cloudinary-config"
          ]
        });
      }

      // ── 1. CATEGORIES CRUD (SUPABASE LIVE + LOCAL SYNC) ──
      if (pathname === '/api/categories') {
        if (req.method === 'GET') {
          const cats = await supabaseDb.getCategories();
          return sendJson(res, 200, { success: true, data: cats });
        }
        if (req.method === 'POST') {
          const body = await parseJsonBody(req);
          if (!body.name) return sendJson(res, 400, { success: false, error: 'Category name is required' });
          const id = (body.id || body.name.toLowerCase().replace(/[^a-z0-9]/g, '-')).trim();
          
          const newCat = {
            id,
            name: body.name.trim(),
            icon: body.icon || 'utensils',
            order: Number(body.order) || 0
          };
          const saved = await supabaseDb.saveCategory(newCat, false);
          return sendJson(res, 201, saved);
        }
      }

      if (pathname.startsWith('/api/categories/')) {
        const catId = decodeURIComponent(pathname.replace('/api/categories/', ''));

        if (req.method === 'GET') {
          const cats = await supabaseDb.getCategories();
          const found = cats.find(c => c.id === catId);
          if (!found) return sendJson(res, 404, { success: false, error: 'Category not found' });
          return sendJson(res, 200, { success: true, data: found });
        }

        if (req.method === 'PUT') {
          const body = await parseJsonBody(req);
          const cat = { id: catId, ...body };
          const result = await supabaseDb.saveCategory(cat, true);
          return sendJson(res, 200, result);
        }

        if (req.method === 'DELETE') {
          await supabaseDb.deleteCategory(catId);
          return sendJson(res, 200, { success: true, message: 'Category deleted' });
        }
      }

      // ── 2. PRODUCTS / MENU ITEMS CRUD (SUPABASE LIVE + LOCAL SYNC) ──
      if (pathname === '/api/products') {
        if (req.method === 'GET') {
          const prods = await supabaseDb.getProducts();
          return sendJson(res, 200, { success: true, data: prods });
        }
        if (req.method === 'POST') {
          const body = await parseJsonBody(req);
          if (!body.name || body.basePrice === undefined) {
            return sendJson(res, 400, { success: false, error: 'Product name and price are required' });
          }

          const newProd = {
            id: body.id || 'prod_' + Date.now(),
            categoryId: body.categoryId || 'burgers',
            name: body.name.trim(),
            badge: body.badge || '',
            rating: body.rating || 4.8,
            reviewsCount: body.reviewsCount || 10,
            description: body.description || '',
            ingredients: Array.isArray(body.ingredients) ? body.ingredients : (body.ingredients ? body.ingredients.split(',').map(s=>s.trim()) : []),
            basePrice: Number(body.basePrice) || 0,
            image: body.image || 'burger_classic.jpg',
            available: body.available !== false,
            customizations: []
          };

          const saved = await supabaseDb.saveProduct(newProd, false);
          return sendJson(res, 201, saved);
        }
      }

      if (pathname.startsWith('/api/products/')) {
        const prodId = decodeURIComponent(pathname.replace('/api/products/', ''));

        if (req.method === 'GET') {
          const prods = await supabaseDb.getProducts();
          const found = prods.find(p => p.id === prodId);
          if (!found) return sendJson(res, 404, { success: false, error: 'Product not found' });
          return sendJson(res, 200, { success: true, data: found });
        }

        if (req.method === 'PUT') {
          const body = await parseJsonBody(req);
          const prod = { id: prodId, ...body };
          const result = await supabaseDb.saveProduct(prod, true);
          return sendJson(res, 200, result);
        }

        if (req.method === 'PATCH') {
          const body = await parseJsonBody(req);
          if (body.available !== undefined) {
            await supabaseDb.patchProductStock(prodId, body.available);
          } else {
            await supabaseDb.saveProduct({ id: prodId, ...body }, true);
          }
          return sendJson(res, 200, { success: true });
        }

        if (req.method === 'DELETE') {
          await supabaseDb.deleteProduct(prodId);
          return sendJson(res, 200, { success: true, message: 'Product deleted' });
        }
      }

      // ── 2.5 EXTRAS & ADD-ONS CRUD (MANAGED BY ADMIN & CATEGORY-SCOPED) ──
      if (pathname === '/api/extras') {
        if (req.method === 'GET') {
          const extras = await supabaseDb.getExtras();
          return sendJson(res, 200, { success: true, data: extras });
        }
        if (req.method === 'POST') {
          const body = await parseJsonBody(req);
          if (!body.name) return sendJson(res, 400, { success: false, error: 'Name is required' });
          const extraId = body.id || 'ext_' + Date.now().toString(36);
          const saved = await supabaseDb.saveExtra({
            id: extraId,
            name: body.name,
            price: Number(body.price) || 0,
            categories: Array.isArray(body.categories) ? body.categories : ['all'],
            available: body.available !== false
          }, false);
          return sendJson(res, 201, saved);
        }
      }

      if (pathname.startsWith('/api/extras/')) {
        const extraId = decodeURIComponent(pathname.replace('/api/extras/', ''));

        if (req.method === 'PATCH' || req.method === 'PUT') {
          const body = await parseJsonBody(req);
          if (body.available !== undefined && Object.keys(body).length === 1) {
            await supabaseDb.patchExtraStock(extraId, body.available);
          } else {
            await supabaseDb.saveExtra({ id: extraId, ...body }, true);
          }
          return sendJson(res, 200, { success: true });
        }

        if (req.method === 'DELETE') {
          await supabaseDb.deleteExtra(extraId);
          return sendJson(res, 200, { success: true, message: 'Extra deleted' });
        }
      }

      // ── 3. ORDERS CRUD & KITCHEN STATUS (SUPABASE LIVE + LOCAL SYNC) ──
      if (pathname === '/api/orders') {
        if (req.method === 'GET') {
          const orders = await supabaseDb.getOrders();
          return sendJson(res, 200, { success: true, data: orders });
        }
        if (req.method === 'POST') {
          const body = await parseJsonBody(req);
          const orderId = body.id || 'AG-' + Math.floor(1000 + Math.random() * 9000);
          const now = new Date();

          let tableId = body.tableId || null;
          let tableName = body.tableName || body.tableNumber || null;
          let tableToken = body.tableToken || null;

          // If body.orderType contains table e.g. "Dine-in (Table 4)"
          if (!tableName && body.orderType && body.orderType.includes('(')) {
            const m = body.orderType.match(/\(([^)]+)\)/);
            if (m && m[1]) tableName = m[1].trim();
          }

          // If a tableToken is provided, validate or synthesize
          if (tableToken) {
            const table = await supabaseDb.getTableByToken(tableToken);
            if (table) {
              if (table.active === false) {
                return sendJson(res, 400, { success: false, error: 'Table is deactivated. Cannot place order.' });
              }
              tableId = table.id;
              tableName = table.name;
            } else if (!tableName) {
              const clean = String(tableToken).replace(/^table[\s\-_]*/i, '').trim();
              tableName = /^\d+$/.test(clean) ? `Table ${clean}` : (tableToken.toLowerCase().startsWith('table') ? tableToken : `Table ${tableToken}`);
              tableId = `table-${clean || tableToken}`;
            }
          }

          if (tableName && !tableId) {
            const clean = String(tableName).replace(/^table[\s\-_]*/i, '').trim();
            tableId = `table-${clean || tableName}`;
          }
          
          const newOrder = {
            id: orderId,
            timestamp: body.timestamp || now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }),
            date: body.date || now.toISOString().split('T')[0],
            createdAt: body.createdAt || Date.now(),
            orderType: body.orderType || (tableName ? 'Dine-in' : 'Takeaway'),
            items: body.items || [],
            subtotal: Number(body.subtotal) || 0,
            service: Number(body.service) || 0,
            total: Number(body.total) || 0,
            status: body.status || 'received',
            statusLabel: body.statusLabel || 'Order Received',
            tableId,
            tableName,
            tableToken
          };

          const saved = await supabaseDb.createOrder(newOrder);
          return sendJson(res, 201, saved);
        }
      }

      if (pathname.startsWith('/api/orders/')) {
        const orderId = decodeURIComponent(pathname.replace('/api/orders/', ''));

        if (req.method === 'GET') {
          const orders = await supabaseDb.getOrders();
          const found = orders.find(o => o.id === orderId);
          if (!found) return sendJson(res, 404, { success: false, error: 'Order not found' });
          return sendJson(res, 200, { success: true, data: found });
        }

        if (req.method === 'PATCH' || req.method === 'PUT') {
          const body = await parseJsonBody(req);
          await supabaseDb.updateOrderStatus(orderId, body.status, body.statusLabel);
          return sendJson(res, 200, { success: true });
        }
      }

      // ── 3.5 RESTAURANT TABLES & QR CODES CRUD ──
      if (pathname === '/api/tables') {
        if (req.method === 'GET') {
          const tables = await supabaseDb.getTables();
          return sendJson(res, 200, { success: true, data: tables });
        }
        if (req.method === 'POST') {
          const body = await parseJsonBody(req);

          // Bulk table generation (e.g. from 1 to 20 with prefix "Table ")
          if (body.bulk) {
            const prefix = (body.prefix !== undefined ? String(body.prefix) : 'Table ').trim();
            const from = Math.max(1, parseInt(body.from) || 1);
            const to = Math.min(200, Math.max(from, parseInt(body.to) || from));
            const capacity = parseInt(body.capacity) || 4;

            const existing = await supabaseDb.getTables();
            const existingNames = new Set(existing.map(t => (t.name || '').toLowerCase().trim()));

            const tablesToCreate = [];
            for (let num = from; num <= to; num++) {
              const name = prefix ? `${prefix} ${num}` : `Table ${num}`;
              if (!existingNames.has(name.toLowerCase())) {
                tablesToCreate.push({
                  name,
                  number: num,
                  capacity,
                  active: true
                });
              }
            }

            if (tablesToCreate.length === 0) {
              return sendJson(res, 200, { success: true, message: 'All specified tables already exist', data: existing });
            }

            const result = await supabaseDb.saveTablesBulk(tablesToCreate);
            return sendJson(res, 201, result);
          }

          // Single table creation
          if (!body.name) return sendJson(res, 400, { success: false, error: 'Table name is required' });
          const id = body.id || ('tbl_' + Date.now().toString(36));
          const num = parseInt(body.number) || (parseInt(body.name.replace(/[^0-9]/g, '')) || 0);

          const newTable = {
            id,
            name: body.name.trim(),
            number: num,
            capacity: parseInt(body.capacity) || 4,
            active: body.active !== false
          };

          const saved = await supabaseDb.saveTable(newTable, false);
          return sendJson(res, 201, saved);
        }
      }

      if (pathname.startsWith('/api/tables/validate/')) {
        const token = decodeURIComponent(pathname.replace('/api/tables/validate/', '')).trim();
        const table = await supabaseDb.getTableByToken(token);
        if (!table) {
          const clean = token.replace(/^table[\s\-_]*/i, '').trim();
          const displayName = /^\d+$/.test(clean) ? `Table ${clean}` : (token.toLowerCase().startsWith('table') ? token : `Table ${token}`);
          return sendJson(res, 200, {
            success: true,
            data: {
              id: `table-${clean || token}`,
              name: displayName,
              tableNumber: clean || token,
              token: token,
              capacity: 4,
              active: true
            }
          });
        }
        if (table.active === false) {
          return sendJson(res, 400, { success: false, error: 'Table is currently deactivated', data: table });
        }
        return sendJson(res, 200, { success: true, data: table });
      }

      if (pathname.startsWith('/api/tables/') && pathname.endsWith('/regenerate-token')) {
        const id = decodeURIComponent(pathname.replace('/api/tables/', '').replace('/regenerate-token', ''));
        const result = await supabaseDb.regenerateTableToken(id);
        return sendJson(res, 200, result);
      }

      if (pathname.startsWith('/api/tables/')) {
        const id = decodeURIComponent(pathname.replace('/api/tables/', ''));

        if (req.method === 'GET') {
          const tables = await supabaseDb.getTables();
          const found = tables.find(t => t.id === id);
          if (!found) return sendJson(res, 404, { success: false, error: 'Table not found' });
          return sendJson(res, 200, { success: true, data: found });
        }

        if (req.method === 'PUT') {
          const body = await parseJsonBody(req);
          const table = { id, ...body };
          const result = await supabaseDb.saveTable(table, true);
          return sendJson(res, 200, result);
        }

        if (req.method === 'PATCH') {
          const body = await parseJsonBody(req);
          const result = await supabaseDb.patchTable(id, body);
          return sendJson(res, 200, result);
        }

        if (req.method === 'DELETE') {
          await supabaseDb.deleteTable(id);
          return sendJson(res, 200, { success: true, message: 'Table deleted' });
        }
      }

      // ── 4. ANALYTICS & STATS (REAL SUPABASE LIVE METRICS) ──
      if (pathname === '/api/stats' && req.method === 'GET') {
        const [orders, prods, cats] = await Promise.all([
          supabaseDb.getOrders(),
          supabaseDb.getProducts(),
          supabaseDb.getCategories()
        ]);

        const todayStr = new Date().toISOString().split('T')[0];
        const validOrders = orders.filter(o => o.status !== 'cancelled');
        const todayOrders = validOrders.filter(o => o.date === todayStr);

        const totalRevenue = validOrders.reduce((sum, o) => sum + (o.total || 0), 0);
        const todayRevenue = todayOrders.reduce((sum, o) => sum + (o.total || 0), 0);
        const activeKitchen = orders.filter(o => o.status === 'received' || o.status === 'cooking' || o.status === 'preparing').length;

        return sendJson(res, 200, {
          success: true,
          data: {
            totalRevenue,
            todayRevenue,
            totalOrders: validOrders.length,
            todayOrdersCount: todayOrders.length,
            activeKitchen,
            categoriesCount: cats.length,
            productsCount: prods.length,
            database: 'supabase'
          }
        });
      }

      // ── 5. CLOUDINARY & IMAGE UPLOAD ──
      if (pathname === '/api/cloudinary-config' && req.method === 'GET') {
        const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'xheul1fe';
        const apiKey = process.env.CLOUDINARY_API_KEY || '';
        return sendJson(res, 200, {
          success: true,
          data: {
            cloudName,
            hasKey: !!apiKey,
            uploadUrl: `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`
          }
        });
      }

      if (pathname === '/api/upload-image' && req.method === 'POST') {
        const body = await parseJsonBody(req);
        const imageData = body.file || body.image;

        if (!imageData) {
          return sendJson(res, 400, { success: false, error: 'No image data provided' });
        }

        const cloudName = process.env.CLOUDINARY_CLOUD_NAME || 'xheul1fe';
        const apiSecret = process.env.CLOUDINARY_API_SECRET || '';
        const apiKey = process.env.CLOUDINARY_API_KEY || '';

        // If Cloudinary API Key is configured, upload directly to Cloudinary
        if (apiKey) {
          try {
            const crypto = require('crypto');
            const timestamp = Math.round(Date.now() / 1000);
            const strToSign = `folder=alemaya-burger&timestamp=${timestamp}${apiSecret}`;
            const signature = crypto.createHash('sha1').update(strToSign).digest('hex');

            const payload = {
              file: imageData,
              timestamp,
              folder: 'alemaya-burger',
              api_key: apiKey,
              signature
            };

            const cldRes = await fetch(`https://api.cloudinary.com/v1_1/${cloudName}/image/upload`, {
              method: 'POST',
              headers: { 'Content-Type': 'application/json' },
              body: JSON.stringify(payload)
            });
            const cldData = await cldRes.json();

            if (cldData.secure_url) {
              return sendJson(res, 200, {
                success: true,
                url: cldData.secure_url,
                public_id: cldData.public_id,
                source: 'cloudinary'
              });
            } else {
              console.warn('Cloudinary upload warning:', cldData);
            }
          } catch (cldErr) {
            console.error('Cloudinary upload error:', cldErr);
          }
        }

        // Base64 upload fallback: save locally and serve
        if (typeof imageData === 'string' && imageData.startsWith('data:image/')) {
          const matches = imageData.match(/^data:image\/([a-zA-Z0-9]+);base64,(.+)$/);
          if (matches) {
            const ext = matches[1] === 'jpeg' ? 'jpg' : matches[1];
            const filename = `upload_${Date.now()}_${Math.floor(Math.random() * 1000)}.${ext}`;
            const savePath = path.join(__dirname, filename);
            fs.writeFileSync(savePath, Buffer.from(matches[2], 'base64'));
            return sendJson(res, 200, {
              success: true,
              url: filename,
              source: 'local'
            });
          }
        }

        // Direct URL fallback
        if (typeof imageData === 'string' && (imageData.startsWith('http://') || imageData.startsWith('https://'))) {
          return sendJson(res, 200, {
            success: true,
            url: imageData,
            source: 'url'
          });
        }

        return sendJson(res, 400, { success: false, error: 'Unsupported image format' });
      }

      return sendJson(res, 404, { success: false, error: 'API route not found' });
    } catch (err) {
      console.error('API Error:', err);
      return sendJson(res, 500, { success: false, error: err.message });
    }
  }

  // ═════════════════════════════════════════════════════════════════
  // STATIC ASSET SERVING
  // ═════════════════════════════════════════════════════════════════
  return new Promise(resolve => {
    let safePath = path.normalize(pathname).replace(/^(\.\.[\/\\])+/, '');
    const cleanPath = (pathname || '').toLowerCase().replace(/[\\\/]+$/, '');

    // SPA client-side routes always serve index.html
    const isSpaRoute = !cleanPath || cleanPath === '' || cleanPath === '/kitchen' || cleanPath === '/admin' || cleanPath === '/chef' || cleanPath === '/orders' || cleanPath === '/menu';
    
    if (isSpaRoute) {
      safePath = '/index.html';
    }

    let filePath = path.join(__dirname, safePath);

    // If file doesn't exist directly, check if it's an asset requested under a route (e.g. /admin/app.js -> /app.js)
    if (!fs.existsSync(filePath)) {
      const baseName = path.basename(safePath);
      const rootAsset = path.join(__dirname, baseName);
      if (fs.existsSync(rootAsset) && fs.statSync(rootAsset).isFile()) {
        filePath = rootAsset;
      }
    }

    fs.stat(filePath, (err, stats) => {
      if (err || !stats.isFile()) {
        const ext = path.extname(safePath).toLowerCase();
        // If an actual static file with an extension was requested and not found, return 404
        if (ext && ext !== '.html') {
          res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('404 Not Found');
          return resolve();
        }

        // Fallback to index.html for client-side routing
        const indexPath = path.join(__dirname, 'index.html');
        fs.readFile(indexPath, (err2, content) => {
          if (err2) {
            res.writeHead(404, { 'Content-Type': 'text/plain; charset=utf-8' });
            res.end('404 Not Found');
            return resolve();
          }
          res.writeHead(200, { 'Content-Type': 'text/html; charset=utf-8' });
          res.end(content);
          return resolve();
        });
        return;
      }

      const ext = path.extname(filePath).toLowerCase();
      const contentType = MIME_TYPES[ext] || 'application/octet-stream';

      fs.readFile(filePath, (readErr, content) => {
        if (readErr) {
          res.writeHead(500, { 'Content-Type': 'text/plain; charset=utf-8' });
          res.end('500 Internal Server Error');
          return resolve();
        }
        res.writeHead(200, { 'Content-Type': contentType });
        res.end(content);
        return resolve();
      });
    });
  });
}

if (require.main === module) {
  const server = http.createServer(handleRequest);
  server.listen(PORT, () => {
    console.log(`[Alemaya Grill'd] Server running on http://localhost:${PORT}`);
    console.log(`[Database] Connected live to Supabase: ${process.env.SUPABASE_URL || 'https://lbxyproolnnvpggsowym.supabase.co'}`);
  });
}

module.exports = handleRequest;

