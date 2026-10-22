// ═══════════════════════════════════════════════════════════════════
// SUPABASE SCHEMA & DATA SEED GENERATOR
// Exports all 14 categories, 50 dishes (with Cloudinary URLs), and 20 orders
// into a clean, ready-to-run PostgreSQL file for Supabase.
// ═══════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const dbPath = path.join(__dirname, 'database.json');
const db = JSON.parse(fs.readFileSync(dbPath, 'utf8'));

let sql = '';
sql += '-- =============================================================\n';
sql += '-- ALEMAYA GRILL\'D - SUPABASE POSTGRESQL TABLES & INITIAL SEED\n';
sql += '-- INSTRUCTIONS:\n';
sql += '-- 1. Open Supabase Dashboard (https://supabase.com/dashboard)\n';
sql += '-- 2. Click SQL Editor (the >_ icon on the left menu)\n';
sql += '-- 3. Click "New query", paste this entire script, and click "RUN"\n';
sql += '-- =============================================================\n\n';

sql += '-- 1. CREATE CATEGORIES TABLE\n';
sql += 'CREATE TABLE IF NOT EXISTS public.categories (\n';
sql += '  id TEXT PRIMARY KEY,\n';
sql += '  name TEXT NOT NULL,\n';
sql += '  icon TEXT NOT NULL,\n';
sql += '  sort_order INTEGER DEFAULT 0,\n';
sql += '  created_at TIMESTAMPTZ DEFAULT NOW()\n';
sql += ');\n\n';

sql += '-- 2. CREATE PRODUCTS TABLE\n';
sql += 'CREATE TABLE IF NOT EXISTS public.products (\n';
sql += '  id TEXT PRIMARY KEY,\n';
sql += '  category_id TEXT REFERENCES public.categories(id) ON DELETE SET NULL,\n';
sql += '  name TEXT NOT NULL,\n';
sql += '  badge TEXT,\n';
sql += '  rating NUMERIC(3,1) DEFAULT 4.8,\n';
sql += '  reviews_count INTEGER DEFAULT 100,\n';
sql += '  description TEXT,\n';
sql += '  ingredients JSONB DEFAULT \'[]\'::jsonb,\n';
sql += '  base_price NUMERIC(10,2) NOT NULL,\n';
sql += '  image TEXT,\n';
sql += '  available BOOLEAN DEFAULT TRUE,\n';
sql += '  created_at TIMESTAMPTZ DEFAULT NOW()\n';
sql += ');\n\n';

sql += '-- 3. CREATE ORDERS TABLE\n';
sql += 'CREATE TABLE IF NOT EXISTS public.orders (\n';
sql += '  id TEXT PRIMARY KEY,\n';
sql += '  timestamp TEXT,\n';
sql += '  date DATE DEFAULT CURRENT_DATE,\n';
sql += '  created_at BIGINT,\n';
sql += '  order_type TEXT DEFAULT \'Dine-in\',\n';
sql += '  items JSONB NOT NULL DEFAULT \'[]\'::jsonb,\n';
sql += '  subtotal NUMERIC(10,2) DEFAULT 0,\n';
sql += '  service NUMERIC(10,2) DEFAULT 0,\n';
sql += '  total NUMERIC(10,2) DEFAULT 0,\n';
sql += '  status TEXT DEFAULT \'received\',\n';
sql += '  status_label TEXT DEFAULT \'Order Received\'\n';
sql += ');\n\n';

sql += '-- 4. CLEAN OLD DATA IF RE-RUNNING\n';
sql += 'TRUNCATE TABLE public.orders, public.products, public.categories CASCADE;\n\n';

sql += '-- 5. INSERT CATEGORIES\n';
sql += 'INSERT INTO public.categories (id, name, icon, sort_order) VALUES\n';
const catLines = db.categories.map(c => {
  const id = c.id.replace(/'/g, "''");
  const name = c.name.replace(/'/g, "''");
  const icon = (c.icon || 'burger').replace(/'/g, "''");
  return `  ('${id}', '${name}', '${icon}', ${c.order || 0})`;
});
sql += catLines.join(',\n') + ';\n\n';

sql += '-- 6. INSERT PRODUCTS\n';
sql += 'INSERT INTO public.products (id, category_id, name, badge, rating, reviews_count, description, ingredients, base_price, image, available) VALUES\n';
const prodLines = db.products.map(p => {
  const id = p.id.replace(/'/g, "''");
  const catId = (p.categoryId || '').replace(/'/g, "''");
  const name = p.name.replace(/'/g, "''");
  const badge = p.badge ? `'${p.badge.replace(/'/g, "''")}'` : 'NULL';
  const desc = (p.description || '').replace(/'/g, "''");
  const ingJson = JSON.stringify(p.ingredients || []).replace(/'/g, "''");
  const img = (p.image || '').replace(/'/g, "''");
  const avail = p.available !== false ? 'TRUE' : 'FALSE';
  return `  ('${id}', '${catId}', '${name}', ${badge}, ${p.rating || 4.8}, ${p.reviewsCount || 100}, '${desc}', '${ingJson}'::jsonb, ${p.basePrice}, '${img}', ${avail})`;
});
sql += prodLines.join(',\n') + ';\n\n';

sql += '-- 7. INSERT ORDERS\n';
sql += 'INSERT INTO public.orders (id, timestamp, date, created_at, order_type, items, subtotal, service, total, status, status_label) VALUES\n';
const ordLines = db.orders.map(o => {
  const id = o.id.replace(/'/g, "''");
  const ts = (o.timestamp || '').replace(/'/g, "''");
  const dt = (o.date || '2026-10-22').replace(/'/g, "''");
  const ot = (o.orderType || 'Dine-in').replace(/'/g, "''");
  const itemsJson = JSON.stringify(o.items || []).replace(/'/g, "''");
  const st = (o.status || 'received').replace(/'/g, "''");
  const stl = (o.statusLabel || 'Order Received').replace(/'/g, "''");
  return `  ('${id}', '${ts}', '${dt}', ${o.createdAt || Date.now()}, '${ot}', '${itemsJson}'::jsonb, ${o.subtotal || 0}, ${o.service || 0}, ${o.total || 0}, '${st}', '${stl}')`;
});
sql += ordLines.join(',\n') + ';\n\n';

sql += '-- 8. ROW LEVEL SECURITY (RLS) POLICIES FOR REAL-TIME WEB ACCESS\n';
sql += 'ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;\n';
sql += 'ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;\n';
sql += 'ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;\n\n';
sql += 'DROP POLICY IF EXISTS "Public access categories" ON public.categories;\n';
sql += 'CREATE POLICY "Public access categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);\n\n';
sql += 'DROP POLICY IF EXISTS "Public access products" ON public.products;\n';
sql += 'CREATE POLICY "Public access products" ON public.products FOR ALL USING (true) WITH CHECK (true);\n\n';
sql += 'DROP POLICY IF EXISTS "Public access orders" ON public.orders;\n';
sql += 'CREATE POLICY "Public access orders" ON public.orders FOR ALL USING (true) WITH CHECK (true);\n';

const outPath = path.join(__dirname, 'supabase_schema.sql');
fs.writeFileSync(outPath, sql, 'utf8');

console.log('✅ Generated supabase_schema.sql successfully! Total lines:', sql.split('\n').length);
