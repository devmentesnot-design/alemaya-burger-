# 🚀 Quick Test Guide - Table QR System

## ✅ Your system is already working! Here's how to test it:

---

## 🧪 Test 1: Generate QR Code (2 minutes)

### Steps:
1. **Open your app** (locally or deployed)
   ```
   http://localhost:3000/  OR  https://alemaya-burger-5pig.vercel.app/
   ```

2. **Navigate to Admin**
   - Click on URL hash: `#admin`
   - OR directly go to: `http://localhost:3000/#admin`

3. **Enter Admin Password** (if prompted)
   - Default: Check your app.js for staff password

4. **Click "Tables" tab** at the top of admin interface

5. **Fill in the QR Generator Form:**
   ```
   Menu URL: https://alemaya-burger-5pig.vercel.app/
   Table Number: 4
   ```

6. **Click "Generate QR & Preview"**
   - You'll see a poster with the QR code
   - Table "4" will be visible on the poster

7. **Click "Download full poster PNG"**
   - Save the poster image
   - This is what you'd print and place on tables

### ✅ Expected Result:
- QR code generated successfully
- Table number "4" displayed on poster
- Scannable link: `https://alemaya-burger-5pig.vercel.app/?table=4`

---

## 🧪 Test 2: Simulate Customer Scan (3 minutes)

### Steps:
1. **Open a new browser tab/window** (to simulate fresh customer visit)

2. **Manually enter the QR URL** (simulating a QR scan):
   ```
   http://localhost:3000/?table=4
   ```
   OR deployed:
   ```
   https://alemaya-burger-5pig.vercel.app/?table=4
   ```

3. **Watch for the welcome message:**
   - Toast notification should appear: "🍽️ Welcome! Seated at Table 4"

4. **Check the top of the page:**
   - You should see a banner:
   ```
   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
   ┃ 🍽️ Table 4 | Seated for Dine-in • Capacity: 4┃
   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
   ```

5. **Add items to cart:**
   - Browse the menu
   - Click "+" on some items (burger, pizza, drinks)
   - Items appear in your cart

6. **Go to Orders tab:**
   - Click "Orders" at the bottom navigation
   - You should see your cart items

7. **Check the checkout section:**
   - Scroll down to "Bill Breakdown"
   - You should see: **"Order Type: Dine-in"**
   - Below that: **"Table: Table 4"** (or similar table indicator)

8. **Place the order:**
   - Click "Confirm & Place Order"
   - Order should be submitted successfully

### ✅ Expected Result:
- Welcome toast appears ✅
- Table banner visible at top ✅
- Cart shows items ✅
- Checkout shows "Table 4" ✅
- Order placed successfully ✅

---

## 🧪 Test 3: View in Kitchen Display (2 minutes)

### Steps:
1. **Open Kitchen/Chef view:**
   ```
   http://localhost:3000/#chef
   ```
   OR
   ```
   http://localhost:3000/chef
   ```
   OR
   ```
   https://alemaya-burger-5pig.vercel.app/#chef
   ```

2. **Look for your order** (should be at the top of active orders)

3. **Check the order card** - You should see:
   ```
   ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
   ┃ #AG-XXXX • Table 4 (Dine-in)         ┃
   ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫
   ┃ 🪑 Table 4  ← TABLE BADGE            ┃
   ┃ ─────────────────────────────────────┃
   ┃ Placed at XX:XX                      ┃
   ┃                                      ┃
   ┃ Items you ordered...                 ┃
   ┃                                      ┃
   ┃ Total: Br XXX                        ┃
   ┃                                      ┃
   ┃ [Start Cooking 🔥]                   ┃
   ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
   ```

4. **Verify table information:**
   - Order header shows: **"Table 4 (Dine-in)"**
   - Green badge shows: **"🪑 Table 4"**

### ✅ Expected Result:
- Order appears in kitchen display ✅
- Table number "4" is clearly visible ✅
- Green table badge displayed ✅
- Chef can easily identify which table the order is for ✅

---

## 🧪 Test 4: Test Different Table Numbers (5 minutes)

Try these different URLs to test various table formats:

### Test 4a: Single digit
```
http://localhost:3000/?table=1
```
**Expected:** "Table 1"

### Test 4b: Double digit
```
http://localhost:3000/?table=10
```
**Expected:** "Table 10"

### Test 4c: Alphanumeric
```
http://localhost:3000/?table=A5
```
**Expected:** "Table A5"

### Test 4d: With "Table" prefix
```
http://localhost:3000/?table=Table 7
```
**Expected:** "Table 7"

### Test 4e: Custom name
```
http://localhost:3000/?table=VIP
```
**Expected:** "Table VIP"

### ✅ Expected Result:
All formats should work and display correctly! ✅

---

## 🧪 Test 5: Test Persistence (2 minutes)

### Steps:
1. **Open URL with table:**
   ```
   http://localhost:3000/?table=4
   ```

2. **Verify table banner appears**

3. **Refresh the page** (F5 or Ctrl+R)

4. **Check if table info persists:**
   - Banner should STILL show "Table 4"
   - You should NOT need to scan QR again

5. **Open a new tab** (keep table 4 tab open)

6. **Open URL without table parameter:**
   ```
   http://localhost:3000/
   ```

7. **Check - this should NOT show any table**
   - No table banner
   - Clean menu view

8. **Go back to the table 4 tab**
   - Should STILL show "Table 4"

### ✅ Expected Result:
- Table info persists after refresh ✅
- Saved in localStorage ✅
- Different tabs can have different table assignments ✅

---

## 🧪 Test 6: Test "Change Table" Feature (1 minute)

### Steps:
1. **Open URL with table:**
   ```
   http://localhost:3000/?table=4
   ```

2. **See the table banner with "Change Table" or "×" button**

3. **Click the "Change Table ×" button**

4. **Verify:**
   - Banner disappears
   - Table assignment cleared
   - If you add items to cart, no table info shown

5. **Optional: Assign new table**
   - Open new URL: `http://localhost:3000/?table=5`
   - Should be seated at Table 5 now

### ✅ Expected Result:
- Can clear table assignment ✅
- Can reseat at different table ✅

---

## 🧪 Test 7: Test Takeaway (No Table) (2 minutes)

### Steps:
1. **Open app WITHOUT table parameter:**
   ```
   http://localhost:3000/
   ```

2. **Add items to cart**

3. **Go to Orders → Checkout**

4. **Click on "Order Type" toggle:**
   - Switch between "Dine-in" and "Takeaway"

5. **Select "Takeaway"**

6. **Place order**

7. **Go to Kitchen display** (`#chef`)

8. **Check the order - should show:**
   ```
   ┌─────────────────────────────┐
   │ 🥡 Takeaway                 │  ← Orange badge
   └─────────────────────────────┘
   ```

### ✅ Expected Result:
- Takeaway orders work correctly ✅
- No table number required ✅
- Kitchen shows orange "Takeaway" badge ✅

---

## 🎯 Success Checklist

After completing all tests, you should have verified:

- [x] QR codes generate with table parameter
- [x] Customer URL captures table number
- [x] Table banner displays to customer
- [x] Table info persists in localStorage
- [x] Order includes table information
- [x] Kitchen display shows table badge
- [x] Different table formats work (1, 10, A5, VIP)
- [x] "Change Table" button works
- [x] Takeaway orders work without table
- [x] Multiple tabs can have different tables

---

## 🐛 Troubleshooting

### Issue: "Table banner doesn't appear"
**Solution:**
- Check browser console for errors (F12)
- Verify URL has `?table=` parameter
- Try hard refresh (Ctrl+Shift+R)
- Clear localStorage and try again

### Issue: "Order doesn't show table in kitchen"
**Solution:**
- Check if order was placed with table info
- Open browser DevTools → Network tab
- Look for POST to `/api/orders`
- Check request payload includes `tableId`, `tableName`

### Issue: "QR generator doesn't work"
**Solution:**
- Make sure you're in Admin section
- Check browser console for JavaScript errors
- Verify both fields are filled (URL and table number)
- Try different browser

### Issue: "Kitchen display doesn't update"
**Solution:**
- Refresh the page
- Check if orders are in database
- Verify API endpoint `/api/orders` is responding
- Check browser console for errors

---

## 📱 Real QR Code Testing (Physical Device)

Once basic tests pass, test with real QR codes:

1. **Generate and download poster PNG**
2. **Display on computer screen OR print**
3. **Use phone camera to scan QR code**
4. **Phone should open the URL in browser**
5. **Follow Test 2 steps on the phone**

### Tips for QR Testing:
- Make sure QR code is clear and high contrast
- Good lighting helps scanning
- Hold phone steady ~6-12 inches from code
- Most modern phones can scan QR directly from camera
- Alternatively use a QR scanner app

---

## 🎉 That's It!

If all tests pass, your table QR system is **100% operational**! 🚀

**You're ready for production use:**
1. Generate QR codes for all your tables
2. Print and laminate them
3. Place on tables
4. Customers scan and order
5. Chef sees table numbers
6. Smooth service! ✨

---

## 💡 Next Steps

1. **Create QR codes for all restaurant tables** (1-20, A1-A10, etc.)
2. **Print on high-quality paper** or get laminated cards
3. **Place on tables** with clear visibility
4. **Train staff** on kitchen display usage
5. **Monitor first few orders** to ensure smooth operation
6. **Gather feedback** and adjust as needed

---

**Need help? Check:**
- `TABLE_QR_SYSTEM_GUIDE.md` - Complete documentation
- `QR_FLOW_DIAGRAM.md` - Visual flow diagram
- Browser console (F12) - For error messages
- `server.js` logs - For backend issues

**Happy Testing! 🍔🍕🎉**
