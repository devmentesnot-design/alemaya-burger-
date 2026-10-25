-- =============================================================
-- ALEMAYA GRILL'D - SUPABASE MIGRATION (run once in SQL Editor)
-- Adds: discount_price, takeaway_fee, settings table, extras, tables
-- =============================================================

-- 1. ADD COLUMNS TO products TABLE (DISCOUNT / SALE PRICE)
ALTER TABLE public.products
  ADD COLUMN IF NOT EXISTS discount_price NUMERIC(10,2) DEFAULT 0;

-- 2. ADD COLUMNS TO orders TABLE (TABLE + TAKEAWAY FEE)
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS table_id     TEXT,
  ADD COLUMN IF NOT EXISTS table_name   TEXT,
  ADD COLUMN IF NOT EXISTS table_token  TEXT,
  ADD COLUMN IF NOT EXISTS takeaway_fee NUMERIC(10,2) DEFAULT 0;

-- 3. CREATE settings TABLE (GLOBAL RESTAURANT SETTINGS & PORTAL PASSWORDS)
CREATE TABLE IF NOT EXISTS public.settings (
  id               INTEGER PRIMARY KEY DEFAULT 1,
  takeaway_fee     NUMERIC(10,2) DEFAULT 0,
  admin_password   TEXT DEFAULT 'admin',
  kitchen_password TEXT DEFAULT 'kitchen',
  updated_at       TIMESTAMPTZ DEFAULT NOW(),
  CONSTRAINT single_settings_row CHECK (id = 1)
);

-- Ensure columns exist if table was already created
ALTER TABLE public.settings
  ADD COLUMN IF NOT EXISTS takeaway_fee     NUMERIC(10,2) DEFAULT 0,
  ADD COLUMN IF NOT EXISTS admin_password   TEXT DEFAULT 'admin',
  ADD COLUMN IF NOT EXISTS kitchen_password TEXT DEFAULT 'kitchen';

INSERT INTO public.settings (id, takeaway_fee, admin_password, kitchen_password)
VALUES (1, 0, 'admin', 'kitchen')
ON CONFLICT (id) DO NOTHING;

-- 4. CREATE extras TABLE
CREATE TABLE IF NOT EXISTS public.extras (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  price      NUMERIC(10,2) NOT NULL DEFAULT 0,
  categories JSONB DEFAULT '[]'::jsonb,
  available  BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 5. CREATE tables TABLE
CREATE TABLE IF NOT EXISTS public.tables (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  number     INTEGER,
  capacity   INTEGER DEFAULT 4,
  token      TEXT UNIQUE,
  active     BOOLEAN DEFAULT TRUE,
  created_at BIGINT DEFAULT (EXTRACT(EPOCH FROM NOW())*1000)::BIGINT
);

-- 6. ROW LEVEL SECURITY (RLS) POLICIES
ALTER TABLE public.settings ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.extras ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tables ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='settings' AND policyname='Allow all on settings') THEN
    CREATE POLICY "Allow all on settings" ON public.settings FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='extras' AND policyname='Allow all on extras') THEN
    CREATE POLICY "Allow all on extras" ON public.extras FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='tables' AND policyname='Allow all on tables') THEN
    CREATE POLICY "Allow all on tables" ON public.tables FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

SELECT 'Migration complete' AS status;
