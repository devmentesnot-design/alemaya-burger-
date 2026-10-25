# 🏷️ Product Discount / Sale Price System

## Overview
The Alemaya Grill'd system now supports discounted/sale pricing for products. Admins can set a discount price for any product, and customers will see the old price crossed out with the new discounted price highlighted, along with a "SALE" badge.

---

## ✨ Features

### Admin Capabilities
- Set discount price for any product through Admin Console
- Discount price must be **less than** the base price to be active
- Edit or remove discounts at any time
- Visual feedback in product management interface

### Customer Experience
- **Menu Cards**: Products on sale show:
  - Original price crossed out (strikethrough)
  - New discounted price in green
  - Red "SALE" badge
  
- **Product Detail**: When opening a discounted product:
  - Original price crossed out
  - Discounted price displayed prominently
  - "SALE" badge indicator
  
- **Cart Items**: Added items show:
  - Original total crossed out (if discount applied)
  - Discounted total in green
  - Transparent pricing breakdown

- **Order Processing**: All orders preserve discount information

---

## 🎨 Visual Design

### Color Scheme
- **Original Price**: Gray text with red strikethrough (`#9CA3AF` / `#EF4444`)
- **Discounted Price**: Bold green text (`#16A34A`)
- **SALE Badge**: Red background with white text (`#EF4444`)

### Display Locations
1. **Vertical Menu Cards** - Top badge + price section
2. **Product Detail Sheet** - Below product title
3. **Cart Items** - In price column with qty controls
4. **Order History** - Preserved in order data

---

## 🔧 How to Set a Discount (Admin)

### Step 1: Open Admin Console
1. Navigate to Admin Console (button in top-right corner)
2. Enter admin password
3. Go to "Products" tab

### Step 2: Edit Product
1. Find the product you want to discount
2. Click "Edit" button
3. Locate "Discount Price" field (below Base Price)

### Step 3: Set Discount Price
1. Enter the discounted price (must be **less than** base price)
   - Example: Base Price = 250 Birr, Discount = 199 Birr
2. Leave as 0 or empty to remove discount
3. Click "Save"

### Step 4: Verify
1. Switch to customer view
2. Check product card shows SALE badge
3. Open product to verify pricing display
4. Add to cart and verify discount is preserved

---

## 💾 Database Schema

### Products Table
```sql
-- New column added to products table
discount_price DECIMAL(10,2) DEFAULT 0

-- When discount_price > 0 AND discount_price < base_price:
--   Product is on sale
--   Display logic activates
```

### Migration Required
Run this SQL in Supabase SQL Editor:
```sql
-- Apply the discount price migration
-- File: supabase_discount_price_migration.sql

ALTER TABLE products 
ADD COLUMN IF NOT EXISTS discount_price DECIMAL(10,2) DEFAULT 0;

COMMENT ON COLUMN products.discount_price IS 
  'Discounted/sale price. When set to > 0 and < base_price, this price is displayed';

CREATE INDEX IF NOT EXISTS idx_products_discount_price 
  ON products(discount_price) WHERE discount_price > 0;

UPDATE products SET discount_price = 0 WHERE discount_price IS NULL;
```

---

## 🖥️ Technical Implementation

### Key Files Modified

#### 1. `app.js` - Core Logic
```javascript
// Cart item creation now includes discount tracking
const cartItem = {
  productId: p.id,
  name: p.name,
  image: p.image,
  basePrice: Number(p.basePrice) || 0,
  discountPrice: Number(p.discountPrice) || 0,
  originalBasePrice: Number(p.basePrice) || 0,  // NEW
  unitPrice: uPrice,
  qty: q,
  // ... other fields
};

// Price calculation uses discount when available
function calculateUnitItemPrice() {
  const basePrice = (p.discountPrice > 0 && p.discountPrice < p.basePrice)
    ? Number(p.discountPrice)
    : Number(p.basePrice) || 0;
  // ... rest of calculation
}
```

#### 2. `style.css` - Visual Styles
- `.vert-price-original` - Strikethrough price on menu cards
- `.vert-price-discounted` - Green discounted price on cards
- `.vert-sale-badge` - Red SALE indicator
- `.sheet-prod-price-original` - Strikethrough in product detail
- `.sheet-prod-price-discounted` - Green price in detail
- `.cart-item-price-original` - Cart strikethrough pricing
- `.cart-item-price-discounted` - Cart discounted pricing

#### 3. `index.html` - Admin Interface
```html
<!-- Discount Price input in product edit/create modal -->
<div class="form-group">
  <label>Discount Price (Optional - Leave 0 for no discount)</label>
  <input type="number" 
         id="modal-product-discount-price" 
         step="0.01" 
         min="0" 
         placeholder="0">
</div>
```

#### 4. `server.js` - API Endpoint
```javascript
// POST /api/products - Accepts discountPrice
const productData = {
  // ... other fields
  discountPrice: parseFloat(discountPrice) || 0
};
```

#### 5. `supabase_db.js` - Database Layer
```javascript
// getProducts - Maps discount_price from DB
discountPrice: Number(p.discount_price) || 0

// saveProduct - Stores discount_price to DB
discount_price: Number(prod.discountPrice) || 0
```

---

## 🧪 Testing Checklist

### ✅ Admin Tests
- [ ] Can set discount price on new product
- [ ] Can edit discount price on existing product
- [ ] Can remove discount (set to 0)
- [ ] Discount validation (must be < base price)
- [ ] Changes sync to Supabase and local DB

### ✅ Customer Display Tests
- [ ] Menu card shows SALE badge when discount active
- [ ] Menu card shows strikethrough + green price
- [ ] Product detail shows discount pricing
- [ ] Product detail shows SALE badge
- [ ] Non-discounted products display normally

### ✅ Cart & Order Tests
- [ ] Adding discounted product to cart preserves pricing
- [ ] Cart displays strikethrough original price
- [ ] Cart displays green discounted price
- [ ] Cart calculations use discounted price
- [ ] Orders store discount information
- [ ] Order history shows correct pricing

### ✅ Edge Cases
- [ ] Discount = 0 → No discount display
- [ ] Discount >= Base Price → No discount display
- [ ] Switching between discounted/non-discounted → Clean transition
- [ ] Editing cart item preserves discount
- [ ] Multiple discounted items in cart → All display correctly

---

## 📊 Example Scenarios

### Scenario 1: Weekend Burger Sale
```
Product: Classic Burger
Base Price: 250 Birr
Discount Price: 199 Birr
Savings: 51 Birr (20.4% off)

Customer sees:
- Menu: "SALE" badge + ~~250~~ 199 Birr
- Cart: ~~250~~ 199 Birr × qty
- Order: Total reflects 199 Birr price
```

### Scenario 2: New Product Promotion
```
Product: Spicy Chicken Sandwich
Base Price: 300 Birr
Discount Price: 249 Birr
Savings: 51 Birr (17% off)

Customer sees:
- Prominent SALE badge on menu
- Clear price comparison
- Encouraged to try new item
```

### Scenario 3: No Discount
```
Product: Classic Fries
Base Price: 80 Birr
Discount Price: 0 (or blank)

Customer sees:
- Normal price display: 80 Birr
- No SALE badge
- Standard menu card appearance
```

---

## 🚀 Quick Start

### For Admins
1. Login to Admin Console
2. Select product to discount
3. Set discount price (less than base)
4. Save and verify on customer menu

### For Developers
1. Ensure database migration is applied:
   ```bash
   # Run in Supabase SQL Editor
   \i supabase_discount_price_migration.sql
   ```

2. Test locally:
   ```bash
   node server.js
   # Open http://localhost:3000
   ```

3. Verify features:
   - Admin can set discounts
   - Customer sees SALE badges
   - Cart preserves discount pricing

---

## 🐛 Troubleshooting

### Discount Not Showing
**Problem**: Set discount but no SALE badge appears

**Solutions**:
- Verify discount price < base price
- Check discount price is not 0
- Clear browser cache
- Refresh product data (Admin Console → sync)

### Wrong Price in Cart
**Problem**: Cart shows wrong price for discounted item

**Solutions**:
- Clear cart and re-add item
- Verify product has both `discountPrice` and `originalBasePrice`
- Check browser console for errors

### Database Sync Issues
**Problem**: Discounts not persisting

**Solutions**:
- Verify Supabase migration was applied
- Check `products` table has `discount_price` column
- Verify network connection to Supabase
- Check local `database.json` has discount values

---

## 📝 Best Practices

### Setting Discounts
1. **Meaningful Savings**: Aim for 10-30% off to be attractive
2. **Clear Communication**: Use SALE badges prominently
3. **Time-Limited**: Consider seasonal or promotional discounts
4. **Track Performance**: Monitor which discounts drive sales

### Managing Discounts
1. **Regular Review**: Update or remove expired promotions
2. **Inventory Alignment**: Discount slower-moving items
3. **Bundle Deals**: Combine with complementary products
4. **Customer Feedback**: Adjust based on response

---

## 🔮 Future Enhancements

### Potential Features
- [ ] **Scheduled Discounts**: Auto-activate/deactivate on dates
- [ ] **Percentage Discounts**: Set discount as % instead of fixed price
- [ ] **Bulk Discount Editor**: Apply discounts to multiple products
- [ ] **Discount Categories**: Tag promotions (Weekend, Happy Hour, etc.)
- [ ] **Discount Analytics**: Track sales impact of discounts
- [ ] **Customer Notifications**: Alert customers about new sales
- [ ] **Discount History**: Track past promotions and effectiveness

---

## 📞 Support

### Questions?
- Check `FEATURE_SUMMARY.md` for system overview
- Review `README_TABLE_SYSTEM.md` for table functionality
- See `TAKEAWAY_FEE_GUIDE.md` for fee management

### Issues?
- Verify database migration is applied
- Check browser console for errors
- Ensure Supabase connection is active
- Test with local database.json fallback

---

**Document Version**: 1.0.0  
**Last Updated**: October 25, 2026  
**System**: Alemaya Grill'd v2.0
