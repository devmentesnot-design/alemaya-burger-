// ═══════════════════════════════════════════════════════════════════════
// SEED REAL ALEMAYA MENU DATA (16 Categories, 85 Real Items)
// Synchronizes Supabase PostgreSQL, database.json, menu-data.js, and app.js
// ═══════════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

// Read .env if present
const envPath = path.join(__dirname, '.env');
if (fs.existsSync(envPath)) {
  const envLines = fs.readFileSync(envPath, 'utf8').split('\n');
  for (const line of envLines) {
    const trimmed = line.trim();
    if (!trimmed || trimmed.startsWith('#')) continue;
    const eqIdx = trimmed.indexOf('=');
    if (eqIdx !== -1) {
      const k = trimmed.slice(0, eqIdx).trim();
      const v = trimmed.slice(eqIdx + 1).trim();
      if (!process.env[k]) process.env[k] = v;
    }
  }
}

const SUPABASE_URL = process.env.SUPABASE_URL || 'https://lbxyproolnnvpggsowym.supabase.co';
const SUPABASE_KEY = process.env.SUPABASE_SERVICE_ROLE_KEY || process.env.SUPABASE_ANON_KEY || '';

// Real Cloudinary CDN URLs from your live account
const CLD = {
  burger: 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg',
  sandwich: 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg',
  pizza: 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg',
  pasta: 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg',
  bowl: 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg',
  smoothie: 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg',
  shake: 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg'
};

const RAW_DATA = {
  currency: "ETB",
  categories: [
    { name: "Burger", slug: "burger", icon: "burger", image: CLD.burger },
    { name: "Pizza", slug: "pizza", icon: "pizza", image: CLD.pizza },
    { name: "Spaghetti", slug: "spaghetti", icon: "soup", image: CLD.pasta },
    { name: "Sandwich", slug: "sandwich", icon: "sandwich", image: CLD.sandwich },
    { name: "Burrito", slug: "burrito", icon: "wrap", image: CLD.bowl },
    { name: "Special Wrap", slug: "special-wrap", icon: "wrap", image: CLD.sandwich },
    { name: "Rice", slug: "rice", icon: "soup", image: CLD.bowl },
    { name: "Chicken", slug: "chicken", icon: "package", image: CLD.sandwich },
    { name: "Breakfast", slug: "breakfast", icon: "soup", image: CLD.bowl },
    { name: "Dessert", slug: "dessert", icon: "cake-slice", image: CLD.shake },
    { name: "Extra", slug: "extra", icon: "package", image: CLD.burger },
    { name: "Protein", slug: "protein", icon: "cup-soda", image: CLD.smoothie },
    { name: "Superjuice", slug: "superjuice", icon: "citrus", image: CLD.smoothie },
    { name: "Smoothies", slug: "smoothies", icon: "cup-soda", image: CLD.smoothie },
    { name: "Milkshakes", slug: "milkshakes", icon: "ice-cream-2", image: CLD.shake },
    { name: "Juice", slug: "juice", icon: "citrus", image: CLD.smoothie }
  ],
  items: [
    { id: 1, category: "Burger", name: "Grilled Special Burger", price: 799, available: true, badge: "CHEF'S SPECIAL", rating: 4.9 },
    { id: 2, category: "Burger", name: "Chicken Burger", price: 809, available: true, badge: "POPULAR", rating: 4.8 },
    { id: 3, category: "Burger", name: "Cheese Burger", price: 569, available: true, badge: "BESTSELLER", rating: 4.9 },
    { id: 4, category: "Burger", name: "Beef Burger", price: 369, available: true, rating: 4.7 },
    { id: 5, category: "Burger", name: "BBQ Burger", price: 499, available: true, badge: "SMOKY", rating: 4.8 },
    { id: 6, category: "Pizza", name: "Grilled Special Pizza", price: 899, available: true, badge: "CHEF'S CHOICE", rating: 4.9 },
    { id: 7, category: "Pizza", name: "Margarita Pizza", price: 699, available: true, rating: 4.8 },
    { id: 8, category: "Pizza", name: "Pepperoni Pizza", price: 799, available: true, badge: "BESTSELLER", rating: 4.9 },
    { id: 9, category: "Pizza", name: "Chicken Pizza", price: 869, available: true, badge: "POPULAR", rating: 4.8 },
    { id: 10, category: "Pizza", name: "Pizza al Tuna", price: 689, available: true, rating: 4.7 },
    { id: 11, category: "Pizza", name: "Veggie Pizza", price: 599, available: true, badge: "VEGETARIAN", rating: 4.8 },
    { id: 12, category: "Spaghetti", name: "Spaghetti with Chicken Vegetables", price: 649, available: true, badge: "POPULAR", rating: 4.8 },
    { id: 13, category: "Spaghetti", name: "Spaghetti", price: 419, available: true, rating: 4.7 },
    { id: 14, category: "Spaghetti", name: "Spaghetti with Bologna", price: 469, available: true, badge: "FAVORITE", rating: 4.8 },
    { id: 15, category: "Spaghetti", name: "Spaghetti Bologna with Cheese", price: 469, available: true, badge: "BESTSELLER", rating: 4.9 },
    { id: 16, category: "Sandwich", name: "Egg Sandwich", price: 449, available: true, rating: 4.7 },
    { id: 17, category: "Sandwich", name: "Club Sandwich", price: 799, available: true, badge: "SIGNATURE", rating: 4.9 },
    { id: 18, category: "Sandwich", name: "Veg Club Sandwich", price: 309, available: true, badge: "VEGGIE", rating: 4.7 },
    { id: 19, category: "Sandwich", name: "Cheese Sandwich", price: 409, available: true, rating: 4.6 },
    { id: 20, category: "Sandwich", name: "Tuna Sandwich", price: 709, available: true, badge: "POPULAR", rating: 4.8 },
    { id: 21, category: "Burrito", name: "Chicken Burrito", price: 1066, available: true, badge: "BESTSELLER", rating: 4.9 },
    { id: 22, category: "Burrito", name: "Beef Burrito", price: 966, available: true, badge: "POPULAR", rating: 4.8 },
    { id: 23, category: "Burrito", name: "Chicken Shawarma", price: 899, available: true, badge: "HOUSE SPECIAL", rating: 4.9 },
    { id: 24, category: "Burrito", name: "Chicken Breast Plate", price: 1099, available: true, badge: "HIGH PROTEIN", rating: 4.9 },
    { id: 25, category: "Burrito", name: "Veggie Burrito", price: 566, available: true, badge: "VEGGIE", rating: 4.7 },
    { id: 26, category: "Special Wrap", name: "Beef with Cheese Wrap", price: 569, available: true, badge: "BESTSELLER", rating: 4.8 },
    { id: 27, category: "Special Wrap", name: "Chicken with Cheese Wrap", price: 659, available: true, badge: "POPULAR", rating: 4.8 },
    { id: 28, category: "Special Wrap", name: "Tuna with Cheese Wrap", price: 500, available: true, rating: 4.7 },
    { id: 29, category: "Special Wrap", name: "Beef Chicken & Cheese Wrap", price: 579, available: true, badge: "SUPER MIX", rating: 4.9 },
    { id: 30, category: "Special Wrap", name: "Fasting Tuna Wrap", price: 449, available: true, badge: "FASTING", rating: 4.7 },
    { id: 31, category: "Rice", name: "Rice", price: 229, available: true, rating: 4.6 },
    { id: 32, category: "Rice", name: "Rice with Bologna", price: 329, available: true, rating: 4.7 },
    { id: 33, category: "Rice", name: "Rice Bologna with Cheese", price: 379, available: true, badge: "POPULAR", rating: 4.8 },
    { id: 34, category: "Chicken", name: "Grilled Chicken", price: 1379, available: true, badge: "CHEF'S SPECIAL", rating: 4.9 },
    { id: 35, category: "Chicken", name: "Grilled Chicken Bowl", price: 999, available: true, badge: "HEALTHY", rating: 4.9 },
    { id: 36, category: "Chicken", name: "Grilled Beef Bowl", price: 789, available: true, badge: "PROTEIN BOWL", rating: 4.8, description: "Tender grilled spiced beef served with fresh garden greens and savory house garnish." },
    { id: 37, category: "Breakfast", name: "Special Fetira", price: 439, available: true, badge: "TRADITIONAL", rating: 4.9, description: "Crispy layered pastry served warm with eggs and sweet natural honey." },
    { id: 38, category: "Breakfast", name: "Normal Fetira", price: 309, available: true, rating: 4.7, description: "Crispy freshly fried traditional fetira pastry." },
    { id: 39, category: "Breakfast", name: "Special Chechebsa", price: 469, available: true, badge: "POPULAR", rating: 4.9, description: "Torn flatbread pan-fried with spiced clarified butter, berbere, honey, and yogurt." },
    { id: 40, category: "Breakfast", name: "Normal Chechebsa", price: 369, available: true, rating: 4.8, description: "Traditional Ethiopian breakfast shredded flatbread tossed with aromatic spiced butter." },
    { id: 41, category: "Breakfast", name: "Tikur Teff Chechebsa", price: 399, available: true, badge: "HEALTHY TEFF", rating: 4.9, description: "Nutritious whole black teff chechebsa with Ethiopian spiced butter." },
    { id: 42, category: "Breakfast", name: "Scrambled Egg", price: 369, available: true, rating: 4.7, description: "Farm fresh eggs scrambled with tomatoes, onions, and jalapeño peppers." },
    { id: 43, category: "Breakfast", name: "Plain Omelette", price: 399, available: true, rating: 4.7, description: "Fluffy 3-egg skillet omelette cooked with fresh herbs." },
    { id: 44, category: "Breakfast", name: "Cheese Omelette", price: 449, available: true, badge: "BESTSELLER", rating: 4.8, description: "Folded golden omelette stuffed with gooey melted mozzarella and cheddar." },
    { id: 45, category: "Breakfast", name: "Lasagna", price: 799, available: true, badge: "OVEN BAKED", rating: 4.8, description: "Rich layers of pasta sheets, savory minced meat sauce, creamy bechamel, and melted cheese." },
    { id: 46, category: "Dessert", name: "Pan Cake", price: 249, available: true, rating: 4.8, description: "Fluffy golden pancake stack drizzled with pure honey and whipped butter." },
    { id: 47, category: "Dessert", name: "Waffle & Teff Waffle", price: 299, available: true, badge: "SIGNATURE", rating: 4.9, description: "Crisp Belgian waffle made with teff flour, served with maple drizzle and fresh fruit." },
    { id: 48, category: "Dessert", name: "French Toast", price: 199, available: true, rating: 4.7, description: "Golden pan-fried brioche soaked in vanilla custard and cinnamon sugar." },
    { id: 49, category: "Extra", name: "Cheese", price: 149, available: true, description: "Extra melted cheddar or mozzarella slice." },
    { id: 50, category: "Extra", name: "Chicken", price: 169, available: true, description: "Extra portion of flame grilled chicken breast." },
    { id: 51, category: "Extra", name: "Egg", price: 45, available: true, description: "One fried or boiled farm egg." },
    { id: 52, category: "Extra", name: "Tuna", price: 269, available: true, description: "Extra portion of premium flaked tuna." },
    { id: 53, category: "Extra", name: "Mayonnaise", price: 79, available: true, description: "Side cup of creamy garlic mayonnaise." },
    { id: 54, category: "Extra", name: "Honey", price: 59, available: true, description: "Pure local organic natural honey." },
    { id: 55, category: "Extra", name: "Beef", price: 149, available: true, description: "Extra flame grilled 100% pure beef patty." },
    { id: 56, category: "Protein", name: "Alemaya Special", price: 259, available: true, badge: "SIGNATURE", rating: 4.9, description: "Orange, apple, avocado, mango, banana and honey." },
    { id: 57, category: "Protein", name: "Body Building", price: 259, available: true, badge: "FITNESS", rating: 4.9, description: "Avocado, mango, papaya, peanut, banana, flax and honey." },
    { id: 58, category: "Protein", name: "Muscle Building", price: 259, available: true, badge: "POWER", rating: 4.9, description: "Avocado, papaya, banana, peanut and honey." },
    { id: 59, category: "Protein", name: "Vegitable Special", price: 259, available: true, badge: "WELLNESS", rating: 4.8, description: "Avocado, mango, papaya, flax, cucumber and honey." },
    { id: 60, category: "Superjuice", name: "Energy Booster", price: 239, available: true, badge: "REVITALIZE", rating: 4.8, description: "Carrot, beetroot, apple and ginger." },
    { id: 61, category: "Superjuice", name: "Cool Refresh", price: 219, available: true, badge: "HYDRATING", rating: 4.8, description: "Watermelon, mint and lemon." },
    { id: 62, category: "Superjuice", name: "Immunity Shoot", price: 219, available: true, badge: "IMMUNITY", rating: 4.9, description: "Lemon, ginger, mint and honey." },
    { id: 63, category: "Superjuice", name: "Avocado Smoothie", price: 239, available: true, badge: "CREAMY", rating: 4.9, description: "Avocado, banana, milk and honey." },
    { id: 64, category: "Superjuice", name: "Cooling Factor", price: 239, available: true, badge: "SUMMER", rating: 4.8, description: "Mango, papaya, strawberry and honey." },
    { id: 65, category: "Superjuice", name: "Immunity Boost", price: 239, available: true, badge: "VITAMIN C", rating: 4.9, description: "Carrot, orange, apple and honey." },
    { id: 66, category: "Smoothies", name: "Apple Burst", price: 259, available: true, badge: "FRUITY", rating: 4.8, description: "Strawberry, apple, pineapple, orange, mint and honey." },
    { id: 67, category: "Smoothies", name: "Weight Loss", price: 229, available: true, badge: "DETOX", rating: 4.8, description: "Mango, carrot and orange." },
    { id: 68, category: "Smoothies", name: "Mango Lassie", price: 259, available: true, badge: "FAVORITE", rating: 4.9, description: "Mango, chilled yogurt, cardamom, and honey." },
    { id: 69, category: "Smoothies", name: "Apple Mix", price: 229, available: true, rating: 4.7, description: "Apple, pineapple, mango and honey." },
    { id: 70, category: "Smoothies", name: "Strawberry Mix", price: 269, available: true, badge: "BERRY", rating: 4.9, description: "Strawberry, mango, avocado and honey." },
    { id: 71, category: "Smoothies", name: "Fruit Punch", price: 229, available: true, rating: 4.7, description: "Chef's daily blend of freshly sliced seasonal fruits." },
    { id: 72, category: "Milkshakes", name: "Avocado Shake", price: 239, available: true, badge: "CREAMY", rating: 4.9, description: "Fresh ripe avocado blended with chilled milk and honey." },
    { id: 73, category: "Milkshakes", name: "Mango Shake", price: 239, available: true, badge: "POPULAR", rating: 4.8, description: "Luscious mango chunks blended with creamy milk and honey." },
    { id: 74, category: "Milkshakes", name: "Strawberry Shake", price: 239, available: true, badge: "BESTSELLER", rating: 4.9, description: "Fresh strawberries blended with rich milk and sweet honey." },
    { id: 75, category: "Milkshakes", name: "Papaya Shake", price: 239, available: true, rating: 4.7, description: "Sweet tropical papaya whipped with rich milk and honey." },
    { id: 76, category: "Milkshakes", name: "Banana Shake", price: 239, available: true, rating: 4.8, description: "Ripe bananas blended with thick cold milk and honey." },
    { id: 77, category: "Juice", name: "Avocado Juice", price: 229, available: true, badge: "THICK", rating: 4.9, description: "Pure fresh avocado layers with a hint of lime and honey." },
    { id: 78, category: "Juice", name: "Mango Juice", price: 239, available: true, badge: "SWEET", rating: 4.8, description: "100% freshly pressed ripe Ethiopian mango." },
    { id: 79, category: "Juice", name: "Papaya Juice", price: 199, available: true, rating: 4.7, description: "Pure freshly pressed sweet golden papaya." },
    { id: 80, category: "Juice", name: "Pineapple Juice", price: 249, available: true, badge: "TANGY", rating: 4.8, description: "Zesty freshly extracted tropical pineapple juice." },
    { id: 81, category: "Juice", name: "Carrot Juice", price: 199, available: true, rating: 4.7, description: "Freshly cold-pressed sweet highland carrots." },
    { id: 82, category: "Juice", name: "Strawberry Juice", price: 239, available: true, badge: "FRESH", rating: 4.8, description: "Cold-pressed fresh handpicked sweet strawberries." },
    { id: 83, category: "Juice", name: "Water Melon Juice", price: 199, available: true, badge: "COOL", rating: 4.8, description: "Crisp and thirst-quenching cold fresh watermelon." },
    { id: 84, category: "Juice", name: "Orange Juice", price: 269, available: true, badge: "CITRUS", rating: 4.9, description: "Freshly squeezed sweet highland oranges." },
    { id: 85, category: "Juice", name: "Mixed Juice", price: 279, available: true, badge: "SPRIS SIGNATURE", rating: 4.9, description: "Traditional Ethiopian layered Spris juice (Avocado, Mango, Papaya, and Guava)." }
  ]
};

// Map each category to an image
function getCategoryImage(catSlug) {
  switch (catSlug) {
    case 'burger': return CLD.burger;
    case 'pizza': return CLD.pizza;
    case 'spaghetti': return CLD.pasta;
    case 'sandwich': return CLD.sandwich;
    case 'burrito': return CLD.bowl;
    case 'special-wrap': return CLD.sandwich;
    case 'rice': return CLD.bowl;
    case 'chicken': return CLD.sandwich;
    case 'breakfast': return CLD.bowl;
    case 'dessert': return CLD.shake;
    case 'extra': return CLD.burger;
    case 'protein': return CLD.smoothie;
    case 'superjuice': return CLD.smoothie;
    case 'smoothies': return CLD.smoothie;
    case 'milkshakes': return CLD.shake;
    case 'juice': return CLD.smoothie;
    default: return CLD.burger;
  }
}

// Generate ingredients list if none
function generateIngredients(name, desc) {
  if (desc && desc.includes(',')) {
    return desc.split(/[,.]/).map(s => s.trim()).filter(s => s.length > 2 && !s.toLowerCase().includes('printed') && !s.toLowerCase().includes('spelling'));
  }
  return [name, "House Seasoning", "Fresh Ingredients"];
}

// Build normalized categories and products
const categories = RAW_DATA.categories.map((c, idx) => ({
  id: c.slug,
  name: c.name,
  icon: c.icon,
  order: idx + 1
}));

const products = RAW_DATA.items.map(item => {
  const catObj = RAW_DATA.categories.find(c => c.name.toLowerCase() === item.category.toLowerCase()) || RAW_DATA.categories[0];
  const catSlug = catObj.slug;
  const desc = item.description || `Fresh, grilled-to-order ${item.name.toLowerCase()} prepared daily with quality local ingredients.`;
  const ingredients = generateIngredients(item.name, item.description);
  
  return {
    id: `item_${item.id}`,
    categoryId: catSlug,
    name: item.name,
    badge: item.badge || null,
    rating: item.rating || 4.8,
    reviewsCount: Math.floor(Math.random() * 200) + 90,
    description: desc,
    ingredients: ingredients,
    basePrice: item.price,
    image: getCategoryImage(catSlug),
    available: item.available !== false,
    customizations: []
  };
});

// Build 20 realistic sample orders with the new product IDs
const orders = [
  {
    id: "ORD-2026-1001",
    timestamp: "10:15 AM",
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now() - 14400000,
    orderType: "Dine-in",
    items: [
      { id: "item_1", name: "Grilled Special Burger", price: 799, quantity: 2 },
      { id: "item_77", name: "Avocado Juice", price: 229, quantity: 2 }
    ],
    subtotal: 2056,
    service: 205.6,
    total: 2261.6,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "ORD-2026-1002",
    timestamp: "10:45 AM",
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now() - 12600000,
    orderType: "Takeaway",
    items: [
      { id: "item_6", name: "Grilled Special Pizza", price: 899, quantity: 1 },
      { id: "item_60", name: "Energy Booster", price: 239, quantity: 1 }
    ],
    subtotal: 1138,
    service: 113.8,
    total: 1251.8,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "ORD-2026-1003",
    timestamp: "11:20 AM",
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now() - 10800000,
    orderType: "Dine-in",
    items: [
      { id: "item_21", name: "Chicken Burrito", price: 1066, quantity: 1 },
      { id: "item_74", name: "Strawberry Shake", price: 239, quantity: 1 }
    ],
    subtotal: 1305,
    service: 130.5,
    total: 1435.5,
    status: "ready",
    statusLabel: "Ready for Pickup"
  },
  {
    id: "ORD-2026-1004",
    timestamp: "11:50 AM",
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now() - 9000000,
    orderType: "Delivery",
    items: [
      { id: "item_34", name: "Grilled Chicken", price: 1379, quantity: 1 },
      { id: "item_85", name: "Mixed Juice", price: 279, quantity: 2 }
    ],
    subtotal: 1937,
    service: 193.7,
    total: 2130.7,
    status: "preparing",
    statusLabel: "In Preparation"
  },
  {
    id: "ORD-2026-1005",
    timestamp: "12:10 PM",
    date: new Date().toISOString().split('T')[0],
    createdAt: Date.now() - 7200000,
    orderType: "Dine-in",
    items: [
      { id: "item_3", name: "Cheese Burger", price: 569, quantity: 2 },
      { id: "item_27", name: "Chicken with Cheese Wrap", price: 659, quantity: 1 },
      { id: "item_56", name: "Alemaya Special", price: 259, quantity: 2 }
    ],
    subtotal: 2315,
    service: 231.5,
    total: 2546.5,
    status: "received",
    statusLabel: "Order Received"
  }
];

async function syncToSupabase() {
  console.log(`Connecting to Supabase PostgREST at ${SUPABASE_URL}...`);
  const headers = {
    'apikey': SUPABASE_KEY,
    'Authorization': `Bearer ${SUPABASE_KEY}`,
    'Content-Type': 'application/json',
    'Prefer': 'return=representation'
  };

  try {
    // 1. Delete old products and categories in Supabase
    console.log('Clearing old Supabase rows...');
    await fetch(`${SUPABASE_URL}/rest/v1/orders?id=neq.placeholder`, { method: 'DELETE', headers });
    await fetch(`${SUPABASE_URL}/rest/v1/products?id=neq.placeholder`, { method: 'DELETE', headers });
    await fetch(`${SUPABASE_URL}/rest/v1/categories?id=neq.placeholder`, { method: 'DELETE', headers });

    // 2. Insert new categories into Supabase
    console.log(`Inserting ${categories.length} categories to Supabase...`);
    const catPayload = categories.map(c => ({
      id: c.id,
      name: c.name,
      icon: c.icon,
      sort_order: c.order
    }));

    const catRes = await fetch(`${SUPABASE_URL}/rest/v1/categories`, {
      method: 'POST',
      headers,
      body: JSON.stringify(catPayload)
    });
    console.log(`Supabase categories insert status: ${catRes.status}`);

    // 3. Insert new products into Supabase
    console.log(`Inserting ${products.length} products to Supabase...`);
    const prodPayload = products.map(p => ({
      id: p.id,
      category_id: p.categoryId,
      name: p.name,
      badge: p.badge,
      rating: p.rating,
      reviews_count: p.reviewsCount,
      description: p.description,
      ingredients: p.ingredients,
      base_price: p.basePrice,
      image: p.image,
      available: p.available
    }));

    const prodRes = await fetch(`${SUPABASE_URL}/rest/v1/products`, {
      method: 'POST',
      headers,
      body: JSON.stringify(prodPayload)
    });
    console.log(`Supabase products insert status: ${prodRes.status}`);

    // 4. Insert sample orders into Supabase
    console.log(`Inserting ${orders.length} orders to Supabase...`);
    const orderPayload = orders.map(o => ({
      id: o.id,
      timestamp: o.timestamp,
      date: o.date,
      created_at: o.createdAt,
      order_type: o.orderType,
      items: o.items,
      subtotal: o.subtotal,
      service: o.service,
      total: o.total,
      status: o.status,
      status_label: o.statusLabel
    }));

    const ordRes = await fetch(`${SUPABASE_URL}/rest/v1/orders`, {
      method: 'POST',
      headers,
      body: JSON.stringify(orderPayload)
    });
    console.log(`Supabase orders insert status: ${ordRes.status}`);

  } catch (err) {
    console.error('Error syncing directly to Supabase REST:', err);
  }
}

function updateLocalFiles() {
  // 1. database.json
  const dbData = {
    categories,
    products,
    orders
  };
  fs.writeFileSync(path.join(__dirname, 'database.json'), JSON.stringify(dbData, null, 2), 'utf8');
  console.log(`Updated database.json with ${categories.length} categories, ${products.length} items!`);

  // 2. menu-data.js
  const menuDataContent = `const MENU_DATA = {
  restaurant: {
    name: "Alemaya Grill'd",
    tagline: "Healthy Burgers",
    currency: "ETB",
    currencySymbol: "Br",
    serviceCharge: 0.10,
    tax: 0,
    deliveryFee: 0,
    orderTypes: ["Dine-In", "Takeaway", "Delivery"],
    estimatedTime: "15-25 min",
    phone: "+251 900 000 000",
    address: "Alemaya, Ethiopia"
  },
  categories: ${JSON.stringify(categories, null, 2)},
  products: ${JSON.stringify(products, null, 2)}
};
window.MENU_DATA = MENU_DATA;
`;
  fs.writeFileSync(path.join(__dirname, 'menu-data.js'), menuDataContent, 'utf8');
  console.log(`Updated menu-data.js!`);

  // 3. supabase_schema.sql
  let sql = `-- =============================================================
-- ALEMAYA GRILL'D - SUPABASE POSTGRESQL TABLES & REAL MENU SEED
-- Generated for 16 Categories and 85 Real Menu Items
-- =============================================================

CREATE TABLE IF NOT EXISTS public.categories (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  icon TEXT NOT NULL,
  sort_order INTEGER DEFAULT 0,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.products (
  id TEXT PRIMARY KEY,
  category_id TEXT REFERENCES public.categories(id) ON DELETE SET NULL,
  name TEXT NOT NULL,
  badge TEXT,
  rating NUMERIC(3,1) DEFAULT 4.8,
  reviews_count INTEGER DEFAULT 100,
  description TEXT,
  ingredients JSONB DEFAULT '[]'::jsonb,
  base_price NUMERIC(10,2) NOT NULL,
  image TEXT,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

CREATE TABLE IF NOT EXISTS public.orders (
  id TEXT PRIMARY KEY,
  timestamp TEXT,
  date DATE DEFAULT CURRENT_DATE,
  created_at BIGINT,
  order_type TEXT DEFAULT 'Dine-in',
  items JSONB NOT NULL DEFAULT '[]'::jsonb,
  subtotal NUMERIC(10,2) DEFAULT 0,
  service NUMERIC(10,2) DEFAULT 0,
  total NUMERIC(10,2) DEFAULT 0,
  status TEXT DEFAULT 'received',
  status_label TEXT DEFAULT 'Order Received'
);

-- CLEAN PREVIOUS DATA
TRUNCATE TABLE public.orders, public.products, public.categories CASCADE;

-- INSERT 16 CATEGORIES
INSERT INTO public.categories (id, name, icon, sort_order) VALUES
`;

  const catValues = categories.map(c => `  ('${c.id.replace(/'/g, "''")}', '${c.name.replace(/'/g, "''")}', '${c.icon.replace(/'/g, "''")}', ${c.order})`).join(',\n');
  sql += catValues + ';\n\n';

  sql += '-- INSERT 85 REAL MENU DISHES\nINSERT INTO public.products (id, category_id, name, badge, rating, reviews_count, description, ingredients, base_price, image, available) VALUES\n';
  
  const prodValues = products.map(p => {
    const id = `'${p.id.replace(/'/g, "''")}'`;
    const catId = `'${p.categoryId.replace(/'/g, "''")}'`;
    const name = `'${p.name.replace(/'/g, "''")}'`;
    const badge = p.badge ? `'${p.badge.replace(/'/g, "''")}'` : 'NULL';
    const rating = p.rating;
    const rev = p.reviewsCount;
    const desc = `'${p.description.replace(/'/g, "''")}'`;
    const ingr = `'${JSON.stringify(p.ingredients).replace(/'/g, "''")}'::jsonb`;
    const price = p.basePrice;
    const img = `'${p.image.replace(/'/g, "''")}'`;
    const avail = p.available ? 'TRUE' : 'FALSE';
    return `  (${id}, ${catId}, ${name}, ${badge}, ${rating}, ${rev}, ${desc}, ${ingr}, ${price}, ${img}, ${avail})`;
  }).join(',\n');

  sql += prodValues + ';\n\n';

  sql += `-- ENABLE ROW LEVEL SECURITY & POLICIES
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;

DO $$ BEGIN
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read categories') THEN
    CREATE POLICY "Allow public read categories" ON public.categories FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read products') THEN
    CREATE POLICY "Allow public read products" ON public.products FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read orders') THEN
    CREATE POLICY "Allow public read orders" ON public.orders FOR SELECT USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow service insert categories') THEN
    CREATE POLICY "Allow service insert categories" ON public.categories FOR ALL USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow service insert products') THEN
    CREATE POLICY "Allow service insert products" ON public.products FOR ALL USING (true);
  END IF;
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow service insert orders') THEN
    CREATE POLICY "Allow service insert orders" ON public.orders FOR ALL USING (true);
  END IF;
END $$;
`;

  fs.writeFileSync(path.join(__dirname, 'supabase_schema.sql'), sql, 'utf8');
  console.log(`Updated supabase_schema.sql with ${categories.length} categories and ${products.length} products!`);
}

async function run() {
  updateLocalFiles();
  await syncToSupabase();
  console.log('DONE!');
}

run();
