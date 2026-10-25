# Quick Start: Takeaway Fee Setup

## 🚀 Get Started in 3 Steps

### Step 1: Run Database Migration (Supabase Users Only)

If you're using Supabase, run this SQL script in your Supabase SQL Editor:

```sql
-- Add takeaway_fee column to orders table
ALTER TABLE orders 
ADD COLUMN IF NOT EXISTS takeaway_fee DECIMAL(10,2) DEFAULT 0;

-- Create settings table
CREATE TABLE IF NOT EXISTS settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  takeaway_fee DECIMAL(10,2) DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW(),
  CONSTRAINT single_row CHECK (id = 1)
);

-- Insert default settings
INSERT INTO settings (id, takeaway_fee)
VALUES (1, 0)
ON CONFLICT (id) DO NOTHING;
```

**Local Database Users:** Skip this step - it's already configured!

---

### Step 2: Set Your Takeaway Fee

1. **Open your browser** to the restaurant app
2. **Navigate to Admin Console** (if not already there, add `/admin` to URL)
3. **Click the "Settings" tab** (last tab with gear icon ⚙️)
4. **Enter your takeaway fee** (e.g., 50 for 50 Birr)
5. **Click "Save Changes"**
6. **See success message** ✓ Settings saved successfully

---

### Step 3: Test It Out

#### As a Customer:
1. Add items to your cart
2. Go to Orders page
3. Select "Takeaway" as order type
4. **See the fee automatically added** to your total!

#### Order Summary Will Show:
```
Bill Breakdown
─────────────────
Subtotal         Br 450
Takeaway Fee     Br 50
─────────────────
Total Amount     Br 500
```

---

## 🎯 Common Scenarios

### Scenario 1: No Takeaway Fee
Set takeaway fee to **0** in admin settings
- Takeaway orders show no additional fee
- Behaves same as dine-in

### Scenario 2: Standard Fee (Most Common)
Set takeaway fee to **50** Br
- All takeaway orders include 50 Br fee
- Displayed clearly to customers
- Stored with each order

### Scenario 3: Premium Fee
Set takeaway fee to **100** Br
- Higher fee for takeaway service
- Useful for delivery included scenarios

---

## 💡 Pro Tips

### For Administrators:
- **Change anytime**: Fee updates apply immediately to new orders
- **Old orders unchanged**: Historical orders keep their original fee
- **Check analytics**: Review order breakdown in Admin → Orders
- **Monitor impact**: Track takeaway vs dine-in order ratios

### For Customers:
- **Clear pricing**: Fee shown before confirming order
- **Choose wisely**: Compare dine-in vs takeaway totals
- **No surprises**: Exact total displayed upfront

---

## 📱 Mobile View

The settings panel is fully responsive and works on:
- ✅ Desktop computers
- ✅ Tablets
- ✅ Mobile phones

Simply scroll through the admin tabs horizontally on mobile!

---

## ⚡ Keyboard Shortcuts

- `Tab` to navigate between fields
- `Enter` to save changes
- `Esc` to close modals (if any)

---

## 🔍 Where Is Everything?

### For Admins:
```
Admin Console
  └─ Settings Tab (⚙️)
      └─ Takeaway Fee Configuration
          └─ Input field + Save button
```

### For Customers:
```
Menu Page
  └─ Add items to cart
      └─ Orders Page
          └─ Order Type Toggle
              ├─ Dine-in (no fee)
              └─ Takeaway (fee added)
                  └─ Bill Breakdown
                      ├─ Subtotal
                      ├─ Takeaway Fee ← HERE
                      └─ Total
```

---

## ❓ FAQ

**Q: Can I set different fees for different items?**
A: Currently, it's a flat fee per order. Contact dev team for custom pricing.

**Q: Does the fee apply to dine-in orders?**
A: No, only takeaway orders include the fee.

**Q: What if I change the fee after customers already ordered?**
A: New fee applies to new orders only. Existing orders unchanged.

**Q: Can customers see the fee before ordering?**
A: Yes! It's clearly shown in the cart summary before they confirm.

**Q: Does this work offline?**
A: Settings require internet to save, but once set, fees apply even offline.

---

## 🆘 Need Help?

**Fee not appearing?**
1. Check Settings tab shows your saved amount
2. Ensure order type is "Takeaway"
3. Refresh the page
4. Check browser console for errors

**Can't save settings?**
1. Check internet connection
2. Verify you're logged in as admin
3. Try different browser
4. Check server is running

**Wrong calculation?**
1. Verify the fee amount in Settings
2. Check order type selection
3. Try clearing cart and re-adding items

---

## 🎉 You're All Set!

Your takeaway fee system is now active. Customers will automatically see the fee when they select takeaway orders, and you can adjust it anytime from the admin panel.

**Next Steps:**
- Monitor first few orders with takeaway fee
- Adjust fee based on business needs
- Check order analytics in Admin dashboard

---

**Happy Ordering! 🍔**
