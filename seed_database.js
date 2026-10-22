// ═══════════════════════════════════════════════════════════════════════
// SEED DATABASE SCRIPT FOR ALEMAYA GRILL'D
// Populates all 14 categories with delicious, healthy items and
// generates realistic 7-day orders including today's shift orders.
// ═══════════════════════════════════════════════════════════════════════

const fs = require('fs');
const path = require('path');

const DB_PATH = path.join(__dirname, 'database.json');

const categories = [
  { id: "burgers", name: "Burgers", icon: "burger", order: 1 },
  { id: "pizza", name: "Pizza", icon: "pizza", order: 2 },
  { id: "wraps", name: "Wraps", icon: "wrap", order: 3 },
  { id: "sides", name: "Sides", icon: "package", order: 4 },
  { id: "drinks", name: "Drinks", icon: "cup-soda", order: 5 },
  { id: "pasta", name: "Pasta", icon: "soup", order: 6 },
  { id: "sandwiches", name: "Sandwiches", icon: "sandwich", order: 7 },
  { id: "chicken", name: "Chicken", icon: "drumstick", order: 8 },
  { id: "breakfast", name: "Breakfast", icon: "egg-fried", order: 9 },
  { id: "protein", name: "Protein", icon: "dumbbell", order: 10 },
  { id: "superjuice", name: "Smoothies", icon: "glass-water", order: 11 },
  { id: "juice", name: "Juice", icon: "citrus", order: 12 },
  { id: "milkshakes", name: "Shakes", icon: "ice-cream-2", order: 13 },
  { id: "desserts", name: "Desserts", icon: "cake-slice", order: 14 }
];

const products = [
  // ── 1. BURGERS ──
  {
    id: "b001",
    categoryId: "burgers",
    name: "Classic Smash Burger",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 380,
    description: "Double 100% prime beef patties smashed crispy, melted aged cheddar, crisp leaf lettuce, pickles, and house secret sauce on a toasted brioche bun.",
    ingredients: ["2x Prime Beef Patties", "Aged Cheddar", "Dill Pickles", "Crisp Lettuce", "Smash Sauce", "Brioche Bun"],
    basePrice: 180,
    image: "burger_classic.jpg",
    available: true
  },
  {
    id: "b002",
    categoryId: "burgers",
    name: "Crispy Sriracha Chicken Burger",
    badge: "POPULAR",
    rating: 4.8,
    reviewsCount: 295,
    description: "Crispy buttermilk chicken breast fillet with homemade crunchy coleslaw, dill pickles, and zesty sriracha honey glaze.",
    ingredients: ["Crispy Chicken Breast", "Homemade Slaw", "Pickles", "Sriracha Honey Mayo", "Sesame Potato Bun"],
    basePrice: 175,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "b003",
    categoryId: "burgers",
    name: "Alemaya BBQ Bacon Supreme",
    badge: "SIGNATURE",
    rating: 4.9,
    reviewsCount: 420,
    description: "Flame-grilled thick beef patty basted with smoky BBQ glaze, topped with cured beef bacon, caramelized crispy onion strings, and sharp cheddar.",
    ingredients: ["Flame-Grilled Beef", "Smoky BBQ Glaze", "Beef Bacon", "Sharp Cheddar", "Crispy Onions"],
    basePrice: 215,
    image: "burger_classic.jpg",
    available: true
  },
  {
    id: "b004",
    categoryId: "burgers",
    name: "Swiss Truffle Mushroom Burger",
    badge: "GOURMET",
    rating: 4.8,
    reviewsCount: 190,
    description: "Char-grilled beef patty layered with sautéed cremini mushrooms, melted Swiss cheese, caramelized onions, and black truffle garlic aioli.",
    ingredients: ["Prime Beef", "Sautéed Cremini", "Swiss Cheese", "Truffle Garlic Aioli", "Brioche Bun"],
    basePrice: 235,
    image: "burger_classic.jpg",
    available: true
  },
  {
    id: "b005",
    categoryId: "burgers",
    name: "Avocado Garden Veggie Stack",
    badge: "VEGAN",
    rating: 4.7,
    reviewsCount: 165,
    description: "Handcrafted grilled quinoa and black bean patty, sliced fresh avocado, heirloom tomato, baby spinach, and herb chimichurri tahini.",
    ingredients: ["Black Bean & Quinoa Patty", "Fresh Avocado", "Heirloom Tomato", "Baby Spinach", "Herb Chimichurri"],
    basePrice: 165,
    image: "burger_classic.jpg",
    available: true
  },

  // ── 2. PIZZA ──
  {
    id: "pz001",
    categoryId: "pizza",
    name: "Artisanal Margherita Pizza",
    badge: "CLASSIC",
    rating: 4.8,
    reviewsCount: 310,
    description: "Traditional stone-baked crust, San Marzano tomato sauce, fresh creamy mozzarella fior di latte, fragrant sweet basil, and extra virgin olive oil.",
    ingredients: ["San Marzano Tomatoes", "Fresh Mozzarella", "Fresh Sweet Basil", "Extra Virgin Olive Oil"],
    basePrice: 240,
    image: "pizza_margherita.jpg",
    available: true
  },
  {
    id: "pz002",
    categoryId: "pizza",
    name: "Smokey BBQ Grilled Chicken Pizza",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 365,
    description: "Stone-baked crust topped with tender grilled chicken breast, smoky BBQ sauce, red onion slices, cilantro, smoked provolone, and mozzarella.",
    ingredients: ["Grilled Chicken", "Smoky BBQ Sauce", "Red Onions", "Smoked Provolone", "Mozzarella", "Fresh Cilantro"],
    basePrice: 310,
    image: "pizza_margherita.jpg",
    available: true
  },
  {
    id: "pz003",
    categoryId: "pizza",
    name: "Rustic Beef Pepperoni Pizza",
    badge: "POPULAR",
    rating: 4.8,
    reviewsCount: 280,
    description: "Generously loaded with crispy spiced beef pepperoni slices, crushed tomato sugo, oregano, and bubbling mozzarella cheese.",
    ingredients: ["Spiced Beef Pepperoni", "Crushed Tomato Sugo", "Whole Mozzarella", "Oregano", "Chili Flakes"],
    basePrice: 295,
    image: "pizza_margherita.jpg",
    available: true
  },
  {
    id: "pz004",
    categoryId: "pizza",
    name: "Mediterranean Veggie Supreme Pizza",
    badge: "VEGETARIAN",
    rating: 4.7,
    reviewsCount: 195,
    description: "Charred bell peppers, Kalamata black olives, sliced mushrooms, sweet red onion, feta crumbles, and fresh baby arugula.",
    ingredients: ["Bell Peppers", "Kalamata Olives", "Mushrooms", "Feta Cheese", "Baby Arugula", "Mozzarella"],
    basePrice: 260,
    image: "pizza_margherita.jpg",
    available: true
  },

  // ── 3. WRAPS ──
  {
    id: "w001",
    categoryId: "wraps",
    name: "Grilled Chicken Caesar Wrap",
    badge: "BESTSELLER",
    rating: 4.8,
    reviewsCount: 240,
    description: "Warm tortilla stuffed with seasoned grilled chicken breast strips, crisp romaine lettuce, shaved parmesan, croutons, and creamy Caesar dressing.",
    ingredients: ["Grilled Chicken Breast", "Romaine Lettuce", "Shaved Parmesan", "Creamy Caesar Dressing", "Flour Tortilla"],
    basePrice: 165,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "w002",
    categoryId: "wraps",
    name: "Spicy Mexican Beef Fajita Wrap",
    badge: "SPICY",
    rating: 4.8,
    reviewsCount: 215,
    description: "Sautéed sirloin beef strips with charred peppers, caramelized onions, jalapeños, melted cheddar, and zesty chipotle sour cream.",
    ingredients: ["Sirloin Beef Strips", "Charred Peppers", "Jalapeños", "Cheddar", "Chipotle Cream"],
    basePrice: 190,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "w003",
    categoryId: "wraps",
    name: "Crispy Falafel & Tahini Wrap",
    badge: "VEGAN",
    rating: 4.6,
    reviewsCount: 175,
    description: "Fresh herb falafel, tomato cucumber salad, pickled turnips, fresh mint, and creamy garlic tahini sauce wrapped in warm flatbread.",
    ingredients: ["Herb Falafel", "Tomato & Cucumber Salad", "Pickled Turnips", "Garlic Tahini", "Flatbread"],
    basePrice: 145,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "w004",
    categoryId: "wraps",
    name: "Alemaya Signature Steak & Cheese Wrap",
    badge: "CHEF SPECIAL",
    rating: 4.9,
    reviewsCount: 310,
    description: "Tender grilled ribeye slices, melted provolone, grilled mushrooms, and signature black pepper sauce wrapped tightly and toasted on the grill.",
    ingredients: ["Grilled Ribeye", "Melted Provolone", "Grilled Mushrooms", "Black Pepper Aioli", "Flour Tortilla"],
    basePrice: 215,
    image: "chicken_sandwich.jpg",
    available: true
  },

  // ── 4. SIDES ──
  {
    id: "s001",
    categoryId: "sides",
    name: "Golden Crispy French Fries",
    badge: "CLASSIC",
    rating: 4.8,
    reviewsCount: 410,
    description: "Freshly cut double-fried skin-on potatoes seasoned with our signature Alemaya sea salt & rosemary spice blend.",
    ingredients: ["Skin-on Idaho Potatoes", "Rosemary Sea Salt Blend", "House Dip"],
    basePrice: 85,
    image: "burger_classic.jpg",
    available: true
  },
  {
    id: "s002",
    categoryId: "sides",
    name: "Cheesy Loaded Beef Bacon Fries",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 380,
    description: "A mountain of crispy golden fries smothered in melted cheddar cheese sauce, crispy beef bacon bits, fresh scallions, and jalapeño slices.",
    ingredients: ["Crispy Fries", "Warm Cheddar Sauce", "Beef Bacon Bits", "Fresh Scallions", "Jalapeños"],
    basePrice: 135,
    image: "burger_classic.jpg",
    available: true
  },
  {
    id: "s003",
    categoryId: "sides",
    name: "Baked Sweet Potato Wedges",
    badge: "HEALTHY",
    rating: 4.7,
    reviewsCount: 195,
    description: "Oven-roasted sweet potato wedges tossed with smoked paprika, sea salt, and served with cool chipotle lime yogurt dip.",
    ingredients: ["Roasted Sweet Potatoes", "Smoked Paprika", "Chipotle Lime Yogurt"],
    basePrice: 110,
    image: "burger_classic.jpg",
    available: true
  },
  {
    id: "s004",
    categoryId: "sides",
    name: "Beer-Battered Crispy Onion Rings",
    badge: "CRISPY",
    rating: 4.7,
    reviewsCount: 220,
    description: "Thick hand-cut sweet yellow onion rings dipped in craft batter and fried to golden crunchy perfection.",
    ingredients: ["Sweet Yellow Onions", "Craft Batter", "Garlic Herb Dip"],
    basePrice: 95,
    image: "burger_classic.jpg",
    available: true
  },

  // ── 5. DRINKS ──
  {
    id: "d001",
    categoryId: "drinks",
    name: "Fresh Mint & Limeade",
    badge: "REFRESHING",
    rating: 4.9,
    reviewsCount: 290,
    description: "Hand-squeezed fresh lime juice muddled with garden mint leaves, organic raw cane syrup, and crushed ice.",
    ingredients: ["Fresh Pressed Lime", "Garden Mint", "Organic Cane Syrup", "Crushed Ice"],
    basePrice: 65,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "d002",
    categoryId: "drinks",
    name: "Sparkling Mineral Water (500ml)",
    badge: "PURE",
    rating: 4.6,
    reviewsCount: 140,
    description: "Chilled natural effervescent volcanic mineral water served with fresh lemon slices.",
    ingredients: ["Natural Sparkling Water", "Lemon Wedge"],
    basePrice: 40,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "d003",
    categoryId: "drinks",
    name: "Alemaya Hibiscus Iced Tea (Karkadeh)",
    badge: "ORGANIC",
    rating: 4.8,
    reviewsCount: 210,
    description: "Slow-brewed Ethiopian wild hibiscus flowers infused with cinnamon quill, orange peel, and pure blossom honey.",
    ingredients: ["Brewed Wild Hibiscus", "Cinnamon", "Orange Peel", "Blossom Honey"],
    basePrice: 60,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "d004",
    categoryId: "drinks",
    name: "Zero Sugar Cola / Soft Drinks (330ml)",
    badge: "CHILLED",
    rating: 4.5,
    reviewsCount: 180,
    description: "Ice cold can of Zero Sugar Cola or Sprite served with chilled glass and lemon.",
    ingredients: ["Zero Sugar Soda", "Ice", "Lemon"],
    basePrice: 50,
    image: "smoothie_tropical.jpg",
    available: true
  },

  // ── 6. PASTA ──
  {
    id: "pst001",
    categoryId: "pasta",
    name: "Creamy Garlic Carbonara Pasta",
    badge: "SIGNATURE",
    rating: 4.9,
    reviewsCount: 310,
    description: "Al dente fettuccine pasta tossed in rich garlic parmesan cream sauce with crispy beef bacon lardons and freshly cracked black pepper.",
    ingredients: ["Fettuccine Pasta", "Crispy Beef Bacon", "Garlic Cream", "Aged Parmesan", "Cracked Pepper"],
    basePrice: 220,
    image: "pasta_carbonara.jpg",
    available: true
  },
  {
    id: "pst002",
    categoryId: "pasta",
    name: "Spicy Penne All'Arrabbiata",
    badge: "SPICY",
    rating: 4.7,
    reviewsCount: 220,
    description: "Penne rigate simmered in fiery San Marzano tomato sauce infused with chili flakes, garlic, basil, and extra virgin olive oil.",
    ingredients: ["Penne Rigate", "Chili Tomato Sugo", "Garlic", "Fresh Basil", "EVOO"],
    basePrice: 195,
    image: "pasta_carbonara.jpg",
    available: true
  },
  {
    id: "pst003",
    categoryId: "pasta",
    name: "Grilled Chicken Alfredo Fettuccine",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 350,
    description: "Tender sliced herb-marinated grilled chicken breast served over fettuccine in a velvety butter, cream, and Parmigiano-Reggiano sauce.",
    ingredients: ["Grilled Chicken", "Fettuccine", "Alfredo Cream Sauce", "Parmigiano-Reggiano", "Parsley"],
    basePrice: 250,
    image: "pasta_carbonara.jpg",
    available: true
  },

  // ── 7. SANDWICHES ──
  {
    id: "sd001",
    categoryId: "sandwiches",
    name: "Classic Triple-Decker Club Sandwich",
    badge: "CLASSIC",
    rating: 4.8,
    reviewsCount: 275,
    description: "Toasted country sourdough with layers of sliced smoked turkey, beef bacon, fried egg, crisp lettuce, tomato, and dijonnaise.",
    ingredients: ["Smoked Turkey", "Beef Bacon", "Fried Egg", "Lettuce", "Tomato", "Country Sourdough"],
    basePrice: 175,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "sd002",
    categoryId: "sandwiches",
    name: "Alemaya Philly Cheesesteak",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 340,
    description: "Thinly shaved prime ribeye grilled on the flat top with caramelized onions and sweet bell peppers, smothered in melted provolone on a toasted hoagie roll.",
    ingredients: ["Shaved Ribeye", "Caramelized Onions", "Bell Peppers", "Melted Provolone", "Toasted Hoagie"],
    basePrice: 225,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "sd003",
    categoryId: "sandwiches",
    name: "Grilled Pesto & Mozzarella Focaccia",
    badge: "VEGETARIAN",
    rating: 4.7,
    reviewsCount: 190,
    description: "Warm rosemary sea-salt focaccia filled with basil pesto, ripe vine tomatoes, melted fresh mozzarella, and balsamic reduction glaze.",
    ingredients: ["Rosemary Focaccia", "Basil Pesto", "Vine Tomatoes", "Fresh Mozzarella", "Balsamic Glaze"],
    basePrice: 185,
    image: "chicken_sandwich.jpg",
    available: true
  },

  // ── 8. CHICKEN ──
  {
    id: "ch001",
    categoryId: "chicken",
    name: "Crispy Buttermilk Chicken Tenders (5pcs)",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 420,
    description: "100% whole white-meat chicken tenders marinated 24 hours in seasoned buttermilk, double dredged and fried crisp. Served with honey mustard & BBQ sauce.",
    ingredients: ["Whole Chicken Tenderloins", "Buttermilk Dredge", "Honey Mustard", "Smoky BBQ"],
    basePrice: 195,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "ch002",
    categoryId: "chicken",
    name: "Peri-Peri Flame-Grilled Wings (8pcs)",
    badge: "SPICY",
    rating: 4.8,
    reviewsCount: 310,
    description: "Jumbo fresh chicken wings fire-grilled and glazed in our homemade spicy African bird's eye chili Peri-Peri sauce.",
    ingredients: ["Jumbo Chicken Wings", "Peri-Peri Chili Sauce", "Garlic", "Lemon Zest", "Cool Ranch Dip"],
    basePrice: 230,
    image: "chicken_sandwich.jpg",
    available: true
  },
  {
    id: "ch003",
    categoryId: "chicken",
    name: "Herb Lemon Chicken Breast Power Bowl",
    badge: "HEALTHY",
    rating: 4.8,
    reviewsCount: 260,
    description: "Juicy char-grilled lemon oregano chicken breast atop tri-color quinoa, roasted sweet potatoes, avocado slices, steamed broccoli, and tahini drizzle.",
    ingredients: ["Grilled Lemon Chicken", "Tri-Color Quinoa", "Roasted Sweet Potato", "Avocado", "Broccoli", "Tahini"],
    basePrice: 225,
    image: "burrito_bowl.jpg",
    available: true
  },
  {
    id: "ch004",
    categoryId: "chicken",
    name: "Alemaya Flame-Roasted Half Chicken",
    badge: "CHEF SPECIAL",
    rating: 4.9,
    reviewsCount: 290,
    description: "Slow flame-roasted half chicken with spiced butter rub, crispy golden skin, served with garlic herb roast potatoes and side salad.",
    ingredients: ["Half Roasted Chicken", "Spiced Butter Herb Rub", "Roast Potatoes", "Garden Salad"],
    basePrice: 290,
    image: "chicken_sandwich.jpg",
    available: true
  },

  // ── 9. BREAKFAST ──
  {
    id: "bf001",
    categoryId: "breakfast",
    name: "Sunrise Egg, Cheese & Beef Bacon Brioche",
    badge: "POPULAR",
    rating: 4.8,
    reviewsCount: 270,
    description: "Fluffy scrambled farm eggs, melted cheddar cheese, crispy cured beef bacon, and chive garlic aioli on a toasted warm brioche bun.",
    ingredients: ["Farm Fresh Eggs", "Melted Cheddar", "Beef Bacon", "Chive Aioli", "Brioche Bun"],
    basePrice: 140,
    image: "burger_classic.jpg",
    available: true
  },
  {
    id: "bf002",
    categoryId: "breakfast",
    name: "Avocado & Poached Eggs Sourdough Toast",
    badge: "HEALTHY",
    rating: 4.9,
    reviewsCount: 330,
    description: "Toasted artisan sourdough topped with chunky smashed avocado, two soft poached farm eggs, feta crumbles, chili flakes, and chia seeds.",
    ingredients: ["Artisan Sourdough", "Fresh Avocado", "2x Poached Eggs", "Feta Cheese", "Chili Flakes"],
    basePrice: 175,
    image: "burrito_bowl.jpg",
    available: true
  },
  {
    id: "bf003",
    categoryId: "breakfast",
    name: "Cast-Iron Traditional Shakshuka",
    badge: "SIGNATURE",
    rating: 4.8,
    reviewsCount: 245,
    description: "Three farm eggs gently poached in a rich spiced tomato, bell pepper, and cumin sauce, garnished with fresh cilantro and served with warm pita bread.",
    ingredients: ["3x Farm Eggs", "Spiced Tomato Pepper Sauce", "Cumin", "Cilantro", "Warm Pita Bread"],
    basePrice: 165,
    image: "burrito_bowl.jpg",
    available: true
  },
  {
    id: "bf004",
    categoryId: "breakfast",
    name: "Fluffy Golden Buttermilk Pancake Stack",
    badge: "SWEET",
    rating: 4.7,
    reviewsCount: 290,
    description: "Stack of three fluffy golden buttermilk pancakes topped with whipped butter, organic maple syrup, and fresh seasonal berries.",
    ingredients: ["Buttermilk Pancakes", "Whipped Butter", "Pure Maple Syrup", "Fresh Strawberries & Berries"],
    basePrice: 150,
    image: "milkshake_chocolate.jpg",
    available: true
  },

  // ── 10. PROTEIN ──
  {
    id: "pr001",
    categoryId: "protein",
    name: "Beast Mode Whey Protein Shake (36g Protein)",
    badge: "FITNESS",
    rating: 4.9,
    reviewsCount: 340,
    description: "Premium whey isolate (36g protein), peanut butter, frozen banana, raw cocoa, chia seeds, and almond milk blended smooth.",
    ingredients: ["Whey Isolate 36g", "All-Natural Peanut Butter", "Banana", "Raw Cocoa", "Almond Milk"],
    basePrice: 185,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "pr002",
    categoryId: "protein",
    name: "Grilled Chicken & Quinoa Muscle Bowl",
    badge: "HIGH PROTEIN",
    rating: 4.9,
    reviewsCount: 380,
    description: "250g grilled herb chicken breast, 2 boiled eggs, steamed brown rice & quinoa, edamame beans, and roasted sweet potatoes. (54g Protein).",
    ingredients: ["250g Grilled Chicken", "2 Boiled Eggs", "Quinoa & Brown Rice", "Edamame", "Sweet Potato"],
    basePrice: 240,
    image: "burrito_bowl.jpg",
    available: true
  },
  {
    id: "pr003",
    categoryId: "protein",
    name: "Greek Yogurt Peanut Butter Crunch Cup",
    badge: "CLEAN",
    rating: 4.7,
    reviewsCount: 195,
    description: "Rich strained Greek yogurt layered with natural peanut butter, organic toasted granola, honey drizzle, and pumpkin seeds.",
    ingredients: ["Strained Greek Yogurt", "Natural Peanut Butter", "Rolled Granola", "Blossom Honey", "Pumpkin Seeds"],
    basePrice: 130,
    image: "smoothie_tropical.jpg",
    available: true
  },

  // ── 11. SMOOTHIES (SUPERJUICE) ──
  {
    id: "sj001",
    categoryId: "superjuice",
    name: "Tropical Mango & Passionfruit Breeze",
    badge: "BESTSELLER",
    rating: 4.9,
    reviewsCount: 390,
    description: "Ripe Alemaya sweet mango chunks, passionfruit pulp, pineapple juice, and Greek yogurt blended ice cold.",
    ingredients: ["Sweet Mango Chunks", "Passionfruit Pulp", "Pineapple Juice", "Greek Yogurt", "Crushed Ice"],
    basePrice: 135,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "sj002",
    categoryId: "superjuice",
    name: "Green Power Immune Detox Smoothie",
    badge: "DETOX",
    rating: 4.8,
    reviewsCount: 220,
    description: "Organic baby spinach, green apple, crisp cucumber, fresh mint, ginger root, and coconut water. 100% natural cleanse.",
    ingredients: ["Baby Spinach", "Green Apple", "Cucumber", "Fresh Ginger", "Coconut Water"],
    basePrice: 145,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "sj003",
    categoryId: "superjuice",
    name: "Wild Berry Acai Antioxidant Smoothie",
    badge: "SUPERFOOD",
    rating: 4.9,
    reviewsCount: 285,
    description: "Organic Amazonian acai puree blended with wild blueberries, ripe strawberries, banana, and chilled almond milk.",
    ingredients: ["Organic Acai", "Blueberries", "Strawberries", "Banana", "Almond Milk"],
    basePrice: 155,
    image: "smoothie_tropical.jpg",
    available: true
  },

  // ── 12. JUICE ──
  {
    id: "j001",
    categoryId: "juice",
    name: "100% Cold-Pressed Alemaya Orange Juice",
    badge: "FRESH",
    rating: 4.9,
    reviewsCount: 350,
    description: "Pure fresh-squeezed sweet oranges. Cold-pressed with zero added water, sugar, or preservatives. 100% raw sunshine.",
    ingredients: ["100% Pure Cold-Pressed Sweet Oranges"],
    basePrice: 90,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "j002",
    categoryId: "juice",
    name: "Hydrating Watermelon & Lime Juice",
    badge: "HYDRATING",
    rating: 4.8,
    reviewsCount: 240,
    description: "Crisp cold sweet watermelon juice pressed with a splash of fresh lime and mint. Incredibly light and refreshing.",
    ingredients: ["Sweet Red Watermelon", "Fresh Lime", "Garden Mint"],
    basePrice: 95,
    image: "smoothie_tropical.jpg",
    available: true
  },
  {
    id: "j003",
    categoryId: "juice",
    name: "Golden Carrot, Apple & Ginger Zest",
    badge: "VITAMIN C",
    rating: 4.7,
    reviewsCount: 195,
    description: "Fresh farm carrots, crisp sweet gala apples, and fiery ginger root for a vibrant immune-boosting natural kick.",
    ingredients: ["Fresh Carrots", "Gala Apples", "Ginger Root", "Lemon Juice"],
    basePrice: 100,
    image: "smoothie_tropical.jpg",
    available: true
  },

  // ── 13. MILKSHAKES ──
  {
    id: "m001",
    categoryId: "milkshakes",
    name: "Belgian Dark Chocolate Thickshake",
    badge: "INDULGENT",
    rating: 4.9,
    reviewsCount: 420,
    description: "Handcrafted dark chocolate gelato spun with whole creamy milk, topped with chocolate fudge drizzle and chocolate shavings.",
    ingredients: ["Artisan Chocolate Gelato", "Whole Milk", "Dark Chocolate Fudge", "Whipped Cream"],
    basePrice: 120,
    image: "milkshake_chocolate.jpg",
    available: true
  },
  {
    id: "m002",
    categoryId: "milkshakes",
    name: "Salted Caramel Pretzel Shake",
    badge: "POPULAR",
    rating: 4.8,
    reviewsCount: 310,
    description: "Rich vanilla bean ice cream spun with golden caramel sauce, topped with crushed salted pretzel bits and whipped cream.",
    ingredients: ["Vanilla Bean Ice Cream", "Golden Salted Caramel", "Salted Pretzels", "Whipped Cream"],
    basePrice: 125,
    image: "milkshake_chocolate.jpg",
    available: true
  },
  {
    id: "m003",
    categoryId: "milkshakes",
    name: "Real Strawberry Shortcake Thickshake",
    badge: "CREAMY",
    rating: 4.8,
    reviewsCount: 280,
    description: "Fresh farm strawberries macerated and blended with rich sweet cream ice cream and buttery biscuit crumble.",
    ingredients: ["Fresh Strawberries", "Sweet Cream Ice Cream", "Butter Biscuit Crumble", "Whipped Cream"],
    basePrice: 120,
    image: "milkshake_chocolate.jpg",
    available: true
  },

  // ── 14. DESSERTS ──
  {
    id: "ds001",
    categoryId: "desserts",
    name: "Warm Molten Lava Chocolate Cake",
    badge: "DECADENT",
    rating: 4.9,
    reviewsCount: 360,
    description: "Freshly baked dark chocolate sponge cake with an oozing warm chocolate ganache center. Served with a scoop of Madagascar vanilla ice cream.",
    ingredients: ["70% Dark Chocolate Ganache", "Butter Sponge", "Madagascar Vanilla Ice Cream"],
    basePrice: 155,
    image: "milkshake_chocolate.jpg",
    available: true
  },
  {
    id: "ds002",
    categoryId: "desserts",
    name: "New York Vanilla Bean Cheesecake",
    badge: "RICH",
    rating: 4.8,
    reviewsCount: 290,
    description: "Velvety smooth baked cream cheese filling on a crisp buttery graham cracker crust, topped with fresh raspberry compote.",
    ingredients: ["Philadelphia Cream Cheese", "Graham Cracker Crust", "Fresh Raspberry Compote"],
    basePrice: 160,
    image: "milkshake_chocolate.jpg",
    available: true
  },
  {
    id: "ds003",
    categoryId: "desserts",
    name: "Golden Cinnamon Churros (4pcs)",
    badge: "CRUNCHY",
    rating: 4.8,
    reviewsCount: 240,
    description: "Crispy fried Spanish churros dusted in fragrant cinnamon sugar, served with warm dulce de leche and chocolate dipping cups.",
    ingredients: ["Crispy Churros", "Cinnamon Sugar", "Dulce de Leche", "Warm Dark Chocolate Dip"],
    basePrice: 125,
    image: "milkshake_chocolate.jpg",
    available: true
  }
];

// ═══════════════════════════════════════════════════════════════════════
// REALISTIC 7-DAY ORDERS (Including Today's Shift Active Tickets)
// ═══════════════════════════════════════════════════════════════════════
const now = new Date();
const todayStr = now.toISOString().split('T')[0];

function makeDate(daysAgo, hours, minutes) {
  const d = new Date(now.getTime() - daysAgo * 86400000);
  d.setHours(hours, minutes, 0, 0);
  return {
    date: d.toISOString().split('T')[0],
    timestamp: `${String(hours).padStart(2, '0')}:${String(minutes).padStart(2, '0')}`,
    createdAt: d.getTime()
  };
}

const orders = [
  // ── TODAY'S SHIFT (ACTIVE IN KITCHEN) ──
  {
    id: "AG-4022",
    ...makeDate(0, 10, 15),
    orderType: "Dine-in",
    items: [
      { productId: "b001", name: "Classic Smash Burger", qty: 2, total: 360, note: "Extra smash sauce please" },
      { productId: "s002", name: "Cheesy Loaded Beef Bacon Fries", qty: 1, total: 135 },
      { productId: "d001", name: "Fresh Mint & Limeade", qty: 2, total: 130 }
    ],
    subtotal: 625,
    service: 63,
    total: 688,
    status: "received",
    statusLabel: "Order Received"
  },
  {
    id: "AG-4021",
    ...makeDate(0, 10, 8),
    orderType: "Takeaway",
    items: [
      { productId: "pz002", name: "Smokey BBQ Grilled Chicken Pizza", qty: 1, total: 310, note: "Crispy thin crust" },
      { productId: "ch002", name: "Peri-Peri Flame-Grilled Wings (8pcs)", qty: 1, total: 230, note: "Extra spicy peri-peri" },
      { productId: "m001", name: "Belgian Dark Chocolate Thickshake", qty: 1, total: 120 }
    ],
    subtotal: 660,
    service: 66,
    total: 726,
    status: "received",
    statusLabel: "Order Received"
  },
  {
    id: "AG-4019",
    ...makeDate(0, 9, 52),
    orderType: "Dine-in",
    items: [
      { productId: "b003", name: "Alemaya BBQ Bacon Supreme", qty: 1, total: 215, note: "Well done" },
      { productId: "s001", name: "Golden Crispy French Fries", qty: 1, total: 85 },
      { productId: "sj001", name: "Tropical Mango & Passionfruit Breeze", qty: 1, total: 135 }
    ],
    subtotal: 435,
    service: 44,
    total: 479,
    status: "cooking",
    statusLabel: "Grilling & Cooking"
  },
  {
    id: "AG-4017",
    ...makeDate(0, 9, 45),
    orderType: "Delivery",
    items: [
      { productId: "ch001", name: "Crispy Buttermilk Chicken Tenders (5pcs)", qty: 2, total: 390 },
      { productId: "pst003", name: "Grilled Chicken Alfredo Fettuccine", qty: 1, total: 250 },
      { productId: "d003", name: "Alemaya Hibiscus Iced Tea", qty: 2, total: 120 }
    ],
    subtotal: 760,
    service: 76,
    total: 836,
    status: "cooking",
    statusLabel: "Grilling & Cooking"
  },
  {
    id: "AG-4015",
    ...makeDate(0, 9, 30),
    orderType: "Takeaway",
    items: [
      { productId: "pz001", name: "Artisanal Margherita Pizza", qty: 1, total: 240, note: "Extra basil" },
      { productId: "s001", name: "Golden Crispy French Fries", qty: 1, total: 85 }
    ],
    subtotal: 325,
    service: 33,
    total: 358,
    status: "ready",
    statusLabel: "Ready for Pickup"
  },
  {
    id: "AG-4014",
    ...makeDate(0, 9, 20),
    orderType: "Dine-in",
    items: [
      { productId: "bf002", name: "Avocado & Poached Eggs Sourdough Toast", qty: 2, total: 350 },
      { productId: "j001", name: "100% Cold-Pressed Alemaya Orange Juice", qty: 2, total: 180 }
    ],
    subtotal: 530,
    service: 53,
    total: 583,
    status: "ready",
    statusLabel: "Ready for Pickup"
  },

  // ── TODAY'S COMPLETED ORDERS ──
  {
    id: "AG-4010",
    ...makeDate(0, 8, 55),
    orderType: "Dine-in",
    items: [
      { productId: "bf001", name: "Sunrise Egg, Cheese & Beef Bacon Brioche", qty: 2, total: 280 },
      { productId: "d001", name: "Fresh Mint & Limeade", qty: 2, total: 130 }
    ],
    subtotal: 410,
    service: 41,
    total: 451,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "AG-4008",
    ...makeDate(0, 8, 30),
    orderType: "Takeaway",
    items: [
      { productId: "pr001", name: "Beast Mode Whey Protein Shake", qty: 1, total: 185 },
      { productId: "pr003", name: "Greek Yogurt Peanut Butter Crunch Cup", qty: 1, total: 130 }
    ],
    subtotal: 315,
    service: 32,
    total: 347,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "AG-4005",
    ...makeDate(0, 8, 10),
    orderType: "Delivery",
    items: [
      { productId: "b001", name: "Classic Smash Burger", qty: 1, total: 180 },
      { productId: "b002", name: "Crispy Sriracha Chicken Burger", qty: 1, total: 175 },
      { productId: "s001", name: "Golden Crispy French Fries", qty: 2, total: 170 },
      { productId: "d004", name: "Zero Sugar Cola", qty: 2, total: 100 }
    ],
    subtotal: 625,
    service: 63,
    total: 688,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "AG-4002",
    ...makeDate(0, 7, 45),
    orderType: "Dine-in",
    items: [
      { productId: "bf003", name: "Cast-Iron Traditional Shakshuka", qty: 2, total: 330 },
      { productId: "j001", name: "100% Cold-Pressed Alemaya Orange Juice", qty: 2, total: 180 }
    ],
    subtotal: 510,
    service: 51,
    total: 561,
    status: "completed",
    statusLabel: "Completed"
  },

  // ── YESTERDAY (DAY 1) ──
  {
    id: "AG-3950",
    ...makeDate(1, 20, 15),
    orderType: "Dine-in",
    items: [
      { productId: "pz003", name: "Rustic Beef Pepperoni Pizza", qty: 1, total: 295 },
      { productId: "m002", name: "Salted Caramel Pretzel Shake", qty: 2, total: 250 }
    ],
    subtotal: 545,
    service: 55,
    total: 600,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "AG-3942",
    ...makeDate(1, 19, 55),
    orderType: "Dine-in",
    items: [
      { productId: "b001", name: "Classic Smash Burger", qty: 2, total: 360 },
      { productId: "m001", name: "Belgian Dark Chocolate Thickshake", qty: 2, total: 240 }
    ],
    subtotal: 600,
    service: 60,
    total: 660,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "AG-3930",
    ...makeDate(1, 19, 10),
    orderType: "Takeaway",
    items: [
      { productId: "b003", name: "Alemaya BBQ Bacon Supreme", qty: 2, total: 430 },
      { productId: "s002", name: "Cheesy Loaded Beef Bacon Fries", qty: 1, total: 135 }
    ],
    subtotal: 565,
    service: 57,
    total: 622,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "AG-3915",
    ...makeDate(1, 18, 20),
    orderType: "Delivery",
    items: [
      { productId: "ch004", name: "Alemaya Flame-Roasted Half Chicken", qty: 1, total: 290 },
      { productId: "pst001", name: "Creamy Garlic Carbonara Pasta", qty: 1, total: 220 }
    ],
    subtotal: 510,
    service: 51,
    total: 561,
    status: "completed",
    statusLabel: "Completed"
  },

  // ── 2 DAYS AGO (DAY 2) ──
  {
    id: "AG-3880",
    ...makeDate(2, 20, 0),
    orderType: "Dine-in",
    items: [
      { productId: "pz002", name: "Smokey BBQ Grilled Chicken Pizza", qty: 2, total: 620 },
      { productId: "d001", name: "Fresh Mint & Limeade", qty: 3, total: 195 }
    ],
    subtotal: 815,
    service: 82,
    total: 897,
    status: "completed",
    statusLabel: "Completed"
  },
  {
    id: "AG-3860",
    ...makeDate(2, 19, 15),
    orderType: "Takeaway",
    items: [
      { productId: "b004", name: "Swiss Truffle Mushroom Burger", qty: 2, total: 470 },
      { productId: "s003", name: "Baked Sweet Potato Wedges", qty: 1, total: 110 }
    ],
    subtotal: 580,
    service: 58,
    total: 638,
    status: "completed",
    statusLabel: "Completed"
  },

  // ── 3 DAYS AGO (DAY 3) ──
  {
    id: "AG-3810",
    ...makeDate(3, 19, 45),
    orderType: "Dine-in",
    items: [
      { productId: "ch001", name: "Crispy Buttermilk Chicken Tenders (5pcs)", qty: 2, total: 390 },
      { productId: "w001", name: "Grilled Chicken Caesar Wrap", qty: 1, total: 165 },
      { productId: "m003", name: "Real Strawberry Shortcake Thickshake", qty: 2, total: 240 }
    ],
    subtotal: 795,
    service: 80,
    total: 875,
    status: "completed",
    statusLabel: "Completed"
  },

  // ── 4 DAYS AGO (DAY 4) ──
  {
    id: "AG-3750",
    ...makeDate(4, 18, 50),
    orderType: "Delivery",
    items: [
      { productId: "b001", name: "Classic Smash Burger", qty: 3, total: 540 },
      { productId: "s001", name: "Golden Crispy French Fries", qty: 3, total: 255 },
      { productId: "d004", name: "Zero Sugar Cola", qty: 3, total: 150 }
    ],
    subtotal: 945,
    service: 95,
    total: 1040,
    status: "completed",
    statusLabel: "Completed"
  },

  // ── 5 DAYS AGO (DAY 5) ──
  {
    id: "AG-3690",
    ...makeDate(5, 19, 30),
    orderType: "Dine-in",
    items: [
      { productId: "pst003", name: "Grilled Chicken Alfredo Fettuccine", qty: 2, total: 500 },
      { productId: "ds001", name: "Warm Molten Lava Chocolate Cake", qty: 2, total: 310 }
    ],
    subtotal: 810,
    service: 81,
    total: 891,
    status: "completed",
    statusLabel: "Completed"
  },

  // ── 6 DAYS AGO (DAY 6) ──
  {
    id: "AG-3620",
    ...makeDate(6, 20, 10),
    orderType: "Dine-in",
    items: [
      { productId: "pz001", name: "Artisanal Margherita Pizza", qty: 2, total: 480 },
      { productId: "ch002", name: "Peri-Peri Flame-Grilled Wings (8pcs)", qty: 1, total: 230 },
      { productId: "d003", name: "Alemaya Hibiscus Iced Tea", qty: 2, total: 120 }
    ],
    subtotal: 830,
    service: 83,
    total: 913,
    status: "completed",
    statusLabel: "Completed"
  }
];

const database = {
  categories,
  products,
  orders
};

fs.writeFileSync(DB_PATH, JSON.stringify(database, null, 2), 'utf-8');

const menuDataPath = path.join(__dirname, 'menu-data.js');
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
fs.writeFileSync(menuDataPath, menuDataContent, 'utf-8');

console.log('✅ Successfully seeded database.json and synced menu-data.js!');
console.log('Categories count:', categories.length);
console.log('Products count:', products.length);
console.log('Orders count:', orders.length);
console.log('Products per category breakdown:');
categories.forEach(c => {
  const count = products.filter(p => p.categoryId === c.id).length;
  console.log(` - ${c.name} (${c.id}): ${count} items`);
});
