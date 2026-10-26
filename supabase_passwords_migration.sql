-- ================================================================
-- MIGRATION: Add admin_password & kitchen_password to settings table
-- ================================================================
-- Run this in your Supabase SQL Editor:
--   https://supabase.com/dashboard → SQL Editor → New query → Paste & RUN
-- ================================================================

-- Step 1: Add the columns (safe — only adds if not already there)
ALTER TABLE public.settings
  ADD COLUMN IF NOT EXISTS admin_password TEXT DEFAULT 'admin',
  ADD COLUMN IF NOT EXISTS kitchen_password TEXT DEFAULT 'kitchen';

-- Step 2: Make sure there is exactly one settings row with defaults
INSERT INTO public.settings (id, takeaway_fee, admin_password, kitchen_password)
  VALUES (1, 0, 'admin', 'kitchen')
  ON CONFLICT (id) DO UPDATE
    SET admin_password   = COALESCE(EXCLUDED.admin_password,   public.settings.admin_password,   'admin'),
        kitchen_password = COALESCE(EXCLUDED.kitchen_password, public.settings.kitchen_password, 'kitchen');

-- Step 3: Verify (should show the row with the new columns)
SELECT id, takeaway_fee, admin_password, kitchen_password, updated_at
FROM public.settings;
