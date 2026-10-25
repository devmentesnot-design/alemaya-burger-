# 🚀 Quick Start: Product Discount System

Get your discount/sale pricing system up and running in 3 minutes!

---

## Step 1: Database Setup (One-Time Only)

### If Using Supabase:
1. Open [Supabase Dashboard](https://app.supabase.com)
2. Go to your project → SQL Editor
3. Copy and paste this SQL:

```sql
-- Add discount_price column to products table
ALTER TABLE products 
ADD COLUMN IF NOT EXISTS discount_price DECIMAL(10,2) DEFAULT 0;

-- Add documentation
COMMENT ON COLUMN products.discount_price IS 
  'Discounted/sale price. When > 0 and < base_price, shows as sale';

-- Create performance index
CREATE INDEX IF NOT EXISTS idx_products_discount_price 
  ON products(discount_price) WHERE discount_price > 0;

-- Set default values
UPDATE products SET discount_price = 0 WHERE discount_price IS NULL;
```

4. Click **Run**
5. ✅ Done! Database is ready

### If Using Local Database:
✅ Nothing to do! Already configured in `database.json`

---

## Step 2: Set Your First Discount (30 seconds)

1. **Open your app** → `http://localhost:3000`

2. **Go to Admin Console**
   - Click "Admin Console" button (top-right)
   - Enter admin password

3. **Navigate to Products**
   - Click "Products" tab

4. **Edit a product**
   - Find a product you want to discount
   - Click the "Edit" button

5. **Set discount price**
   - Find "Discount Price" field
   - Enter the sale price (must be less than base price)
   - Example:
     ```
     Base Price:     250
     Discount Price: 199  ← Enter this
     ```

6. **Save**
   - Click "Save" button
   - ✅ Discount is now active!

---

## Step 3: Verify It Works (30 seconds)

### Test as Admin:
1. Stay in Admin Console
2. Go to "Products" tab
3. Look for your edited product
4. Verify it shows both prices

### Test as Customer:
1. Click "Customer View" or open new browser tab
2. Go to the menu
3. **Look for the product card:**
   - Should show red "SALE" badge
   - Should show ~~old price~~ crossed out
   - Should show new price in green

4. **Open product detail:**
   - Click on the product
   - Verify discount display

5. **Add to cart:**
   - Add the product to cart
   - Go to "Your Orders" tab
   - Verify cart shows discounted price

6. ✅ **Everything working!**

---

## 🎯 Quick Examples

### Example 1: Weekend Burger Sale
```
Product: Classic Burger
Base Price:     250 Birr
Discount Price: 199 Birr
Savings:         51 Birr (20% off)

Customer sees:
[SALE] ~~250~~ 199 Birr
```

### Example 2: New Product Launch
```
Product: Spicy Chicken Sandwich
Base Price:     300 Birr
Discount Price: 249 Birr
Savings:         51 Birr (17% off)

Customer sees:
[SALE] ~~300~~ 249 Birr
```

### Example 3: Remove Discount
```
To remove a discount:
1. Edit product
2. Set Discount Price to 0 (or leave blank)
3. Save
✅ SALE badge removed, normal price shows
```

---

## 🎨 What Customers See

### On Menu Card:
```
┌──────────────────────────┐
│ [SALE] ★ 4.8 (120)      │
│                          │
│ Classic Burger           │
│ Flame-grilled beef...    │
│                          │
│ ~~250~~ 199 Birr [SALE]  │
│                    [+]   │
└──────────────────────────┘
```

### In Product Detail:
```
┌──────────────────────────┐
│ Classic Burger           │
│ ~~250~~ 199 Birr [SALE]  │
│                          │
│ Description...           │
│ [Ingredients...]         │
│                          │
│ Customizations...        │
│                          │
│ [Add to Order - 199 Br]  │
└──────────────────────────┘
```

### In Cart:
```
┌──────────────────────────┐
│ 🍔 Classic Burger        │
│    ~~250~~ 199 Birr      │
│    Qty: 1          [±][X]│
├──────────────────────────┤
│ Subtotal:      199 Birr  │
│ Total:         199 Birr  │
└──────────────────────────┘
```

---

## ✅ Quick Checklist

After completing the steps above, verify:

- [ ] Database migration applied (if using Supabase)
- [ ] Admin can set discount price on products
- [ ] Menu shows SALE badge on discounted products
- [ ] Menu shows strikethrough old price + green new price
- [ ] Product detail shows discount
- [ ] Cart preserves discount pricing
- [ ] Orders store discount information

---

## 🐛 Troubleshooting

### Discount Not Showing?
**Check:**
- Is discount price < base price? ✓
- Is discount price > 0? ✓
- Did you save the product? ✓
- Try refreshing the page

### Database Error?
**Solutions:**
- Verify Supabase migration ran successfully
- Check `products` table has `discount_price` column
- Test with local database (should work without Supabase)

### Cart Shows Wrong Price?
**Fix:**
- Clear cart
- Re-add the product
- Verify product has valid discount

---

## 🎓 Next Steps

Now that discounts are working:

1. **Set More Discounts**
   - Apply to slow-moving items
   - Create promotional bundles
   - Test different discount levels

2. **Monitor Performance**
   - Track which discounts drive sales
   - Adjust based on customer response
   - Run seasonal promotions

3. **Read Full Documentation**
   - Check `DISCOUNT_SYSTEM_GUIDE.md` for advanced features
   - See `FEATURE_SUMMARY.md` for all system features

---

## 📞 Need Help?

- **Full Documentation**: `DISCOUNT_SYSTEM_GUIDE.md`
- **Feature List**: `FEATURE_SUMMARY.md`
- **Technical Details**: Check code comments in `app.js`

---

**Time to Complete**: ~3 minutes  
**Difficulty**: Easy  
**Status**: Ready to use! ✅

---

**Happy discounting! 🏷️🎉**
