-- ═══════════════════════════════════════════════════════════════════════
-- SUPABASE MIGRATION: Add discount_price Column to Products Table
-- This migration adds support for product discount/sale pricing
-- ═══════════════════════════════════════════════════════════════════════

-- Add discount_price column to products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS discount_price DECIMAL(10,2) DEFAULT 0;

-- Add comment for documentation
COMMENT ON COLUMN products.discount_price IS 'Discounted/sale price for the product. When set to > 0 and < base_price, this price is displayed instead of base_price';

-- Create index for performance when filtering discounted products
CREATE INDEX IF NOT EXISTS idx_products_discount_price ON products(discount_price) WHERE discount_price > 0;

-- Update any existing products to have discount_price = 0 if NULL
UPDATE products SET discount_price = 0 WHERE discount_price IS NULL;
