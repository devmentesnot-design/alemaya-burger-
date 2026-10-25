// ═══════════════════════════════════════════════════════════════════
// SUPABASE SCHEMA & DATA SEED GENERATOR
// Exports all 14 categories, products, orders, extras, and tables
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
sql += '  discount_price NUMERIC(10,2) DEFAULT 0,\n';
sql += '  image TEXT,\n';
sql += '  available BOOLEAN DEFAULT TRUE,\n';
sql += '  created_at TIMESTAMPTZ DEFAULT NOW()\n';
sql += ');\n\n';

sql += '-- 3. CREATE ORDERS TABLE (WITH TABLE LINKAGE & TAKEAWAY FEE)\n';
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
sql += '  status_label TEXT DEFAULT \'Order Received\',\n';
sql += '  table_id TEXT,\n';
sql += '  table_name TEXT,\n';
sql += '  table_token TEXT,\n';
sql += '  takeaway_fee NUMERIC(10,2) DEFAULT 0\n';
sql += ');\n\n';

sql += '-- 4. CREATE SETTINGS TABLE\n';
sql += 'CREATE TABLE IF NOT EXISTS public.settings (\n';
sql += '  id INTEGER PRIMARY KEY DEFAULT 1,\n';
sql += '  takeaway_fee NUMERIC(10,2) DEFAULT 0,\n';
sql += '  updated_at TIMESTAMPTZ DEFAULT NOW(),\n';
sql += '  CONSTRAINT single_settings_row CHECK (id = 1)\n';
sql += ');\n';
sql += 'INSERT INTO public.settings (id, takeaway_fee) VALUES (1, 0) ON CONFLICT (id) DO NOTHING;\n\n';

sql += '-- 5. CREATE EXTRAS TABLE\n';
sql += 'CREATE TABLE IF NOT EXISTS public.extras (\n';
sql += '  id TEXT PRIMARY KEY,\n';
sql += '  name TEXT NOT NULL,\n';
sql += '  price NUMERIC(10,2) NOT NULL DEFAULT 0,\n';
sql += '  categories JSONB DEFAULT \'[]\'::jsonb,\n';
sql += '  available BOOLEAN DEFAULT TRUE,\n';
sql += '  created_at TIMESTAMPTZ DEFAULT NOW()\n';
sql += ');\n\n';

sql += '-- 5. CREATE TABLES TABLE (QR & DINE-IN TABLES)\n';
sql += 'CREATE TABLE IF NOT EXISTS public.tables (\n';
sql += '  id TEXT PRIMARY KEY,\n';
sql += '  name TEXT NOT NULL,\n';
sql += '  number INTEGER,\n';
sql += '  capacity INTEGER DEFAULT 4,\n';
sql += '  token TEXT UNIQUE,\n';
sql += '  active BOOLEAN DEFAULT TRUE,\n';
sql += '  created_at BIGINT DEFAULT (EXTRACT(EPOCH FROM NOW())*1000)::BIGINT\n';
sql += ');\n\n';

sql += '-- 6. CLEAN OLD DATA IF RE-RUNNING\n';
sql += 'TRUNCATE TABLE public.orders, public.products, public.categories, public.extras, public.tables CASCADE;\n\n';

sql += '-- 7. INSERT CATEGORIES\n';
sql += 'INSERT INTO public.categories (id, name, icon, sort_order) VALUES\n';
const catLines = (db.categories || []).map(c => {
  const id = c.id.replace(/'/g, "''");
  const name = c.name.replace(/'/g, "''");
  const icon = (c.icon || 'burger').replace(/'/g, "''");
  return `  ('${id}', '${name}', '${icon}', ${c.order || 0})`;
});
sql += catLines.join(',\n') + ';\n\n';

sql += '-- 8. INSERT PRODUCTS\n';
sql += 'INSERT INTO public.products (id, category_id, name, badge, rating, reviews_count, description, ingredients, base_price, image, available) VALUES\n';
const prodLines = (db.products || []).map(p => {
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

sql += '-- 9. INSERT EXTRAS\n';
if (db.extras && db.extras.length > 0) {
  sql += 'INSERT INTO public.extras (id, name, price, categories, available) VALUES\n';
  const extraLines = db.extras.map(e => {
    const id = e.id.replace(/'/g, "''");
    const name = e.name.replace(/'/g, "''");
    const price = Number(e.price) || 0;
    const catsJson = JSON.stringify(e.categories || []).replace(/'/g, "''");
    const avail = e.available !== false ? 'TRUE' : 'FALSE';
    return `  ('${id}', '${name}', ${price}, '${catsJson}'::jsonb, ${avail})`;
  });
  sql += extraLines.join(',\n') + ';\n\n';
}

sql += '-- 10. INSERT TABLES\n';
if (db.tables && db.tables.length > 0) {
  sql += 'INSERT INTO public.tables (id, name, number, capacity, token, active, created_at) VALUES\n';
  const tblLines = db.tables.map(t => {
    const id = t.id.replace(/'/g, "''");
    const name = t.name.replace(/'/g, "''");
    const number = Number(t.number) || 0;
    const capacity = Number(t.capacity) || 4;
    const token = (t.token || ('t_' + t.id)).replace(/'/g, "''");
    const active = t.active !== false ? 'TRUE' : 'FALSE';
    const createdAt = Number(t.createdAt) || Date.now();
    return `  ('${id}', '${name}', ${number}, ${capacity}, '${token}', ${active}, ${createdAt})`;
  });
  sql += tblLines.join(',\n') + ';\n\n';
}

sql += '-- 11. INSERT ORDERS\n';
if (db.orders && db.orders.length > 0) {
  sql += 'INSERT INTO public.orders (id, timestamp, date, created_at, order_type, items, subtotal, service, total, status, status_label, table_id, table_name, table_token) VALUES\n';
  const ordLines = db.orders.map(o => {
    const id = o.id.replace(/'/g, "''");
    const ts = (o.timestamp || '').replace(/'/g, "''");
    const dt = (o.date || '2026-10-22').replace(/'/g, "''");
    const ot = (o.orderType || 'Dine-in').replace(/'/g, "''");
    const itemsJson = JSON.stringify(o.items || []).replace(/'/g, "''");
    const st = (o.status || 'received').replace(/'/g, "''");
    const stl = (o.statusLabel || 'Order Received').replace(/'/g, "''");
    const tableId = o.tableId ? `'${o.tableId.replace(/'/g, "''")}'` : 'NULL';
    const tableName = o.tableName ? `'${o.tableName.replace(/'/g, "''")}'` : 'NULL';
    const tableToken = o.tableToken ? `'${o.tableToken.replace(/'/g, "''")}'` : 'NULL';
    return `  ('${id}', '${ts}', '${dt}', ${o.createdAt || Date.now()}, '${ot}', '${itemsJson}'::jsonb, ${o.subtotal || 0}, ${o.service || 0}, ${o.total || 0}, '${st}', '${stl}', ${tableId}, ${tableName}, ${tableToken})`;
  });
  sql += ordLines.join(',\n') + ';\n\n';
}

sql += '-- 12. ROW LEVEL SECURITY (RLS) POLICIES FOR REAL-TIME WEB ACCESS\n';
sql += 'ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;\n';
sql += 'ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;\n';
sql += 'ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;\n';
sql += 'ALTER TABLE public.extras ENABLE ROW LEVEL SECURITY;\n';
sql += 'ALTER TABLE public.tables ENABLE ROW LEVEL SECURITY;\n\n';

sql += 'DROP POLICY IF EXISTS "Public access categories" ON public.categories;\n';
sql += 'CREATE POLICY "Public access categories" ON public.categories FOR ALL USING (true) WITH CHECK (true);\n\n';

sql += 'DROP POLICY IF EXISTS "Public access products" ON public.products;\n';
sql += 'CREATE POLICY "Public access products" ON public.products FOR ALL USING (true) WITH CHECK (true);\n\n';

sql += 'DROP POLICY IF EXISTS "Public access orders" ON public.orders;\n';
sql += 'CREATE POLICY "Public access orders" ON public.orders FOR ALL USING (true) WITH CHECK (true);\n\n';

sql += 'DROP POLICY IF EXISTS "Public access extras" ON public.extras;\n';
sql += 'CREATE POLICY "Public access extras" ON public.extras FOR ALL USING (true) WITH CHECK (true);\n\n';

sql += 'DROP POLICY IF EXISTS "Public access tables" ON public.tables;\n';
sql += 'CREATE POLICY "Public access tables" ON public.tables FOR ALL USING (true) WITH CHECK (true);\n';

const outPath = path.join(__dirname, 'supabase_schema.sql');
fs.writeFileSync(outPath, sql, 'utf8');

console.log('✅ Generated supabase_schema.sql successfully! Total lines:', sql.split('\n').length);
