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

// ══ APPLICATION STATE & MASTER STORES ══
let MASTER_ORDERS = [];
let KITCHEN_AUDIO_CTX = null;
let SYNC_CHANNEL = null;

let APP_STATE = {
  portal: 'customer',           // 'customer', 'chef', 'admin'
  currentTab: 'menu',           // 'menu', 'orders', 'chef', 'admin'
  ordersSubTab: 'cart',         // 'cart' or 'history'
  activeCategory: 'burgers',
  searchQuery: '',
  orderType: 'Dine-in',         // 'Dine-in' or 'Takeaway'
  cart: [],
  orderHistory: [],
  stockStatus: {},              // { [productId]: boolean }
  kdsFilter: 'active',          // 'active', 'received', 'preparing', 'ready', 'completed'
  adminDateFilter: 'today',     // 'today', 'yesterday', 'week', 'all'
  adminStatusFilter: 'all',     // 'all', 'received', 'preparing', 'ready', 'completed', 'cancelled'
  adminSearchQuery: '',
  audioEnabled: true,
  sheet: {
    product: null,
    selections: {},
    qty: 1,
    note: '',
    editCartIndex: -1
  }
};

// ══ BROADCAST CHANNEL & STORAGE SYNC ACROSS TABS ══
try {
  if (typeof BroadcastChannel !== 'undefined') {
    SYNC_CHANNEL = new BroadcastChannel('alemaya_kitchen_channel');
    SYNC_CHANNEL.onmessage = (event) => {
      const data = event.data || {};
      if (data.type === 'NEW_ORDER' || data.type === 'STATUS_UPDATE' || data.type === 'STOCK_UPDATE') {
        restoreFromStorage();
        refreshAllViews();
        if (data.type === 'NEW_ORDER' && APP_STATE.portal === 'chef') {
          playKitchenChime('new_order');
          toast(`🔔 New Kitchen Order #${data.orderId}!`, 3500);
        } else if (data.type === 'STATUS_UPDATE') {
          if (data.status === 'ready') {
            playKitchenChime('ready');
            toast(`🎉 Order #${data.orderId} is READY for pickup!`, 4000);
          } else {
            toast(`Order #${data.orderId} status: ${data.status}`);
          }
        }
      }
    };
  }
} catch (e) {
  console.warn('BroadcastChannel error:', e);
}

window.addEventListener('storage', (e) => {
  if (e.key === 'alemaya_master_orders' || e.key === 'alemaya_stock' || e.key === 'alemaya_history') {
    restoreFromStorage();
    refreshAllViews();
  }
});

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
  }, 900);

  // Restore saved cart, stock, and orders from localStorage
  restoreFromStorage();

  // Seed sample week of orders if master store is fresh
  if (!MASTER_ORDERS || MASTER_ORDERS.length === 0) {
    seedInitialDemoOrders();
  }

  // Build UI Components
  buildCategoryGrid();
  renderMenu();
  updateCartUI();
  renderHistory();
  updateKitchenCounters();
  refreshLucideIcons();

  // Start live digital clock & ticket timer intervals
  initLiveClocks();

  // Check URL hash for direct routing (#chef, #admin, #orders)
  handleHashRouting();
  window.addEventListener('hashchange', handleHashRouting);
});

function handleHashRouting() {
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  if (hash === 'chef') {
    switchPortal('chef');
  } else if (hash === 'admin') {
    switchPortal('admin');
  } else if (hash === 'orders') {
    switchPortal('customer');
    navigateTo('orders');
  }
}

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
  const isAvailable = (APP_STATE.stockStatus && APP_STATE.stockStatus[p.id] !== undefined) 
    ? APP_STATE.stockStatus[p.id] 
    : (p.available !== false);

  card.className = 'vert-card' + (isAvailable ? '' : ' sold-out');
  
  if (isAvailable) {
    card.onclick = () => openProduct(p.id);
  } else {
    card.onclick = () => toast(`${p.name} is currently sold out (86'd)`);
  }

  const badgeHtml = !isAvailable 
    ? `<span class="vert-badge sold-out-badge">SOLD OUT</span>`
    : (p.badge ? `<span class="vert-badge">${escapeHtml(p.badge)}</span>` : '');
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
      ${isAvailable ? `
        <button class="btn-round-add" onclick="event.stopPropagation(); openProduct('${p.id}')" aria-label="Add to order">
          <i data-lucide="plus"><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="#FFFFFF" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-plus"><line x1="12" y1="5" x2="12" y2="19"></line><line x1="5" y1="12" x2="19" y2="12"></line></svg></i>
        </button>
      ` : `
        <span style="font-size:0.75rem; font-weight:700; color:#DC2626; padding: 4px 8px;">Out</span>
      `}
    </div>
  `;
  return card;
}

// ══ NAVIGATION (BOTTOM NAV: MENU & ORDERS TABS) ══
function navigateTo(tab) {
  APP_STATE.currentTab = tab;
  APP_STATE.portal = 'customer';

  const appEl = document.getElementById('app');
  if (appEl) {
    appEl.classList.remove('portal-chef', 'portal-admin');
    appEl.classList.add('portal-customer');
  }

  // Update top portal switcher pills
  document.querySelectorAll('.portal-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('pbtn-customer')?.classList.add('active');

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

  const isAvailable = (APP_STATE.stockStatus && APP_STATE.stockStatus[product.id] !== undefined) 
    ? APP_STATE.stockStatus[product.id] 
    : (product.available !== false);
  if (!isAvailable && editCartIndex < 0) {
    toast(`${product.name} is currently sold out (86'd)`);
    return;
  }

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
// ══ PLACE ORDER (CUSTOMER ORDER CREATION) ══
function placeOrder() {
  if (APP_STATE.cart.length === 0) {
    toast('Your cart is empty');
    return;
  }

  const { total, subtotal, service, count } = getCartCalculations();
  const orderId = 'AG-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toISOString().split('T')[0];

  const newOrder = {
    id: orderId,
    timestamp: timeStr,
    date: dateStr,
    createdAt: Date.now(),
    orderType: APP_STATE.orderType,
    items: JSON.parse(JSON.stringify(APP_STATE.cart)),
    subtotal: subtotal,
    service: service,
    total: total,
    status: 'received',         // 'received' -> 'preparing' -> 'ready' -> 'completed' -> 'cancelled'
    statusLabel: 'Order Received',
    estimatedTime: CFG.estimatedTime
  };

  // Add to Master Orders Store (Shared with Chef & Admin)
  MASTER_ORDERS.unshift(newOrder);

  // Add to Customer's Local Order History
  APP_STATE.orderHistory.unshift(newOrder);

  // Clear cart
  APP_STATE.cart = [];
  saveToStorage();
  updateCartUI();
  updateKitchenCounters();

  // Play audio chime if enabled
  playKitchenChime('new_order');

  // Broadcast to other tabs (Chef KDS, Admin Dashboard)
  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({
        type: 'NEW_ORDER',
        orderId: orderId,
        order: newOrder
      });
    } catch (e) {}
  }

  // Switch to history tab to track preparation
  toast(`Order #${orderId} placed! Live kitchen tracking started`, 3800);
  switchOrdersTab('history');
}

// ══ RENDER ORDER HISTORY & LIVE 4-STEP TRACKER (CUSTOMER VIEW) ══
function renderHistory() {
  const wrap = document.getElementById('history-items-wrap');
  if (!wrap) return;

  // Refresh customer orders from master orders to guarantee live sync
  if (MASTER_ORDERS.length > 0 && APP_STATE.orderHistory.length > 0) {
    APP_STATE.orderHistory = APP_STATE.orderHistory.map(ord => {
      const match = MASTER_ORDERS.find(m => m.id === ord.id);
      return match ? match : ord;
    });
  }

  if (APP_STATE.orderHistory.length === 0) {
    wrap.innerHTML = `
      <div class="empty-results">
        <div class="empty-icon">📋</div>
        <p class="empty-text">No orders yet</p>
        <p class="empty-sub">Once you place an order, you can track live flame-grilling progress and view your receipt here.</p>
        <button class="nav-pill-btn active" style="margin: 16px auto 0;" onclick="navigateTo('menu')">Browse menu &rarr;</button>
      </div>
    `;
    return;
  }

  let html = '';
  APP_STATE.orderHistory.forEach(ord => {
    const itemsSummary = (ord.items || [])
      .map(i => `${i.qty}× ${escapeHtml(i.name)}`)
      .join(', ');

    // Determine status stage & progress percentage
    const status = ord.status || 'received';
    let progressPct = 15;
    let step1Class = 'completed';
    let step2Class = '';
    let step3Class = '';
    let step4Class = '';
    let statusPillClass = 'chip-received';
    let statusTitle = 'Order Received';
    let statusDesc = 'Ticket confirmed by kitchen system. Waiting for grill master.';

    if (status === 'received') {
      progressPct = 15;
      step1Class = 'active';
      statusPillClass = 'chip-received';
      statusTitle = 'Order Received';
      statusDesc = 'Your order is queued in the kitchen. Flame grill is prepping!';
    } else if (status === 'preparing') {
      progressPct = 50;
      step1Class = 'completed';
      step2Class = 'active';
      statusPillClass = 'chip-preparing';
      statusTitle = 'Grilling & Cooking';
      statusDesc = 'Chef is grilling your patties hot and assembling toppings.';
    } else if (status === 'ready') {
      progressPct = 85;
      step1Class = 'completed';
      step2Class = 'completed';
      step3Class = 'active';
      statusPillClass = 'chip-ready';
      statusTitle = 'Ready for Pickup / Serving';
      statusDesc = 'Fresh off the grill! Please collect at the counter or your table.';
    } else if (status === 'completed') {
      progressPct = 100;
      step1Class = 'completed';
      step2Class = 'completed';
      step3Class = 'completed';
      step4Class = 'completed';
      statusPillClass = 'chip-completed';
      statusTitle = 'Completed';
      statusDesc = 'Order delivered. Thank you for dining with Alemaya Grill\'d!';
    } else if (status === 'cancelled') {
      statusPillClass = 'chip-cancelled';
      statusTitle = 'Order Cancelled';
      statusDesc = 'This order was cancelled by staff or management.';
    }

    const isReady = status === 'ready';

    html += `
      <div class="customer-tracking-card ${isReady ? 'ready-alert' : ''}">
        <div class="track-card-head">
          <div>
            <span class="track-order-id">#${ord.id}</span>
            <div style="font-size:0.75rem; color:var(--text-muted); margin-top:2px;">
              ${escapeHtml(ord.orderType)} • Ordered at ${ord.timestamp}
            </div>
          </div>
          <span class="status-chip ${statusPillClass}">${escapeHtml(statusTitle)}</span>
        </div>

        ${status !== 'cancelled' ? `
          <!-- 4-Step Stepper -->
          <div class="track-stepper-wrap">
            <div class="track-stepper-line">
              <div class="track-stepper-line-progress" style="width: ${progressPct}%"></div>
            </div>

            <!-- Step 1 -->
            <div class="track-step-node ${step1Class}">
              <div class="step-circle">1</div>
              <span class="step-label">Received</span>
            </div>

            <!-- Step 2 -->
            <div class="track-step-node ${step2Class}">
              <div class="step-circle">2</div>
              <span class="step-label">Grilling</span>
            </div>

            <!-- Step 3 -->
            <div class="track-step-node ${step3Class}">
              <div class="step-circle">3</div>
              <span class="step-label">Ready</span>
            </div>

            <!-- Step 4 -->
            <div class="track-step-node ${step4Class}">
              <div class="step-circle">4</div>
              <span class="step-label">Served</span>
            </div>
          </div>

          <div style="background:var(--bg-subtle); border-radius:8px; padding:8px 12px; margin-bottom:12px; font-size:0.8rem; color:var(--text-dark); display:flex; align-items:center; gap:8px;">
            <span style="font-size:1.1rem;">${isReady ? '🛎️' : '⏱️'}</span>
            <div><strong>${statusTitle}:</strong> ${statusDesc}</div>
          </div>
        ` : `
          <div style="background:#FEE2E2; color:#991B1B; padding:10px 14px; border-radius:8px; font-size:0.82rem; margin:10px 0;">
            This order was cancelled.
          </div>
        `}

        <div class="track-receipt-summary">
          <div class="track-items-summary">${itemsSummary}</div>
          <div class="track-receipt-foot">
            <span>Bill Total:</span>
            <span style="font-size:1rem; color:var(--brand-terracotta);">${formatMoney(ord.total)}</span>
          </div>
        </div>
      </div>
    `;
  });

  wrap.innerHTML = html;
}

// ══ PORTAL SWITCHER & NAVIGATION (CUSTOMER, CHEF, ADMIN) ══
function switchPortal(portal) {
  APP_STATE.portal = portal;

  const appEl = document.getElementById('app');
  if (appEl) {
    appEl.classList.remove('portal-customer', 'portal-chef', 'portal-admin');
    appEl.classList.add(`portal-${portal}`);
  }

  // Update top portal switcher pills
  document.querySelectorAll('.portal-btn').forEach(btn => btn.classList.remove('active'));
  const activePill = document.getElementById(`pbtn-${portal}`);
  if (activePill) activePill.classList.add('active');

  // Update bottom nav
  document.querySelectorAll('.bnav-btn').forEach(btn => btn.classList.remove('active'));

  // Toggle views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  if (portal === 'customer') {
    navigateTo(APP_STATE.currentTab === 'orders' ? 'orders' : 'menu');
  } else if (portal === 'chef') {
    const chefView = document.getElementById('view-chef');
    if (chefView) chefView.classList.add('active');
    document.getElementById('bnav-chef')?.classList.add('active');
    renderKdsTickets();
    window.location.hash = 'chef';
  } else if (portal === 'admin') {
    const adminView = document.getElementById('view-admin');
    if (adminView) adminView.classList.add('active');
    document.getElementById('bnav-admin')?.classList.add('active');
    renderAdminDashboard();
    renderAdminStock();
    window.location.hash = 'admin';
  }

  window.scrollTo({ top: 0, behavior: 'smooth' });
  refreshLucideIcons();
}

// ══ CHEF KITCHEN DISPLAY SYSTEM (KDS) RENDERING & CONTROLLER ══
function renderKdsTickets() {
  const container = document.getElementById('kds-tickets-container');
  if (!container) return;

  updateKitchenCounters();

  const filter = APP_STATE.kdsFilter || 'active';
  let filtered = [];

  if (filter === 'active') {
    filtered = MASTER_ORDERS.filter(o => o.status === 'received' || o.status === 'preparing' || o.status === 'ready');
  } else if (filter === 'received') {
    filtered = MASTER_ORDERS.filter(o => o.status === 'received');
  } else if (filter === 'preparing') {
    filtered = MASTER_ORDERS.filter(o => o.status === 'preparing');
  } else if (filter === 'ready') {
    filtered = MASTER_ORDERS.filter(o => o.status === 'ready');
  } else if (filter === 'completed') {
    // Orders completed today
    const todayStr = new Date().toISOString().split('T')[0];
    filtered = MASTER_ORDERS.filter(o => o.status === 'completed' && o.date === todayStr);
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 60px 20px; background: var(--bg-card); border: 1.5px dashed var(--border-card); border-radius: var(--radius-lg);">
        <div style="font-size: 2.8rem; margin-bottom: 10px;">🍳</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.35rem; color: var(--text-dark); margin-bottom: 6px;">
          ${filter === 'completed' ? 'No orders completed today yet' : 'No active orders in this kitchen queue'}
        </h3>
        <p style="font-size: 0.85rem; color: var(--text-muted); max-width: 400px; margin: 0 auto 18px;">
          Orders placed by customers will chime and appear here with complete recipe specifications and customization options.
        </p>
        <button class="kds-tool-btn primary" style="margin: 0 auto;" onclick="generateSimulatedOrder()">
          <i data-lucide="plus-circle"></i>
          <span>Send Test Order to Kitchen</span>
        </button>
      </div>
    `;
    refreshLucideIcons();
    return;
  }

  const nowMs = Date.now();
  let html = '';

  filtered.forEach(ord => {
    const elapsedMinutes = Math.max(0, Math.floor((nowMs - (ord.createdAt || nowMs)) / 60000));
    
    // Urgency coloring based on ticket age
    let urgencyClass = 'elapsed-normal';
    let urgencyIcon = 'clock';
    if (elapsedMinutes >= 12) {
      urgencyClass = 'elapsed-urgent';
      urgencyIcon = 'alert-triangle';
    } else if (elapsedMinutes >= 6) {
      urgencyClass = 'elapsed-warning';
    }

    const typeBadgeClass = (ord.orderType === 'Takeaway') ? 'type-takeaway' : 'type-dinein';
    const statusClass = `status-${ord.status || 'received'}`;

    // Items list markup
    let itemsHtml = '';
    (ord.items || []).forEach(item => {
      let optionLabels = [];
      const product = PRODUCTS.find(p => p.id === item.productId);
      if (product && item.selections) {
        (product.customizations || []).forEach(g => {
          const sel = item.selections[g.id];
          if (g.multiSelect && Array.isArray(sel)) {
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
      const noteStr = item.note ? `<div class="ticket-item-note">“${escapeHtml(item.note)}”</div>` : '';

      itemsHtml += `
        <div class="ticket-item-row">
          <span class="ticket-item-qty">${item.qty}×</span>
          <div class="ticket-item-details">
            <div class="ticket-item-name">${escapeHtml(item.name)}</div>
            ${optionsStr ? `<div class="ticket-item-options">${escapeHtml(optionsStr)}</div>` : ''}
            ${noteStr}
          </div>
        </div>
      `;
    });

    // Primary action button based on current ticket state
    let actionBtnHtml = '';
    if (ord.status === 'received') {
      actionBtnHtml = `
        <button class="ticket-btn-primary btn-kds-cook" onclick="kdsSetStatus('${ord.id}', 'preparing')">
          <span>🔥 Start Cooking / Grilling</span>
        </button>
      `;
    } else if (ord.status === 'preparing') {
      actionBtnHtml = `
        <button class="ticket-btn-primary btn-kds-ready" onclick="kdsSetStatus('${ord.id}', 'ready')">
          <span>🛎️ Mark Ready for Pickup</span>
        </button>
      `;
    } else if (ord.status === 'ready') {
      actionBtnHtml = `
        <button class="ticket-btn-primary btn-kds-complete" onclick="kdsSetStatus('${ord.id}', 'completed')">
          <span>✅ Mark Completed / Served</span>
        </button>
      `;
    } else {
      actionBtnHtml = `
        <div style="text-align:center; font-size:0.8rem; font-weight:700; color:#10B981; padding:6px;">
          ✓ Completed
        </div>
      `;
    }

    html += `
      <div class="kds-ticket-card ${statusClass}">
        <!-- Urgency & ID Strip -->
        <div class="ticket-urgency-strip">
          <span class="ticket-id-tag">#${ord.id}</span>
          <span class="ticket-elapsed ${urgencyClass}">
            <i data-lucide="${urgencyIcon}" style="width:12px; height:12px;"></i>
            <span>${elapsedMinutes}m ago</span>
          </span>
        </div>

        <!-- Meta Strip -->
        <div class="ticket-header-meta">
          <span class="ticket-ordertype-badge ${typeBadgeClass}">${escapeHtml(ord.orderType)}</span>
          <span>Time: ${ord.timestamp}</span>
        </div>

        <!-- Items Spec -->
        <div class="ticket-items-list">
          ${itemsHtml}
        </div>

        <!-- Ticket Footer & Action Button -->
        <div class="ticket-card-footer">
          ${actionBtnHtml}
          <div class="ticket-secondary-actions">
            <span class="ticket-subtotal-val">${formatMoney(ord.total)}</span>
            ${ord.status !== 'completed' && ord.status !== 'cancelled' ? `
              <button class="ticket-btn-cancel" onclick="kdsCancelOrder('${ord.id}')">Void / Cancel</button>
            ` : ''}
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  refreshLucideIcons();
}

function filterKdsOrders(filter) {
  APP_STATE.kdsFilter = filter;
  document.querySelectorAll('.kds-filter-tab').forEach(t => t.classList.remove('active'));
  document.getElementById(`kds-flt-${filter}`)?.classList.add('active');
  renderKdsTickets();
}

function kdsSetStatus(orderId, newStatus) {
  const ord = MASTER_ORDERS.find(o => o.id === orderId);
  if (!ord) return;

  ord.status = newStatus;
  if (newStatus === 'completed') ord.completedAt = Date.now();

  saveToStorage();
  updateKitchenCounters();
  renderKdsTickets();

  // If customer is on tracking view, update it too
  renderHistory();

  // Play audio chime
  if (newStatus === 'ready') {
    playKitchenChime('ready');
    toast(`Order #${orderId} marked READY!`, 3000);
  } else if (newStatus === 'preparing') {
    playKitchenChime('new_order');
    toast(`Order #${orderId} grilling started`, 2000);
  } else {
    toast(`Order #${orderId} marked completed`, 2000);
  }

  // Broadcast to other tabs
  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({
        type: 'STATUS_UPDATE',
        orderId: orderId,
        status: newStatus
      });
    } catch (e) {}
  }
}

function kdsCancelOrder(orderId) {
  if (!confirm(`Are you sure you want to cancel order #${orderId}?`)) return;
  const ord = MASTER_ORDERS.find(o => o.id === orderId);
  if (!ord) return;

  ord.status = 'cancelled';
  saveToStorage();
  updateKitchenCounters();
  renderKdsTickets();
  renderHistory();
  toast(`Order #${orderId} cancelled`);

  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({ type: 'STATUS_UPDATE', orderId, status: 'cancelled' });
    } catch (e) {}
  }
}

function updateKitchenCounters() {
  const activeCount = MASTER_ORDERS.filter(o => o.status === 'received' || o.status === 'preparing' || o.status === 'ready').length;
  const receivedCount = MASTER_ORDERS.filter(o => o.status === 'received').length;
  const preparingCount = MASTER_ORDERS.filter(o => o.status === 'preparing').length;
  const readyCount = MASTER_ORDERS.filter(o => o.status === 'ready').length;
  const todayStr = new Date().toISOString().split('T')[0];
  const completedTodayCount = MASTER_ORDERS.filter(o => o.status === 'completed' && o.date === todayStr).length;

  // Filter tabs counts
  const cntActive = document.getElementById('kds-cnt-active');
  const cntRec = document.getElementById('kds-cnt-received');
  const cntPrep = document.getElementById('kds-cnt-preparing');
  const cntReady = document.getElementById('kds-cnt-ready');
  const cntComp = document.getElementById('kds-cnt-completed');

  if (cntActive) cntActive.textContent = activeCount;
  if (cntRec) cntRec.textContent = receivedCount;
  if (cntPrep) cntPrep.textContent = preparingCount;
  if (cntReady) cntReady.textContent = readyCount;
  if (cntComp) cntComp.textContent = completedTodayCount;

  // Top Navbar Badge
  const navBadge = document.getElementById('chef-pending-badge');
  if (navBadge) {
    if (activeCount > 0) {
      navBadge.style.display = 'inline-block';
      navBadge.textContent = activeCount;
    } else {
      navBadge.style.display = 'none';
    }
  }

  // Bottom Nav Badge
  const bnavChefBadge = document.getElementById('bnav-chef-badge');
  if (bnavChefBadge) {
    if (activeCount > 0) {
      bnavChefBadge.style.display = 'flex';
      bnavChefBadge.textContent = activeCount;
    } else {
      bnavChefBadge.style.display = 'none';
    }
  }
}

function toggleKitchenAudio() {
  APP_STATE.audioEnabled = !APP_STATE.audioEnabled;
  const text = document.getElementById('kds-sound-text');
  const icon = document.getElementById('kds-sound-icon');
  if (text) text.textContent = APP_STATE.audioEnabled ? 'Chime: ON' : 'Chime: OFF';
  toast(`Kitchen sound ${APP_STATE.audioEnabled ? 'enabled' : 'muted'}`);
  if (APP_STATE.audioEnabled) playKitchenChime('new_order');
}

function generateSimulatedOrder() {
  const randomProducts = [
    { p: PRODUCTS.find(p => p.id === 'b001') || PRODUCTS[0], qty: 2, note: 'Extra crispy bacon, medium well' },
    { p: PRODUCTS.find(p => p.id === 'p001') || PRODUCTS[1], qty: 1, note: 'Cut into 8 slices' },
    { p: PRODUCTS.find(p => p.id === 'm001') || PRODUCTS[2], qty: 2, note: 'Extra whipped cream' }
  ];

  const orderId = 'AG-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toISOString().split('T')[0];

  const items = randomProducts.map(rp => ({
    productId: rp.p.id,
    name: rp.p.name,
    image: rp.p.image,
    basePrice: rp.p.basePrice,
    unitPrice: rp.p.basePrice,
    qty: rp.qty,
    selections: {},
    note: rp.note,
    total: rp.p.basePrice * rp.qty
  }));

  const subtotal = items.reduce((sum, i) => sum + i.total, 0);
  const service = Math.round(subtotal * CFG.serviceCharge);
  const total = subtotal + service;

  const simOrder = {
    id: orderId,
    timestamp: timeStr,
    date: dateStr,
    createdAt: Date.now(),
    orderType: Math.random() > 0.5 ? 'Dine-in' : 'Takeaway',
    items: items,
    subtotal: subtotal,
    service: service,
    total: total,
    status: 'received',
    statusLabel: 'Order Received',
    estimatedTime: CFG.estimatedTime
  };

  MASTER_ORDERS.unshift(simOrder);
  APP_STATE.orderHistory.unshift(simOrder);
  saveToStorage();
  updateKitchenCounters();
  renderKdsTickets();
  renderHistory();
  playKitchenChime('new_order');
  toast(`Test order #${orderId} generated & sent to kitchen!`, 3000);

  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({ type: 'NEW_ORDER', orderId, order: simOrder });
    } catch (e) {}
  }
}

// ══ ADMIN DASHBOARD, REVENUE REPORTING & ANALYTICS ══
function renderAdminDashboard() {
  const filter = APP_STATE.adminDateFilter || 'today';
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = yesterday.toISOString().split('T')[0];

  const sevenDaysAgoMs = now.getTime() - (7 * 24 * 60 * 60 * 1000);

  // Filter orders according to selected date window
  let filtered = [];
  if (filter === 'today') {
    filtered = MASTER_ORDERS.filter(o => o.date === todayStr);
  } else if (filter === 'yesterday') {
    filtered = MASTER_ORDERS.filter(o => o.date === yesterdayStr);
  } else if (filter === 'week') {
    filtered = MASTER_ORDERS.filter(o => (o.createdAt || 0) >= sevenDaysAgoMs);
  } else {
    filtered = [...MASTER_ORDERS];
  }

  // Exclude cancelled orders from revenue calculation
  const validOrders = filtered.filter(o => o.status !== 'cancelled');
  const totalRevenue = validOrders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalOrders = filtered.length;
  const aov = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;
  const activeKitchen = MASTER_ORDERS.filter(o => o.status === 'received' || o.status === 'preparing').length;

  // Lifetime revenue
  const lifetimeRevenue = MASTER_ORDERS
    .filter(o => o.status !== 'cancelled')
    .reduce((sum, o) => sum + (o.total || 0), 0);

  // Update KPI Cards
  const kpiRev = document.getElementById('kpi-revenue');
  const kpiRevSub = document.getElementById('kpi-revenue-sub');
  const kpiOrders = document.getElementById('kpi-orders-count');
  const kpiOrdersSub = document.getElementById('kpi-orders-sub');
  const kpiAov = document.getElementById('kpi-aov');
  const kpiKitchen = document.getElementById('kpi-kitchen-active');

  if (kpiRev) kpiRev.textContent = formatMoney(totalRevenue);
  if (kpiRevSub) kpiRevSub.textContent = `Lifetime: ${formatMoney(lifetimeRevenue)}`;
  if (kpiOrders) kpiOrders.textContent = totalOrders;
  if (kpiOrdersSub) kpiOrdersSub.textContent = `Lifetime: ${MASTER_ORDERS.length} orders`;
  if (kpiAov) kpiAov.textContent = formatMoney(aov);
  if (kpiKitchen) kpiKitchen.textContent = activeKitchen;

  // Render 7-Day Revenue Trend Chart
  renderAdminRevenueBars();

  // Render Category Breakdown Bars
  renderAdminCategoryShare(validOrders);

  // Render Top 5 Bestsellers Leaderboard
  renderAdminBestsellers(validOrders);

  // Render Orders Ledger Table
  renderAdminOrdersTable(filtered);
}

function renderAdminRevenueBars() {
  const container = document.getElementById('admin-revenue-bars');
  if (!container) return;

  const days = [];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = d.toISOString().split('T')[0];
    const dayName = i === 0 ? 'Today' : d.toLocaleDateString('en-US', { weekday: 'short' });

    const dayRevenue = MASTER_ORDERS
      .filter(o => o.date === dateStr && o.status !== 'cancelled')
      .reduce((sum, o) => sum + (o.total || 0), 0);

    days.push({ dateStr, dayName, revenue: dayRevenue });
  }

  const maxRev = Math.max(...days.map(d => d.revenue), 100);

  let html = '';
  days.forEach(d => {
    const heightPct = Math.max(6, Math.round((d.revenue / maxRev) * 100));
    html += `
      <div class="chart-bar-col">
        <div class="chart-bar-pill" style="height: ${heightPct}%;">
          <div class="chart-bar-tooltip">${formatMoney(d.revenue)}</div>
        </div>
        <span class="chart-bar-day">${d.dayName}</span>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderAdminCategoryShare(orders) {
  const container = document.getElementById('admin-category-breakdown');
  if (!container) return;

  const catMap = {};
  CATEGORIES.forEach(c => { catMap[c.id] = { name: c.name, count: 0, revenue: 0 }; });

  orders.forEach(o => {
    (o.items || []).forEach(item => {
      const prod = PRODUCTS.find(p => p.id === item.productId);
      const catId = prod ? prod.categoryId : 'burgers';
      if (catMap[catId]) {
        catMap[catId].count += item.qty;
        catMap[catId].revenue += item.total;
      }
    });
  });

  const sorted = Object.values(catMap).sort((a, b) => b.revenue - a.revenue).slice(0, 5);
  const totalCatRev = sorted.reduce((sum, c) => sum + c.revenue, 0) || 1;

  let html = '';
  sorted.forEach(c => {
    const pct = Math.round((c.revenue / totalCatRev) * 100);
    html += `
      <div class="cat-breakdown-row">
        <div class="cat-breakdown-meta">
          <span>${escapeHtml(c.name)} (${c.count} sold)</span>
          <span>${formatMoney(c.revenue)} • ${pct}%</span>
        </div>
        <div class="cat-progress-track">
          <div class="cat-progress-fill" style="width: ${pct}%"></div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function renderAdminBestsellers(orders) {
  const container = document.getElementById('admin-bestsellers-wrap');
  if (!container) return;

  const itemMap = {};
  orders.forEach(o => {
    (o.items || []).forEach(item => {
      const pid = item.productId || item.name;
      if (!itemMap[pid]) {
        itemMap[pid] = { name: item.name, units: 0, revenue: 0 };
      }
      itemMap[pid].units += item.qty;
      itemMap[pid].revenue += item.total;
    });
  });

  const ranked = Object.values(itemMap).sort((a, b) => b.revenue - a.revenue).slice(0, 5);

  if (ranked.length === 0) {
    container.innerHTML = `<p style="font-size:0.85rem; color:var(--text-muted); padding:10px 0;">No sales in this period yet.</p>`;
    return;
  }

  let rows = '';
  ranked.forEach((item, index) => {
    rows += `
      <tr>
        <td class="bestseller-rank">#${index + 1}</td>
        <td><strong>${escapeHtml(item.name)}</strong></td>
        <td>${item.units} sold</td>
        <td><strong>${formatMoney(item.revenue)}</strong></td>
      </tr>
    `;
  });

  container.innerHTML = `
    <table>
      <thead>
        <tr>
          <th>Rank</th>
          <th>Dish / Item</th>
          <th>Volume</th>
          <th>Revenue</th>
        </tr>
      </thead>
      <tbody>
        ${rows}
      </tbody>
    </table>
  `;
}

function renderAdminOrdersTable(orders) {
  const tbody = document.getElementById('admin-orders-table-body');
  if (!tbody) return;

  let list = [...orders];

  // Filter by status if specified
  const statusFilter = APP_STATE.adminStatusFilter || 'all';
  if (statusFilter !== 'all') {
    list = list.filter(o => o.status === statusFilter);
  }

  // Filter by search query if typed
  const query = (APP_STATE.adminSearchQuery || '').trim().toLowerCase();
  if (query.length > 0) {
    list = list.filter(o => {
      return o.id.toLowerCase().includes(query) ||
        (o.orderType && o.orderType.toLowerCase().includes(query)) ||
        (o.items && o.items.some(i => i.name.toLowerCase().includes(query)));
    });
  }

  if (list.length === 0) {
    tbody.innerHTML = `
      <tr>
        <td colspan="7" style="text-align:center; padding:30px; color:var(--text-muted);">
          No matching orders found.
        </td>
      </tr>
    `;
    return;
  }

  let html = '';
  list.forEach(ord => {
    const itemsSummary = (ord.items || [])
      .map(i => `${i.qty}× ${escapeHtml(i.name)}`)
      .join(', ');

    const chipClass = `chip-${ord.status || 'received'}`;

    html += `
      <tr>
        <td><strong>#${ord.id}</strong></td>
        <td>${ord.date} <span style="color:var(--text-muted); font-size:0.75rem;">${ord.timestamp}</span></td>
        <td><span class="ticket-ordertype-badge ${ord.orderType === 'Takeaway' ? 'type-takeaway' : 'type-dinein'}">${escapeHtml(ord.orderType)}</span></td>
        <td style="max-width:280px; overflow:hidden; text-overflow:ellipsis;" title="${escapeHtml(itemsSummary)}">${escapeHtml(itemsSummary)}</td>
        <td><strong>${formatMoney(ord.total)}</strong></td>
        <td><span class="status-chip ${chipClass}">${escapeHtml(ord.status)}</span></td>
        <td>
          <button class="btn-table-action" onclick="openOrderModal('${ord.id}')">View Ticket</button>
        </td>
      </tr>
    `;
  });

  tbody.innerHTML = html;
}

function handleAdminDateFilter(value) {
  APP_STATE.adminDateFilter = value;
  renderAdminDashboard();
}

function handleAdminStatusFilter(value) {
  APP_STATE.adminStatusFilter = value;
  renderAdminDashboard();
}

function handleAdminOrderSearch(query) {
  APP_STATE.adminSearchQuery = query;
  renderAdminDashboard();
}

// ══ MENU INVENTORY & 86 STOCK MANAGER ══
function renderAdminStock(filterQuery = '') {
  const container = document.getElementById('admin-stock-grid');
  if (!container) return;

  const q = (filterQuery || '').trim().toLowerCase();
  const prods = PRODUCTS.filter(p => {
    if (!q) return true;
    return p.name.toLowerCase().includes(q) || p.categoryId.toLowerCase().includes(q);
  });

  let html = '';
  prods.forEach(p => {
    const isAvailable = (APP_STATE.stockStatus && APP_STATE.stockStatus[p.id] !== undefined)
      ? APP_STATE.stockStatus[p.id]
      : (p.available !== false);

    html += `
      <div class="stock-item-card">
        <div class="stock-item-info">
          <img src="${p.image}" alt="${escapeHtml(p.name)}" class="stock-thumb" onerror="this.src='logo.png'">
          <div>
            <div class="stock-name">${escapeHtml(p.name)}</div>
            <div class="stock-price">${formatMoney(p.basePrice)} • ${p.categoryId}</div>
          </div>
        </div>
        <button class="stock-toggle-btn ${isAvailable ? 'stock-in' : 'stock-out'}" onclick="toggleItemStock('${p.id}')">
          ${isAvailable ? '✓ In Stock' : '✕ Sold Out (86)'}
        </button>
      </div>
    `;
  });

  container.innerHTML = html;
}

function toggleItemStock(productId) {
  if (!APP_STATE.stockStatus) APP_STATE.stockStatus = {};

  const current = (APP_STATE.stockStatus[productId] !== undefined)
    ? APP_STATE.stockStatus[productId]
    : true;

  APP_STATE.stockStatus[productId] = !current;
  saveToStorage();
  renderAdminStock();
  renderMenu();

  const prod = PRODUCTS.find(p => p.id === productId);
  const name = prod ? prod.name : 'Item';
  toast(`${name} is now ${APP_STATE.stockStatus[productId] ? 'Available' : 'Sold Out (86\'d)'}`);

  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({ type: 'STOCK_UPDATE', productId, inStock: APP_STATE.stockStatus[productId] });
    } catch (e) {}
  }
}

// ══ EXPORT ORDERS CSV SPREADSHEET ══
function exportOrdersCsv() {
  if (MASTER_ORDERS.length === 0) {
    toast('No orders to export');
    return;
  }

  let csv = 'Order ID,Date,Time,Order Type,Items,Subtotal,Service Charge,Total (ETB),Status\n';

  MASTER_ORDERS.forEach(o => {
    const itemsStr = (o.items || [])
      .map(i => `${i.qty}x ${i.name}`)
      .join(' | ')
      .replace(/"/g, '""');

    csv += `"${o.id}","${o.date}","${o.timestamp}","${o.orderType}","${itemsStr}",${o.subtotal || 0},${o.service || 0},${o.total || 0},"${o.status}"\n`;
  });

  const blob = new Blob([csv], { type: 'text/csv;charset=utf-8;' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = `Alemaya_Grilld_Orders_${new Date().toISOString().split('T')[0]}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast('Order report downloaded as CSV');
}

// ══ ORDER TICKET DETAIL MODAL (FOR CHEF & ADMIN) ══
function openOrderModal(orderId) {
  const ord = MASTER_ORDERS.find(o => o.id === orderId);
  if (!ord) return;

  const overlay = document.getElementById('order-modal-overlay');
  const modal = document.getElementById('order-detail-modal');
  const content = document.getElementById('order-modal-content');
  if (!modal || !content) return;

  let itemsHtml = '';
  (ord.items || []).forEach(item => {
    itemsHtml += `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid rgba(0,0,0,0.06); font-size:0.86rem;">
        <div>
          <strong>${item.qty}× ${escapeHtml(item.name)}</strong>
          ${item.note ? `<div style="font-size:0.75rem; color:#854D0E;">“${escapeHtml(item.note)}”</div>` : ''}
        </div>
        <span>${formatMoney(item.total)}</span>
      </div>
    `;
  });

  content.innerHTML = `
    <div style="margin-bottom:14px;">
      <span class="status-chip chip-${ord.status}">${escapeHtml(ord.status)}</span>
      <h2 style="font-family:var(--font-serif); font-size:1.5rem; margin-top:8px;">Order #${ord.id}</h2>
      <div style="font-size:0.82rem; color:var(--text-muted);">${ord.orderType} • Placed on ${ord.date} at ${ord.timestamp}</div>
    </div>

    <div style="margin:14px 0;">
      <h4 style="font-size:0.85rem; font-weight:700; color:var(--text-muted); margin-bottom:8px;">ITEMS BREAKDOWN</h4>
      ${itemsHtml}
    </div>

    <div style="background:var(--bg-subtle); padding:12px; border-radius:8px; margin:14px 0; font-size:0.85rem;">
      <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
        <span>Subtotal</span>
        <span>${formatMoney(ord.subtotal)}</span>
      </div>
      <div style="display:flex; justify-content:space-between; margin-bottom:4px;">
        <span>Service Charge (10%)</span>
        <span>${formatMoney(ord.service)}</span>
      </div>
      <div style="display:flex; justify-content:space-between; font-weight:800; font-size:1rem; border-top:1px solid var(--border-warm); padding-top:6px; margin-top:6px;">
        <span>Total</span>
        <span style="color:var(--brand-terracotta);">${formatMoney(ord.total)}</span>
      </div>
    </div>

    <!-- Quick Status Changer from Admin Modal -->
    <div style="margin-top:18px;">
      <label style="display:block; font-size:0.75rem; font-weight:700; color:var(--text-muted); margin-bottom:6px;">UPDATE ORDER STATUS</label>
      <div style="display:flex; gap:8px; flex-wrap:wrap;">
        <button class="btn-table-action" onclick="kdsSetStatus('${ord.id}', 'received'); closeOrderModal(); renderAdminDashboard();">Received</button>
        <button class="btn-table-action" onclick="kdsSetStatus('${ord.id}', 'preparing'); closeOrderModal(); renderAdminDashboard();">Grilling</button>
        <button class="btn-table-action" onclick="kdsSetStatus('${ord.id}', 'ready'); closeOrderModal(); renderAdminDashboard();">Ready</button>
        <button class="btn-table-action" onclick="kdsSetStatus('${ord.id}', 'completed'); closeOrderModal(); renderAdminDashboard();">Completed</button>
        <button class="btn-table-action" style="color:#DC2626;" onclick="kdsCancelOrder('${ord.id}'); closeOrderModal(); renderAdminDashboard();">Cancel</button>
      </div>
    </div>
  `;

  overlay.classList.add('open');
  modal.classList.add('open');
}

function closeOrderModal() {
  document.getElementById('order-modal-overlay')?.classList.remove('open');
  document.getElementById('order-detail-modal')?.classList.remove('open');
}

// ══ AUDIO SYNTHESIS CHIME (WEB AUDIO API) ══
function playKitchenChime(type = 'new_order') {
  if (!APP_STATE.audioEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!KITCHEN_AUDIO_CTX) KITCHEN_AUDIO_CTX = new AudioCtx();
    if (KITCHEN_AUDIO_CTX.state === 'suspended') KITCHEN_AUDIO_CTX.resume();

    const now = KITCHEN_AUDIO_CTX.currentTime;
    const osc = KITCHEN_AUDIO_CTX.createOscillator();
    const gain = KITCHEN_AUDIO_CTX.createGain();

    osc.connect(gain);
    gain.connect(KITCHEN_AUDIO_CTX.destination);

    if (type === 'ready') {
      // 3-tone cheerful ascending chime (Do - Mi - Sol)
      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.12);
      osc.frequency.setValueAtTime(783.99, now + 0.24);
      gain.gain.setValueAtTime(0.2, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.6);
      osc.start(now);
      osc.stop(now + 0.65);
    } else {
      // 2-tone pleasant kitchen ticket chime
      osc.type = 'triangle';
      osc.frequency.setValueAtTime(587.33, now);
      osc.frequency.setValueAtTime(880.00, now + 0.14);
      gain.gain.setValueAtTime(0.22, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc.start(now);
      osc.stop(now + 0.5);
    }
  } catch (e) {
    console.warn('Audio chime warning:', e);
  }
}

// ══ LIVE CLOCKS & TIMER INTERVALS ══
function initLiveClocks() {
  // Live ticking clock in KDS header
  setInterval(() => {
    const clock = document.getElementById('kds-live-clock');
    if (clock) {
      const now = new Date();
      clock.textContent = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit', second: '2-digit' });
    }
  }, 1000);

  // Re-render elapsed timers on KDS tickets every 30 seconds
  setInterval(() => {
    if (APP_STATE.portal === 'chef') {
      renderKdsTickets();
    }
  }, 30000);
}

// ══ REFRESH ALL ACTIVE VIEWS ══
function refreshAllViews() {
  updateCartUI();
  updateKitchenCounters();
  if (APP_STATE.portal === 'chef') renderKdsTickets();
  if (APP_STATE.portal === 'admin') {
    renderAdminDashboard();
    renderAdminStock();
  }
  if (APP_STATE.portal === 'customer') {
    renderHistory();
    renderMenu();
  }
}

// ══ SAMPLE REALISTIC DATA SEEDING (FOR INITIAL LAUNCH OR DEMO) ══
function seedInitialDemoOrders() {
  const now = new Date();
  const todayStr = now.toISOString().split('T')[0];

  const initialOrders = [
    {
      id: 'AG-3942',
      timestamp: '19:42',
      date: todayStr,
      createdAt: now.getTime() - (8 * 60 * 1000), // 8 mins ago
      orderType: 'Dine-in',
      items: [
        { productId: 'b001', name: 'Classic Smash', qty: 2, total: 360, note: 'Medium well, extra pickles' },
        { productId: 'm001', name: 'Belgian Chocolate Shake', qty: 2, total: 220 }
      ],
      subtotal: 580,
      service: 58,
      total: 638,
      status: 'preparing',
      statusLabel: 'Grilling & Cooking',
      estimatedTime: CFG.estimatedTime
    },
    {
      id: 'AG-4015',
      timestamp: '19:50',
      date: todayStr,
      createdAt: now.getTime() - (3 * 60 * 1000), // 3 mins ago
      orderType: 'Takeaway',
      items: [
        { productId: 'p001', name: 'Margherita Artisanal', qty: 1, total: 220, note: 'Extra basil' },
        { productId: 's001', name: 'Sweet Potato Fries', qty: 1, total: 90 }
      ],
      subtotal: 310,
      service: 31,
      total: 341,
      status: 'received',
      statusLabel: 'Order Received',
      estimatedTime: CFG.estimatedTime
    },
    {
      id: 'AG-3820',
      timestamp: '19:25',
      date: todayStr,
      createdAt: now.getTime() - (25 * 60 * 1000),
      orderType: 'Dine-in',
      items: [
        { productId: 'b001', name: 'Classic Smash', qty: 1, total: 180 },
        { productId: 'm001', name: 'Belgian Chocolate Shake', qty: 1, total: 110 }
      ],
      subtotal: 290,
      service: 29,
      total: 319,
      status: 'ready',
      statusLabel: 'Ready for Pickup',
      estimatedTime: CFG.estimatedTime
    },
    {
      id: 'AG-3710',
      timestamp: '18:50',
      date: todayStr,
      createdAt: now.getTime() - (60 * 60 * 1000),
      orderType: 'Dine-in',
      items: [
        { productId: 'b001', name: 'Classic Smash', qty: 3, total: 540 }
      ],
      subtotal: 540,
      service: 54,
      total: 594,
      status: 'completed',
      statusLabel: 'Completed',
      estimatedTime: CFG.estimatedTime
    }
  ];

  // Add historical orders for past 5 days for rich charts
  for (let i = 1; i <= 5; i++) {
    const pastDate = new Date(now);
    pastDate.setDate(pastDate.getDate() - i);
    const pastDateStr = pastDate.toISOString().split('T')[0];
    const pastRevOrders = Math.floor(3 + Math.random() * 4);

    for (let j = 0; j < pastRevOrders; j++) {
      const pastTotal = Math.floor(350 + Math.random() * 600);
      initialOrders.push({
        id: `AG-${Math.floor(2000 + Math.random() * 7000)}`,
        timestamp: `${12 + j}:30`,
        date: pastDateStr,
        createdAt: pastDate.getTime() + (j * 3600000),
        orderType: Math.random() > 0.4 ? 'Dine-in' : 'Takeaway',
        items: [
          { productId: 'b001', name: 'Classic Smash', qty: 2, total: 360 },
          { productId: 'm001', name: 'Belgian Chocolate Shake', qty: 1, total: 110 }
        ],
        subtotal: pastTotal - Math.round(pastTotal * 0.1),
        service: Math.round(pastTotal * 0.1),
        total: pastTotal,
        status: 'completed',
        statusLabel: 'Completed',
        estimatedTime: CFG.estimatedTime
      });
    }
  }

  MASTER_ORDERS = initialOrders;
  APP_STATE.orderHistory = initialOrders.slice(0, 3);
  saveToStorage();
}

function seedSampleData() {
  seedInitialDemoOrders();
  renderAdminDashboard();
  renderKdsTickets();
  renderHistory();
  toast('Demo dataset refreshed across kitchen and admin!');
}

// ══ STORAGE HELPERS ══
function saveToStorage() {
  try {
    localStorage.setItem('alemaya_cart', JSON.stringify(APP_STATE.cart));
    localStorage.setItem('alemaya_history', JSON.stringify(APP_STATE.orderHistory));
    localStorage.setItem('alemaya_master_orders', JSON.stringify(MASTER_ORDERS));
    localStorage.setItem('alemaya_stock', JSON.stringify(APP_STATE.stockStatus));
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

    const savedOrders = localStorage.getItem('alemaya_master_orders');
    if (savedOrders) MASTER_ORDERS = JSON.parse(savedOrders);

    const savedStock = localStorage.getItem('alemaya_stock');
    if (savedStock) APP_STATE.stockStatus = JSON.parse(savedStock);
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

