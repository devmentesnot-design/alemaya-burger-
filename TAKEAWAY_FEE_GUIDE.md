# Takeaway Fee Feature Guide

## Overview
The Alemaya Grill'd application now includes a comprehensive takeaway fee management system that allows administrators to set an additional charge for takeaway orders.

## Features

### 1. **Admin Settings Panel**
- Navigate to **Admin Console → Settings** tab
- Set the takeaway fee amount in Birr (Br)
- Changes are saved to the database and applied immediately
- Settings sync across all browser tabs automatically

### 2. **Automatic Fee Application**
- When customers select "Takeaway" as their order type, the configured fee is automatically added
- Dine-in orders do not include the takeaway fee
- The fee is clearly displayed in the order summary breakdown

### 3. **Order Summary Display**
The cart summary now shows:
- **Subtotal**: Sum of all items
- **Takeaway Fee**: Only displayed when order type is "Takeaway" and fee > 0
- **Total Amount**: Subtotal + Takeaway Fee

### 4. **Database Integration**
- Takeaway fee is stored with each order
- Historical orders retain their takeaway fee amount
- Admin can view takeaway fees in the order ledger

## Setup Instructions

### For Supabase Users
1. Run the migration script to add the necessary database columns:
   ```sql
   -- Run this in your Supabase SQL Editor:
   -- File: supabase_takeaway_fee_migration.sql
   ```

2. The migration adds:
   - `takeaway_fee` column to the `orders` table
   - `settings` table for global configuration

### For Local Database Users
The local `database.json` file has been updated automatically with:
```json
{
  "settings": {
    "takeawayFee": 0
  }
}
```

## Usage

### Setting the Takeaway Fee (Admin)
1. Log into the Admin Console
2. Click the **Settings** tab
3. Enter the desired takeaway fee amount (e.g., 50 Br)
4. Click **Save Changes**
5. A success message will confirm the update

### Customer Experience
1. Customer browses the menu and adds items to cart
2. Customer navigates to the Orders/Checkout page
3. Customer selects order type:
   - **Dine-in**: No takeaway fee applied
   - **Takeaway**: Configured fee is automatically added
4. The bill breakdown clearly shows:
   - Subtotal: Br 450
   - Takeaway Fee: Br 50 (only if takeaway selected)
   - Total: Br 500

### Chef/Kitchen View
- Orders display the total amount including takeaway fee
- Order type is clearly indicated (Dine-in or Takeaway)

## API Endpoints

### Get Settings
```http
GET /api/settings
```
**Response:**
```json
{
  "success": true,
  "data": {
    "takeawayFee": 50
  }
}
```

### Update Settings
```http
PUT /api/settings
Content-Type: application/json

{
  "takeawayFee": 50
}
```
**Response:**
```json
{
  "success": true,
  "data": {
    "takeawayFee": 50
  }
}
```

## Technical Details

### Files Modified
- `app.js`: Added settings management, takeaway fee calculation
- `server.js`: Added settings API endpoints
- `supabase_db.js`: Added settings CRUD operations
- `index.html`: Added settings admin panel and takeaway fee display
- `database.json`: Added settings object

### Database Schema

#### Settings Table
```sql
CREATE TABLE settings (
  id INTEGER PRIMARY KEY DEFAULT 1,
  takeaway_fee DECIMAL(10,2) DEFAULT 0,
  updated_at TIMESTAMP DEFAULT NOW()
);
```

#### Orders Table (New Column)
```sql
ALTER TABLE orders 
ADD COLUMN takeaway_fee DECIMAL(10,2) DEFAULT 0;
```

### Order Object Structure
```javascript
{
  id: "AG-1234",
  timestamp: "14:30",
  date: "2026-10-25",
  orderType: "Takeaway",
  items: [...],
  subtotal: 450,
  service: 0,
  takeawayFee: 50,  // NEW
  total: 500,
  status: "orders",
  ...
}
```

## Benefits

1. **Flexible Pricing**: Easily adjust takeaway fees based on business needs
2. **Transparent**: Customers see exactly what they're paying for
3. **Accurate Records**: Historical orders retain their takeaway fee data
4. **Easy Management**: Simple admin interface for quick updates
5. **Real-time Updates**: Changes apply immediately across all sessions

## Troubleshooting

### Takeaway fee not showing
- Ensure "Takeaway" order type is selected
- Verify takeaway fee is set to a value > 0 in Admin Settings
- Check that settings were saved successfully

### Settings not saving
- Check browser console for errors
- Verify database connection is working
- Ensure you have admin permissions

### Fee not applying to existing cart
- Change order type to "Dine-in" then back to "Takeaway"
- Or add/remove an item to trigger recalculation

## Future Enhancements

Potential features for future versions:
- Different fees for different order values
- Time-based fees (peak hours)
- Distance-based delivery fees
- Promotional fee waivers
- Fee analytics and reporting

---

For questions or support, please contact the development team.
