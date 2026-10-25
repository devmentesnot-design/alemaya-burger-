# 📊 Alemaya Grill'd - QR Table Ordering Flow Diagram

```
┌─────────────────────────────────────────────────────────────────────┐
│                     ADMIN GENERATES QR CODE                         │
│                                                                     │
│  Admin Dashboard → Tables Tab                                       │
│  ┌────────────────────────────────────────┐                        │
│  │ Menu URL: https://alemaya-burger...    │                        │
│  │ Table Number: 4                        │                        │
│  │ [Generate QR & Preview]                │                        │
│  └────────────────────────────────────────┘                        │
│                         │                                           │
│                         ▼                                           │
│  ┌────────────────────────────────────────┐                        │
│  │  QR CODE GENERATED                     │                        │
│  │  📱 ▓▓▓▓▓▓▓▓▓▓                          │                        │
│  │     ▓▓▓▓▓▓▓▓▓▓                          │                        │
│  │     ▓▓▓▓▓▓▓▓▓▓                          │                        │
│  │                                        │                        │
│  │  Encodes: https://alemaya-burger...    │                        │
│  │           ?table=4    ← TABLE PARAM    │                        │
│  │                                        │                        │
│  │  Visible: "Table 4"                    │                        │
│  │  [Download PNG] [Print]                │                        │
│  └────────────────────────────────────────┘                        │
│                         │                                           │
│                         ▼                                           │
│              🖨️ Print & Place on Table                              │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  CUSTOMER SCANS QR CODE                             │
│                                                                     │
│  Customer Phone Camera 📱                                           │
│  Scans QR → Opens URL                                               │
│                                                                     │
│  https://alemaya-burger-5pig.vercel.app/?table=4                   │
│                                          ↑                          │
│                                     TABLE PARAM                     │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│              APP.JS DETECTS TABLE PARAMETER                         │
│                                                                     │
│  // On page load (DOMContentLoaded)                                │
│  initTableFromUrlOrStorage()                                        │
│    ↓                                                                │
│  const urlParams = new URLSearchParams(window.location.search)     │
│  let token = urlParams.get('table')  // Gets "4"                   │
│    ↓                                                                │
│  APP_STATE.activeTable = {                                          │
│    id: 'table-4',                                                   │
│    name: 'Table 4',           ← FORMATTED                           │
│    tableNumber: '4',                                                │
│    token: '4',                                                      │
│    capacity: 4,                                                     │
│    active: true                                                     │
│  }                                                                  │
│    ↓                                                                │
│  localStorage.setItem('alemaya_active_table', ...)  // Persist      │
│    ↓                                                                │
│  toast('🍽️ Welcome! Seated at Table 4')                             │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                 CUSTOMER SEES MENU WITH TABLE                       │
│                                                                     │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃ 🍽️ Table 4 | Seated for Dine-in • Capacity: 4 Seats   [x]  ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│       ↑ ACTIVE TABLE BANNER (Customer knows they're seated)        │
│                                                                     │
│  [Browse Menu]                                                      │
│  ┌─────────────────────────┐                                       │
│  │ 🍔 Burger         Br 450│  [Add +]                              │
│  │ 🍕 Pizza          Br 550│  [Add +]                              │
│  │ 🥤 Smoothie       Br 250│  [Add +]                              │
│  └─────────────────────────┘                                       │
│                                                                     │
│  Customer adds items to cart...                                     │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  CUSTOMER PLACES ORDER                              │
│                                                                     │
│  [Orders Tab] → [Checkout]                                          │
│  ┌────────────────────────────────────────┐                        │
│  │ Bill Breakdown                         │                        │
│  │ Subtotal:         Br 1,250             │                        │
│  │ Total:            Br 1,250             │                        │
│  │                                        │                        │
│  │ Order Type: Dine-in                    │                        │
│  │ Table: Table 4  ← SHOWS TABLE          │                        │
│  │                                        │                        │
│  │ [Confirm & Place Order]                │                        │
│  └────────────────────────────────────────┘                        │
│             │                                                       │
│             ▼ placeOrder() function                                │
│                                                                     │
│  const newOrder = {                                                 │
│    id: 'AG-5234',                                                   │
│    timestamp: '14:30',                                              │
│    orderType: 'Dine-in (Table 4)',  ← TABLE IN TYPE                │
│    tableId: 'table-4',              ← ID                            │
│    tableName: 'Table 4',            ← DISPLAY NAME                  │
│    tableToken: '4',                 ← ORIGINAL                      │
│    tableNumber: '4',                ← NUMBER                        │
│    items: [...],                                                    │
│    total: 1250,                                                     │
│    status: 'orders'                                                 │
│  }                                                                  │
│             │                                                       │
│             ▼                                                       │
│  POST /api/orders → Server → Supabase Database                     │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│               ORDER SAVED TO DATABASE                               │
│                                                                     │
│  Supabase PostgreSQL                                                │
│  ┌────────────────────────────────────────────────────────┐        │
│  │ orders table                                           │        │
│  │ ──────────────────────────────────────────────────────│        │
│  │ id          | AG-5234                                  │        │
│  │ order_type  | Dine-in (Table 4)                        │        │
│  │ table_id    | table-4                                  │        │
│  │ table_name  | Table 4         ← CHEF WILL SEE THIS    │        │
│  │ table_token | 4                                        │        │
│  │ table_number| 4                                        │        │
│  │ items       | [...]                                    │        │
│  │ total       | 1250                                     │        │
│  │ status      | orders                                   │        │
│  └────────────────────────────────────────────────────────┘        │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │ Real-time sync (3s polling)
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│              CHEF KITCHEN DISPLAY UPDATES                           │
│                                                                     │
│  Kitchen Display (/chef route)                                      │
│  renderKdsTickets() → getOrderTableName()                           │
│                                                                     │
│  ┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓  │
│  ┃ #AG-5234 • Table 4 (Dine-in)    [Order Placed]           ┃  │
│  ┣━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┫  │
│  ┃ 🪑 Table 4  ← TABLE BADGE (Highly Visible)               ┃  │
│  ┃ ─────────────────────────────────────────────────────────  ┃  │
│  ┃ Placed at 14:30                                           ┃  │
│  ┃                                                            ┃  │
│  ┃ 2× Grilled Special Burger                 Br 900          ┃  │
│  ┃ 1× Smoothie                                Br 250          ┃  │
│  ┃ 1× Fries                                   Br 100          ┃  │
│  ┃                                                            ┃  │
│  ┃ Total: Br 1,250                                           ┃  │
│  ┃                                                            ┃  │
│  ┃                              [Start Cooking 🔥]           ┃  │
│  ┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛  │
│         ↑                                                           │
│   CHEF KNOWS THIS IS FOR TABLE 4!                                  │
│                                                                     │
│  Chef clicks "Start Cooking" → Status changes to "cooking"         │
│  Later clicks "Mark Ready" → Customer notified                     │
│  Finally clicks "Complete Order" → Order history                   │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                  CUSTOMER SEES LIVE UPDATES                         │
│                                                                     │
│  Customer's [Orders] tab shows real-time status:                   │
│                                                                     │
│  ┌────────────────────────────────────────┐                        │
│  │ Order #AG-5234                         │                        │
│  │ Table 4 • Dine-in                      │                        │
│  │ ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━  │                        │
│  │ [●] Order Placed  (14:30)              │                        │
│  │ [●] Cooking       (14:35) ← LIVE       │                        │
│  │ [ ] Ready                              │                        │
│  │ [ ] Completed                          │                        │
│  │                                        │                        │
│  │ 2× Grilled Special Burger              │                        │
│  │ 1× Smoothie                            │                        │
│  │                                        │                        │
│  │ Total: Br 1,250                        │                        │
│  └────────────────────────────────────────┘                        │
│                                                                     │
│  Customer stays at table, waits for food...                         │
└─────────────────────────────────────────────────────────────────────┘
                          │
                          │
                          ▼
┌─────────────────────────────────────────────────────────────────────┐
│                    ORDER COMPLETED                                  │
│                                                                     │
│  Chef marks "Ready" → "Completed"                                   │
│  Food delivered to Table 4 ✅                                       │
│  Customer enjoys meal 🍔                                            │
│  Customer can order again using same table QR                       │
└─────────────────────────────────────────────────────────────────────┘
```

---

## 🔑 Key Integration Points

### 1. **QR Code → URL with Table Parameter**
```
QR Contains: https://alemaya-burger-5pig.vercel.app/?table=4
                                                    ↑
                                              TABLE PARAM
```

### 2. **URL → JavaScript Detection**
```javascript
// app.js line ~5633
const urlParams = new URLSearchParams(window.location.search);
let token = urlParams.get('table'); // "4"
```

### 3. **JavaScript → APP_STATE**
```javascript
APP_STATE.activeTable = {
  id: 'table-4',
  name: 'Table 4',
  tableNumber: '4',
  ...
}
```

### 4. **APP_STATE → Order Object**
```javascript
// app.js line ~3200
const newOrder = {
  ...
  tableId: APP_STATE.activeTable.id,
  tableName: APP_STATE.activeTable.name,
  tableNumber: APP_STATE.activeTable.tableNumber,
  ...
}
```

### 5. **Order → Database**
```javascript
// REST API POST /api/orders
await supabaseDb.createOrder(newOrder);
```

### 6. **Database → Kitchen Display**
```javascript
// app.js line ~3554
renderKdsTickets() {
  // Gets orders from database
  // Extracts table info via getOrderTableName()
  // Displays prominent table badge
}
```

---

## 🎨 Visual Elements

### Customer Side - Table Banner
```
┏━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┓
┃ 🍽️ Table 4 | Seated for Dine-in • Capacity: 4  [Change ×]┃
┗━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━┛
```

### Kitchen Side - Table Badge
```
┌─────────────────────────────┐
│ 🪑 Table 4                  │  ← Green badge for dine-in
└─────────────────────────────┘

┌─────────────────────────────┐
│ 🥡 Takeaway                 │  ← Orange badge for takeaway
└─────────────────────────────┘

┌─────────────────────────────┐
│ 🍽️ Dine-in (No Table)       │  ← Gray badge if no table
└─────────────────────────────┘
```

---

## 📋 Data Flow Summary

```
Admin → QR with ?table=X
   ↓
Customer Scans
   ↓
URL Parameter Detected
   ↓
Table Info Stored in APP_STATE
   ↓
Customer Orders
   ↓
Order includes Table Data
   ↓
Sent to Database
   ↓
Chef Sees Order with Table Number
   ↓
Food Prepared & Delivered to Correct Table ✅
```

**Everything is connected and working! 🎉**
