// ═══════════════════════════════════════════════════════════════════════
// ALEMAYA GRILL'D - CORE APPLICATION JAVASCRIPT
// Professional Tabler Icons, Reverted Top Navbar, Single Unified Vertical List
// ═══════════════════════════════════════════════════════════════════════

// ══ CONFIGURATION ══
const CFG = {
  restaurantName: "Alemaya Grill'd",
  currencySymbol: 'Br',
  serviceCharge: 0.10,
  estimatedTime: '15-25 min'
};

// ══ PROFESSIONAL LUCIDE REACT CATEGORY ICONS (BLACK STROKE) ══
const CATEGORIES = [
  {
    id: 'burgers',
    name: 'Burgers',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a8 8 0 0 1 16 0H4z"/><path d="M4 15h16"/><path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1H5v1z"/><path d="M7 13c1 0 1.5.8 2.5.8s1.5-.8 2.5-.8 1.5.8 2.5.8 1.5-.8 2.5-.8"/></svg>`
  },
  {
    id: 'pizza',
    name: 'Pizza',
    icon: 'pizza',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pizza"><path d="m12 2-8.5 18a2 2 0 0 0 2.2 2.7 26.3 26.3 0 0 0 12.6 0 2 2 0 0 0 2.2-2.7L12 2Z"/><path d="M10 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><circle cx="14" cy="9" r="1" fill="#000000"/></svg>`
  },
  {
    id: 'wraps',
    name: 'Wraps',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 5-8.5 8.5a4.2 4.2 0 0 1-6-6L13 3l6 2z"/><path d="m5 13 6 6a4.2 4.2 0 0 0 6-6l-2-2"/><path d="m9 9 4 4"/><path d="m12 6 4 4"/></svg>`
  },
  {
    id: 'sides',
    name: 'Sides',
    icon: 'package',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m21 8-2 12H5L3 8"/><path d="M10 12v5"/><path d="M14 12v5"/><path d="M7 4h10l4 4H3l4-4Z"/></svg>`
  },
  {
    id: 'drinks',
    name: 'Drinks',
    icon: 'cup-soda',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cup-soda"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.5a2 2 0 0 0 2-1.72L18 8"/><path d="M5 8h14"/><path d="m7 15 10-4"/><path d="m12 2 1 6"/></svg>`
  },
  {
    id: 'pasta',
    name: 'Pasta',
    icon: 'soup',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-soup"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M7 3v3"/><path d="M12 3v3"/><path d="M17 3v3"/></svg>`
  },
  {
    id: 'sandwiches',
    name: 'Sandwiches',
    icon: 'sandwich',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sandwich"><path d="m2.37 11.22 7.84-8.08a2.5 2.5 0 0 1 3.56 0l7.86 8.08a1.5 1.5 0 0 1-1.07 2.54H3.44a1.5 1.5 0 0 1-1.07-2.54Z"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M3 14h18"/><path d="M12 14v6"/></svg>`
  },
  {
    id: 'chicken',
    name: 'Chicken',
    icon: 'drumstick',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick"><path d="m14 10 2.5-2.5a3.54 3.54 0 0 1 5 5L19 15"/><path d="M10 14A5.5 5.5 0 0 1 2 6.5C2 3.5 4.5 1 7.5 1A5.5 5.5 0 0 1 15 8.5"/><path d="m14 10-4 4"/><circle cx="19" cy="19" r="2"/><circle cx="21" cy="15" r="2"/></svg>`
  },
  {
    id: 'breakfast',
    name: 'Breakfast',
    icon: 'egg-fried',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-egg-fried"><circle cx="11.5" cy="12.5" r="3.5"/><path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 6 3 8.5 3 3.5 0 4 2 4 6 0 4-2 8-6 8-2.5 0-3 2-6.5 2-4.5 0-6.5-3.5-6.5-7 0-2 0-4 0-6Z"/></svg>`
  },
  {
    id: 'protein',
    name: 'Protein',
    icon: 'dumbbell',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>`
  },
  {
    id: 'superjuice',
    name: 'Smoothies',
    icon: 'glass-water',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glass-water"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>`
  },
  {
    id: 'juice',
    name: 'Juice',
    icon: 'citrus',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-citrus"><path d="M21.66 10.44a10 10 0 1 0-8.1 11.22 10.05 10.05 0 0 0 8.1-11.22Z"/><path d="M12 12 8.5 7.5"/><path d="M12 12v6"/><path d="m12 12 5.5-2.5"/></svg>`
  },
  {
    id: 'milkshakes',
    name: 'Shakes',
    icon: 'ice-cream-2',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ice-cream-2"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm0 0v5"/><path d="M4 11a8 8 0 1 1 16 0"/></svg>`
  },
  {
    id: 'desserts',
    name: 'Desserts',
    icon: 'cake-slice',
    svg: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-slice"><circle cx="9" cy="7" r="2"/><path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"/><path d="M16 13H3"/><path d="M16 17H3"/></svg>`
  }
];

// ══ CATEGORY IMAGES (FOR HEADER BANNER) ══
const CAT_IMAGES = {
  burgers: 'burger_classic.jpg',
  pizza: 'pizza_margherita.jpg',
  wraps: 'chicken_sandwich.jpg',
  sides: 'burger_classic.jpg',
  drinks: 'smoothie_tropical.jpg',
  pasta: 'pasta_carbonara.jpg',
  sandwiches: 'chicken_sandwich.jpg',
  chicken: 'chicken_sandwich.jpg',
  breakfast: 'smoothie_tropical.jpg',
  protein: 'milkshake_chocolate.jpg',
  superjuice: 'smoothie_tropical.jpg',
  juice: 'smoothie_tropical.jpg',
  milkshakes: 'milkshake_chocolate.jpg',
  desserts: 'milkshake_chocolate.jpg'
};

// ══ ALL MENU PRODUCTS ══
const PRODUCTS = [
  // BURGERS
  {
    id: 'b001',
    categoryId: 'burgers',
    name: 'Classic Smash',
    badge: 'BESTSELLER',
    rating: 4.8,
    reviewsCount: 342,
    description: 'Fresh smashed double beef patty with melted cheddar, crisp lettuce, pickles, and our house smash sauce on a toasted potato bun.',
    ingredients: ['2x Beef patty', 'Cheddar cheese', 'Pickles', 'Lettuce', 'Smash sauce', 'Potato bun'],
    basePrice: 180,
    image: 'burger_classic.jpg',
    available: true,
    customizations: [
      {
        id: 'cooking',
        name: 'Cooked your way',
        required: true,
        multiSelect: false,
        options: [
          { id: 'medium', label: 'Medium', priceAdd: 0, default: true },
          { id: 'medwell', label: 'Medium well', priceAdd: 0 },
          { id: 'well', label: 'Well done', priceAdd: 0 }
        ]
      },
      {
        id: 'bun',
        name: 'Choose bun',
        required: true,
        multiSelect: false,
        options: [
          { id: 'potato', label: 'Potato bun', priceAdd: 0, default: true },
          { id: 'brioche', label: 'Brioche bun', priceAdd: 10 },
          { id: 'wholegrain', label: 'Wholegrain', priceAdd: 15 }
        ]
      },
      {
        id: 'extras',
        name: 'Extra toppings',
        required: false,
        multiSelect: true,
        options: [
          { id: 'extracheddar', label: 'Extra cheddar', priceAdd: 25 },
          { id: 'avocado', label: 'Fresh avocado', priceAdd: 40 },
          { id: 'egg', label: 'Fried sunny egg', priceAdd: 20 },
          { id: 'bacon', label: 'Crispy beef bacon', priceAdd: 35 }
        ]
      }
    ]
  },
  {
    id: 'b002',
    categoryId: 'burgers',
    name: 'Crispy Chicken',
    badge: 'POPULAR',
    rating: 4.7,
    reviewsCount: 281,
    description: 'Golden crispy fried chicken breast fillet with homemade coleslaw, pickles, and zesty sriracha honey mayo.',
    ingredients: ['Chicken breast', 'Coleslaw', 'Pickles', 'Sriracha mayo', 'Sesame bun'],
    basePrice: 175,
    image: 'chicken_sandwich.jpg',
    available: true,
    customizations: [
      {
        id: 'heat',
        name: 'Spice level',
        required: true,
        multiSelect: false,
        options: [
          { id: 'mild', label: 'Mild & Sweet', priceAdd: 0, default: true },
          { id: 'spicy', label: 'Fire Grilled Spicy', priceAdd: 0 }
        ]
      },
      {
        id: 'extras',
        name: 'Add extras',
        required: false,
        multiSelect: true,
        options: [
          { id: 'extracheddar', label: 'Melted cheddar', priceAdd: 25 },
          { id: 'avocado', label: 'Avocado slices', priceAdd: 40 }
        ]
      }
    ]
  },
  {
    id: 'b003',
    categoryId: 'burgers',
    name: 'Veggie Stack Burger',
    badge: 'VEGETARIAN',
    rating: 4.6,
    reviewsCount: 194,
    description: 'Grilled vegetable patty, fresh lettuce, tomato, red onion, portobello mushroom, and our house roasted herb sauce.',
    ingredients: ['Veggie patty', 'Portobello', 'Lettuce', 'Tomato', 'Red onion', 'Herb mayo'],
    basePrice: 160,
    image: 'burger_classic.jpg',
    available: true,
    customizations: [
      {
        id: 'bun',
        name: 'Bun selection',
        required: true,
        multiSelect: false,
        options: [
          { id: 'wholegrain', label: 'Wholegrain bun', priceAdd: 0, default: true },
          { id: 'brioche', label: 'Brioche bun', priceAdd: 10 }
        ]
      },
      {
        id: 'extras',
        name: 'Extras',
        required: false,
        multiSelect: true,
        options: [
          { id: 'vegancheese', label: 'Plant-based cheese', priceAdd: 30 },
          { id: 'avocado', label: 'Avocado', priceAdd: 35 }
        ]
      }
    ]
  },
  {
    id: 'b004',
    categoryId: 'burgers',
    name: 'Alemaya BBQ Bacon',
    badge: 'SIGNATURE',
    rating: 4.9,
    reviewsCount: 410,
    description: 'Char-grilled prime beef patty topped with smoky BBQ glaze, crisp beef bacon, caramelized onion rings, and aged cheddar.',
    ingredients: ['Beef patty', 'BBQ glaze', 'Beef bacon', 'Cheddar', 'Crispy onions'],
    basePrice: 210,
    image: 'burger_classic.jpg',
    available: true,
    customizations: [
      {
        id: 'cooking',
        name: 'Doneness',
        required: true,
        multiSelect: false,
        options: [
          { id: 'medium', label: 'Medium', priceAdd: 0, default: true },
          { id: 'well', label: 'Well done', priceAdd: 0 }
        ]
      }
    ]
  },

  // PIZZA
  {
    id: 'p001',
    categoryId: 'pizza',
    name: 'Margherita Pizza',
    badge: 'VEGETARIAN',
    rating: 4.7,
    reviewsCount: 220,
    description: 'Stone-baked thin crust with rich San Marzano tomato sauce, fresh creamy mozzarella, and fragrant fresh garden basil.',
    ingredients: ['Tomato sauce', 'Fior di latte mozzarella', 'Fresh basil', 'Virgin olive oil'],
    basePrice: 220,
    image: 'pizza_margherita.jpg',
    available: true,
    customizations: [
      {
        id: 'size',
        name: 'Size',
        required: true,
        multiSelect: false,
        options: [
          { id: 'small', label: 'Regular 10"', priceAdd: 0, default: true },
          { id: 'large', label: 'Large 14"', priceAdd: 80 }
        ]
      },
      {
        id: 'crust',
        name: 'Crust style',
        required: true,
        multiSelect: false,
        options: [
          { id: 'thin', label: 'Crispy Thin Crust', priceAdd: 0, default: true },
          { id: 'stuffed', label: 'Cheese Stuffed Crust', priceAdd: 40 }
        ]
      }
    ]
  },
  {
    id: 'p002',
    categoryId: 'pizza',
    name: 'Chicken BBQ Pizza',
    badge: 'POPULAR',
    rating: 4.8,
    reviewsCount: 185,
    description: 'Grilled sliced chicken fillet, red onions, smoked BBQ sauce, mozzarella, and chopped fresh cilantro.',
    ingredients: ['Grilled chicken', 'Red onion', 'Mozzarella', 'BBQ sauce', 'Cilantro'],
    basePrice: 260,
    image: 'pizza_margherita.jpg',
    available: true,
    customizations: [
      {
        id: 'size',
        name: 'Size',
        required: true,
        multiSelect: false,
        options: [
          { id: 'small', label: 'Regular 10"', priceAdd: 0, default: true },
          { id: 'large', label: 'Large 14"', priceAdd: 80 }
        ]
      }
    ]
  },

  // WRAPS
  {
    id: 'w001',
    categoryId: 'wraps',
    name: 'Grilled Chicken Wrap',
    badge: 'FRESH',
    rating: 4.7,
    reviewsCount: 165,
    description: 'Tender grilled chicken strips rolled in a warm tortilla with romaine lettuce, diced ripe tomatoes, cucumber, and garlic yogurt sauce.',
    ingredients: ['Tortilla', 'Grilled chicken', 'Garlic sauce', 'Lettuce', 'Tomato'],
    basePrice: 155,
    image: 'chicken_sandwich.jpg',
    available: true,
    customizations: [
      {
        id: 'sauce',
        name: 'Sauce',
        required: true,
        multiSelect: false,
        options: [
          { id: 'garlic', label: 'Garlic Yogurt Sauce', priceAdd: 0, default: true },
          { id: 'spicy', label: 'Spicy Tahini', priceAdd: 0 }
        ]
      }
    ]
  },
  {
    id: 'w002',
    categoryId: 'wraps',
    name: 'Beef Shawarma Wrap',
    badge: 'MUST TRY',
    rating: 4.8,
    reviewsCount: 230,
    description: 'Slow-grilled spiced beef shavings with pickled turnips, fresh parsley, sumac onions, and rich tahini inside toasted Lebanese flatbread.',
    ingredients: ['Spiced beef', 'Pickles', 'Sumac onions', 'Tahini', 'Toasted flatbread'],
    basePrice: 170,
    image: 'chicken_sandwich.jpg',
    available: true,
    customizations: [
      {
        id: 'extras',
        name: 'Extras',
        required: false,
        multiSelect: true,
        options: [
          { id: 'extra_meat', label: 'Extra beef', priceAdd: 45 },
          { id: 'fries_inside', label: 'Add fries inside', priceAdd: 20 }
        ]
      }
    ]
  },

  // SIDES
  {
    id: 's001',
    categoryId: 'sides',
    name: 'Golden Crispy Fries',
    badge: 'CLASSIC',
    rating: 4.8,
    reviewsCount: 512,
    description: 'Hand-cut skin-on Russet potatoes double-fried to golden perfection, seasoned with rosemary sea salt.',
    ingredients: ['Russet potatoes', 'Rosemary sea salt', 'House dip'],
    basePrice: 75,
    image: 'burger_classic.jpg',
    available: true,
    customizations: [
      {
        id: 'dip',
        name: 'Choose dipping sauce',
        required: true,
        multiSelect: false,
        options: [
          { id: 'smash', label: 'Smash Special Sauce', priceAdd: 0, default: true },
          { id: 'garlic', label: 'Garlic Herb Mayo', priceAdd: 0 },
          { id: 'bbq', label: 'Smoky BBQ Dip', priceAdd: 0 }
        ]
      }
    ]
  },
  {
    id: 's002',
    categoryId: 'sides',
    name: 'Cheesy Loaded Fries',
    badge: 'INDULGENT',
    rating: 4.9,
    reviewsCount: 304,
    description: 'Golden fries smothered with melted warm cheddar sauce, crispy bacon bits, jalapeño rings, and fresh spring onions.',
    ingredients: ['Fries', 'Cheddar cheese sauce', 'Beef bacon bits', 'Jalapeños'],
    basePrice: 125,
    image: 'burger_classic.jpg',
    available: true,
    customizations: []
  },

  // DRINKS & SMOOTHIES
  {
    id: 'd001',
    categoryId: 'drinks',
    name: 'Fresh Mint Limeade',
    badge: 'CHILLED',
    rating: 4.9,
    reviewsCount: 178,
    description: 'Fresh squeezed local limes muddled with wild garden mint, cane sugar syrup, and crushed ice.',
    ingredients: ['Fresh lime', 'Mint leaves', 'Cane syrup', 'Sparkling water'],
    basePrice: 65,
    image: 'smoothie_tropical.jpg',
    available: true,
    customizations: [
      {
        id: 'sweet',
        name: 'Sweetness',
        required: true,
        multiSelect: false,
        options: [
          { id: 'regular', label: 'Regular Sweet', priceAdd: 0, default: true },
          { id: 'less', label: 'Less Sweet', priceAdd: 0 },
          { id: 'none', label: 'No Added Sugar', priceAdd: 0 }
        ]
      }
    ]
  },
  {
    id: 'd002',
    categoryId: 'drinks',
    name: 'Tropical Mango Passion',
    badge: 'HEALTHY',
    rating: 4.8,
    reviewsCount: 142,
    description: 'Ripe Harar mango blended with passionfruit puree, coconut water, and a touch of honey.',
    ingredients: ['Fresh mango', 'Passionfruit', 'Coconut water', 'Raw honey'],
    basePrice: 85,
    image: 'smoothie_tropical.jpg',
    available: true,
    customizations: []
  },

  // PASTA
  {
    id: 'pas001',
    categoryId: 'pasta',
    name: 'Creamy Tagliatelle Carbonara',
    badge: 'CHEF PICK',
    rating: 4.8,
    reviewsCount: 160,
    description: 'Fresh egg tagliatelle tossed in rich egg yolk emulsion, parmesan cheese, crispy beef pancetta, and black pepper.',
    ingredients: ['Tagliatelle', 'Egg yolks', 'Parmesan', 'Beef bacon', 'Black pepper'],
    basePrice: 195,
    image: 'pasta_carbonara.jpg',
    available: true,
    customizations: [
      {
        id: 'cheese',
        name: 'Extra parmesan',
        required: false,
        multiSelect: false,
        options: [
          { id: 'extra', label: 'Extra Aged Parmesan', priceAdd: 25 }
        ]
      }
    ]
  },

  // SANDWICHES
  {
    id: 'san001',
    categoryId: 'sandwiches',
    name: 'Alemaya Club Sandwich',
    badge: 'POPULAR',
    rating: 4.7,
    reviewsCount: 189,
    description: 'Triple-decker toasted sourdough sandwich layered with sliced grilled chicken, cheddar, egg, tomato, lettuce, and herb mustard.',
    ingredients: ['Toasted sourdough', 'Grilled chicken', 'Egg', 'Cheddar', 'Tomato', 'Lettuce'],
    basePrice: 165,
    image: 'chicken_sandwich.jpg',
    available: true,
    customizations: []
  },

  // SHAKES & DESSERTS
  {
    id: 'm001',
    categoryId: 'milkshakes',
    name: 'Belgian Chocolate Shake',
    badge: 'FAVORITE',
    rating: 4.9,
    reviewsCount: 390,
    description: 'Thick creamy milkshake whipped with whole milk, Dutch cocoa, premium chocolate ice cream, and whipped cream swirl.',
    ingredients: ['Whole milk', 'Chocolate ice cream', 'Whipped cream', 'Chocolate shavings'],
    basePrice: 110,
    image: 'milkshake_chocolate.jpg',
    available: true,
    customizations: [
      {
        id: 'size',
        name: 'Size',
        required: true,
        multiSelect: false,
        options: [
          { id: 'reg', label: 'Regular 14oz', priceAdd: 0, default: true },
          { id: 'large', label: 'Large 18oz', priceAdd: 30 }
        ]
      }
    ]
  }
];

// ══ APPLICATION STATE ══
let APP_STATE = {
  currentTab: 'menu',           // 'menu' or 'orders'
  ordersSubTab: 'cart',         // 'cart' or 'history'
  activeCategory: 'burgers',
  searchQuery: '',
  orderType: 'Dine-in',         // 'Dine-in' or 'Takeaway' (Delivery removed)
  cart: [],
  orderHistory: [],
  sheet: {
    product: null,
    selections: {},
    qty: 1,
    note: '',
    editCartIndex: -1
  }
};

// ══ LUCIDE ICONS HELPER ══
function refreshLucideIcons() {
  if (typeof lucide !== 'undefined' && lucide.createIcons) {
    try {
      lucide.createIcons();
    } catch (e) {
      console.warn('Lucide icon render error:', e);
    }
  }
}

// ══ DOM READY INITIALIZATION ══
document.addEventListener('DOMContentLoaded', () => {
  // Splash hide after smooth logo display
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('hidden');
  }, 1000);

  // Restore saved cart and history from localStorage
  restoreFromStorage();

  // Build UI Components
  buildCategoryGrid();
  renderMenu();
  updateCartUI();
  renderHistory();
  refreshLucideIcons();
});

// ══ CATEGORY GRID (4-COLUMN SQUIRCLE CARDS WITH LUCIDE REACT ICONS) ══
function buildCategoryGrid() {
  const container = document.getElementById('cat-grid');
  if (!container) return;
  container.innerHTML = '';

  CATEGORIES.forEach(cat => {
    const card = document.createElement('button');
    card.className = 'cat-card' + (cat.id === APP_STATE.activeCategory ? ' active' : '');
    card.id = 'cat-card-' + cat.id;
    card.setAttribute('role', 'tab');
    card.setAttribute('aria-selected', cat.id === APP_STATE.activeCategory ? 'true' : 'false');
    card.onclick = () => selectCategory(cat.id);

    card.innerHTML = `
      <div class="cat-icon-wrap">${cat.svg}</div>
      <span class="cat-name">${cat.name}</span>
    `;
    container.appendChild(card);
  });
}

function selectCategory(catId) {
  APP_STATE.activeCategory = catId;

  // Update active state in grid
  document.querySelectorAll('.cat-card').forEach(c => {
    c.classList.remove('active');
    c.setAttribute('aria-selected', 'false');
  });
  const activeCard = document.getElementById('cat-card-' + catId);
  if (activeCard) {
    activeCard.classList.add('active');
    activeCard.setAttribute('aria-selected', 'true');
  }

  // Update hero banner image to match category
  const heroImg = document.getElementById('hero-img');
  if (heroImg && CAT_IMAGES[catId]) {
    heroImg.src = CAT_IMAGES[catId];
  }

  // Clear search if open
  clearSearch();

  // Re-render menu
  renderMenu();
}

// ══ ORDER TYPE SELECTION (Dine-in / Takeaway only) ══
function setOrderType(type) {
  APP_STATE.orderType = type;
  document.querySelectorAll('.ot-tab').forEach(t => t.classList.remove('active'));
  if (type === 'Dine-in') {
    document.getElementById('ot-dinein')?.classList.add('active');
  } else {
    document.getElementById('ot-takeaway')?.classList.add('active');
  }
  const label = document.getElementById('sum-ordertype-label');
  if (label) label.textContent = type;
  toast(`Selected ${type}`);
}

// ══ SEARCH FUNCTIONALITY ══
function handleSearch(query) {
  APP_STATE.searchQuery = (query || '').trim().toLowerCase();
  const clearBtn = document.getElementById('search-clear-btn');
  const searchSec = document.getElementById('search-results-section');
  const regularContent = document.getElementById('regular-menu-content');
  const heroBanner = document.getElementById('hero-banner');
  const exploreSec = document.getElementById('section-explore');

  if (APP_STATE.searchQuery.length > 0) {
    if (clearBtn) clearBtn.classList.remove('hidden');
    if (searchSec) searchSec.classList.remove('hidden');
    if (regularContent) regularContent.style.display = 'none';
    if (heroBanner) heroBanner.style.display = 'none';
    if (exploreSec) exploreSec.style.display = 'none';

    renderSearchResults();
  } else {
    if (clearBtn) clearBtn.classList.add('hidden');
    if (searchSec) searchSec.classList.add('hidden');
    if (regularContent) regularContent.style.display = 'block';
    if (heroBanner) heroBanner.style.display = 'flex';
    if (exploreSec) exploreSec.style.display = 'block';
  }
}

function clearSearch() {
  const input = document.getElementById('search-input');
  if (input) input.value = '';
  handleSearch('');
}

function renderSearchResults() {
  const list = document.getElementById('search-results-list');
  if (!list) return;

  const matches = PRODUCTS.filter(p => {
    const q = APP_STATE.searchQuery;
    return p.name.toLowerCase().includes(q) ||
      (p.description && p.description.toLowerCase().includes(q)) ||
      (p.ingredients && p.ingredients.some(i => i.toLowerCase().includes(q)));
  });

  if (matches.length === 0) {
    list.innerHTML = `
      <div class="empty-results">
        <div class="empty-icon">🔍</div>
        <p class="empty-text">No items found</p>
        <p class="empty-sub">We couldn't find anything matching "${escapeHtml(APP_STATE.searchQuery)}". Try searching for burger, chicken, or fries.</p>
      </div>
    `;
    return;
  }

  list.innerHTML = '';
  matches.forEach(product => {
    list.appendChild(createVerticalCard(product));
  });
  refreshLucideIcons();
}

// ══ UNIFIED VERTICAL ITEMS LISTING (NO TWO SECTIONS, NO SPLIT CLASSIFICATION) ══
function renderMenu() {
  const list = document.getElementById('unified-items-list');
  const catTitle = document.getElementById('active-category-title');
  const itemsCountBadge = document.getElementById('active-items-count');

  const cat = CATEGORIES.find(c => c.id === APP_STATE.activeCategory) || CATEGORIES[0];
  if (catTitle) catTitle.textContent = cat.name;

  const prods = PRODUCTS.filter(p => p.categoryId === cat.id);
  if (itemsCountBadge) itemsCountBadge.textContent = `${prods.length} ${prods.length === 1 ? 'item' : 'items'}`;

  if (!list) return;
  list.innerHTML = '';

  if (prods.length === 0) {
    list.innerHTML = `
      <div class="empty-results">
        <div class="empty-icon">🍽️</div>
        <p class="empty-text">Fresh items coming soon</p>
        <p class="empty-sub">Our kitchen is preparing delicious ${cat.name} recipes for you!</p>
      </div>
    `;
    return;
  }

  // Render all items for this category in one clean, unified vertical list
  prods.forEach(product => {
    list.appendChild(createVerticalCard(product));
  });
  refreshLucideIcons();
}

// ══ CARD GENERATOR (HIGH QUALITY VERTICAL LIST CARD) ══
function createVerticalCard(p) {
  const card = document.createElement('div');
  card.className = 'vert-card';
  card.onclick = () => openProduct(p.id);

  const badgeHtml = p.badge ? `<span class="vert-badge">${escapeHtml(p.badge)}</span>` : '';
  const ratingVal = p.rating || 4.8;
  const reviewsCount = p.reviewsCount || 120;

  card.innerHTML = `
    <img src="${p.image}" alt="${escapeHtml(p.name)}" class="vert-thumb" loading="lazy" onerror="this.src='logo.png'">
    <div class="vert-details">
      <div class="vert-badge-row">
        ${badgeHtml}
        <span class="vert-rating"><span class="vert-star">★</span> ${ratingVal} (${reviewsCount})</span>
      </div>
      <h3 class="vert-name">${escapeHtml(p.name)}</h3>
      <p class="vert-desc">${escapeHtml(p.description || '')}</p>
      <span class="vert-price">${formatMoney(p.basePrice)}</span>
    </div>
    <div class="vert-action">
      <button class="btn-round-add" onclick="event.stopPropagation(); openProduct('${p.id}')" aria-label="Add to order">
        <i data-lucide="plus"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>
      </button>
    </div>
  `;
  return card;
}

// ══ NAVIGATION (BOTTOM NAV: MENU & ORDERS TABS) ══
function navigateTo(tab) {
  APP_STATE.currentTab = tab;

  // View visibility
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const targetView = document.getElementById('view-' + tab);
  if (targetView) targetView.classList.add('active');

  // Bottom navigation tabs active state
  document.querySelectorAll('.bnav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('bnav-' + tab)?.classList.add('active');

  // Floating Cart Bar (only show on Menu view when cart > 0)
  updateCartUI();

  if (tab === 'orders') {
    renderCart();
    renderHistory();
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function toggleSearch() {
  const searchSec = document.getElementById('search-section');
  const searchBtn = document.getElementById('nav-search-btn');
  const input = document.getElementById('search-input');
  if (!searchSec) return;

  // Ensure menu view is active
  if (APP_STATE.currentTab !== 'menu') {
    navigateTo('menu');
  }

  const isHidden = searchSec.classList.contains('hidden');
  if (isHidden) {
    searchSec.classList.remove('hidden');
    searchBtn?.classList.add('active');
    setTimeout(() => input?.focus(), 100);
  } else {
    searchSec.classList.add('hidden');
    searchBtn?.classList.remove('active');
    clearSearch();
  }
}

function switchOrdersTab(subTab) {
  APP_STATE.ordersSubTab = subTab;
  document.getElementById('seg-cart')?.classList.toggle('active', subTab === 'cart');
  document.getElementById('seg-history')?.classList.toggle('active', subTab === 'history');

  document.getElementById('orders-tab-cart')?.classList.toggle('active', subTab === 'cart');
  document.getElementById('orders-tab-history')?.classList.toggle('active', subTab === 'history');

  if (subTab === 'cart') renderCart();
  else renderHistory();
}

// ══ PRODUCT CUSTOMIZATION BOTTOM SHEET ══
function openProduct(productId, editCartIndex = -1) {
  const product = PRODUCTS.find(p => p.id === productId);
  if (!product) return;

  const isEdit = editCartIndex >= 0;
  const existingItem = isEdit ? APP_STATE.cart[editCartIndex] : null;

  APP_STATE.sheet.product = product;
  APP_STATE.sheet.qty = existingItem ? existingItem.qty : 1;
  APP_STATE.sheet.note = existingItem ? existingItem.note : '';
  APP_STATE.sheet.editCartIndex = editCartIndex;

  // Default selections
  const selections = {};
  (product.customizations || []).forEach(group => {
    if (existingItem && existingItem.selections[group.id] !== undefined) {
      selections[group.id] = existingItem.selections[group.id];
    } else {
      const defaultOptions = (group.options || []).filter(o => o.default).map(o => o.id);
      if (group.multiSelect) {
        selections[group.id] = defaultOptions;
      } else {
        selections[group.id] = defaultOptions[0] || (group.options[0] ? group.options[0].id : null);
      }
    }
  });
  APP_STATE.sheet.selections = selections;

  renderSheetContent();

  // Open modal bottom sheet
  document.getElementById('sheet-overlay')?.classList.add('open');
  document.getElementById('product-sheet')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeSheet() {
  document.getElementById('sheet-overlay')?.classList.remove('open');
  document.getElementById('product-sheet')?.classList.remove('open');
  document.body.style.overflow = '';
  APP_STATE.sheet.editCartIndex = -1;
}

function renderSheetContent() {
  const p = APP_STATE.sheet.product;
  const body = document.getElementById('sheet-body');
  if (!p || !body) return;

  const ingredientsHtml = (p.ingredients || []).length > 0
    ? `<div class="sheet-ingredients-tags">${p.ingredients.map(i => `<span class="ing-tag">${escapeHtml(i)}</span>`).join('')}</div>`
    : '';

  let groupsHtml = '';
  (p.customizations || []).forEach(group => {
    const isReq = group.required;
    const badge = isReq
      ? `<span class="cust-badge-req">Required</span>`
      : `<span class="cust-badge-opt">Optional</span>`;

    let optionsHtml = '';
    (group.options || []).forEach(opt => {
      const selected = group.multiSelect
        ? (APP_STATE.sheet.selections[group.id] || []).includes(opt.id)
        : APP_STATE.sheet.selections[group.id] === opt.id;

      const priceAddHtml = opt.priceAdd > 0 ? `+${formatMoney(opt.priceAdd)}` : '';
      const checkShape = group.multiSelect ? 'square' : '';

      optionsHtml += `
        <div class="cust-opt-row ${selected ? 'selected' : ''}" onclick="toggleOption('${group.id}', '${opt.id}', ${group.multiSelect})">
          <div class="cust-opt-left">
            <div class="cust-check-box ${checkShape}">
              ${selected ? '✓' : ''}
            </div>
            <span class="cust-opt-label">${escapeHtml(opt.label)}</span>
          </div>
          ${priceAddHtml ? `<span class="cust-opt-price">${priceAddHtml}</span>` : ''}
        </div>
      `;
    });

    groupsHtml += `
      <div class="cust-group" id="cgroup-${group.id}">
        <div class="cust-group-head">
          <span class="cust-group-title">${escapeHtml(group.name)}</span>
          ${badge}
        </div>
        <div class="cust-options-list">${optionsHtml}</div>
      </div>
    `;
  });

  const isEdit = APP_STATE.sheet.editCartIndex >= 0;
  const buttonActionLabel = isEdit ? 'Update Order' : 'Add to Order';

  body.innerHTML = `
    <img src="${p.image}" alt="${escapeHtml(p.name)}" class="sheet-prod-img" onerror="this.src='logo.png'">
    <div class="sheet-header-content">
      <h2 class="sheet-prod-title">${escapeHtml(p.name)}</h2>
      <div class="sheet-prod-price" id="sheet-single-price">${formatMoney(calculateUnitItemPrice())}</div>
      <p class="sheet-prod-desc">${escapeHtml(p.description || '')}</p>
      ${ingredientsHtml}
    </div>

    <div class="sheet-customizations">${groupsHtml}</div>

    <div class="sheet-kitchen-note">
      <label class="kn-label">
        Kitchen Note
        <span>Optional</span>
      </label>
      <textarea class="kn-textarea" id="sheet-note-input" placeholder="Special requests, allergies, sauce on the side..." oninput="APP_STATE.sheet.note = this.value">${escapeHtml(APP_STATE.sheet.note)}</textarea>
    </div>

    <div class="sheet-sticky-footer">
      <div class="sheet-qty-stepper">
        <button class="sheet-qty-btn" onclick="changeSheetQty(-1)" aria-label="Decrease quantity">
          <i data-lucide="minus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>
        </button>
        <span class="sheet-qty-num" id="sheet-qty-val">${APP_STATE.sheet.qty}</span>
        <button class="sheet-qty-btn" onclick="changeSheetQty(1)" aria-label="Increase quantity">
          <i data-lucide="plus"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>
        </button>
      </div>
      <button class="btn-sheet-submit" onclick="submitSheetToCart()">
        <span>${buttonActionLabel}</span>
        <span id="sheet-total-price">${formatMoney(calculateSheetTotal())}</span>
      </button>
    </div>
  `;
  refreshLucideIcons();
}

function toggleOption(groupId, optionId, isMulti) {
  const sels = APP_STATE.sheet.selections;
  if (isMulti) {
    if (!Array.isArray(sels[groupId])) sels[groupId] = [];
    const idx = sels[groupId].indexOf(optionId);
    if (idx >= 0) sels[groupId].splice(idx, 1);
    else sels[groupId].push(optionId);
  } else {
    sels[groupId] = optionId;
  }
  updateSheetPricingUI();
}

function changeSheetQty(delta) {
  APP_STATE.sheet.qty = Math.max(1, Math.min(20, APP_STATE.sheet.qty + delta));
  const el = document.getElementById('sheet-qty-val');
  if (el) el.textContent = APP_STATE.sheet.qty;
  updateSheetPricingUI();
}

function calculateUnitItemPrice() {
  const p = APP_STATE.sheet.product;
  if (!p) return 0;
  let extras = 0;
  (p.customizations || []).forEach(g => {
    const sel = APP_STATE.sheet.selections[g.id];
    if (g.multiSelect && Array.isArray(sel)) {
      sel.forEach(oid => {
        const opt = (g.options || []).find(o => o.id === oid);
        if (opt) extras += opt.priceAdd;
      });
    } else if (!g.multiSelect && sel) {
      const opt = (g.options || []).find(o => o.id === sel);
      if (opt) extras += opt.priceAdd;
    }
  });
  return p.basePrice + extras;
}

function calculateSheetTotal() {
  return calculateUnitItemPrice() * APP_STATE.sheet.qty;
}

function updateSheetPricingUI() {
  const p = APP_STATE.sheet.product;
  if (!p) return;

  (p.customizations || []).forEach(group => {
    const container = document.getElementById('cgroup-' + group.id);
    if (!container) return;
    const rows = container.querySelectorAll('.cust-opt-row');
    rows.forEach(row => {
      const onclickAttr = row.getAttribute('onclick') || '';
      const match = onclickAttr.match(/'[^']+'\s*,\s*'([^']+)'/);
      const optId = match ? match[1] : '';
      const selected = group.multiSelect
        ? (APP_STATE.sheet.selections[group.id] || []).includes(optId)
        : APP_STATE.sheet.selections[group.id] === optId;

      row.classList.toggle('selected', selected);
      const box = row.querySelector('.cust-check-box');
      if (box) box.textContent = selected ? '✓' : '';
    });
  });

  const singlePriceEl = document.getElementById('sheet-single-price');
  if (singlePriceEl) singlePriceEl.textContent = formatMoney(calculateUnitItemPrice());

  const totalPriceEl = document.getElementById('sheet-total-price');
  if (totalPriceEl) totalPriceEl.textContent = formatMoney(calculateSheetTotal());
}

// ══ SUBMIT TO CART ══
function submitSheetToCart() {
  const p = APP_STATE.sheet.product;
  if (!p) return;

  // Validation
  for (const group of (p.customizations || [])) {
    if (group.required) {
      const sel = APP_STATE.sheet.selections[group.id];
      if (group.multiSelect) {
        if (!Array.isArray(sel) || sel.length === 0) {
          toast(`Please choose: ${group.name}`);
          return;
        }
      } else {
        if (!sel) {
          toast(`Please select: ${group.name}`);
          return;
        }
      }
    }
  }

  const cartItem = {
    productId: p.id,
    name: p.name,
    image: p.image,
    basePrice: p.basePrice,
    unitPrice: calculateUnitItemPrice(),
    qty: APP_STATE.sheet.qty,
    selections: JSON.parse(JSON.stringify(APP_STATE.sheet.selections)),
    note: APP_STATE.sheet.note,
    total: calculateSheetTotal()
  };

  if (APP_STATE.sheet.editCartIndex >= 0) {
    APP_STATE.cart[APP_STATE.sheet.editCartIndex] = cartItem;
    toast(`${p.name} updated!`);
  } else {
    APP_STATE.cart.push(cartItem);
    toast(`${p.name} added to order!`);
  }

  saveToStorage();
  updateCartUI();
  closeSheet();

  if (APP_STATE.currentTab === 'orders') {
    renderCart();
  }
}

// ══ CART OPERATIONS ══
function updateCartItemQty(index, delta) {
  const item = APP_STATE.cart[index];
  if (!item) return;

  item.qty = Math.max(1, Math.min(20, item.qty + delta));
  item.total = item.unitPrice * item.qty;

  saveToStorage();
  updateCartUI();
  renderCart();
}

function removeCartItem(index) {
  APP_STATE.cart.splice(index, 1);
  saveToStorage();
  updateCartUI();
  renderCart();
  toast('Item removed');
}

function getCartCalculations() {
  const subtotal = APP_STATE.cart.reduce((sum, item) => sum + item.total, 0);
  const service = Math.round(subtotal * CFG.serviceCharge);
  const total = subtotal + service;
  const count = APP_STATE.cart.reduce((sum, item) => sum + item.qty, 0);
  return { subtotal, service, total, count };
}

function updateCartUI() {
  const { total, count } = getCartCalculations();

  // Floating Cart Bar (only visible on Menu view when items exist)
  const floatBar = document.getElementById('floating-cart-bar');
  if (floatBar) {
    if (count > 0 && APP_STATE.currentTab === 'menu') {
      floatBar.classList.remove('hidden');
      const badge = document.getElementById('bar-items-count');
      const price = document.getElementById('bar-items-total');
      if (badge) badge.textContent = `${count} ${count === 1 ? 'item' : 'items'}`;
      if (price) price.textContent = formatMoney(total);
    } else {
      floatBar.classList.add('hidden');
    }
  }

  // Top Navbar Cart Badge
  const topBadge = document.getElementById('top-cart-badge');
  if (topBadge) {
    if (count > 0) {
      topBadge.style.display = 'flex';
      topBadge.textContent = count;
    } else {
      topBadge.style.display = 'none';
    }
  }

  // Bottom Nav Orders Badge
  const bnavBadge = document.getElementById('bnav-orders-badge');
  if (bnavBadge) {
    if (count > 0) {
      bnavBadge.style.display = 'flex';
      bnavBadge.textContent = count;
    } else {
      bnavBadge.style.display = 'none';
    }
  }

  // Segment Tab Badge in Orders View
  const cartSegCount = document.getElementById('cart-seg-count');
  if (cartSegCount) cartSegCount.textContent = count;

  const histSegCount = document.getElementById('history-seg-count');
  if (histSegCount) histSegCount.textContent = APP_STATE.orderHistory.length;
}

// ══ RENDER CART VIEW ══
function renderCart() {
  const wrap = document.getElementById('cart-items-wrap');
  const summary = document.getElementById('cart-summary-card');
  const actions = document.getElementById('cart-checkout-actions');
  if (!wrap) return;

  const { subtotal, service, total, count } = getCartCalculations();

  if (APP_STATE.cart.length === 0) {
    wrap.innerHTML = `
      <div class="empty-results">
        <div class="empty-icon">🛒</div>
        <p class="empty-text">Your order is empty</p>
        <p class="empty-sub">Explore our flame-grilled burgers and sides to build your meal.</p>
        <button class="nav-pill-btn active" style="margin: 16px auto 0;" onclick="navigateTo('menu')">Browse menu &rarr;</button>
      </div>
    `;
    if (summary) summary.classList.add('hidden');
    if (actions) actions.classList.add('hidden');
    return;
  }

  let itemsHtml = '';
  APP_STATE.cart.forEach((item, index) => {
    const product = PRODUCTS.find(p => p.id === item.productId);
    
    let optionLabels = [];
    if (product) {
      (product.customizations || []).forEach(g => {
        const sel = item.selections[g.id];
        if (g.multiSelect && Array.isArray(sel) && sel.length > 0) {
          sel.forEach(oid => {
            const opt = (g.options || []).find(o => o.id === oid);
            if (opt) optionLabels.push(opt.label);
          });
        } else if (!g.multiSelect && sel) {
          const opt = (g.options || []).find(o => o.id === sel);
          if (opt) optionLabels.push(opt.label);
        }
      });
    }

    const optionsStr = optionLabels.join(' • ');
    const noteStr = item.note ? `<div class="cart-item-kitchen-note">“${escapeHtml(item.note)}”</div>` : '';

    itemsHtml += `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-img" onerror="this.src='logo.png'">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${escapeHtml(item.name)}</h4>
          ${optionsStr ? `<div class="cart-item-options">${escapeHtml(optionsStr)}</div>` : ''}
          ${noteStr}
          <div class="cart-item-bottom">
            <span class="cart-item-price">${formatMoney(item.total)}</span>
            <div style="display: flex; align-items: center;">
              <div class="cart-qty-ctrl">
                <button class="cart-qty-btn" onclick="updateCartItemQty(${index}, -1)" aria-label="Decrease quantity">
                  <i data-lucide="minus"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-minus"><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>
                </button>
                <span class="cart-qty-val">${item.qty}</span>
                <button class="cart-qty-btn" onclick="updateCartItemQty(${index}, 1)" aria-label="Increase quantity">
                  <i data-lucide="plus"><svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>
                </button>
              </div>
              <button class="cart-del-btn" onclick="removeCartItem(${index})" title="Remove item" aria-label="Remove item">
                <i data-lucide="trash-2"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-trash-2"><polyline points="3 6 5 6 21 6"></polyline><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"></path><line x1="10" y1="11" x2="10" y2="17"></line><line x1="14" y1="11" x2="14" y2="17"></line></svg></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    `;
  });

  wrap.innerHTML = itemsHtml;
  refreshLucideIcons();

  // Bill summary breakdown
  if (summary) {
    summary.classList.remove('hidden');
    document.getElementById('sum-subtotal').textContent = formatMoney(subtotal);
    document.getElementById('sum-service').textContent = formatMoney(service);
    document.getElementById('sum-total').textContent = formatMoney(total);
    document.getElementById('sum-ordertype-label').textContent = APP_STATE.orderType;
  }

  // Checkout actions
  if (actions) {
    actions.classList.remove('hidden');
    document.getElementById('btn-checkout-price').textContent = formatMoney(total);
  }
}

// ══ PLACE ORDER ══
function placeOrder() {
  if (APP_STATE.cart.length === 0) {
    toast('Your cart is empty');
    return;
  }

  const { total, count } = getCartCalculations();
  const orderId = 'AG-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });

  const newOrder = {
    id: orderId,
    timestamp: timeStr,
    orderType: APP_STATE.orderType,
    items: JSON.parse(JSON.stringify(APP_STATE.cart)),
    total: total,
    status: 'Grilling & Preparing',
    estimatedTime: CFG.estimatedTime
  };

  // Add to order history
  APP_STATE.orderHistory.unshift(newOrder);

  // Clear cart
  APP_STATE.cart = [];
  saveToStorage();
  updateCartUI();

  // Switch to history tab to show the placed order
  toast(`Order ${orderId} placed! Ready in ${CFG.estimatedTime}`, 3500);
  switchOrdersTab('history');
}

// ══ RENDER ORDER HISTORY ══
function renderHistory() {
  const wrap = document.getElementById('history-items-wrap');
  if (!wrap) return;

  if (APP_STATE.orderHistory.length === 0) {
    wrap.innerHTML = `
      <div class="empty-results">
        <div class="empty-icon">📋</div>
        <p class="empty-text">No previous orders</p>
        <p class="empty-sub">Once you place an order, you can track preparation progress and view your receipt here.</p>
      </div>
    `;
    return;
  }

  let html = '';
  APP_STATE.orderHistory.forEach(ord => {
    const itemsSummary = (ord.items || [])
      .map(i => `${i.qty}× ${escapeHtml(i.name)}`)
      .join(', ');

    html += `
      <div class="history-order-card">
        <div class="hoc-header">
          <span class="hoc-id">${ord.id} • ${escapeHtml(ord.orderType)}</span>
          <span class="hoc-status">${escapeHtml(ord.status)}</span>
        </div>
        <p class="hoc-items">${itemsSummary}</p>
        <div class="hoc-foot">
          <span class="hoc-total">${formatMoney(ord.total)}</span>
          <span class="hoc-date">Ordered at ${ord.timestamp} • ${ord.estimatedTime}</span>
        </div>
      </div>
    `;
  });

  wrap.innerHTML = html;
}

// ══ STORAGE HELPERS ══
function saveToStorage() {
  try {
    localStorage.setItem('alemaya_cart', JSON.stringify(APP_STATE.cart));
    localStorage.setItem('alemaya_history', JSON.stringify(APP_STATE.orderHistory));
  } catch (e) {
    console.warn('Storage save failed:', e);
  }
}

function restoreFromStorage() {
  try {
    const savedCart = localStorage.getItem('alemaya_cart');
    if (savedCart) APP_STATE.cart = JSON.parse(savedCart);

    const savedHist = localStorage.getItem('alemaya_history');
    if (savedHist) APP_STATE.orderHistory = JSON.parse(savedHist);
  } catch (e) {
    console.warn('Storage restore failed:', e);
  }
}

// ══ UTILITY FORMATTERS ══
function formatMoney(amount) {
  const num = Math.abs(amount || 0);
  return `${CFG.currencySymbol} ${num.toLocaleString('en-ET', { minimumFractionDigits: 0, maximumFractionDigits: 0 })}`;
}

function escapeHtml(str) {
  if (!str) return '';
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#39;');
}

function toast(msg, duration = 2400) {
  const t = document.getElementById('toast');
  if (!t) return;
  t.textContent = msg;
  t.classList.add('show');
  setTimeout(() => t.classList.remove('show'), duration);
}
