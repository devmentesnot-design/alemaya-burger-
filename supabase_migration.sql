-- =============================================================
-- ALEMAYA GRILL'D - SUPABASE MIGRATION (run once in SQL Editor)
-- Adds: extras table, tables table, table_id/name/token to orders
-- =============================================================

-- 1. ADD MISSING COLUMNS TO orders TABLE
ALTER TABLE public.orders
  ADD COLUMN IF NOT EXISTS table_id    TEXT,
  ADD COLUMN IF NOT EXISTS table_name  TEXT,
  ADD COLUMN IF NOT EXISTS table_token TEXT;

-- 2. CREATE extras TABLE
CREATE TABLE IF NOT EXISTS public.extras (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  price      NUMERIC(10,2) NOT NULL DEFAULT 0,
  categories JSONB DEFAULT '[]'::jsonb,
  available  BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- 3. CREATE tables TABLE
CREATE TABLE IF NOT EXISTS public.tables (
  id         TEXT PRIMARY KEY,
  name       TEXT NOT NULL,
  number     INTEGER,
  capacity   INTEGER DEFAULT 4,
  token      TEXT UNIQUE,
  active     BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

-- RLS
ALTER TABLE public.extras ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.tables ENABLE ROW LEVEL SECURITY;

DO $$
BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='extras' AND policyname='Allow all on extras') THEN
    CREATE POLICY "Allow all on extras" ON public.extras FOR ALL USING (true) WITH CHECK (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE tablename='tables' AND policyname='Allow all on tables') THEN
    CREATE POLICY "Allow all on tables" ON public.tables FOR ALL USING (true) WITH CHECK (true);
  END IF;
END $$;

SELECT 'Migration complete' AS status;
