-- ═══════════════════════════════════════════════════════════════════════
-- ALEMAYA GRILL'D - TAKEAWAY FEE FEATURE MIGRATION
-- Adds takeaway_fee column to orders table and creates settings table
-- ═══════════════════════════════════════════════════════════════════════

-- Add takeaway_fee column to orders table
ALTER TABLE orders 
ADD COLUMN IF NOT EXISTS takeaway_fee DECIMAL(10,2) DEFAULT 0;

-- Create settings table for global restaurant settings
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  takeaway_fee DECIMAL(10,2) DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Insert default settings row
INSERT INTO settings (id, takeaway_fee)
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;

-- Add comment to explain the table
COMMENT ON TABLE settings IS 'Global restaurant settings including takeaway fee configuration';
COMMENT ON COLUMN settings.takeaway_fee IS 'Additional fee charged for takeaway orders in local currency';
COMMENT ON COLUMN orders.takeaway_fee IS 'Takeaway fee applied to this order (0 for dine-in orders)';
