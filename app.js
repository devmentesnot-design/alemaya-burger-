// ═══════════════════════════════════════════════════════════════════════
// ALEMAYA GRILL'D - CORE APPLICATION JAVASCRIPT
// Professional Tabler Icons, Reverted Top Navbar, Single Unified Vertical List
// ═══════════════════════════════════════════════════════════════════════

// ══ CONFIGURATION ══
const CFG = {
  restaurantName: "Grill'd",
  currencySymbol: 'Br',
  serviceCharge: 0.00,
  estimatedTime: '15-25 min'
};

// ══ PROFESSIONAL LUCIDE REACT CATEGORY ICONS (BLACK STROKE) ══
let CATEGORIES = [
  {
    "id": "burger",
    "name": "Burger",
    "icon": "burger",
    "order": 1
  },
  {
    "id": "pizza",
    "name": "Pizza",
    "icon": "pizza",
    "order": 2
  },
  {
    "id": "spaghetti",
    "name": "Spaghetti",
    "icon": "soup",
    "order": 3
  },
  {
    "id": "sandwich",
    "name": "Sandwich",
    "icon": "sandwich",
    "order": 4
  },
  {
    "id": "burrito",
    "name": "Burrito",
    "icon": "wrap",
    "order": 5
  },
  {
    "id": "special-wrap",
    "name": "Special Wrap",
    "icon": "wrap",
    "order": 6
  },
  {
    "id": "rice",
    "name": "Rice",
    "icon": "soup",
    "order": 7
  },
  {
    "id": "chicken",
    "name": "Chicken",
    "icon": "package",
    "order": 8
  },
  {
    "id": "breakfast",
    "name": "Breakfast",
    "icon": "soup",
    "order": 9
  },
  {
    "id": "dessert",
    "name": "Dessert",
    "icon": "cake-slice",
    "order": 10
  },
  {
    "id": "extra",
    "name": "Extra",
    "icon": "package",
    "order": 11
  },
  {
    "id": "protein",
    "name": "Protein",
    "icon": "cup-soda",
    "order": 12
  },
  {
    "id": "superjuice",
    "name": "Superjuice",
    "icon": "citrus",
    "order": 13
  },
  {
    "id": "smoothies",
    "name": "Smoothies",
    "icon": "cup-soda",
    "order": 14
  },
  {
    "id": "milkshakes",
    "name": "Milkshakes",
    "icon": "ice-cream-2",
    "order": 15
  },
  {
    "id": "juice",
    "name": "Juice",
    "icon": "citrus",
    "order": 16
  }
];

// ══ CATEGORY IMAGES (FOR HEADER BANNER) ══
const CAT_IMAGES = {
  "burger": "burger_classic.jpg",
  "pizza": "pizza_margherita.jpg",
  "spaghetti": "pasta_carbonara.jpg",
  "sandwich": "chicken_sandwich.jpg",
  "burrito": "burrito_bowl.jpg",
  "special-wrap": "chicken_sandwich.jpg",
  "rice": "burrito_bowl.jpg",
  "chicken": "chicken_sandwich.jpg",
  "breakfast": "burrito_bowl.jpg",
  "dessert": "milkshake_chocolate.jpg",
  "extra": "burger_classic.jpg",
  "protein": "smoothie_tropical.jpg",
  "superjuice": "smoothie_tropical.jpg",
  "smoothies": "smoothie_tropical.jpg",
  "milkshakes": "milkshake_chocolate.jpg",
  "juice": "smoothie_tropical.jpg"
};

// ══ ALL MENU PRODUCTS ══
let PRODUCTS = [
  {
    "id": "item_57",
    "categoryId": "protein",
    "name": "Body Building",
    "badge": "FITNESS",
    "rating": 4.9,
    "reviewsCount": 258,
    "description": "Avocado, mango, papaya, peanut, banana, flax and honey.",
    "ingredients": [
      "Avocado",
      "mango",
      "papaya",
      "peanut",
      "banana",
      "flax and honey"
    ],
    "basePrice": 259,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_58",
    "categoryId": "protein",
    "name": "Muscle Building",
    "badge": "POWER",
    "rating": 4.9,
    "reviewsCount": 266,
    "description": "Avocado, papaya, banana, peanut and honey.",
    "ingredients": [
      "Avocado",
      "papaya",
      "banana",
      "peanut and honey"
    ],
    "basePrice": 259,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_59",
    "categoryId": "protein",
    "name": "Vegitable Special",
    "badge": "WELLNESS",
    "rating": 4.8,
    "reviewsCount": 224,
    "description": "Avocado, mango, papaya, flax, cucumber and honey.",
    "ingredients": [
      "Avocado",
      "mango",
      "papaya",
      "flax",
      "cucumber and honey"
    ],
    "basePrice": 259,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_60",
    "categoryId": "superjuice",
    "name": "Energy Booster",
    "badge": "REVITALIZE",
    "rating": 4.8,
    "reviewsCount": 263,
    "description": "Carrot, beetroot, apple and ginger.",
    "ingredients": [
      "Carrot",
      "beetroot",
      "apple and ginger"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_61",
    "categoryId": "superjuice",
    "name": "Cool Refresh",
    "badge": "HYDRATING",
    "rating": 4.8,
    "reviewsCount": 227,
    "description": "Watermelon, mint and lemon.",
    "ingredients": [
      "Watermelon",
      "mint and lemon"
    ],
    "basePrice": 219,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_62",
    "categoryId": "superjuice",
    "name": "Immunity Shoot",
    "badge": "IMMUNITY",
    "rating": 4.9,
    "reviewsCount": 139,
    "description": "Lemon, ginger, mint and honey.",
    "ingredients": [
      "Lemon",
      "ginger",
      "mint and honey"
    ],
    "basePrice": 219,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_63",
    "categoryId": "superjuice",
    "name": "Avocado Smoothie",
    "badge": "CREAMY",
    "rating": 4.9,
    "reviewsCount": 212,
    "description": "Avocado, banana, milk and honey.",
    "ingredients": [
      "Avocado",
      "banana",
      "milk and honey"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_64",
    "categoryId": "superjuice",
    "name": "Cooling Factor",
    "badge": "SUMMER",
    "rating": 4.8,
    "reviewsCount": 246,
    "description": "Mango, papaya, strawberry and honey.",
    "ingredients": [
      "Mango",
      "papaya",
      "strawberry and honey"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_65",
    "categoryId": "superjuice",
    "name": "Immunity Boost",
    "badge": "VITAMIN C",
    "rating": 4.9,
    "reviewsCount": 143,
    "description": "Carrot, orange, apple and honey.",
    "ingredients": [
      "Carrot",
      "orange",
      "apple and honey"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_66",
    "categoryId": "smoothies",
    "name": "Apple Burst",
    "badge": "FRUITY",
    "rating": 4.8,
    "reviewsCount": 175,
    "description": "Strawberry, apple, pineapple, orange, mint and honey.",
    "ingredients": [
      "Strawberry",
      "apple",
      "pineapple",
      "orange",
      "mint and honey"
    ],
    "basePrice": 259,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_67",
    "categoryId": "smoothies",
    "name": "Weight Loss",
    "badge": "DETOX",
    "rating": 4.8,
    "reviewsCount": 217,
    "description": "Mango, carrot and orange.",
    "ingredients": [
      "Mango",
      "carrot and orange"
    ],
    "basePrice": 229,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_68",
    "categoryId": "smoothies",
    "name": "Mango Lassie",
    "badge": "FAVORITE",
    "rating": 4.9,
    "reviewsCount": 251,
    "description": "Mango, chilled yogurt, cardamom, and honey.",
    "ingredients": [
      "Mango",
      "chilled yogurt",
      "cardamom",
      "and honey"
    ],
    "basePrice": 259,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_69",
    "categoryId": "smoothies",
    "name": "Apple Mix",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 262,
    "description": "Apple, pineapple, mango and honey.",
    "ingredients": [
      "Apple",
      "pineapple",
      "mango and honey"
    ],
    "basePrice": 229,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_70",
    "categoryId": "smoothies",
    "name": "Strawberry Mix",
    "badge": "BERRY",
    "rating": 4.9,
    "reviewsCount": 130,
    "description": "Strawberry, mango, avocado and honey.",
    "ingredients": [
      "Strawberry",
      "mango",
      "avocado and honey"
    ],
    "basePrice": 269,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_71",
    "categoryId": "smoothies",
    "name": "Fruit Punch",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 109,
    "description": "Chef's daily blend of freshly sliced seasonal fruits.",
    "ingredients": [
      "Fruit Punch",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 229,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_72",
    "categoryId": "milkshakes",
    "name": "Avocado Shake",
    "badge": "CREAMY",
    "rating": 4.9,
    "reviewsCount": 208,
    "description": "Fresh ripe avocado blended with chilled milk and honey.",
    "ingredients": [
      "Avocado Shake",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_73",
    "categoryId": "milkshakes",
    "name": "Mango Shake",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 114,
    "description": "Luscious mango chunks blended with creamy milk and honey.",
    "ingredients": [
      "Mango Shake",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_74",
    "categoryId": "milkshakes",
    "name": "Strawberry Shake",
    "badge": "BESTSELLER",
    "rating": 4.9,
    "reviewsCount": 175,
    "description": "Fresh strawberries blended with rich milk and sweet honey.",
    "ingredients": [
      "Strawberry Shake",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_75",
    "categoryId": "milkshakes",
    "name": "Papaya Shake",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 183,
    "description": "Sweet tropical papaya whipped with rich milk and honey.",
    "ingredients": [
      "Papaya Shake",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_76",
    "categoryId": "milkshakes",
    "name": "Banana Shake",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 238,
    "description": "Ripe bananas blended with thick cold milk and honey.",
    "ingredients": [
      "Banana Shake",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_77",
    "categoryId": "juice",
    "name": "Avocado Juice",
    "badge": "THICK",
    "rating": 4.9,
    "reviewsCount": 104,
    "description": "Pure fresh avocado layers with a hint of lime and honey.",
    "ingredients": [
      "Avocado Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 229,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_78",
    "categoryId": "juice",
    "name": "Mango Juice",
    "badge": "SWEET",
    "rating": 4.8,
    "reviewsCount": 114,
    "description": "100% freshly pressed ripe Ethiopian mango.",
    "ingredients": [
      "Mango Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_79",
    "categoryId": "juice",
    "name": "Papaya Juice",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 164,
    "description": "Pure freshly pressed sweet golden papaya.",
    "ingredients": [
      "Papaya Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 199,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_80",
    "categoryId": "juice",
    "name": "Pineapple Juice",
    "badge": "TANGY",
    "rating": 4.8,
    "reviewsCount": 129,
    "description": "Zesty freshly extracted tropical pineapple juice.",
    "ingredients": [
      "Pineapple Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 249,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_81",
    "categoryId": "juice",
    "name": "Carrot Juice",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 256,
    "description": "Freshly cold-pressed sweet highland carrots.",
    "ingredients": [
      "Carrot Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 199,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_82",
    "categoryId": "juice",
    "name": "Strawberry Juice",
    "badge": "FRESH",
    "rating": 4.8,
    "reviewsCount": 205,
    "description": "Cold-pressed fresh handpicked sweet strawberries.",
    "ingredients": [
      "Strawberry Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 239,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_83",
    "categoryId": "juice",
    "name": "Water Melon Juice",
    "badge": "COOL",
    "rating": 4.8,
    "reviewsCount": 252,
    "description": "Crisp and thirst-quenching cold fresh watermelon.",
    "ingredients": [
      "Water Melon Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 199,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_1",
    "categoryId": "burger",
    "name": "Grilled Special Burger",
    "badge": "CHEF'S SPECIAL",
    "rating": 4.9,
    "reviewsCount": 227,
    "description": "Fresh, grilled-to-order grilled special burger prepared daily with quality local ingredients.",
    "ingredients": [
      "Grilled Special Burger",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 799,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_2",
    "categoryId": "burger",
    "name": "Chicken Burger",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 248,
    "description": "Fresh, grilled-to-order chicken burger prepared daily with quality local ingredients.",
    "ingredients": [
      "Chicken Burger",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 809,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_3",
    "categoryId": "burger",
    "name": "Cheese Burger",
    "badge": "BESTSELLER",
    "rating": 4.9,
    "reviewsCount": 207,
    "description": "Fresh, grilled-to-order cheese burger prepared daily with quality local ingredients.",
    "ingredients": [
      "Cheese Burger",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 569,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_4",
    "categoryId": "burger",
    "name": "Beef Burger",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 119,
    "description": "Fresh, grilled-to-order beef burger prepared daily with quality local ingredients.",
    "ingredients": [
      "Beef Burger",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 369,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_5",
    "categoryId": "burger",
    "name": "BBQ Burger",
    "badge": "SMOKY",
    "rating": 4.8,
    "reviewsCount": 205,
    "description": "Fresh, grilled-to-order bbq burger prepared daily with quality local ingredients.",
    "ingredients": [
      "BBQ Burger",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 499,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_6",
    "categoryId": "pizza",
    "name": "Grilled Special Pizza",
    "badge": "CHEF'S CHOICE",
    "rating": 4.9,
    "reviewsCount": 137,
    "description": "Fresh, grilled-to-order grilled special pizza prepared daily with quality local ingredients.",
    "ingredients": [
      "Grilled Special Pizza",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 899,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_7",
    "categoryId": "pizza",
    "name": "Margarita Pizza",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 198,
    "description": "Fresh, grilled-to-order margarita pizza prepared daily with quality local ingredients.",
    "ingredients": [
      "Margarita Pizza",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 699,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_8",
    "categoryId": "pizza",
    "name": "Pepperoni Pizza",
    "badge": "BESTSELLER",
    "rating": 4.9,
    "reviewsCount": 189,
    "description": "Fresh, grilled-to-order pepperoni pizza prepared daily with quality local ingredients.",
    "ingredients": [
      "Pepperoni Pizza",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 799,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_9",
    "categoryId": "pizza",
    "name": "Chicken Pizza",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 168,
    "description": "Fresh, grilled-to-order chicken pizza prepared daily with quality local ingredients.",
    "ingredients": [
      "Chicken Pizza",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 869,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_10",
    "categoryId": "pizza",
    "name": "Pizza al Tuna",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 127,
    "description": "Fresh, grilled-to-order pizza al tuna prepared daily with quality local ingredients.",
    "ingredients": [
      "Pizza al Tuna",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 689,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_11",
    "categoryId": "pizza",
    "name": "Veggie Pizza",
    "badge": "VEGETARIAN",
    "rating": 4.8,
    "reviewsCount": 240,
    "description": "Fresh, grilled-to-order veggie pizza prepared daily with quality local ingredients.",
    "ingredients": [
      "Veggie Pizza",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 599,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_12",
    "categoryId": "spaghetti",
    "name": "Spaghetti with Chicken Vegetables",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 249,
    "description": "Fresh, grilled-to-order spaghetti with chicken vegetables prepared daily with quality local ingredients.",
    "ingredients": [
      "Spaghetti with Chicken Vegetables",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 649,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_13",
    "categoryId": "spaghetti",
    "name": "Spaghetti",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 146,
    "description": "Fresh, grilled-to-order spaghetti prepared daily with quality local ingredients.",
    "ingredients": [
      "Spaghetti",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 419,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_14",
    "categoryId": "spaghetti",
    "name": "Spaghetti with Bologna",
    "badge": "FAVORITE",
    "rating": 4.8,
    "reviewsCount": 185,
    "description": "Fresh, grilled-to-order spaghetti with bologna prepared daily with quality local ingredients.",
    "ingredients": [
      "Spaghetti with Bologna",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 469,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_15",
    "categoryId": "spaghetti",
    "name": "Spaghetti Bologna with Cheese",
    "badge": "BESTSELLER",
    "rating": 4.9,
    "reviewsCount": 133,
    "description": "Fresh, grilled-to-order spaghetti bologna with cheese prepared daily with quality local ingredients.",
    "ingredients": [
      "Spaghetti Bologna with Cheese",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 469,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_16",
    "categoryId": "sandwich",
    "name": "Egg Sandwich",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 137,
    "description": "Fresh, grilled-to-order egg sandwich prepared daily with quality local ingredients.",
    "ingredients": [
      "Egg Sandwich",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 449,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_17",
    "categoryId": "sandwich",
    "name": "Club Sandwich",
    "badge": "SIGNATURE",
    "rating": 4.9,
    "reviewsCount": 118,
    "description": "Fresh, grilled-to-order club sandwich prepared daily with quality local ingredients.",
    "ingredients": [
      "Club Sandwich",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 799,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_18",
    "categoryId": "sandwich",
    "name": "Veg Club Sandwich",
    "badge": "VEGGIE",
    "rating": 4.7,
    "reviewsCount": 164,
    "description": "Fresh, grilled-to-order veg club sandwich prepared daily with quality local ingredients.",
    "ingredients": [
      "Veg Club Sandwich",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 309,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_19",
    "categoryId": "sandwich",
    "name": "Cheese Sandwich",
    "badge": "",
    "rating": 4.6,
    "reviewsCount": 154,
    "description": "Fresh, grilled-to-order cheese sandwich prepared daily with quality local ingredients.",
    "ingredients": [
      "Cheese Sandwich",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 409,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_20",
    "categoryId": "sandwich",
    "name": "Tuna Sandwich",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 274,
    "description": "Fresh, grilled-to-order tuna sandwich prepared daily with quality local ingredients.",
    "ingredients": [
      "Tuna Sandwich",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 709,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_21",
    "categoryId": "burrito",
    "name": "Chicken Burrito",
    "badge": "BESTSELLER",
    "rating": 4.9,
    "reviewsCount": 120,
    "description": "Fresh, grilled-to-order chicken burrito prepared daily with quality local ingredients.",
    "ingredients": [
      "Chicken Burrito",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 1066,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_22",
    "categoryId": "burrito",
    "name": "Beef Burrito",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 103,
    "description": "Fresh, grilled-to-order beef burrito prepared daily with quality local ingredients.",
    "ingredients": [
      "Beef Burrito",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 966,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_23",
    "categoryId": "burrito",
    "name": "Chicken Shawarma",
    "badge": "HOUSE SPECIAL",
    "rating": 4.9,
    "reviewsCount": 107,
    "description": "Fresh, grilled-to-order chicken shawarma prepared daily with quality local ingredients.",
    "ingredients": [
      "Chicken Shawarma",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 899,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_24",
    "categoryId": "burrito",
    "name": "Chicken Breast Plate",
    "badge": "HIGH PROTEIN",
    "rating": 4.9,
    "reviewsCount": 245,
    "description": "Fresh, grilled-to-order chicken breast plate prepared daily with quality local ingredients.",
    "ingredients": [
      "Chicken Breast Plate",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 1099,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_25",
    "categoryId": "burrito",
    "name": "Veggie Burrito",
    "badge": "VEGGIE",
    "rating": 4.7,
    "reviewsCount": 263,
    "description": "Fresh, grilled-to-order veggie burrito prepared daily with quality local ingredients.",
    "ingredients": [
      "Veggie Burrito",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 566,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_26",
    "categoryId": "special-wrap",
    "name": "Beef with Cheese Wrap",
    "badge": "BESTSELLER",
    "rating": 4.8,
    "reviewsCount": 138,
    "description": "Fresh, grilled-to-order beef with cheese wrap prepared daily with quality local ingredients.",
    "ingredients": [
      "Beef with Cheese Wrap",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 569,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_27",
    "categoryId": "special-wrap",
    "name": "Chicken with Cheese Wrap",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 230,
    "description": "Fresh, grilled-to-order chicken with cheese wrap prepared daily with quality local ingredients.",
    "ingredients": [
      "Chicken with Cheese Wrap",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 659,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_28",
    "categoryId": "special-wrap",
    "name": "Tuna with Cheese Wrap",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 175,
    "description": "Fresh, grilled-to-order tuna with cheese wrap prepared daily with quality local ingredients.",
    "ingredients": [
      "Tuna with Cheese Wrap",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 500,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_29",
    "categoryId": "special-wrap",
    "name": "Beef Chicken & Cheese Wrap",
    "badge": "SUPER MIX",
    "rating": 4.9,
    "reviewsCount": 266,
    "description": "Fresh, grilled-to-order beef chicken & cheese wrap prepared daily with quality local ingredients.",
    "ingredients": [
      "Beef Chicken & Cheese Wrap",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 579,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_30",
    "categoryId": "special-wrap",
    "name": "Fasting Tuna Wrap",
    "badge": "FASTING",
    "rating": 4.7,
    "reviewsCount": 217,
    "description": "Fresh, grilled-to-order fasting tuna wrap prepared daily with quality local ingredients.",
    "ingredients": [
      "Fasting Tuna Wrap",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 449,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_31",
    "categoryId": "rice",
    "name": "Rice",
    "badge": "",
    "rating": 4.6,
    "reviewsCount": 253,
    "description": "Fresh, grilled-to-order rice prepared daily with quality local ingredients.",
    "ingredients": [
      "Rice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 229,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_32",
    "categoryId": "rice",
    "name": "Rice with Bologna",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 138,
    "description": "Fresh, grilled-to-order rice with bologna prepared daily with quality local ingredients.",
    "ingredients": [
      "Rice with Bologna",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 329,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_33",
    "categoryId": "rice",
    "name": "Rice Bologna with Cheese",
    "badge": "POPULAR",
    "rating": 4.8,
    "reviewsCount": 242,
    "description": "Fresh, grilled-to-order rice bologna with cheese prepared daily with quality local ingredients.",
    "ingredients": [
      "Rice Bologna with Cheese",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 379,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_34",
    "categoryId": "chicken",
    "name": "Grilled Chicken",
    "badge": "CHEF'S SPECIAL",
    "rating": 4.9,
    "reviewsCount": 164,
    "description": "Fresh, grilled-to-order grilled chicken prepared daily with quality local ingredients.",
    "ingredients": [
      "Grilled Chicken",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 1379,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_35",
    "categoryId": "chicken",
    "name": "Grilled Chicken Bowl",
    "badge": "HEALTHY",
    "rating": 4.9,
    "reviewsCount": 152,
    "description": "Fresh, grilled-to-order grilled chicken bowl prepared daily with quality local ingredients.",
    "ingredients": [
      "Grilled Chicken Bowl",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 999,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_36",
    "categoryId": "chicken",
    "name": "Grilled Beef Bowl",
    "badge": "PROTEIN BOWL",
    "rating": 4.8,
    "reviewsCount": 281,
    "description": "Tender grilled spiced beef served with fresh garden greens and savory house garnish.",
    "ingredients": [
      "Grilled Beef Bowl",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 789,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_37",
    "categoryId": "breakfast",
    "name": "Special Fetira",
    "badge": "TRADITIONAL",
    "rating": 4.9,
    "reviewsCount": 216,
    "description": "Crispy layered pastry served warm with eggs and sweet natural honey.",
    "ingredients": [
      "Special Fetira",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 439,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_38",
    "categoryId": "breakfast",
    "name": "Normal Fetira",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 236,
    "description": "Crispy freshly fried traditional fetira pastry.",
    "ingredients": [
      "Normal Fetira",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 309,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_39",
    "categoryId": "breakfast",
    "name": "Special Chechebsa",
    "badge": "POPULAR",
    "rating": 4.9,
    "reviewsCount": 247,
    "description": "Torn flatbread pan-fried with spiced clarified butter, berbere, honey, and yogurt.",
    "ingredients": [
      "Torn flatbread pan-fried with spiced clarified butter",
      "berbere",
      "honey",
      "and yogurt"
    ],
    "basePrice": 469,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_40",
    "categoryId": "breakfast",
    "name": "Normal Chechebsa",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 217,
    "description": "Traditional Ethiopian breakfast shredded flatbread tossed with aromatic spiced butter.",
    "ingredients": [
      "Normal Chechebsa",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 369,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_41",
    "categoryId": "breakfast",
    "name": "Tikur Teff Chechebsa",
    "badge": "HEALTHY TEFF",
    "rating": 4.9,
    "reviewsCount": 230,
    "description": "Nutritious whole black teff chechebsa with Ethiopian spiced butter.",
    "ingredients": [
      "Tikur Teff Chechebsa",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 399,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_42",
    "categoryId": "breakfast",
    "name": "Scrambled Egg",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 175,
    "description": "Farm fresh eggs scrambled with tomatoes, onions, and jalapeño peppers.",
    "ingredients": [
      "Farm fresh eggs scrambled with tomatoes",
      "onions",
      "and jalapeño peppers"
    ],
    "basePrice": 369,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_43",
    "categoryId": "breakfast",
    "name": "Plain Omelette",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 179,
    "description": "Fluffy 3-egg skillet omelette cooked with fresh herbs.",
    "ingredients": [
      "Plain Omelette",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 399,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_44",
    "categoryId": "breakfast",
    "name": "Cheese Omelette",
    "badge": "BESTSELLER",
    "rating": 4.8,
    "reviewsCount": 226,
    "description": "Folded golden omelette stuffed with gooey melted mozzarella and cheddar.",
    "ingredients": [
      "Cheese Omelette",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 449,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_45",
    "categoryId": "breakfast",
    "name": "Lasagna",
    "badge": "OVEN BAKED",
    "rating": 4.8,
    "reviewsCount": 149,
    "description": "Rich layers of pasta sheets, savory minced meat sauce, creamy bechamel, and melted cheese.",
    "ingredients": [
      "Rich layers of pasta sheets",
      "savory minced meat sauce",
      "creamy bechamel",
      "and melted cheese"
    ],
    "basePrice": 799,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_46",
    "categoryId": "dessert",
    "name": "Pan Cake",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 195,
    "description": "Fluffy golden pancake stack drizzled with pure honey and whipped butter.",
    "ingredients": [
      "Pan Cake",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 249,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_47",
    "categoryId": "dessert",
    "name": "Waffle & Teff Waffle",
    "badge": "SIGNATURE",
    "rating": 4.9,
    "reviewsCount": 174,
    "description": "Crisp Belgian waffle made with teff flour, served with maple drizzle and fresh fruit.",
    "ingredients": [
      "Crisp Belgian waffle made with teff flour",
      "served with maple drizzle and fresh fruit"
    ],
    "basePrice": 299,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_48",
    "categoryId": "dessert",
    "name": "French Toast",
    "badge": "",
    "rating": 4.7,
    "reviewsCount": 103,
    "description": "Golden pan-fried brioche soaked in vanilla custard and cinnamon sugar.",
    "ingredients": [
      "French Toast",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 199,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_49",
    "categoryId": "extra",
    "name": "Cheese",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 266,
    "description": "Extra melted cheddar or mozzarella slice.",
    "ingredients": [
      "Cheese",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 149,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_50",
    "categoryId": "extra",
    "name": "Chicken",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 219,
    "description": "Extra portion of flame grilled chicken breast.",
    "ingredients": [
      "Chicken",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 169,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_51",
    "categoryId": "extra",
    "name": "Egg",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 168,
    "description": "One fried or boiled farm egg.",
    "ingredients": [
      "Egg",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 45,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_52",
    "categoryId": "extra",
    "name": "Tuna",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 147,
    "description": "Extra portion of premium flaked tuna.",
    "ingredients": [
      "Tuna",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 269,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_53",
    "categoryId": "extra",
    "name": "Mayonnaise",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 178,
    "description": "Side cup of creamy garlic mayonnaise.",
    "ingredients": [
      "Mayonnaise",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 79,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_54",
    "categoryId": "extra",
    "name": "Honey",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 209,
    "description": "Pure local organic natural honey.",
    "ingredients": [
      "Honey",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 59,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_55",
    "categoryId": "extra",
    "name": "Beef",
    "badge": "",
    "rating": 4.8,
    "reviewsCount": 179,
    "description": "Extra flame grilled 100% pure beef patty.",
    "ingredients": [
      "Beef",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 149,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_56",
    "categoryId": "protein",
    "name": "Alemaya Special",
    "badge": "SIGNATURE",
    "rating": 4.9,
    "reviewsCount": 114,
    "description": "Orange, apple, avocado, mango, banana and honey.",
    "ingredients": [
      "Orange",
      "apple",
      "avocado",
      "mango",
      "banana and honey"
    ],
    "basePrice": 259,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_84",
    "categoryId": "juice",
    "name": "Orange Juice",
    "badge": "CITRUS",
    "rating": 4.9,
    "reviewsCount": 171,
    "description": "Freshly squeezed sweet highland oranges.",
    "ingredients": [
      "Orange Juice",
      "House Seasoning",
      "Fresh Ingredients"
    ],
    "basePrice": 269,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  },
  {
    "id": "item_85",
    "categoryId": "juice",
    "name": "Mixed Juice",
    "badge": "SPRIS SIGNATURE",
    "rating": 4.9,
    "reviewsCount": 156,
    "description": "Traditional Ethiopian layered Spris juice (Avocado, Mango, Papaya, and Guava).",
    "ingredients": [
      "Traditional Ethiopian layered Spris juice (Avocado",
      "Mango",
      "Papaya",
      "and Guava)"
    ],
    "basePrice": 279,
    "image": "https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg",
    "available": true,
    "customizations": []
  }
];

// ══ APPLICATION STATE & MASTER STORES ══
let MASTER_ORDERS = [];
let EXTRAS = [
  { id: 'ext_cheese', name: 'Extra Melted Cheese', price: 149, categories: ['burger', 'sandwich', 'pizza', 'spaghetti', 'burrito', 'special-wrap'], available: true },
  { id: 'ext_beef', name: 'Extra Flame Grilled Beef Patty', price: 169, categories: ['burger', 'sandwich', 'burrito', 'rice'], available: true },
  { id: 'ext_chicken', name: 'Extra Flame Grilled Chicken', price: 169, categories: ['burger', 'sandwich', 'burrito', 'special-wrap', 'rice', 'chicken'], available: true },
  { id: 'ext_egg', name: 'Extra Farm Egg', price: 45, categories: ['burger', 'sandwich', 'breakfast', 'rice'], available: true },
  { id: 'ext_tuna', name: 'Extra Premium Tuna', price: 269, categories: ['sandwich', 'special-wrap', 'rice'], available: true },
  { id: 'ext_mayo', name: 'Creamy Mayonnaise', price: 79, categories: ['burger', 'sandwich', 'special-wrap', 'chicken'], available: true },
  { id: 'ext_honey', name: 'Organic Pure Honey', price: 59, categories: ['smoothies', 'juice', 'milkshakes', 'superjuice', 'dessert', 'breakfast'], available: true },
  { id: 'ext_protein', name: 'Whey Protein Scoop', price: 199, categories: ['protein', 'smoothies', 'milkshakes'], available: true },
  { id: 'ext_icecream', name: 'Vanilla Ice Cream Scoop', price: 89, categories: ['dessert', 'milkshakes'], available: true },
  { id: 'ext_jalapeno', name: 'Spicy Pickled Jalapeños', price: 65, categories: ['burger', 'pizza', 'sandwich', 'burrito', 'special-wrap'], available: true }
];
let KITCHEN_AUDIO_CTX = null;
let SYNC_CHANNEL = null;

let APP_STATE = {
  portal: 'customer',           // 'customer', 'chef', 'admin'
  currentTab: 'menu',           // 'menu', 'orders', 'chef', 'admin'
  ordersSubTab: 'cart',         // 'cart' or 'history'
  adminSubTab: 'overview',      // 'overview', 'items', 'categories', 'orders', 'tables'
  activeCategory: 'burger',
  searchQuery: '',
  orderType: 'Dine-in',         // 'Dine-in' or 'Takeaway'
  activeTable: null,            // { id, name, token, capacity, active }
  tables: [],                   // Loaded tables list from backend
  tableFilter: 'all',           // 'all', 'active', 'inactive'
  tableSearchQuery: '',
  cart: [],
  orderHistory: [],
  stockStatus: {},              // { [productId]: boolean }
  kdsFilter: 'active',          // 'active', 'received', 'preparing', 'ready', 'completed'
  adminDateFilter: 'today',     // 'today', 'yesterday', 'week', 'all'
  adminStatusFilter: 'all',     // 'all', 'received', 'preparing', 'ready', 'completed', 'cancelled'
  adminSearchQuery: '',
  audioEnabled: true,
  settings: { takeawayFee: 0, adminPassword: 'admin', kitchenPassword: 'kitchen' }, // Global settings from backend
  sheet: {
    product: null,
    selections: {},
    qty: 1,
    note: '',
    editCartIndex: -1
  }
};

// ══ EXTRACT TABLE FROM URL (QUERY PARAMS OR HASH) ══
function extractTableFromUrl() {
  try {
    let token = null;

    // 1. Direct window.location.search (?table=06, ?tableToken=06, ?tbl=06, ?t=06)
    if (window.location.search) {
      const sp = new URLSearchParams(window.location.search);
      token = sp.get('table') || sp.get('tableToken') || sp.get('tbl') || sp.get('t');
    }

    // 2. Check window.location.hash (#menu?table=06 or #table=06 or #?table=06)
    if (!token && window.location.hash) {
      const h = window.location.hash;
      if (h.includes('?')) {
        const hp = new URLSearchParams(h.substring(h.indexOf('?') + 1));
        token = hp.get('table') || hp.get('tableToken') || hp.get('tbl') || hp.get('t');
      }
      if (!token) {
        const m = h.match(/[?&#](?:table|tabletoken|tbl|t)=([^&#]+)/i);
        if (m && m[1]) token = decodeURIComponent(m[1]);
      }
    }

    // 3. Fallback regex on complete window.location.href
    if (!token && window.location.href) {
      const m = window.location.href.match(/[?&](?:table|tableToken|tbl|t)=([^&#]+)/i);
      if (m && m[1]) token = decodeURIComponent(m[1]);
    }

    if (token) {
      token = token.trim();
      const cleanNum = token.replace(/^(table|tbl)[\s\-_]*/i, '').trim();
      const displayName = /^\d+$/.test(cleanNum) ? `Table ${cleanNum}` : (token.toLowerCase().startsWith('table') ? token : `Table ${token}`);
      const tableData = {
        id: `table-${cleanNum || token}`,
        name: displayName,
        tableNumber: cleanNum || token,
        token: token,
        capacity: 4,
        active: true,
        fromUrl: true
      };
      APP_STATE.activeTable = tableData;
      APP_STATE.orderType = 'Dine-in';
      try {
        localStorage.setItem('alemaya_active_table', JSON.stringify(tableData));
        sessionStorage.setItem('alemaya_active_table', JSON.stringify(tableData));
      } catch {}
      console.log('[TABLE ASSIGNED FROM URL]', tableData);
      return tableData;
    }
  } catch (e) {
    console.warn('[TABLE EXTRACT WARNING]', e);
  }
  return null;
}

// Immediate extraction on script parse
extractTableFromUrl();


// ══ CATEGORY ICON SVG MAPPINGS (LUCIDE BLACK STROKE) ══
const ICON_SVGS = {
  'burger': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a8 8 0 0 1 16 0H4z"/><path d="M4 15h16"/><path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1H5v1z"/><path d="M7 13c1 0 1.5.8 2.5.8s1.5-.8 2.5-.8 1.5.8 2.5.8 1.5-.8 2.5-.8"/></svg>`,
  'pizza': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pizza"><path d="m12 2-8.5 18a2 2 0 0 0 2.2 2.7 26.3 26.3 0 0 0 12.6 0 2 2 0 0 0 2.2-2.7L12 2Z"/><path d="M10 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><circle cx="14" cy="9" r="1" fill="#000000"/></svg>`,
  'spaghetti': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-soup"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M7 3v3"/><path d="M12 3v3"/><path d="M17 3v3"/></svg>`,
  'sandwich': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sandwich"><path d="m2.37 11.22 7.84-8.08a2.5 2.5 0 0 1 3.56 0l7.86 8.08a1.5 1.5 0 0 1-1.07 2.54H3.44a1.5 1.5 0 0 1-1.07-2.54Z"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M3 14h18"/><path d="M12 14v6"/></svg>`,
  'burrito': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 5-8.5 8.5a4.2 4.2 0 0 1-6-6L13 3l6 2z"/><path d="m5 13 6 6a4.2 4.2 0 0 0 6-6l-2-2"/><path d="m9 9 4 4"/><path d="m12 6 4 4"/></svg>`,
  'special-wrap': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 5-8.5 8.5a4.2 4.2 0 0 1-6-6L13 3l6 2z"/><path d="m5 13 6 6a4.2 4.2 0 0 0 6-6l-2-2"/><path d="m9 9 4 4"/><path d="m12 6 4 4"/></svg>`,
  'rice': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-soup"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M7 3v3"/><path d="M12 3v3"/><path d="M17 3v3"/></svg>`,
  'chicken': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick"><path d="m14 10 2.5-2.5a3.54 3.54 0 0 1 5 5L19 15"/><path d="M10 14A5.5 5.5 0 0 1 2 6.5C2 3.5 4.5 1 7.5 1A5.5 5.5 0 0 1 15 8.5"/><path d="m14 10-4 4"/><circle cx="19" cy="19" r="2"/><circle cx="21" cy="15" r="2"/></svg>`,
  'breakfast': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-egg-fried"><circle cx="11.5" cy="12.5" r="3.5"/><path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 6 3 8.5 3 3.5 0 4 2 4 6 0 4-2 8-6 8-2.5 0-3 2-6.5 2-4.5 0-6.5-3.5-6.5-7 0-2 0-4 0-6Z"/></svg>`,
  'dessert': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-slice"><circle cx="9" cy="7" r="2"/><path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"/><path d="M16 13H3"/><path d="M16 17H3"/></svg>`,
  'extra': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m21 8-2 12H5L3 8"/><path d="M10 12v5"/><path d="M14 12v5"/><path d="M7 4h10l4 4H3l4-4Z"/></svg>`,
  'protein': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>`,
  'superjuice': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glass-water"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>`,
  'smoothies': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cup-soda"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.5a2 2 0 0 0 2-1.72L18 8"/><path d="M5 8h14"/><path d="m7 15 10-4"/><path d="m12 2 1 6"/></svg>`,
  'milkshakes': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ice-cream-2"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm0 0v5"/><path d="M4 11a8 8 0 1 1 16 0"/></svg>`,
  'juice': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-citrus"><path d="M21.66 10.44a10 10 0 1 0-8.1 11.22 10.05 10.05 0 0 0 8.1-11.22Z"/><path d="M12 12 8.5 7.5"/><path d="M12 12v6"/><path d="m12 12 5.5-2.5"/></svg>`,
  burger: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a8 8 0 0 1 16 0H4z"/><path d="M4 15h16"/><path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1H5v1z"/><path d="M7 13c1 0 1.5.8 2.5.8s1.5-.8 2.5-.8 1.5.8 2.5.8 1.5-.8 2.5-.8"/></svg>`,
  burgers: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 11a8 8 0 0 1 16 0H4z"/><path d="M4 15h16"/><path d="M5 19a2 2 0 0 0 2 2h10a2 2 0 0 0 2-2v-1H5v1z"/><path d="M7 13c1 0 1.5.8 2.5.8s1.5-.8 2.5-.8 1.5.8 2.5.8 1.5-.8 2.5-.8"/></svg>`,
  pizza: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-pizza"><path d="m12 2-8.5 18a2 2 0 0 0 2.2 2.7 26.3 26.3 0 0 0 12.6 0 2 2 0 0 0 2.2-2.7L12 2Z"/><path d="M10 16a2 2 0 1 0 0-4 2 2 0 0 0 0 4Z"/><circle cx="14" cy="9" r="1" fill="#000000"/></svg>`,
  wrap: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 5-8.5 8.5a4.2 4.2 0 0 1-6-6L13 3l6 2z"/><path d="m5 13 6 6a4.2 4.2 0 0 0 6-6l-2-2"/><path d="m9 9 4 4"/><path d="m12 6 4 4"/></svg>`,
  wraps: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m19 5-8.5 8.5a4.2 4.2 0 0 1-6-6L13 3l6 2z"/><path d="m5 13 6 6a4.2 4.2 0 0 0 6-6l-2-2"/><path d="m9 9 4 4"/><path d="m12 6 4 4"/></svg>`,
  sides: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m21 8-2 12H5L3 8"/><path d="M10 12v5"/><path d="M14 12v5"/><path d="M7 4h10l4 4H3l4-4Z"/></svg>`,
  package: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-package"><path d="m21 8-2 12H5L3 8"/><path d="M10 12v5"/><path d="M14 12v5"/><path d="M7 4h10l4 4H3l4-4Z"/></svg>`,
  drinks: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cup-soda"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.5a2 2 0 0 0 2-1.72L18 8"/><path d="M5 8h14"/><path d="m7 15 10-4"/><path d="m12 2 1 6"/></svg>`,
  'cup-soda': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cup-soda"><path d="m6 8 1.75 12.28a2 2 0 0 0 2 1.72h4.5a2 2 0 0 0 2-1.72L18 8"/><path d="M5 8h14"/><path d="m7 15 10-4"/><path d="m12 2 1 6"/></svg>`,
  pasta: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-soup"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M7 3v3"/><path d="M12 3v3"/><path d="M17 3v3"/></svg>`,
  soup: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-soup"><path d="M12 21a9 9 0 0 0 9-9H3a9 9 0 0 0 9 9Z"/><path d="M7 21h10"/><path d="M19.5 12 22 6"/><path d="M7 3v3"/><path d="M12 3v3"/><path d="M17 3v3"/></svg>`,
  sandwiches: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sandwich"><path d="m2.37 11.22 7.84-8.08a2.5 2.5 0 0 1 3.56 0l7.86 8.08a1.5 1.5 0 0 1-1.07 2.54H3.44a1.5 1.5 0 0 1-1.07-2.54Z"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M3 14h18"/><path d="M12 14v6"/></svg>`,
  sandwich: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-sandwich"><path d="m2.37 11.22 7.84-8.08a2.5 2.5 0 0 1 3.56 0l7.86 8.08a1.5 1.5 0 0 1-1.07 2.54H3.44a1.5 1.5 0 0 1-1.07-2.54Z"/><path d="M4 14v4a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-4"/><path d="M3 14h18"/><path d="M12 14v6"/></svg>`,
  chicken: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick"><path d="m14 10 2.5-2.5a3.54 3.54 0 0 1 5 5L19 15"/><path d="M10 14A5.5 5.5 0 0 1 2 6.5C2 3.5 4.5 1 7.5 1A5.5 5.5 0 0 1 15 8.5"/><path d="m14 10-4 4"/><circle cx="19" cy="19" r="2"/><circle cx="21" cy="15" r="2"/></svg>`,
  drumstick: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-drumstick"><path d="m14 10 2.5-2.5a3.54 3.54 0 0 1 5 5L19 15"/><path d="M10 14A5.5 5.5 0 0 1 2 6.5C2 3.5 4.5 1 7.5 1A5.5 5.5 0 0 1 15 8.5"/><path d="m14 10-4 4"/><circle cx="19" cy="19" r="2"/><circle cx="21" cy="15" r="2"/></svg>`,
  breakfast: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-egg-fried"><circle cx="11.5" cy="12.5" r="3.5"/><path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 6 3 8.5 3 3.5 0 4 2 4 6 0 4-2 8-6 8-2.5 0-3 2-6.5 2-4.5 0-6.5-3.5-6.5-7 0-2 0-4 0-6Z"/></svg>`,
  'egg-fried': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-egg-fried"><circle cx="11.5" cy="12.5" r="3.5"/><path d="M3 8c0-3.5 2.5-6 6.5-6 5 0 6 3 8.5 3 3.5 0 4 2 4 6 0 4-2 8-6 8-2.5 0-3 2-6.5 2-4.5 0-6.5-3.5-6.5-7 0-2 0-4 0-6Z"/></svg>`,
  protein: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>`,
  dumbbell: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-dumbbell"><path d="m6.5 6.5 11 11"/><path d="m21 21-1-1"/><path d="m3 3 1 1"/><path d="m18 22 4-4"/><path d="m2 6 4-4"/><path d="m3 10 7-7"/><path d="m14 21 7-7"/></svg>`,
  superjuice: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glass-water"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>`,
  'glass-water': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-glass-water"><path d="M15.2 22H8.8a2 2 0 0 1-2-1.79L5 3h14l-1.81 17.21A2 2 0 0 1 15.2 22Z"/><path d="M6 12a5 5 0 0 1 6 0 5 5 0 0 0 6 0"/></svg>`,
  juice: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-citrus"><path d="M21.66 10.44a10 10 0 1 0-8.1 11.22 10.05 10.05 0 0 0 8.1-11.22Z"/><path d="M12 12 8.5 7.5"/><path d="M12 12v6"/><path d="m12 12 5.5-2.5"/></svg>`,
  citrus: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-citrus"><path d="M21.66 10.44a10 10 0 1 0-8.1 11.22 10.05 10.05 0 0 0 8.1-11.22Z"/><path d="M12 12 8.5 7.5"/><path d="M12 12v6"/><path d="m12 12 5.5-2.5"/></svg>`,
  milkshakes: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ice-cream-2"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm0 0v5"/><path d="M4 11a8 8 0 1 1 16 0"/></svg>`,
  'ice-cream-2': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-ice-cream-2"><path d="M12 17c5 0 8-2.69 8-6H4c0 3.31 3 6 8 6Zm0 0v5"/><path d="M4 11a8 8 0 1 1 16 0"/></svg>`,
  desserts: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-slice"><circle cx="9" cy="7" r="2"/><path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"/><path d="M16 13H3"/><path d="M16 17H3"/></svg>`,
  'cake-slice': `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="lucide lucide-cake-slice"><circle cx="9" cy="7" r="2"/><path d="M7.2 7.9 3 11v9c0 .6.4 1 1 1h16c.6 0 1-.4 1-1v-9c0-2-3-6-7-8l-3.6 2.6"/><path d="M16 13H3"/><path d="M16 17H3"/></svg>`,
  utensils: `<svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="#000000" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 2v6a3 3 0 0 1-3 3 3 3 0 0 1-3-3V2"/><path d="M15 11v11"/><path d="M5 2v4a3 3 0 0 0 3 3v13"/><path d="M9 2v4"/></svg>`
};

function getCategorySvg(cat) {
  if (cat && cat.svg) return cat.svg;
  const key = (cat && (cat.icon || cat.id)) || 'utensils';
  return ICON_SVGS[key] || ICON_SVGS.utensils;
}

// ══ POPULATE ADMIN CATEGORY DROPDOWNS ══
function populateAdminCategoryDropdowns() {
  const filterSelect = document.getElementById('admin-crud-cat-filter');
  const modalSelect = document.getElementById('crud-item-category');

  if (filterSelect) {
    const currentVal = filterSelect.value || 'all';
    let optionsHtml = '<option value="all">All Categories</option>';
    CATEGORIES.forEach(c => {
      optionsHtml += `<option value="${c.id}">${escapeHtml(c.name)}</option>`;
    });
    filterSelect.innerHTML = optionsHtml;
    filterSelect.value = currentVal;
  }

  if (modalSelect) {
    let optionsHtml = '';
    CATEGORIES.forEach(c => {
      optionsHtml += `<option value="${c.id}">${escapeHtml(c.name)}</option>`;
    });
    modalSelect.innerHTML = optionsHtml;
  }
}

// ═══════════════════════════════════════════════════════════════
// REST API CLIENT — talks to server.js on port 3000
// ═══════════════════════════════════════════════════════════════
const API = (() => {
  const BASE = '/api';

  async function req(method, path, body) {
    const opts = {
      method,
      headers: { 'Content-Type': 'application/json' }
    };
    if (body !== undefined) opts.body = JSON.stringify(body);
    const res = await fetch(`${BASE}${path}`, opts);
    return res.json();
  }

  return {
    // ── Categories ──
    async getCategories() {
      try {
        const r = await req('GET', '/categories');
        return r.data || [];
      } catch { return []; }
    },

    async saveCategory(catPayload, isEdit = false) {
      try {
        if (isEdit) {
          return await req('PUT', `/categories/${encodeURIComponent(catPayload.id)}`, catPayload);
        } else {
          return await req('POST', '/categories', catPayload);
        }
      } catch (e) { return { success: false, error: e.message }; }
    },

    async deleteCategory(id) {
      try {
        return await req('DELETE', `/categories/${encodeURIComponent(id)}`);
      } catch (e) { return { success: false, error: e.message }; }
    },

    // ── Products ──
    async getProducts() {
      try {
        const r = await req('GET', '/products');
        return r.data || [];
      } catch { return []; }
    },

    async saveProduct(prodPayload, isEdit = false) {
      try {
        if (isEdit) {
          return await req('PUT', `/products/${encodeURIComponent(prodPayload.id)}`, prodPayload);
        } else {
          return await req('POST', '/products', prodPayload);
        }
      } catch (e) { return { success: false, error: e.message }; }
    },

    async deleteProduct(id) {
      try {
        return await req('DELETE', `/products/${encodeURIComponent(id)}`);
      } catch (e) { return { success: false, error: e.message }; }
    },

    async patchProductStock(id, available) {
      try {
        return await req('PATCH', `/products/${encodeURIComponent(id)}`, { available });
      } catch (e) { return { success: false, error: e.message }; }
    },

    // ── Orders ──
    async getOrders() {
      try {
        const r = await req('GET', '/orders');
        return r.data || [];
      } catch { return []; }
    },

    async createOrder(orderData) {
      try {
        return await req('POST', '/orders', orderData);
      } catch (e) { return { success: false, error: e.message }; }
    },

    async updateOrderStatus(id, status, statusLabel) {
      try {
        return await req('PATCH', `/orders/${encodeURIComponent(id)}`, { status, statusLabel });
      } catch (e) { return { success: false, error: e.message }; }
    },

    async clearAllOrders() {
      try {
        return await req('DELETE', '/orders');
      } catch (e) { return { success: false, error: e.message }; }
    },

    async deleteOrder(id) {
      try {
        return await req('DELETE', `/orders/${encodeURIComponent(id)}`);
      } catch (e) { return { success: false, error: e.message }; }
    },

    async updateOrder(id, orderData) {
      try {
        return await req('PUT', `/orders/${encodeURIComponent(id)}`, orderData);
      } catch (e) { return { success: false, error: e.message }; }
    },

    // ── Stats ──
    // ── Extras & Add-ons CRUD ──
    async getExtras() {
      try {
        const r = await req('GET', '/extras');
        return r.data || [];
      } catch { return []; }
    },
    async createExtra(extraPayload) {
      try {
        return await req('POST', '/extras', extraPayload);
      } catch (e) { return { success: false, error: e.message }; }
    },
    async updateExtra(extraPayload) {
      try {
        return await req('PUT', `/extras/${encodeURIComponent(extraPayload.id)}`, extraPayload);
      } catch (e) { return { success: false, error: e.message }; }
    },
    async patchExtraStock(id, available) {
      try {
        return await req('PATCH', `/extras/${encodeURIComponent(id)}`, { available });
      } catch (e) { return { success: false, error: e.message }; }
    },
    async deleteExtra(id) {
      try {
        return await req('DELETE', `/extras/${encodeURIComponent(id)}`);
      } catch (e) { return { success: false, error: e.message }; }
    },
    async getStats() {
      try {
        const r = await req('GET', '/stats');
        return r.data || {};
      } catch { return {}; }
    },

    // ── Image & Cloudinary Upload ──
    async uploadImage(fileData) {
      try {
        const r = await req('POST', '/upload-image', { file: fileData });
        return r;
      } catch (e) { return { success: false, error: e.message }; }
    },

    // ── Restaurant Table Management & QR API ──
    async getTables() {
      try {
        const r = await req('GET', '/tables');
        return r.data || [];
      } catch { return []; }
    },
    async getTableByToken(token) {
      try {
        return await req('GET', `/tables/validate/${encodeURIComponent(token)}`);
      } catch (e) { return { success: false, error: e.message }; }
    },
    async saveTable(tablePayload, isEdit = false) {
      try {
        if (isEdit) {
          return await req('PUT', `/tables/${encodeURIComponent(tablePayload.id)}`, tablePayload);
        } else {
          return await req('POST', '/tables', tablePayload);
        }
      } catch (e) { return { success: false, error: e.message }; }
    },
    async saveTablesBulk(bulkPayload) {
      try {
        return await req('POST', '/tables', { bulk: true, ...bulkPayload });
      } catch (e) { return { success: false, error: e.message }; }
    },
    async patchTable(id, patchData) {
      try {
        return await req('PATCH', `/tables/${encodeURIComponent(id)}`, patchData);
      } catch (e) { return { success: false, error: e.message }; }
    },
    async regenerateTableToken(id) {
      try {
        return await req('POST', `/tables/${encodeURIComponent(id)}/regenerate-token`);
      } catch (e) { return { success: false, error: e.message }; }
    },
    async deleteTable(id) {
      try {
        return await req('DELETE', `/tables/${encodeURIComponent(id)}`);
      } catch (e) { return { success: false, error: e.message }; }
    },

    // ── Settings ──
    async getSettings() {
      try {
        const r = await req('GET', '/settings');
        return r.data || { takeawayFee: 0 };
      } catch { return { takeawayFee: 0 }; }
    },
    async updateSettings(settings) {
      try {
        return await req('PUT', '/settings', settings);
      } catch (e) { return { success: false, error: e.message }; }
    }
  };
})();

// ══ SYNC LIVE DATA FROM REAL DATABASE ══
async function syncDataFromBackend(showToast = false) {
  try {
    const [cats, prods, orders, extrasData, tablesData, settingsData] = await Promise.all([
      API.getCategories(),
      API.getProducts(),
      API.getOrders(),
      API.getExtras(),
      API.getTables(),
      API.getSettings()
    ]);

    if (cats && cats.length > 0) {
      CATEGORIES = cats.filter(c => c.id !== 'extra').map(c => ({
        ...c,
        svg: c.svg || getCategorySvg(c)
      }));
    }
    if (prods && prods.length > 0) {
      PRODUCTS = prods;
    }
    if (Array.isArray(orders)) {
      MASTER_ORDERS = orders;
    }
    if (extrasData && extrasData.length > 0) {
      EXTRAS = extrasData;
    }
    if (tablesData && tablesData.length > 0) {
      APP_STATE.tables = tablesData;
      // If we have an active table, refresh its data in case name/capacity/status was edited
      if (APP_STATE.activeTable) {
        const refreshed = tablesData.find(t => t.id === APP_STATE.activeTable.id || t.token === APP_STATE.activeTable.token);
        if (refreshed) {
          APP_STATE.activeTable = refreshed;
          try { localStorage.setItem('alemaya_active_table', JSON.stringify(refreshed)); } catch {}
        }
      }
    }
    if (settingsData) {
      APP_STATE.settings = settingsData;
    }

    populateAdminCategoryDropdowns();
    buildCategoryGrid();
    renderMenu();
    updateCartUI();
    renderCustomerActiveTableBanner();
    renderHistory();
    updateKitchenCounters();
    if (APP_STATE.portal === 'chef') renderKdsTickets();
    if (APP_STATE.portal === 'admin') {
      renderAdminDashboard();
      renderAdminItemsCrud();
      renderAdminCatsCrud();
      renderAdminOrdersSubpane();
      renderAdminTablesCrud();
    }
    refreshLucideIcons();

    if (showToast) toast('Synced live data from real database!');
  } catch (err) {
    console.warn('syncDataFromBackend warning:', err);
  }
}

// ══ BROADCAST CHANNEL & STORAGE SYNC ACROSS TABS ══
try {
  if (typeof BroadcastChannel !== 'undefined') {
    SYNC_CHANNEL = new BroadcastChannel('alemaya_kitchen_channel');
    SYNC_CHANNEL.onmessage = (event) => {
      const data = event.data || {};
      if (data.type === 'NEW_ORDER' || data.type === 'STATUS_UPDATE' || data.type === 'STOCK_UPDATE' || data.type === 'DB_CHANGE') {
        if (data.type === 'NEW_ORDER' && data.order) {
          if (!MASTER_ORDERS.some(o => o.id === data.order.id)) {
            MASTER_ORDERS.unshift(data.order);
            saveToStorage();
          }
          if (APP_STATE.portal === 'chef') {
            updateKitchenCounters();
            renderKdsTickets();
            playKitchenChime('new_order');
            toast(`🔔 New Kitchen Order #${data.orderId}!`, 3500);
          }
        } else if (data.type === 'STATUS_UPDATE') {
          const ord = MASTER_ORDERS.find(o => o.id === data.orderId);
          if (ord) ord.status = data.status;
          if (data.status === 'ready') {
            playKitchenChime('ready');
            toast(`🎉 Order #${data.orderId} is READY for pickup!`, 4000);
          } else {
            toast(`Order #${data.orderId} status: ${data.status}`);
          }
          if (APP_STATE.portal === 'chef') renderKdsTickets();
          if (APP_STATE.currentTab === 'orders') {
            renderCurrentOrders();
            renderHistory();
          }
        } else if (data.type === 'ALL_ORDERS_CLEARED') {
          MASTER_ORDERS = [];
          APP_STATE.orderHistory = [];
          updateKitchenCounters();
          if (APP_STATE.portal === 'chef') renderKdsTickets();
          if (APP_STATE.portal === 'admin') {
            renderAdminDashboard();
            renderAdminOrdersSubpane();
          }
          if (APP_STATE.currentTab === 'orders') {
            renderCurrentOrders();
            renderHistory();
          }
        } else if (data.type === 'ORDER_DELETED') {
          MASTER_ORDERS = MASTER_ORDERS.filter(o => o.id !== data.orderId);
          APP_STATE.orderHistory = APP_STATE.orderHistory.filter(o => o.id !== data.orderId);
          updateKitchenCounters();
          if (APP_STATE.portal === 'chef') renderKdsTickets();
          if (APP_STATE.portal === 'admin') renderAdminOrdersSubpane();
          if (APP_STATE.currentTab === 'orders') {
            renderCurrentOrders();
            renderHistory();
          }
        } else if (data.type === 'ORDER_UPDATED' && data.order) {
          const mIdx = MASTER_ORDERS.findIndex(o => o.id === data.orderId);
          if (mIdx !== -1) MASTER_ORDERS[mIdx] = { ...MASTER_ORDERS[mIdx], ...data.order };
          const hIdx = APP_STATE.orderHistory.findIndex(o => o.id === data.orderId);
          if (hIdx !== -1) APP_STATE.orderHistory[hIdx] = { ...APP_STATE.orderHistory[hIdx], ...data.order };
          if (APP_STATE.portal === 'chef') {
            renderKdsTickets();
            toast(`Order #${data.orderId} was updated by customer`, 3000);
          }
          if (APP_STATE.portal === 'admin') renderAdminOrdersSubpane();
          if (APP_STATE.currentTab === 'orders') {
            renderCurrentOrders();
          }
        }
        if (data.type !== 'ORDER_DELETED' && data.type !== 'ALL_ORDERS_CLEARED') {
          syncDataFromBackend(false);
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
document.addEventListener('DOMContentLoaded', async () => {
  // Splash hide after smooth logo display
  setTimeout(() => {
    const splash = document.getElementById('splash');
    if (splash) splash.classList.add('hidden');
  }, 900);

  // 1. Initialize table token from URL (?table=... or ?tableToken=...) or localStorage FIRST before route handling
  await initTableFromUrlOrStorage();

  // 2. Restore saved cart, stock, and orders from localStorage
  restoreFromStorage();

  // 3. Route check IMMEDIATELY so the correct portal is shown before async data loads
  handleHashRouting();
  window.addEventListener('hashchange', handleHashRouting);
  window.addEventListener('popstate', handleHashRouting);

  // Populate dropdowns and build initial UI
  populateAdminCategoryDropdowns();
  buildCategoryGrid();
  renderMenu();
  if (APP_STATE.portal === 'customer') {
    updateCartUI();
  } else {
    const bNav = document.getElementById('bottom-nav');
    if (bNav) bNav.style.display = 'none';
    const fBar = document.getElementById('floating-cart-bar');
    if (fBar) fBar.classList.add('hidden');
  }
  renderCustomerActiveTableBanner();
  renderCurrentOrders();
  renderHistory();
  updateKitchenCounters();
  refreshLucideIcons();

  // Start live digital clock & ticket timer intervals
  initLiveClocks();

  // Sync fresh live data from database.json via REST API
  await syncDataFromBackend(false);

  // Fast auto-refresh orders every 3s for live kitchen and order tracking
  // CHIME LOGIC: We track ALL order IDs ever seen (not just active/received).
  // A "new order" = an order ID we have NEVER seen in any previous poll.
  // This prevents double-chiming when chef clicks "Cooking" (received->cooking)
  // because that order was already in ALL_SEEN_ORDER_IDS from a prior poll.
  // Pre-seed with current orders so they don't trigger a chime on first poll.
  let ALL_SEEN_ORDER_IDS = new Set(MASTER_ORDERS.map(o => String(o.id)));

  setInterval(() => {
    if (APP_STATE.portal === 'chef' || APP_STATE.portal === 'admin' || APP_STATE.currentTab === 'orders') {
      API.getOrders().then(orders => {
        if (Array.isArray(orders)) {
          // Detect brand new incoming orders for the kitchen terminal & trigger notification sound!
          if (APP_STATE.portal === 'chef') {
            const allIds = orders.map(o => String(o.id));

            if (ALL_SEEN_ORDER_IDS !== null) {
              // "New" = order ID never seen in any previous fetch (any status)
              const brandNewIds = allIds.filter(id => !ALL_SEEN_ORDER_IDS.has(id));
              if (brandNewIds.length > 0) {
                console.log('[KITCHEN SOUND] Brand new order(s) arrived:', brandNewIds);
                playKitchenChime('new_order');
                toast(`🔔 New Order #${brandNewIds.join(', #')} — Get cooking!`, 4000);
              }
            }
            // Always merge all IDs into the seen set
            allIds.forEach(id => ALL_SEEN_ORDER_IDS.add(id));

          }

          MASTER_ORDERS = orders;
          updateKitchenCounters();
          if (APP_STATE.portal === 'chef') renderKdsTickets();
          if (APP_STATE.portal === 'admin' && APP_STATE.adminSubTab === 'overview') renderAdminDashboard();
          if (APP_STATE.portal === 'admin' && APP_STATE.adminSubTab === 'orders') renderAdminOrdersSubpane();
          if (APP_STATE.currentTab === 'orders') {
            renderCurrentOrders();
            renderHistory();
          }
        }
      });
    }
  }, 3000);
});

function handleHashRouting() {
  const hash = (window.location.hash || '').replace('#', '').toLowerCase();
  const rawPath = (window.location.pathname || '').toLowerCase().replace(/\/+$/, '');
  const path = rawPath.endsWith('/index.html') ? rawPath.replace(/\/index\.html$/, '') : rawPath;

  console.log('[ROUTING] Hash:', hash, 'Path:', path, 'Current Portal:', APP_STATE.portal);

  const isKitchenRoute = hash === 'chef' || hash === 'kitchen' || hash === 'kithen' || 
                         hash.startsWith('kitchen') || hash.startsWith('chef') || hash.startsWith('kithen') || 
                         path === '/kitchen' || path === '/kithen' || path === '/chef' ||
                         path.endsWith('/kitchen') || path.endsWith('/kithen') || path.endsWith('/chef') ||
                         path.includes('/kitchen') || path.includes('/kithen') || path.includes('/chef');
                         
  const isAdminRoute = hash === 'admin' || hash.startsWith('admin') || 
                       path === '/admin' || path.endsWith('/admin') || path.includes('/admin');
                       
  const isOrdersRoute = hash === 'orders' || hash.startsWith('orders') || 
                        path === '/orders' || path.endsWith('/orders') || path.includes('/orders');

  const bottomNav = document.getElementById('bottom-nav');
  const floatBar = document.getElementById('floating-cart-bar');
  const appEl = document.getElementById('app');

  if (isKitchenRoute) {
    if (!sessionStorage.getItem('staff_auth_kitchen')) {
      APP_STATE.portal = 'pending_kitchen';
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      const chefView = document.getElementById('view-chef');
      if (chefView) chefView.classList.add('active');
      renderKdsTickets();
      if (bottomNav) bottomNav.style.display = 'none';
      if (floatBar) floatBar.classList.add('hidden');
      if (appEl) {
        appEl.classList.remove('portal-customer', 'portal-admin');
        appEl.classList.add('portal-chef');
      }
      promptStaffPassword('kitchen');
      return;
    } else {
      switchPortal('chef');
      return;
    }
  } else if (isAdminRoute) {
    if (!sessionStorage.getItem('staff_auth_admin')) {
      APP_STATE.portal = 'pending_admin';
      document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
      const adminView = document.getElementById('view-admin');
      if (adminView) adminView.classList.add('active');
      switchAdminSubTab(APP_STATE.adminSubTab || 'overview');
      if (bottomNav) bottomNav.style.display = 'none';
      if (floatBar) floatBar.classList.add('hidden');
      if (appEl) {
        appEl.classList.remove('portal-customer', 'portal-chef');
        appEl.classList.add('portal-admin');
      }
      promptStaffPassword('admin');
      return;
    } else {
      switchPortal('admin');
      return;
    }
  } else if (isOrdersRoute) {
    navigateTo('orders');
    return;
  } else {
    // Only navigate to menu if we're genuinely on a customer route (not staff portals or pending auth)
    const isStaffPortal = APP_STATE.portal === 'chef' || APP_STATE.portal === 'admin' || 
                          APP_STATE.portal === 'pending_admin' || APP_STATE.portal === 'pending_kitchen';
    const shouldShowMenu = hash === 'menu' || (!hash && !path.includes('/admin') && !path.includes('/kitchen') && !path.includes('/kithen') && !path.includes('/chef'));
    
    if (!isStaffPortal && shouldShowMenu) {
      navigateTo('menu');
    } else if (!isStaffPortal && APP_STATE.portal === 'customer') {
      navigateTo('menu');
    }
  }
}



// ══ STAFF AUTHENTICATION & SECURE ROUTES (/kitchen & /admin) ══
let PENDING_STAFF_PORTAL = null;

function unlockKitchenAudio() {
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!KITCHEN_AUDIO_CTX && AudioCtx) {
      KITCHEN_AUDIO_CTX = new AudioCtx();
    }
    if (KITCHEN_AUDIO_CTX && KITCHEN_AUDIO_CTX.state === 'suspended') {
      KITCHEN_AUDIO_CTX.resume().then(() => {
        // Hide the tap-to-enable banner once context is running
        const banner = document.getElementById('audio-unlock-banner');
        if (banner) banner.style.display = 'none';
      }).catch(() => {});
    } else {
      const banner = document.getElementById('audio-unlock-banner');
      if (banner) banner.style.display = 'none';
    }
  } catch (e) {}
}

// User interactions unlock audio context for modern browser autoplay policy
window.addEventListener('click', unlockKitchenAudio, { passive: true });
window.addEventListener('touchstart', unlockKitchenAudio, { passive: true });
window.addEventListener('keydown', unlockKitchenAudio, { passive: true });

function promptStaffPassword(portal) {
  console.log('[AUTH DEBUG] promptStaffPassword called for portal:', portal);
  PENDING_STAFF_PORTAL = portal;
  const overlay = document.getElementById('staff-auth-overlay');
  const modal = document.getElementById('staff-auth-modal');
  const title = document.getElementById('staff-auth-title');
  const desc = document.getElementById('staff-auth-desc');
  const input = document.getElementById('staff-auth-input');
  const err = document.getElementById('staff-auth-error');

  if (!modal) {
    console.error('[AUTH DEBUG] Modal element not found!');
    return;
  }

  const isKitchen = portal === 'kitchen' || portal === 'chef' || portal === 'kithen';
  if (title) title.textContent = isKitchen ? 'Kitchen Terminal Access' : 'Admin Management Access';
  if (desc) desc.textContent = isKitchen
    ? 'Enter kitchen staff passcode to open KDS grill terminal.'
    : 'Enter manager passcode to access revenue & orders.';
  
  if (err) err.style.display = 'none';
  if (input) {
    input.value = '';
    setTimeout(() => {
      try {
        input.focus();
        input.select();
      } catch (e) {}
    }, 120);
  }

  if (overlay) {
    overlay.classList.add('open');
    overlay.style.display = 'block';
    overlay.style.opacity = '1';
    overlay.style.visibility = 'visible';
    overlay.style.pointerEvents = 'auto';
  }
  if (modal) {
    modal.classList.add('open');
    modal.style.display = 'flex';
    modal.style.opacity = '1';
    modal.style.visibility = 'visible';
    modal.style.pointerEvents = 'auto';
  }

  refreshLucideIcons();
}

async function handleStaffAuthSubmit(event) {
  event.preventDefault();
  unlockKitchenAudio();

  const input = document.getElementById('staff-auth-input');
  const err = document.getElementById('staff-auth-error');
  const entered = (input?.value || '').trim();

  // Always fetch the latest password from the server before validating
  // so that a password change immediately takes effect without a page reload
  try {
    const freshSettings = await API.getSettings();
    if (freshSettings) APP_STATE.settings = freshSettings;
  } catch (e) {}

  const isKitchen = PENDING_STAFF_PORTAL === 'kitchen' || PENDING_STAFF_PORTAL === 'chef';
  const correctPass = isKitchen
    ? (APP_STATE.settings?.kitchenPassword || 'kitchen')
    : (APP_STATE.settings?.adminPassword || 'admin');

  // Only accept the actual configured password (case-sensitive)
  if (entered === correctPass) {
    sessionStorage.setItem('staff_auth_' + (isKitchen ? 'kitchen' : 'admin'), '1');
    closeStaffAuthModal();
    const target = isKitchen ? 'chef' : 'admin';
    switchPortal(target);
    toast(`Authenticated: ${isKitchen ? 'Kitchen' : 'Admin'} unlocked`, 2500);
  } else {
    if (err) {
      err.style.display = 'block';
      err.textContent = 'Incorrect passcode. Access denied.';
    }
    input?.select();
  }
}

function cancelStaffAuth() {
  closeStaffAuthModal();
  const portal = PENDING_STAFF_PORTAL;
  PENDING_STAFF_PORTAL = null;
  
  const isKitchen = portal === 'kitchen' || portal === 'chef';
  const isAuth = sessionStorage.getItem('staff_auth_' + (isKitchen ? 'kitchen' : 'admin'));
  if (!isAuth) {
    // Reset to customer portal (was pending_admin or pending_kitchen)
    APP_STATE.portal = 'customer';
    const appEl = document.getElementById('app');
    if (appEl) {
      appEl.classList.remove('portal-chef', 'portal-admin', 'portal-pending_admin', 'portal-pending_kitchen');
      appEl.classList.add('portal-customer');
    }
    const bottomNav = document.getElementById('bottom-nav');
    if (bottomNav) bottomNav.style.display = 'flex';
    // Redirect away from the staff path so navigation works properly
    const staffPaths = ['/admin', '/kitchen', '/chef'];
    const currentPath = window.location.pathname || '/';
    const isStaffPath = staffPaths.some(p => currentPath.endsWith(p) || currentPath.includes(p));
    if (isStaffPath) {
      history.replaceState(null, '', '/#menu');
    } else if (window.location.hash === '#kitchen' || window.location.hash === '#chef' || window.location.hash === '#admin') {
      history.replaceState(null, '', '#menu');
    }
    navigateTo('menu');
  }
}

function lockStaffPortal(portal) {
  const isKitchen = portal === 'kitchen' || portal === 'chef';
  const authKey = 'staff_auth_' + (isKitchen ? 'kitchen' : 'admin');
  // Clear the session so portal is locked
  sessionStorage.removeItem(authKey);
  toast(`${isKitchen ? 'Kitchen' : 'Admin'} terminal locked.`);
  // Show the password prompt for this portal instead of going to menu
  PENDING_STAFF_PORTAL = isKitchen ? 'kitchen' : 'admin';
  // Refresh settings from DB so we're always checking the latest password
  API.getSettings().then(fresh => {
    if (fresh) APP_STATE.settings = fresh;
  }).catch(() => {}).finally(() => {
    promptStaffPassword(isKitchen ? 'kitchen' : 'admin');
  });
}

function closeStaffAuthModal() {
  const overlay = document.getElementById('staff-auth-overlay');
  const modal = document.getElementById('staff-auth-modal');
  if (overlay) {
    overlay.classList.remove('open');
    overlay.style.display = 'none';
    overlay.style.opacity = '0';
    overlay.style.visibility = 'hidden';
    overlay.style.pointerEvents = 'none';
  }
  if (modal) {
    modal.classList.remove('open');
    modal.style.display = 'none';
    modal.style.opacity = '0';
    modal.style.visibility = 'hidden';
    modal.style.pointerEvents = 'none';
  }
}

// ══ CATEGORY GRID (4-COLUMN SQUIRCLE CARDS WITH LUCIDE REACT ICONS) ══
function buildCategoryGrid() {
  const container = document.getElementById('cat-grid');
  if (!container) return;
  container.innerHTML = '';

  const visibleCategories = CATEGORIES.filter(c => c.id !== 'extra');

  visibleCategories.forEach(cat => {
    const card = document.createElement('button');
    card.className = 'cat-card' + (cat.id === APP_STATE.activeCategory ? ' active' : '');
    card.id = 'cat-card-' + cat.id;
    card.setAttribute('role', 'tab');
    card.setAttribute('aria-selected', cat.id === APP_STATE.activeCategory ? 'true' : 'false');
    card.onclick = () => selectCategory(cat.id);

    const svgIcon = getCategorySvg(cat);

    card.innerHTML = `
      <div class="cat-icon-wrap">${svgIcon}</div>
      <span class="cat-name">${escapeHtml(cat.name)}</span>
    `;
    container.appendChild(card);
  });

  const catNote = document.getElementById('cat-count-note');
  if (catNote) catNote.textContent = `${visibleCategories.length} categories`;
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
  renderCustomerActiveTableBanner();
  updateCartUI();
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

  const hasDiscount = p.discountPrice > 0 && p.discountPrice < p.basePrice;
  const priceHtml = hasDiscount
    ? `<div class="vert-price-wrap">
         <span class="vert-price-original">${formatMoney(p.basePrice)}</span>
         <span class="vert-price-discounted">${formatMoney(p.discountPrice)}<span class="vert-sale-badge">DISCOUNT</span></span>
       </div>`
    : `<span class="vert-price">${formatMoney(p.basePrice)}</span>`;

  const saleBadgeHtml = hasDiscount
    ? '' // No top badge for discounted items
    : (p.badge ? `<span class="vert-badge">${escapeHtml(p.badge)}</span>` : '');

  card.innerHTML = `
    <img src="${p.image}" alt="${escapeHtml(p.name)}" class="vert-thumb" loading="lazy" onerror="this.src='logo.png'">
    <div class="vert-details">
      <div class="vert-badge-row">
        ${!isAvailable ? `<span class="vert-badge sold-out-badge">SOLD OUT</span>` : saleBadgeHtml}
        <span class="vert-rating"><span class="vert-star">★</span> ${ratingVal} (${reviewsCount})</span>
      </div>
      <h3 class="vert-name">${escapeHtml(p.name)}</h3>
      <p class="vert-desc">${escapeHtml(p.description || '')}</p>
      ${priceHtml}
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
  // Don't navigate customer tabs if we're in a staff portal or pending auth (prevents resetting portal)
  if (APP_STATE.portal === 'chef' || APP_STATE.portal === 'admin' || APP_STATE.portal === 'kitchen' ||
      APP_STATE.portal === 'pending_admin' || APP_STATE.portal === 'pending_kitchen') {
    return;
  }

  const customerTopNav = document.getElementById('customer-top-nav');
  if (customerTopNav) customerTopNav.style.display = 'block';
  APP_STATE.currentTab = tab;
  APP_STATE.portal = 'customer';

  const appEl = document.getElementById('app');
  if (appEl) {
    appEl.classList.remove('portal-chef', 'portal-admin');
    appEl.classList.add('portal-customer');
  }

  // Update hash safely without triggering loop, while PRESERVING query parameters (e.g. ?table=06)
  let search = window.location.search;
  if (!search && APP_STATE.activeTable && APP_STATE.activeTable.tableNumber) {
    search = `?table=${encodeURIComponent(APP_STATE.activeTable.tableNumber)}`;
  }
  const cleanPath = window.location.pathname || '/';
  const targetHash = '#' + tab;
  const targetUrl = cleanPath + search + targetHash;

  if (window.location.hash !== targetHash || (search && !window.location.search)) {
    try {
      history.replaceState(null, '', targetUrl);
    } catch (e) {
      window.location.hash = targetHash;
    }
  }

  // View visibility
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));
  const targetView = document.getElementById('view-' + tab);
  if (targetView) targetView.classList.add('active');

  // Bottom navigation tabs active state (Menu & Orders only)
  document.querySelectorAll('.bnav-btn').forEach(btn => btn.classList.remove('active'));
  document.getElementById('bnav-' + tab)?.classList.add('active');

  // Floating Cart Bar (only show on Menu view when cart > 0)
  updateCartUI();

  if (tab === 'orders') {
    renderCurrentOrders();
    renderCart();
    renderHistory();
  }

  // Instant scroll without animation lag
  window.scrollTo(0, 0);
  refreshLucideIcons();
}

// ══ HANDLE LOGO CLICK (PORTAL-AWARE NAVIGATION) ══
function handleLogoClick() {
  // If in admin or kitchen portal, stay in that portal (don't navigate away)
  if (APP_STATE.portal === 'admin' || APP_STATE.portal === 'chef' || APP_STATE.portal === 'kitchen') {
    // Do nothing or refresh the current portal view
    return;
  }
  // For customer portal, navigate to menu
  navigateTo('menu');
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
  if (subTab !== 'history') subTab = 'current';
  APP_STATE.ordersSubTab = subTab;
  document.getElementById('seg-current')?.classList.toggle('active', subTab === 'current');
  document.getElementById('seg-history')?.classList.toggle('active', subTab === 'history');

  document.getElementById('orders-tab-current')?.classList.toggle('active', subTab === 'current');
  document.getElementById('orders-tab-history')?.classList.toggle('active', subTab === 'history');

  if (subTab === 'current') renderCurrentOrders();
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


// ══ DYNAMIC CATEGORY-SCOPED EXTRAS ══
function getApplicableExtrasForProduct(product) {
  if (!product) return [];
  const catId = product.categoryId;
  return (EXTRAS || []).filter(e => {
    if (e.available === false) return false;
    if (!e.categories || e.categories.length === 0 || e.categories.includes('all')) return true;
    return e.categories.includes(catId);
  });
}

function getActiveGroupsForProduct(product) {
  if (!product) return [];
  const groups = [...(product.customizations || [])];
  const applicable = getApplicableExtrasForProduct(product);
  if (applicable.length > 0) {
    groups.push({
      id: 'extras_addons',
      name: 'Add Extras & Add-ons (Optional)',
      required: false,
      multiSelect: true,
      options: applicable.map(e => ({
        id: e.id,
        label: e.name,
        priceAdd: Number(e.price) || 0
      }))
    });
  }
  return groups;
}
function renderSheetContent() {
  const p = APP_STATE.sheet.product;
  const body = document.getElementById('sheet-body');
  if (!p || !body) return;

  const ingredientsHtml = (p.ingredients || []).length > 0
    ? `<div class="sheet-ingredients-tags">${p.ingredients.map(i => `<span class="ing-tag">${escapeHtml(i)}</span>`).join('')}</div>`
    : '';

  let groupsHtml = '';
  const allCustomizations = getActiveGroupsForProduct(p);
  allCustomizations.forEach(group => {
    const isExtrasPop = group.id === 'extras_addons';
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
      <div class="cust-group ${isExtrasPop ? 'cust-group-extras-pop' : ''}" id="cgroup-${group.id}">
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

  const sheetHasDiscount = p.discountPrice > 0 && p.discountPrice < p.basePrice;
  const sheetPriceHtml = sheetHasDiscount
    ? `<div style="display:flex;align-items:baseline;flex-wrap:wrap;gap:6px;margin:6px 0;">
         <span class="sheet-prod-price-original">${formatMoney(p.basePrice)}</span>
         <span class="sheet-prod-price-discounted" id="sheet-single-price">${formatMoney(calculateUnitItemPrice())}</span>
         <span class="sheet-sale-badge">DISCOUNT</span>
       </div>`
    : `<div class="sheet-prod-price" id="sheet-single-price">${formatMoney(calculateUnitItemPrice())}</div>`;

  body.innerHTML = `
    <img src="${p.image}" alt="${escapeHtml(p.name)}" class="sheet-prod-img" onerror="this.src='logo.png'">
    <div class="sheet-header-content">
      <h2 class="sheet-prod-title">${escapeHtml(p.name)}</h2>
      ${sheetPriceHtml}
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
  // Use discountPrice if it is valid (> 0 and less than basePrice)
  const basePrice = (p.discountPrice > 0 && p.discountPrice < p.basePrice)
    ? Number(p.discountPrice)
    : Number(p.basePrice) || 0;
  let extras = 0;
  const activeGroups = getActiveGroupsForProduct(p);
  activeGroups.forEach(g => {
    const sel = APP_STATE.sheet.selections[g.id];
    if (g.multiSelect && Array.isArray(sel)) {
      sel.forEach(oid => {
        const opt = (g.options || []).find(o => o.id === oid);
        if (opt) extras += (Number(opt.priceAdd) || 0);
      });
    } else if (!g.multiSelect && sel) {
      const opt = (g.options || []).find(o => o.id === sel);
      if (opt) extras += (Number(opt.priceAdd) || 0);
    }
  });
  return basePrice + extras;
}

function calculateSheetTotal() {
  return calculateUnitItemPrice() * (Number(APP_STATE.sheet.qty) || 1);
}

function updateSheetPricingUI() {
  const p = APP_STATE.sheet.product;
  if (!p) return;

  const activeGroups = getActiveGroupsForProduct(p);
  activeGroups.forEach(group => {
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

// ══ EXTRACT HUMAN-READABLE CUSTOMIZATIONS & EXTRAS ══
function getItemCustomizationsSummary(item) {
  const result = [];
  if (!item) return result;

  // 1. Check item.extras array (saved during submit)
  if (Array.isArray(item.extras) && item.extras.length > 0) {
    item.extras.forEach(e => {
      const name = typeof e === 'string' ? e : (e.name || e.label || e.id);
      if (name) result.push(name);
    });
  } 
  // 2. Check item.selections.extras_addons
  else if (item.selections && item.selections.extras_addons) {
    const rawIds = Array.isArray(item.selections.extras_addons)
      ? item.selections.extras_addons
      : [item.selections.extras_addons];
    rawIds.forEach(oid => {
      const opt = EXTRAS_CUSTOMIZATION_GROUP.options.find(o => o.id === oid);
      result.push(opt ? opt.label : oid);
    });
  }

  // 3. Check item.customizations array
  if (Array.isArray(item.customizations) && item.customizations.length > 0) {
    item.customizations.forEach(c => {
      const label = c.option || c.name || (typeof c === 'string' ? c : '');
      if (label) result.push(label);
    });
  } else if (item.selections) {
    const prod = PRODUCTS.find(p => p.id === item.productId);
    if (prod && Array.isArray(prod.customizations)) {
      prod.customizations.forEach(g => {
        if (g.id === 'extras_addons') return;
        const sel = item.selections[g.id];
        if (g.multiSelect && Array.isArray(sel)) {
          sel.forEach(oid => {
            const opt = (g.options || []).find(o => o.id === oid);
            if (opt) result.push(opt.label);
          });
        } else if (!g.multiSelect && sel) {
          const opt = (g.options || []).find(o => o.id === sel);
          if (opt) result.push(opt.label);
        }
      });
    }
  }

  return result;
}

// ══ SUBMIT TO CART ══
function submitSheetToCart() {
  const p = APP_STATE.sheet.product;
  if (!p) return;

  // Validation
  const activeGroups = getActiveGroupsForProduct(p);
  for (const group of activeGroups) {
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

  // Collect structured extras and customizations for clear visibility everywhere
  const selectedExtrasList = [];
  const selectedCustomizations = [];

  activeGroups.forEach(g => {
    const sel = APP_STATE.sheet.selections[g.id];
    if (g.multiSelect && Array.isArray(sel)) {
      sel.forEach(oid => {
        const opt = (g.options || []).find(o => o.id === oid);
        if (opt) {
          if (g.id === 'extras_addons') {
            selectedExtrasList.push({ id: opt.id, name: opt.label, price: Number(opt.priceAdd) || 0 });
          } else {
            selectedCustomizations.push({ group: g.name, option: opt.label, price: Number(opt.priceAdd) || 0 });
          }
        }
      });
    } else if (!g.multiSelect && sel) {
      const opt = (g.options || []).find(o => o.id === sel);
      if (opt) {
        selectedCustomizations.push({ group: g.name, option: opt.label, price: Number(opt.priceAdd) || 0 });
      }
    }
  });

  const uPrice = calculateUnitItemPrice();
  const q = Number(APP_STATE.sheet.qty) || 1;
  const itemTotal = calculateSheetTotal() || (uPrice * q);

  const cartItem = {
    productId: p.id,
    name: p.name,
    image: p.image,
    basePrice: Number(p.basePrice) || 0,
    discountPrice: Number(p.discountPrice) || 0,
    originalBasePrice: Number(p.basePrice) || 0,
    unitPrice: uPrice,
    qty: q,
    selections: JSON.parse(JSON.stringify(APP_STATE.sheet.selections)),
    extras: selectedExtrasList,
    customizations: selectedCustomizations,
    note: (APP_STATE.sheet.note || '').trim(),
    total: itemTotal
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

  item.qty = Math.max(1, Math.min(20, (Number(item.qty) || 1) + delta));
  const uPrice = Number(item.unitPrice) || Number(item.basePrice) || 0;
  item.total = uPrice * item.qty;

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
  let subtotal = 0;
  let count = 0;
  (APP_STATE.cart || []).forEach(item => {
    const q = Number(item.qty) || 1;
    const u = Number(item.unitPrice) || Number(item.basePrice) || 0;
    const t = Number(item.total) || (u * q);
    subtotal += t;
    count += q;
  });
  const service = 0; // No service fee
  const takeawayFee = (APP_STATE.orderType === 'Takeaway') ? (Number(APP_STATE.settings?.takeawayFee) || 0) : 0;
  const total = subtotal + service + takeawayFee;
  return { subtotal, service, takeawayFee, total, count };
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

  // Count active current orders vs completed orders
  const activeOrdersCount = (APP_STATE.orderHistory || []).filter(o => {
    const s = (o.status || '').toLowerCase();
    return s !== 'completed' && s !== 'cancelled';
  }).length;

  const completedOrdersCount = (APP_STATE.orderHistory || []).filter(o => {
    return (o.status || '').toLowerCase() === 'completed';
  }).length;

  // Bottom Nav Orders Badge: show cart items when cart > 0, else active placed orders
  const bnavBadge = document.getElementById('bnav-orders-badge');
  if (bnavBadge) {
    const badgeNum = count > 0 ? count : activeOrdersCount;
    if (badgeNum > 0) {
      bnavBadge.style.display = 'flex';
      bnavBadge.textContent = badgeNum;
    } else {
      bnavBadge.style.display = 'none';
    }
  }

  // Segment Tab Badges in Orders View
  const cartSegCount = document.getElementById('cart-seg-count');
  if (cartSegCount) cartSegCount.textContent = count;

  const currentSegCount = document.getElementById('current-orders-seg-count');
  if (currentSegCount) currentSegCount.textContent = activeOrdersCount;

  const histSegCount = document.getElementById('history-seg-count');
  if (histSegCount) histSegCount.textContent = completedOrdersCount;
}

// ══ RENDER CART VIEW ══
function renderCart() {
  const wrap = document.getElementById('cart-items-wrap');
  const summary = document.getElementById('cart-summary-card');
  const actions = document.getElementById('cart-checkout-actions');
  const pendingSection = document.getElementById('pending-cart-section');
  if (pendingSection) pendingSection.style.display = 'block';
  if (!wrap) return;

  const { subtotal, service, takeawayFee, total, count } = getCartCalculations();

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
    const extrasList = getItemCustomizationsSummary(item);
    const optionsStr = extrasList.join(' • ');
    const noteStr = item.note ? `<div class="cart-item-kitchen-note">“${escapeHtml(item.note)}”</div>` : '';
    const itemTotal = Number(item.total) || ((Number(item.unitPrice) || Number(item.basePrice) || 0) * (Number(item.qty) || 1));

    // Discount display in cart
    const origUnitPrice = Number(item.originalBasePrice) || 0;
    const unitPrice2 = Number(item.unitPrice) || Number(item.basePrice) || 0;
    const wasDiscounted = origUnitPrice > 0 && origUnitPrice > unitPrice2;
    const origTotal = wasDiscounted ? origUnitPrice * (Number(item.qty) || 1) : 0;
    const cartPriceHtml = wasDiscounted
      ? `<span class="cart-item-price-original">${formatMoney(origTotal)}</span><span class="cart-item-price-discounted">${formatMoney(itemTotal)}</span>`
      : `<span class="cart-item-price">${formatMoney(itemTotal)}</span>`;

    itemsHtml += `
      <div class="cart-item-card">
        <img src="${item.image}" alt="${escapeHtml(item.name)}" class="cart-item-img" onerror="this.src='logo.png'">
        <div class="cart-item-info">
          <h4 class="cart-item-title">${escapeHtml(item.name)}</h4>
          ${optionsStr ? `<div class="cart-item-options">${escapeHtml(optionsStr)}</div>` : ''}
          ${noteStr}
          <div class="cart-item-bottom">
            <div style="display:flex;align-items:baseline;gap:4px;">${cartPriceHtml}</div>
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
    document.getElementById('sum-total').textContent = formatMoney(total);
    document.getElementById('sum-ordertype-label').textContent = APP_STATE.orderType;
    
    // Show/hide takeaway fee row
    const takeawayRow = document.getElementById('sum-takeaway-row');
    const takeawayFeeEl = document.getElementById('sum-takeaway-fee');
    if (takeawayFee > 0 && APP_STATE.orderType === 'Takeaway') {
      if (takeawayRow) takeawayRow.style.display = 'flex';
      if (takeawayFeeEl) takeawayFeeEl.textContent = formatMoney(takeawayFee);
    } else {
      if (takeawayRow) takeawayRow.style.display = 'none';
    }
    
    renderCartCheckoutTableSlot();
  }

  // Checkout actions
  if (actions) {
    actions.classList.remove('hidden');
    document.getElementById('btn-checkout-price').textContent = formatMoney(total);
  }
}

// ══ PLACE ORDER (CUSTOMER ORDER CREATION) ══
async function placeOrder() {
  if (APP_STATE.cart.length === 0) {
    toast('Your cart is empty');
    return;
  }

  const { total, subtotal, service, takeawayFee, count } = getCartCalculations();
  const orderId = 'AG-' + Math.floor(1000 + Math.random() * 9000);
  const now = new Date();
  const timeStr = now.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  const dateStr = now.toISOString().split('T')[0];

  // Resolve table assignment with multi-tier fallback (memory -> URL -> localStorage -> quick input)
  if (!APP_STATE.activeTable) {
    extractTableFromUrl();
    if (!APP_STATE.activeTable) {
      const saved = localStorage.getItem('alemaya_active_table') || sessionStorage.getItem('alemaya_active_table');
      if (saved) {
        try {
          APP_STATE.activeTable = JSON.parse(saved);
          APP_STATE.orderType = 'Dine-in';
        } catch {}
      }
    }
  }

  // If still not resolved, check quick input
  if (!APP_STATE.activeTable) {
    const quickIn = document.getElementById('checkout-table-quick-input');
    const quickVal = (quickIn?.value || '').trim();
    if (quickVal) {
      const cleanNum = quickVal.replace(/^table[\s\-_]*/i, '').trim();
      const displayName = /^\d+$/.test(cleanNum) ? `Table ${cleanNum}` : `Table ${quickVal}`;
      APP_STATE.activeTable = {
        id: `table-${cleanNum || quickVal}`,
        name: displayName,
        tableNumber: cleanNum || quickVal,
        token: quickVal,
        capacity: 4,
        active: true
      };
      APP_STATE.orderType = 'Dine-in';
      try { localStorage.setItem('alemaya_active_table', JSON.stringify(APP_STATE.activeTable)); } catch {}
    }
  }

  let tableId = null;
  let tableName = null;
  let tableToken = null;
  let tableNumber = null;

  if (APP_STATE.activeTable) {
    tableId = APP_STATE.activeTable.id || `table-${APP_STATE.activeTable.tableNumber || APP_STATE.activeTable.token}`;
    tableName = APP_STATE.activeTable.name || `Table ${APP_STATE.activeTable.tableNumber || APP_STATE.activeTable.token}`;
    tableToken = APP_STATE.activeTable.token || APP_STATE.activeTable.tableNumber;
    tableNumber = APP_STATE.activeTable.tableNumber || APP_STATE.activeTable.token;
    APP_STATE.orderType = 'Dine-in';
  } else if (APP_STATE.orderType === 'Dine-in') {
    const manualSelect = document.getElementById('checkout-manual-table-select');
    if (manualSelect && manualSelect.value) {
      const found = (APP_STATE.tables || []).find(t => t.id === manualSelect.value);
      if (found) {
        tableId = found.id;
        tableName = found.name;
        tableToken = found.token;
        tableNumber = found.number || found.tableNumber || found.name;
        APP_STATE.activeTable = found;
      }
    }
  }

  const finalOrderType = tableName ? `Dine-in (${tableName})` : APP_STATE.orderType;

  const newOrder = {
    id: orderId,
    timestamp: timeStr,
    date: dateStr,
    createdAt: Date.now(),
    orderType: finalOrderType,
    tableId: tableId,
    tableName: tableName,
    tableToken: tableToken,
    tableNumber: tableNumber || (APP_STATE.activeTable ? (APP_STATE.activeTable.tableNumber || tableName) : null),
    items: JSON.parse(JSON.stringify(APP_STATE.cart)),
    subtotal: subtotal,
    service: service,
    takeawayFee: takeawayFee || 0,
    total: total,
    status: 'orders',         // 'orders' (placed) -> 'cooking' -> 'ready' -> 'completed'
    statusLabel: 'Order Placed',
    estimatedTime: CFG.estimatedTime
  };

  // Add to Master Orders Store (Shared with Chef & Admin)
  MASTER_ORDERS.unshift(newOrder);

  // Add to Customer's In-Memory Order History
  APP_STATE.orderHistory.unshift(newOrder);

  // Clear cart and update UI INSTANTLY (0 delay)
  APP_STATE.cart = [];
  saveToStorage();
  updateCartUI();
  renderCart();
  renderCurrentOrders();
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

  // Instant notification & tab switch
  toast(`Order #${orderId} placed! Live kitchen tracking started`, 3000);
  switchOrdersTab('current');

  // Persist to real database asynchronously in background without blocking UI
  API.createOrder(newOrder).catch(e => {
    console.warn('Order sync to database error:', e);
  });
}

// ══ RENDER CURRENT ORDERS (PENDING CART + ACTIVE LIVE TRACKING) ══
function renderCurrentOrders() {
  const wrap = document.getElementById('current-orders-items-wrap');
  const pendingSection = document.getElementById('pending-cart-section');

  // Always update pending cart rendering
  renderCart();

  if (APP_STATE.cart.length > 0) {
    if (pendingSection) pendingSection.style.display = 'block';
  } else {
    if (pendingSection) pendingSection.style.display = 'none';
  }

  if (!wrap) return;

  // Sync customer history with MASTER_ORDERS from DB
  if (MASTER_ORDERS.length > 0 && APP_STATE.orderHistory.length > 0) {
    APP_STATE.orderHistory = APP_STATE.orderHistory.map(ord => {
      const match = MASTER_ORDERS.find(m => m.id === ord.id);
      return match ? match : ord;
    });
  }

  // Active in-progress orders (placed, cooking, ready)
  const activeOrders = APP_STATE.orderHistory.filter(o => {
    const s = (o.status || '').toLowerCase();
    return s !== 'completed' && s !== 'cancelled';
  });

  const currentCountEl = document.getElementById('current-orders-seg-count');
  if (currentCountEl) currentCountEl.textContent = activeOrders.length + (APP_STATE.cart.length > 0 ? 1 : 0);

  if (activeOrders.length === 0) {
    if (APP_STATE.cart.length === 0) {
      wrap.innerHTML = `
        <div class="empty-results" style="padding: 36px 16px;">
          <div class="empty-icon">🍳</div>
          <p class="empty-text">No active orders right now</p>
          <p class="empty-sub">Add delicious flame-grilled items to your order and confirm checkout to begin live kitchen tracking.</p>
          <button class="nav-pill-btn active" style="margin: 16px auto 0;" onclick="navigateTo('menu')">Browse menu &rarr;</button>
        </div>
      `;
    } else {
      wrap.innerHTML = '';
    }
    return;
  }

  let html = '';
  activeOrders.forEach(ord => {
    const rawStatus = (ord.status || 'orders').toLowerCase();
    let stepNum = 1;
    let statusLabel = 'Order Placed';
    let statusPillClass = 'chip-orders';
    let statusDesc = 'Order received by the kitchen queue.';

    if (rawStatus === 'cooking' || rawStatus === 'preparing') {
      stepNum = 2;
      statusLabel = 'Cooking';
      statusPillClass = 'chip-cooking';
      statusDesc = 'Chef is grilling and assembling your order hot.';
    } else if (rawStatus === 'ready') {
      stepNum = 3;
      statusLabel = 'Ready for Pickup';
      statusPillClass = 'chip-ready';
      statusDesc = 'Fresh off the grill! Hot and ready for you.';
    }

    let itemsHtml = '';
    (ord.items || []).forEach(item => {
      const extrasList = getItemCustomizationsSummary(item);
      const extrasNote = extrasList.length > 0 
        ? `<div class="kds-extras-wrap">${extrasList.map(e => `<span class="kds-extra-tag">✨ ${escapeHtml(e)}</span>`).join('')}</div>` 
        : '';
      const noteHtml = item.note ? `<div class="kds-note-tag">“${escapeHtml(item.note)}”</div>` : '';
      const itemPrice = Number(item.total) || ((Number(item.unitPrice) || Number(item.basePrice) || 0) * (Number(item.qty) || 1));

      itemsHtml += `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; padding:8px 0; border-bottom:1px solid #F1F5F9; font-size:0.86rem;">
          <div>
            <strong>${item.qty}× ${escapeHtml(item.name)}</strong>
            ${extrasNote}
            ${noteHtml}
          </div>
          <span style="font-weight:700; color:#0F172A;">${formatMoney(itemPrice)}</span>
        </div>
      `;
    });

    const ordTotal = Number(ord.total) || (ord.items || []).reduce((sum, i) => sum + (Number(i.total) || ((Number(i.unitPrice) || Number(i.basePrice) || 0) * (Number(i.qty) || 1))), 0);

    html += `
      <div class="customer-tracking-card ${stepNum === 3 ? 'ready-alert' : ''}" style="margin-bottom:16px;">
        <div class="track-card-head">
          <div>
            <span class="track-order-id">#${ord.id}</span>
            <div style="font-size:0.75rem; color:#64748B; margin-top:2px;">
              ${escapeHtml(ord.orderType || 'Dine-in')} • ${ord.timestamp || ''}
              ${ord.tableName ? ` • <strong style="color:var(--primary-color);">🍽️ ${escapeHtml(ord.tableName)}</strong>` : ''}
            </div>
          </div>
          <span class="status-chip ${statusPillClass}">${statusLabel}</span>
        </div>

        <!-- 3-Step Stepper (Orders -> Cooking -> Ready) -->
        <div class="track-stepper-3">
          <div class="track-step-item ${stepNum >= 1 ? (stepNum === 1 ? 'active' : 'completed') : ''}">
            <div class="track-step-circle">${stepNum > 1 ? '✓' : '1'}</div>
            <div class="track-step-text">Orders</div>
          </div>
          <div class="track-step-item ${stepNum >= 2 ? (stepNum === 2 ? 'active' : 'completed') : ''}">
            <div class="track-step-circle">${stepNum > 2 ? '✓' : '2'}</div>
            <div class="track-step-text">Cooking</div>
          </div>
          <div class="track-step-item ${stepNum >= 3 ? 'active completed' : ''}">
            <div class="track-step-circle">${stepNum === 3 ? '✓' : '3'}</div>
            <div class="track-step-text">Ready</div>
          </div>
        </div>

        <div style="font-size:0.8rem; color:#475569; margin:10px 0 8px;">
          ${statusDesc}
        </div>

        <div style="margin:8px 0;">
          ${itemsHtml}
        </div>

        <div style="font-size:0.94rem; color:#0F172A; font-weight:700; padding:10px 0 2px; display:flex; justify-content:space-between; border-top:1.5px dashed #E2E8F0;">
          <span>Total Amount</span>
          <span style="color:#B45309; font-size:1.05rem;">${formatMoney(ordTotal)}</span>
        </div>

        ${stepNum === 1 ? `
          <!-- Customer Edit & Cancel Actions: ONLY shown before chef starts cooking -->
          <div class="customer-order-actions-bar">
            <button type="button" class="btn-order-action-edit" onclick="openCustomerEditOrderModal('${ord.id}')">
              <i data-lucide="edit-3" class="lucide-icon" style="width:14px;height:14px;"></i>
              <span>Edit Order</span>
            </button>
            <button type="button" class="btn-order-action-delete" onclick="customerCancelOrder('${ord.id}')">
              <i data-lucide="trash-2" class="lucide-icon" style="width:14px;height:14px;"></i>
              <span>Cancel Order</span>
            </button>
          </div>
        ` : `
          <!-- Locked Notice: Once chef begins cooking, modifications are locked and buttons are removed -->
          <div class="order-status-locked-note">
            <i data-lucide="lock" class="lucide-icon" style="width:13px;height:13px;"></i>
            <span>👨‍🍳 Chef is grilling your order • Modifications locked</span>
          </div>
        `}
      </div>
    `;
  });

  wrap.innerHTML = html;
}

// ══ RENDER ORDER HISTORY (COMPLETED ORDERS ONLY) ══
function renderHistory() {
  const wrap = document.getElementById('history-items-wrap');
  if (!wrap) return;

  if (MASTER_ORDERS.length > 0 && APP_STATE.orderHistory.length > 0) {
    APP_STATE.orderHistory = APP_STATE.orderHistory.map(ord => {
      const match = MASTER_ORDERS.find(m => m.id === ord.id);
      return match ? match : ord;
    });
  }

  // Filter ONLY completed orders
  const completedList = APP_STATE.orderHistory.filter(o => (o.status || '').toLowerCase() === 'completed');

  const histCountEl = document.getElementById('history-seg-count');
  if (histCountEl) histCountEl.textContent = completedList.length;

  if (completedList.length === 0) {
    wrap.innerHTML = `
      <div class="empty-results" style="padding: 36px 16px;">
        <div class="empty-icon">📜</div>
        <p class="empty-text">No completed orders yet</p>
        <p class="empty-sub">Once your meals finish grilling and are marked completed by the kitchen, they will appear here in your order history.</p>
        <button class="nav-pill-btn active" style="margin: 16px auto 0;" onclick="navigateTo('menu')">Browse menu &rarr;</button>
      </div>
    `;
    return;
  }

  let html = '';
  completedList.forEach(ord => {
    let itemsHtml = '';
    (ord.items || []).forEach(item => {
      const extrasList = getItemCustomizationsSummary(item);
      const extrasNote = extrasList.length > 0 
        ? `<div class="kds-extras-wrap">${extrasList.map(e => `<span class="kds-extra-tag">✨ ${escapeHtml(e)}</span>`).join('')}</div>` 
        : '';
      const itemPrice = Number(item.total) || ((Number(item.unitPrice) || Number(item.basePrice) || 0) * (Number(item.qty) || 1));

      itemsHtml += `
        <div style="display:flex; justify-content:space-between; align-items:flex-start; padding:6px 0; border-bottom:1px solid #F1F5F9; font-size:0.86rem;">
          <div>
            <strong>${item.qty}× ${escapeHtml(item.name)}</strong>
            ${extrasNote}
          </div>
          <span style="color:#64748B;">${formatMoney(itemPrice)}</span>
        </div>
      `;
    });

    const ordTotal = Number(ord.total) || (ord.items || []).reduce((sum, i) => sum + (Number(i.total) || ((Number(item => item.unitPrice) || Number(i.basePrice) || 0) * (Number(i.qty) || 1))), 0);

    html += `
      <div class="customer-tracking-card" style="margin-bottom:16px;">
        <div class="track-card-head">
          <div>
            <span class="track-order-id">#${ord.id}</span>
            <div style="font-size:0.75rem; color:#64748B; margin-top:2px;">
              ${escapeHtml(ord.orderType || 'Dine-in')} • ${ord.date || ''} ${ord.timestamp || ''}
              ${ord.tableName ? ` • <strong style="color:var(--primary-color);">🍽️ ${escapeHtml(ord.tableName)}</strong>` : ''}
            </div>
          </div>
          <span class="status-chip chip-completed">Completed ✓</span>
        </div>

        <div style="margin:10px 0 6px;">
          ${itemsHtml}
        </div>

        <div style="font-size:0.92rem; color:#0F172A; font-weight:700; padding:8px 0 2px; display:flex; justify-content:space-between; border-top:1.5px dashed #E2E8F0;">
          <span>Total Paid</span>
          <span style="color:#15803D; font-size:1.02rem;">${formatMoney(ordTotal)}</span>
        </div>
      </div>
    `;
  });

  wrap.innerHTML = html;
}

// ══ PORTAL SWITCHER & NAVIGATION (CUSTOMER, CHEF, ADMIN) ══
function switchPortal(portal) {
  // Enforce passcode security for staff portals
  if (portal === 'chef' || portal === 'kitchen') {
    if (!sessionStorage.getItem('staff_auth_kitchen')) {
      promptStaffPassword('kitchen');
      return;
    }
  } else if (portal === 'admin') {
    if (!sessionStorage.getItem('staff_auth_admin')) {
      promptStaffPassword('admin');
      return;
    }
  }

  APP_STATE.portal = portal;
  const customerTopNav = document.getElementById('customer-top-nav');
  if (customerTopNav) {
    customerTopNav.style.display = 'block';
  }
  const searchBtn = document.getElementById('nav-search-btn');
  if (searchBtn) {
    searchBtn.style.display = (portal === 'chef' || portal === 'kitchen' || portal === 'admin') ? 'none' : '';
  }

  const appEl = document.getElementById('app');
  if (appEl) {
    appEl.classList.remove('portal-customer', 'portal-chef', 'portal-admin');
    appEl.classList.add(`portal-${portal}`);
  }

  const bottomNav = document.getElementById('bottom-nav');
  const floatBar = document.getElementById('floating-cart-bar');

  // Toggle views
  document.querySelectorAll('.view').forEach(v => v.classList.remove('active'));

  if (portal === 'customer') {
    if (bottomNav) bottomNav.style.display = 'flex';
    navigateTo(APP_STATE.currentTab === 'orders' ? 'orders' : 'menu');
  } else if (portal === 'chef' || portal === 'kitchen') {
    if (bottomNav) bottomNav.style.display = 'none';
    if (floatBar) floatBar.classList.add('hidden');
    const chefView = document.getElementById('view-chef');
    if (chefView) chefView.classList.add('active');
    renderKdsTickets();
    const isCleanKitchen = window.location.pathname.endsWith('/kitchen') || window.location.pathname.endsWith('/chef');
    if (isCleanKitchen) {
      if (window.location.hash) history.replaceState(null, '', window.location.pathname);
    } else if (window.location.hash !== '#kitchen' && window.location.hash !== '#chef') {
      history.replaceState(null, '', '#kitchen');
    }
  } else if (portal === 'admin') {
    if (bottomNav) bottomNav.style.display = 'none';
    if (floatBar) floatBar.classList.add('hidden');
    const adminView = document.getElementById('view-admin');
    if (adminView) adminView.classList.add('active');
    switchAdminSubTab(APP_STATE.adminSubTab || 'overview');
    const isCleanAdmin = window.location.pathname.endsWith('/admin');
    if (isCleanAdmin) {
      if (window.location.hash) history.replaceState(null, '', window.location.pathname);
    } else if (window.location.hash !== '#admin') {
      history.replaceState(null, '', '#admin');
    }
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
    filtered = MASTER_ORDERS.filter(o => {
      const s = (o.status || '').toLowerCase();
      return s === 'orders' || s === 'received' || s === 'cooking' || s === 'preparing' || s === 'ready';
    });
  } else if (filter === 'orders') {
    filtered = MASTER_ORDERS.filter(o => {
      const s = (o.status || '').toLowerCase();
      return s === 'orders' || s === 'received';
    });
  } else if (filter === 'cooking') {
    filtered = MASTER_ORDERS.filter(o => {
      const s = (o.status || '').toLowerCase();
      return s === 'cooking' || s === 'preparing';
    });
  } else if (filter === 'ready') {
    filtered = MASTER_ORDERS.filter(o => (o.status || '').toLowerCase() === 'ready');
  } else if (filter === 'completed') {
    filtered = MASTER_ORDERS.filter(o => (o.status || '').toLowerCase() === 'completed');
  } else if (filter === 'all') {
    filtered = [...MASTER_ORDERS];
  }

  if (filtered.length === 0) {
    container.innerHTML = `
      <div style="grid-column: 1 / -1; text-align: center; padding: 48px 20px; background: #FFFFFF; border: 1.5px dashed #CBD5E1; border-radius: 16px;">
        <div style="font-size: 2.5rem; margin-bottom: 8px;">🍳</div>
        <h3 style="font-family: var(--font-serif); font-size: 1.25rem; color: #0F172A; margin-bottom: 4px;">
          No orders in this queue
        </h3>
        <p style="font-size: 0.82rem; color: #64748B; max-width: 360px; margin: 0 auto;">
          Orders placed by customers will chime and appear here in real-time. Use the filter dropdown above to view all or completed orders.
        </p>
      </div>
    `;
    return;
  }

  let html = '';
  filtered.forEach(ord => {
    const rawStatus = (ord.status || 'orders').toLowerCase();
    let normStatus = 'orders';
    let statusLabel = 'Order Placed';
    let nextActionBtn = '';

    if (rawStatus === 'cooking' || rawStatus === 'preparing') {
      normStatus = 'cooking';
      statusLabel = 'Cooking';
      nextActionBtn = `<button class="kds-action-btn btn-ready" onclick="kdsSetStatus('${ord.id}', 'ready')">Mark Ready 🛎️</button>`;
    } else if (rawStatus === 'ready') {
      normStatus = 'ready';
      statusLabel = 'Ready for Pickup';
      nextActionBtn = `<button class="kds-action-btn btn-complete" onclick="kdsSetStatus('${ord.id}', 'completed')">Complete Order ✓</button>`;
    } else if (rawStatus === 'completed') {
      normStatus = 'completed';
      statusLabel = 'Completed';
      nextActionBtn = `<span class="kds-status-done">Completed ✓</span>`;
    } else {
      normStatus = 'orders';
      statusLabel = 'Order Placed';
      nextActionBtn = `<button class="kds-action-btn btn-cook" onclick="kdsSetStatus('${ord.id}', 'cooking')">Start Cooking 🔥</button>`;
    }

    let itemsHtml = '';
    (ord.items || []).forEach(item => {
      const extrasList = getItemCustomizationsSummary(item);
      let extrasHtml = '';
      if (extrasList.length > 0) {
        extrasHtml = `
          <div class="kds-extras-wrap">
            ${extrasList.map(e => `<span class="kds-extra-tag">✨ ${escapeHtml(e)}</span>`).join('')}
          </div>
        `;
      }
      itemsHtml += `
        <div class="kds-item-row" style="margin-bottom:10px; padding-bottom:8px; border-bottom:1px solid #F1F5F9;">
          <div>
            <span class="kds-item-qty">${item.qty}×</span>
            <strong style="font-size:0.92rem; color:#0F172A;">${escapeHtml(item.name)}</strong>
            ${extrasHtml}
            ${item.note ? `<div class="kds-note-tag">📝 “${escapeHtml(item.note)}”</div>` : ''}
          </div>
        </div>
      `;
    });

    const ordTotal = Number(ord.total) || (ord.items || []).reduce((sum, i) => sum + (Number(i.total) || ((Number(i.unitPrice) || Number(i.basePrice) || 0) * (Number(i.qty) || 1))), 0);

    const resolvedTable = getOrderTableName(ord);
    const tableBadgeHtml = resolvedTable
      ? `<div class="kds-table-badge"><i data-lucide="utensils" class="lucide-icon"></i> <span>🪑 ${escapeHtml(resolvedTable)}</span></div>`
      : (ord.orderType && ord.orderType.toLowerCase().includes('takeaway')
          ? `<div class="kds-table-badge kds-table-takeaway"><i data-lucide="shopping-bag" class="lucide-icon"></i> <span>🥡 Takeaway</span></div>`
          : `<div class="kds-table-badge kds-table-unassigned"><i data-lucide="help-circle" class="lucide-icon"></i> <span>🍽️ Dine-in (No Table Assigned)</span></div>`);

    const headerTypeLabel = resolvedTable
      ? `${escapeHtml(resolvedTable)} (Dine-in)`
      : (ord.orderType || 'Dine-in');

    html += `
      <div class="kds-ticket-card">
        <div class="kds-ticket-header status-${normStatus}">
          <span>#${ord.id} • ${headerTypeLabel}</span>
          <span>${statusLabel}</span>
        </div>
        ${tableBadgeHtml}
        <div class="kds-ticket-body">
          <div style="font-size:0.74rem; color:#64748B; margin-bottom:8px;">Placed at ${ord.timestamp}</div>
          ${itemsHtml}
        </div>
        <div class="kds-ticket-footer">
          <span style="font-weight:700; color:#0F172A; font-size:0.95rem;">${formatMoney(ordTotal)}</span>
          ${nextActionBtn}
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  refreshLucideIcons();
}

function getOrderTableName(ord) {
  if (!ord) return null;
  if (ord.tableName && String(ord.tableName).trim()) return String(ord.tableName).trim();
  if (ord.table_name && String(ord.table_name).trim()) return String(ord.table_name).trim();
  if (ord.tableNumber && String(ord.tableNumber).trim()) {
    const n = String(ord.tableNumber).trim();
    return /^\d+$/.test(n) ? `Table ${n}` : n;
  }
  if (ord.tableToken && String(ord.tableToken).trim()) {
    const t = String(ord.tableToken).trim();
    const clean = t.replace(/^table[\s\-_]*/i, '').trim();
    return /^\d+$/.test(clean) ? `Table ${clean}` : (t.toLowerCase().startsWith('table') ? t : `Table ${t}`);
  }
  if (ord.table_token && String(ord.table_token).trim()) {
    const t = String(ord.table_token).trim();
    const clean = t.replace(/^table[\s\-_]*/i, '').trim();
    return /^\d+$/.test(clean) ? `Table ${clean}` : (t.toLowerCase().startsWith('table') ? t : `Table ${t}`);
  }
  if (ord.tableId && String(ord.tableId).trim()) {
    const id = String(ord.tableId).trim();
    const clean = id.replace(/^(table|tbl)[\s\-_]*/i, '').trim();
    if (clean) return /^\d+$/.test(clean) ? `Table ${clean}` : `Table ${clean}`;
  }
  if (ord.orderType && ord.orderType.includes('(')) {
    const match = ord.orderType.match(/\(([^)]+)\)/);
    if (match && match[1]) return match[1].trim();
  }
  if (ord.order_type && ord.order_type.includes('(')) {
    const match = ord.order_type.match(/\(([^)]+)\)/);
    if (match && match[1]) return match[1].trim();
  }
  return null;
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
  let label = 'Order Placed';
  if (newStatus === 'cooking') label = 'Cooking';
  if (newStatus === 'ready') label = 'Ready';
  if (newStatus === 'completed') {
    label = 'Completed';
    ord.completedAt = Date.now();
  }
  ord.statusLabel = label;

  // Also update customer orderHistory if matching
  const custOrd = (APP_STATE.orderHistory || []).find(o => o.id === orderId);
  if (custOrd) {
    custOrd.status = newStatus;
    custOrd.statusLabel = label;
    if (newStatus === 'completed') custOrd.completedAt = Date.now();
  }

  saveToStorage();
  updateKitchenCounters();
  renderKdsTickets();
  renderCurrentOrders();
  renderHistory();

  // Persist directly to real database (database.json) via REST API
  API.updateOrderStatus(orderId, newStatus, label).catch(e => console.warn('Status update API error:', e));

  // Audio chimes on status change
  // Only play 'ready' chime here — new order chime is handled by polling
  if (newStatus === 'ready') {
    playKitchenChime('ready');
    toast(`Order #${orderId} marked READY for pickup! 🛎️`, 3000);
  } else if (newStatus === 'cooking') {
    toast(`Order #${orderId} — grilling started 🔥`, 2000);
  } else if (newStatus === 'completed') {
    toast(`Order #${orderId} marked completed ✓`, 2000);
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

  // Persist to real database
  API.updateOrderStatus(orderId, 'cancelled').catch(e => console.warn('Cancel order API error:', e));

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
function getOrderLocalDateStr(order) {
  if (order.date && /^\d{4}-\d{2}-\d{2}$/.test(order.date)) {
    return order.date;
  }
  if (order.createdAt) {
    const d = new Date(Number(order.createdAt));
    if (!isNaN(d.getTime())) {
      const y = d.getFullYear();
      const m = String(d.getMonth() + 1).padStart(2, '0');
      const day = String(d.getDate()).padStart(2, '0');
      return `${y}-${m}-${day}`;
    }
  }
  return '';
}

function formatDateToIsoString(d) {
  const y = d.getFullYear();
  const m = String(d.getMonth() + 1).padStart(2, '0');
  const day = String(d.getDate()).padStart(2, '0');
  return `${y}-${m}-${day}`;
}

function isOrderOnDate(order, targetDateStr) {
  if (!targetDateStr) return false;
  const ordDate = getOrderLocalDateStr(order);
  if (ordDate === targetDateStr) return true;
  if (order.createdAt) {
    try {
      const d = new Date(Number(order.createdAt));
      if (formatDateToIsoString(d) === targetDateStr) return true;
      if (d.toISOString().split('T')[0] === targetDateStr) return true;
    } catch (e) {}
  }
  return false;
}

function renderAdminDashboard() {
  const filter = APP_STATE.adminDateFilter || 'today';
  const now = new Date();
  const todayStr = formatDateToIsoString(now);

  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = formatDateToIsoString(yesterday);

  const twoDaysAgo = new Date(now);
  twoDaysAgo.setDate(twoDaysAgo.getDate() - 2);
  const twoDaysAgoStr = formatDateToIsoString(twoDaysAgo);

  const threeDaysAgo = new Date(now);
  threeDaysAgo.setDate(threeDaysAgo.getDate() - 3);
  const threeDaysAgoStr = formatDateToIsoString(threeDaysAgo);

  const sevenDaysAgoMs = now.getTime() - (7 * 24 * 60 * 60 * 1000);
  const fourteenDaysAgoMs = now.getTime() - (14 * 24 * 60 * 60 * 1000);
  const thirtyDaysAgoMs = now.getTime() - (30 * 24 * 60 * 60 * 1000);

  const currentMonth = now.getMonth();
  const currentYear = now.getFullYear();

  let filtered = [];
  let periodLabel = "Today's Shift";

  if (filter === 'today') {
    filtered = MASTER_ORDERS.filter(o => isOrderOnDate(o, todayStr));
    periodLabel = `Today's Shift (${now.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })})`;
  } else if (filter === 'yesterday') {
    filtered = MASTER_ORDERS.filter(o => isOrderOnDate(o, yesterdayStr));
    periodLabel = `Yesterday (${yesterday.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })})`;
  } else if (filter === '2days') {
    filtered = MASTER_ORDERS.filter(o => isOrderOnDate(o, twoDaysAgoStr));
    periodLabel = `2 Days Ago (${twoDaysAgo.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })})`;
  } else if (filter === '3days') {
    filtered = MASTER_ORDERS.filter(o => isOrderOnDate(o, threeDaysAgoStr));
    periodLabel = `3 Days Ago (${threeDaysAgo.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric' })})`;
  } else if (filter === 'week') {
    filtered = MASTER_ORDERS.filter(o => {
      if (o.createdAt) return Number(o.createdAt) >= sevenDaysAgoMs;
      const od = getOrderLocalDateStr(o);
      if (od) return new Date(od).getTime() >= (now.getTime() - 8 * 86400000);
      return false;
    });
    periodLabel = "Past 7 Days";
  } else if (filter === '14days') {
    filtered = MASTER_ORDERS.filter(o => {
      if (o.createdAt) return Number(o.createdAt) >= fourteenDaysAgoMs;
      const od = getOrderLocalDateStr(o);
      if (od) return new Date(od).getTime() >= (now.getTime() - 15 * 86400000);
      return false;
    });
    periodLabel = "Past 14 Days";
  } else if (filter === '30days') {
    filtered = MASTER_ORDERS.filter(o => {
      if (o.createdAt) return Number(o.createdAt) >= thirtyDaysAgoMs;
      const od = getOrderLocalDateStr(o);
      if (od) return new Date(od).getTime() >= (now.getTime() - 31 * 86400000);
      return false;
    });
    periodLabel = "Past 30 Days";
  } else if (filter === 'month') {
    filtered = MASTER_ORDERS.filter(o => {
      const d = o.createdAt ? new Date(Number(o.createdAt)) : (o.date ? new Date(o.date) : null);
      if (!d || isNaN(d.getTime())) return false;
      return d.getMonth() === currentMonth && d.getFullYear() === currentYear;
    });
    periodLabel = `This Month (${now.toLocaleDateString('en-US', { month: 'long', year: 'numeric' })})`;
  } else if (filter === 'custom' && APP_STATE.adminCustomDate) {
    const custDate = APP_STATE.adminCustomDate;
    filtered = MASTER_ORDERS.filter(o => isOrderOnDate(o, custDate));
    const dParts = custDate.split('-');
    const displayDate = new Date(Number(dParts[0]), Number(dParts[1]) - 1, Number(dParts[2]));
    const formattedDisplay = !isNaN(displayDate.getTime())
      ? displayDate.toLocaleDateString('en-US', { weekday: 'short', month: 'short', day: 'numeric', year: 'numeric' })
      : custDate;
    periodLabel = formattedDisplay;
  } else {
    filtered = [...MASTER_ORDERS];
    periodLabel = "All Time (Lifetime)";
  }

  // Exclude cancelled orders from revenue calculation
  const validOrders = filtered.filter(o => o.status !== 'cancelled');
  const totalRevenue = validOrders.reduce((sum, o) => sum + (o.total || 0), 0);
  const totalOrders = filtered.length;
  const aov = totalOrders > 0 ? Math.round(totalRevenue / totalOrders) : 0;
  const activeKitchen = MASTER_ORDERS.filter(o => o.status === 'received' || o.status === 'preparing' || o.status === 'cooking').length;

  // Lifetime revenue
  const lifetimeRevenue = MASTER_ORDERS
    .filter(o => o.status !== 'cancelled')
    .reduce((sum, o) => sum + (o.total || 0), 0);

  // Update KPI Cards
  const kpiRev = document.getElementById('kpi-revenue');
  const kpiRevSub = document.getElementById('kpi-revenue-sub');
  const kpiOrders = document.getElementById('kpi-orders-count');
  const kpiOrdersSub = document.getElementById('kpi-orders-sub');
  const kpiKitchen = document.getElementById('kpi-kitchen-active');

  if (kpiRev) kpiRev.textContent = formatMoney(totalRevenue);
  if (kpiRevSub) kpiRevSub.textContent = `Lifetime: ${formatMoney(lifetimeRevenue)}`;
  if (kpiOrders) kpiOrders.textContent = totalOrders;
  if (kpiOrdersSub) kpiOrdersSub.textContent = `Lifetime: ${MASTER_ORDERS.length} orders`;
  if (kpiKitchen) kpiKitchen.textContent = activeKitchen;

  // Active Period Banner
  const periodTextEl = document.getElementById('admin-period-text');
  if (periodTextEl) {
    const isFilteredNotToday = (filter !== 'today');
    periodTextEl.innerHTML = `
      <span>Viewing Analytics: <strong>${periodLabel}</strong> • <strong>${totalOrders}</strong> order${totalOrders === 1 ? '' : 's'} (${formatMoney(totalRevenue)})</span>
      ${isFilteredNotToday ? '<button class="btn-period-reset" onclick="resetAdminDateToToday()">Reset to Today</button>' : ''}
    `;
  }

  // Handle custom date box visibility
  const customBox = document.getElementById('admin-custom-date-box');
  const customInput = document.getElementById('admin-custom-date-input');
  if (customBox) {
    if (filter === 'custom') {
      customBox.classList.remove('hidden');
      if (customInput && APP_STATE.adminCustomDate) {
        customInput.value = APP_STATE.adminCustomDate;
      }
    } else {
      customBox.classList.add('hidden');
    }
  }

  // Sync dropdown selection
  const dateSelect = document.getElementById('admin-date-filter');
  if (dateSelect) {
    dateSelect.value = (filter === 'custom') ? 'custom' : filter;
  }

  // Render 7-Day Revenue Trend Chart (interactive)
  renderAdminRevenueBars();

  // Render Category Breakdown Bars
  renderAdminCategoryShare(validOrders);

  // Render Top 5 Bestsellers Leaderboard
  renderAdminBestsellers(validOrders);

  // Render Orders Ledger Table
  renderAdminOrdersTable(filtered);
  refreshLucideIcons();
}

function renderAdminRevenueBars() {
  const container = document.getElementById('admin-revenue-bars');
  if (!container) return;

  const days = [];
  const now = new Date();

  for (let i = 6; i >= 0; i--) {
    const d = new Date(now);
    d.setDate(d.getDate() - i);
    const dateStr = formatDateToIsoString(d);
    const dayName = i === 0 ? 'Today' : (i === 1 ? 'Yesterday' : d.toLocaleDateString('en-US', { weekday: 'short' }));

    const dayRevenue = MASTER_ORDERS
      .filter(o => isOrderOnDate(o, dateStr) && o.status !== 'cancelled')
      .reduce((sum, o) => sum + (o.total || 0), 0);

    const dayOrdersCount = MASTER_ORDERS
      .filter(o => isOrderOnDate(o, dateStr) && o.status !== 'cancelled').length;

    days.push({
      dateStr,
      dayName,
      revenue: dayRevenue,
      count: dayOrdersCount,
      isToday: i === 0,
      isYesterday: i === 1
    });
  }

  const maxRev = Math.max(...days.map(d => d.revenue), 100);

  let html = '';
  days.forEach(d => {
    const heightPct = Math.max(8, Math.round((d.revenue / maxRev) * 100));
    const isSelected = (APP_STATE.adminDateFilter === 'custom' && APP_STATE.adminCustomDate === d.dateStr) ||
                       (APP_STATE.adminDateFilter === 'today' && d.isToday) ||
                       (APP_STATE.adminDateFilter === 'yesterday' && d.isYesterday);

    html += `
      <div class="chart-bar-col ${isSelected ? 'active-chart-bar' : ''}" onclick="selectAdminChartDate('${d.dateStr}', '${d.dayName}')" title="Click to view analytics for ${d.dayName} (${d.dateStr}) • ${d.count} orders">
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
        <td>
          <span class="ticket-ordertype-badge ${ord.orderType === 'Takeaway' ? 'type-takeaway' : 'type-dinein'}">${escapeHtml(ord.orderType)}</span>
          ${ord.tableName ? `<span class="admin-table-chip">🍽️ ${escapeHtml(ord.tableName)}</span>` : ''}
        </td>
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
  if (value === 'custom') {
    APP_STATE.adminDateFilter = 'custom';
    if (!APP_STATE.adminCustomDate) {
      const yesterday = new Date();
      yesterday.setDate(yesterday.getDate() - 1);
      APP_STATE.adminCustomDate = formatDateToIsoString(yesterday);
    }
  } else {
    APP_STATE.adminDateFilter = value;
  }
  renderAdminDashboard();
}

function handleAdminCustomDate(dateStr) {
  if (!dateStr) return;
  APP_STATE.adminDateFilter = 'custom';
  APP_STATE.adminCustomDate = dateStr;
  renderAdminDashboard();
  toast(`Viewing analytics for ${dateStr}`);
}

function selectAdminChartDate(dateStr, dayName) {
  if (dayName === 'Today') {
    APP_STATE.adminDateFilter = 'today';
    APP_STATE.adminCustomDate = dateStr;
  } else if (dayName === 'Yesterday') {
    APP_STATE.adminDateFilter = 'yesterday';
    APP_STATE.adminCustomDate = dateStr;
  } else {
    APP_STATE.adminDateFilter = 'custom';
    APP_STATE.adminCustomDate = dateStr;
  }
  renderAdminDashboard();
  toast(`Viewing analytics for ${dayName} (${dateStr})`);
}

function resetAdminDateToToday() {
  APP_STATE.adminDateFilter = 'today';
  renderAdminDashboard();
  toast("Switched back to Today's Shift");
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

  const newState = !current;
  APP_STATE.stockStatus[productId] = newState;
  saveToStorage();

  // Sync directly to real database
  API.patchProductStock(productId, newState).catch(e => console.warn('Stock sync error:', e));

  // Update in-memory PRODUCTS array
  const prod = PRODUCTS.find(p => p.id === productId);
  if (prod) prod.available = newState;

  renderAdminItemsCrud();
  renderMenu();

  const name = prod ? prod.name : 'Item';
  toast(`${name} is now ${newState ? 'Available' : 'Sold Out (86\'d)'}`);

  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({ type: 'STOCK_UPDATE', productId, inStock: newState });
    } catch (e) {}
  }
}

// ══ EXPORT ORDERS CSV SPREADSHEET ══
function exportOrdersCsv() {
  const filter = APP_STATE.adminDateFilter || 'today';
  let targetOrders = [...MASTER_ORDERS];

  const now = new Date();
  const todayStr = formatDateToIsoString(now);
  const yesterday = new Date(now);
  yesterday.setDate(yesterday.getDate() - 1);
  const yesterdayStr = formatDateToIsoString(yesterday);

  if (filter === 'today') {
    targetOrders = MASTER_ORDERS.filter(o => isOrderOnDate(o, todayStr));
  } else if (filter === 'yesterday') {
    targetOrders = MASTER_ORDERS.filter(o => isOrderOnDate(o, yesterdayStr));
  } else if (filter === 'custom' && APP_STATE.adminCustomDate) {
    targetOrders = MASTER_ORDERS.filter(o => isOrderOnDate(o, APP_STATE.adminCustomDate));
  }

  if (targetOrders.length === 0) {
    targetOrders = MASTER_ORDERS;
  }

  if (targetOrders.length === 0) {
    toast('No orders to export');
    return;
  }

  let csv = 'Order ID,Date,Time,Order Type,Items,Subtotal,Service Charge,Total (ETB),Status\n';

  targetOrders.forEach(o => {
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
  a.download = `Alemaya_Grilld_${filter}_${formatDateToIsoString(now)}.csv`;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
  toast(`Exported ${targetOrders.length} order report rows (${filter})`);
}

// ══ ORDER TICKET DETAIL MODAL (FOR CHEF & ADMIN) ══
function openOrderModal(orderId) {
  const ord = MASTER_ORDERS.find(o => o.id === orderId);
  if (!ord) return;

  const overlay = document.getElementById('order-modal-overlay');
  const modal = document.getElementById('order-detail-modal');
  const content = document.getElementById('order-modal-content');
  if (!modal || !content) return;

  const rawStatus = (ord.status || 'orders').toLowerCase();
  let normStatus = 'orders';
  let statusLabel = 'Order Placed';
  if (rawStatus === 'cooking' || rawStatus === 'preparing') {
    normStatus = 'cooking';
    statusLabel = 'Cooking';
  } else if (rawStatus === 'ready') {
    normStatus = 'ready';
    statusLabel = 'Ready';
  } else if (rawStatus === 'completed') {
    normStatus = 'completed';
    statusLabel = 'Completed';
  }

  let itemsHtml = '';
  (ord.items || []).forEach(item => {
    const extrasList = getItemCustomizationsSummary(item);
    let extraText = '';
    if (extrasList.length > 0) {
      extraText = `<div style="font-size:0.75rem; color:#B45309; font-weight:600; margin-top:2px;">+ ${extrasList.join(', ')}</div>`;
    }
    const itemTotal = Number(item.total) || ((Number(item.unitPrice) || Number(item.basePrice) || 0) * (Number(item.qty) || 1));
    itemsHtml += `
      <div style="display:flex; justify-content:space-between; padding:8px 0; border-bottom:1px solid #F1F5F9; font-size:0.86rem;">
        <div>
          <strong>${item.qty}× ${escapeHtml(item.name)}</strong>
          ${extraText}
          ${item.note ? `<div style="font-size:0.75rem; color:#854D0E;">“${escapeHtml(item.note)}”</div>` : ''}
        </div>
        <span style="font-weight:600; color:#0F172A;">${formatMoney(itemTotal)}</span>
      </div>
    `;
  });

  const ordTotal = Number(ord.total) || (ord.items || []).reduce((sum, i) => sum + (Number(i.total) || ((Number(i.unitPrice) || Number(i.basePrice) || 0) * (Number(i.qty) || 1))), 0);

  content.innerHTML = `
    <div style="margin-bottom:14px;">
      <span class="status-chip chip-${normStatus}">${statusLabel}</span>
      <h2 style="font-family:var(--font-serif); font-size:1.45rem; margin-top:8px; color:#0F172A;">Order #${ord.id}</h2>
      <div style="font-size:0.82rem; color:#64748B;">
        ${ord.orderType || 'Dine-in'} • ${ord.date} at ${ord.timestamp}
        ${ord.tableName ? ` • <strong style="color:var(--primary-color);">🍽️ ${escapeHtml(ord.tableName)}</strong>` : ''}
      </div>
    </div>

    <div style="margin:14px 0;">
      <h4 style="font-size:0.82rem; font-weight:700; color:#64748B; margin-bottom:8px; text-transform:uppercase; letter-spacing:0.04em;">Items Breakdown</h4>
      ${itemsHtml}
    </div>

    <div style="background:#F8FAFC; border:1px solid #E2E8F0; padding:12px; border-radius:10px; margin:14px 0; font-size:0.88rem;">
      <div style="display:flex; justify-content:space-between; font-weight:800; font-size:1.05rem;">
        <span>Total Amount</span>
        <span style="color:#B45309;">${formatMoney(ordTotal)}</span>
      </div>
    </div>

    <!-- Read-Only Kitchen Status Display (Updates Managed by Kitchen) -->
    <div style="margin-top:16px; padding:10px 14px; background:#F8FAFC; border-radius:10px; border:1px solid #E2E8F0; display:flex; align-items:center; justify-content:space-between;">
      <span style="font-size:0.8rem; font-weight:700; color:#64748B; text-transform:uppercase; letter-spacing:0.04em;">Current Kitchen Status</span>
      <span class="status-chip chip-${normStatus}">${statusLabel}</span>
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
// NOTE: resume() is async — we MUST await it before scheduling oscillator nodes,
// otherwise nodes get scheduled at currentTime=0 (already past) and produce no sound.
async function playKitchenChime(type = 'new_order') {
  if (!APP_STATE.audioEnabled) return;
  try {
    const AudioCtx = window.AudioContext || window.webkitAudioContext;
    if (!AudioCtx) return;
    if (!KITCHEN_AUDIO_CTX) KITCHEN_AUDIO_CTX = new AudioCtx();

    // CRITICAL: await resume so context is actually running before we schedule notes
    if (KITCHEN_AUDIO_CTX.state === 'suspended') {
      await KITCHEN_AUDIO_CTX.resume();
    }
    if (KITCHEN_AUDIO_CTX.state !== 'running') return; // still blocked — give up

    // Hide unlock banner since audio is now working
    const banner = document.getElementById('audio-unlock-banner');
    if (banner) banner.style.display = 'none';

    const now = KITCHEN_AUDIO_CTX.currentTime;

    if (type === 'ready') {
      // 3-tone cheerful ascending chime (Do - Mi - Sol)
      const osc = KITCHEN_AUDIO_CTX.createOscillator();
      const gain = KITCHEN_AUDIO_CTX.createGain();
      osc.connect(gain);
      gain.connect(KITCHEN_AUDIO_CTX.destination);

      osc.type = 'sine';
      osc.frequency.setValueAtTime(523.25, now);
      osc.frequency.setValueAtTime(659.25, now + 0.12);
      osc.frequency.setValueAtTime(783.99, now + 0.24);
      gain.gain.setValueAtTime(0.35, now);
      gain.gain.exponentialRampToValueAtTime(0.001, now + 0.7);
      osc.start(now);
      osc.stop(now + 0.75);
    } else {
      // High-audibility restaurant service ticket chime (Ding-Dong)
      // Bell 1: 784 Hz (G5)
      const osc1 = KITCHEN_AUDIO_CTX.createOscillator();
      const gain1 = KITCHEN_AUDIO_CTX.createGain();
      osc1.connect(gain1);
      gain1.connect(KITCHEN_AUDIO_CTX.destination);
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(783.99, now);
      gain1.gain.setValueAtTime(0.45, now);
      gain1.gain.exponentialRampToValueAtTime(0.001, now + 0.45);
      osc1.start(now);
      osc1.stop(now + 0.5);

      // Bell 2: 1046.5 Hz (C6) with crisp sustain
      const osc2 = KITCHEN_AUDIO_CTX.createOscillator();
      const gain2 = KITCHEN_AUDIO_CTX.createGain();
      osc2.connect(gain2);
      gain2.connect(KITCHEN_AUDIO_CTX.destination);
      osc2.type = 'sine';
      osc2.frequency.setValueAtTime(1046.50, now + 0.20);
      gain2.gain.setValueAtTime(0.001, now);
      gain2.gain.setValueAtTime(0.5, now + 0.20);
      gain2.gain.exponentialRampToValueAtTime(0.001, now + 0.95);
      osc2.start(now + 0.20);
      osc2.stop(now + 1.0);
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
    localStorage.setItem('alemaya_stock', JSON.stringify(APP_STATE.stockStatus));
    if (APP_STATE.activeTable) {
      localStorage.setItem('alemaya_active_table', JSON.stringify(APP_STATE.activeTable));
    } else {
      localStorage.removeItem('alemaya_active_table');
    }
    if (APP_STATE.settings) {
      localStorage.setItem('alemaya_settings', JSON.stringify(APP_STATE.settings));
    }
    // Explicitly do not save customer order history in local storage
    localStorage.removeItem('alemaya_history');
    localStorage.removeItem('alemaya_master_orders');
  } catch (e) {
    console.warn('Storage save failed:', e);
  }
}

function restoreFromStorage() {
  try {
    const savedCart = localStorage.getItem('alemaya_cart');
    if (savedCart) APP_STATE.cart = JSON.parse(savedCart);

    // Clean up stale orders from local storage so customer does not see old orders
    localStorage.removeItem('alemaya_history');
    localStorage.removeItem('alemaya_master_orders');
    APP_STATE.orderHistory = [];

    const savedStock = localStorage.getItem('alemaya_stock');
    if (savedStock) APP_STATE.stockStatus = JSON.parse(savedStock);

    const savedTable = localStorage.getItem('alemaya_active_table');
    if (savedTable && !APP_STATE.activeTable) {
      try { APP_STATE.activeTable = JSON.parse(savedTable); } catch {}
    }

    const savedSettings = localStorage.getItem('alemaya_settings');
    if (savedSettings) {
      try { APP_STATE.settings = { ...APP_STATE.settings, ...JSON.parse(savedSettings) }; } catch {}
    }
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

// ═══════════════════════════════════════════════════════════════
// ADMIN SUB-NAVIGATION & CRUD SYSTEM
// ═══════════════════════════════════════════════════════════════

// ── Admin Sub-Tab Switcher ──
function switchAdminSubTab(subTab) {
  APP_STATE.adminSubTab = subTab;

  // Update tab buttons — support both .admin-subtab (legacy) and .admin-tab (current HTML)
  document.querySelectorAll('.admin-subtab, .admin-tab').forEach(btn => btn.classList.remove('active'));
  // Legacy id-based highlight
  document.getElementById(`asub-${subTab}`)?.classList.add('active');
  // Current HTML: buttons have data-pane attribute
  document.querySelector(`.admin-tab[data-pane="${subTab}"]`)?.classList.add('active');

  // Update sub-pane visibility
  document.querySelectorAll('.admin-subpane').forEach(p => p.classList.remove('active'));
  document.getElementById(`admin-pane-${subTab}`)?.classList.add('active');

  // Render corresponding content
  if (subTab === 'overview') {
    renderAdminDashboard();
  } else if (subTab === 'items') {
    populateAdminCategoryDropdowns();
    renderAdminItemsCrud();
  } else if (subTab === 'categories') {
    renderAdminCatsCrud();
  } else if (subTab === 'extras') {
    renderAdminExtrasCrud();
  } else if (subTab === 'orders') {
    renderAdminOrdersSubpane();
  } else if (subTab === 'tables') {
    renderAdminTablesCrud();
  } else if (subTab === 'settings') {
    renderAdminSettings();
  }

  refreshLucideIcons();
}

// Alias used by HTML onclick="switchAdminPane(...)"
function switchAdminPane(pane) {
  switchAdminSubTab(pane);
}

// ── Render Items CRUD List ──
function renderAdminItemsCrud() {
  const container = document.getElementById('admin-items-crud-list');
  const totalCount = document.getElementById('admin-items-total-count');
  if (!container) return;

  const q = (document.getElementById('admin-crud-item-search')?.value || '').trim().toLowerCase();
  const catFilter = document.getElementById('admin-crud-cat-filter')?.value || 'all';

  let items = PRODUCTS.filter(p => {
    const matchQ = !q || p.name.toLowerCase().includes(q) || (p.categoryId || '').toLowerCase().includes(q);
    const matchCat = catFilter === 'all' || p.categoryId === catFilter;
    return matchQ && matchCat;
  });

  if (totalCount) totalCount.textContent = PRODUCTS.length;

  if (items.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:var(--text-muted);">
        <div style="font-size:2rem;margin-bottom:10px;">🍽️</div>
        <p style="font-size:0.85rem;">No items found. Add your first dish!</p>
      </div>
    `;
    return;
  }

  let html = '';
  items.forEach(p => {
    const isAvail = (APP_STATE.stockStatus && APP_STATE.stockStatus[p.id] !== undefined)
      ? APP_STATE.stockStatus[p.id]
      : (p.available !== false);

    const cat = CATEGORIES.find(c => c.id === p.categoryId);
    const catName = cat ? cat.name : p.categoryId;

    const hasDiscount = p.discountPrice > 0 && p.discountPrice < p.basePrice;
    const priceDisplay = hasDiscount
      ? `<div class="crud-price-wrap" style="display:inline-flex; align-items:center; gap:6px; flex-wrap:wrap; margin-top:2px;">
          <span style="color:#ff650c; font-weight:800; font-size:1.02rem;">${formatMoney(p.discountPrice)}</span>
          <del style="color:#9CA3AF; font-size:0.82rem; text-decoration:line-through; text-decoration-color:#EF4444; font-weight:500;">${formatMoney(p.basePrice)}</del>
          <span style="background:#FEE2E2; color:#DC2626; font-size:0.62rem; font-weight:800; padding:2px 6px; border-radius:4px; vertical-align:middle;">SALE</span>
        </div>`
      : `<div class="crud-item-price">${formatMoney(p.basePrice)}</div>`;

    html += `
      <div class="admin-item-crud-card">
        <div class="admin-item-crud-top">
          <img src="${p.image || 'logo.png'}" alt="${escapeHtml(p.name)}" class="crud-item-thumb" onerror="this.src='logo.png'">
          <div class="crud-item-meta">
            <div class="crud-item-title">${escapeHtml(p.name)}</div>
            <div class="crud-item-sub">${escapeHtml(catName)} ${p.badge ? '• <strong>' + escapeHtml(p.badge) + '</strong>' : ''}</div>
            ${priceDisplay}
          </div>
        </div>
        <div class="admin-item-crud-actions">
          <button class="crud-stock-pill ${isAvail ? 'stock-active' : 'stock-inactive'}" onclick="toggleItemStock('${p.id}')">
            ${isAvail ? '✓ In Stock' : '✕ 86\'d / Out'}
          </button>
          <div class="crud-btn-group">
            <button class="btn-edit-action" onclick="openEditItemModal('${p.id}')">✏️ Edit</button>
            <button class="btn-delete-action" onclick="handleDeleteItem('${p.id}')">🗑️ Delete</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ── Render Categories CRUD List ──
function renderAdminCatsCrud() {
  const container = document.getElementById('admin-cats-crud-list');
  const totalCount = document.getElementById('admin-cats-total-count');
  if (!container) return;

  if (totalCount) totalCount.textContent = CATEGORIES.length;

  if (CATEGORIES.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:var(--text-muted);">
        <p style="font-size:0.85rem;">No categories yet. Add your first category!</p>
      </div>
    `;
    return;
  }

  let html = '';
  CATEGORIES.forEach(cat => {
    const itemCount = PRODUCTS.filter(p => p.categoryId === cat.id).length;
    const svgIcon = getCategorySvg(cat);
    html += `
      <div class="admin-cat-crud-row">
        <div class="admin-cat-left">
          <div class="admin-cat-icon-box">${svgIcon}</div>
          <div>
            <div class="admin-cat-name">${escapeHtml(cat.name)}</div>
            <div class="admin-cat-count">${itemCount} items • ID: ${escapeHtml(cat.id)}</div>
          </div>
        </div>
        <div class="crud-btn-group">
          <button class="btn-edit-action" onclick="openEditCategoryModal('${cat.id}')">✏️</button>
          <button class="btn-delete-action" onclick="handleDeleteCategory('${cat.id}')">🗑️</button>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

// ── Render Admin Orders Mobile Cards ──
function renderAdminOrdersSubpane() {
  const container = document.getElementById('admin-mobile-orders-list');
  if (!container) return;

  const q = (document.getElementById('admin-order-search')?.value || '').trim().toLowerCase();
  const statusFilter = document.getElementById('admin-status-filter')?.value || 'all';

  let list = [...MASTER_ORDERS];

  if (statusFilter !== 'all') {
    if (statusFilter === 'orders') {
      list = list.filter(o => o.status === 'orders' || o.status === 'received');
    } else if (statusFilter === 'cooking') {
      list = list.filter(o => o.status === 'cooking' || o.status === 'preparing');
    } else if (statusFilter === 'ready') {
      list = list.filter(o => o.status === 'ready' || o.status === 'completed');
    } else {
      list = list.filter(o => o.status === statusFilter);
    }
  }

  if (q) {
    list = list.filter(o =>
      o.id.toLowerCase().includes(q) ||
      (o.orderType || '').toLowerCase().includes(q) ||
      (o.items || []).some(i => i.name.toLowerCase().includes(q))
    );
  }

  if (list.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:var(--text-muted);">
        <div style="font-size:2rem;margin-bottom:10px;">📋</div>
        <p style="font-size:0.85rem;">No orders match your filter.</p>
      </div>
    `;
    return;
  }

  let html = '';
  list.forEach(ord => {
    const rawStatus = (ord.status || 'orders').toLowerCase();
    let normStatus = 'orders';
    let statusLabel = 'Order Placed';
    if (rawStatus === 'cooking' || rawStatus === 'preparing') {
      normStatus = 'cooking';
      statusLabel = 'Cooking';
    } else if (rawStatus === 'ready') {
      normStatus = 'ready';
      statusLabel = 'Ready';
    } else if (rawStatus === 'completed') {
      normStatus = 'completed';
      statusLabel = 'Completed';
    } else if (rawStatus === 'cancelled') {
      normStatus = 'cancelled';
      statusLabel = 'Cancelled';
    }

    const itemSummary = (ord.items || []).map(i => {
      const extrasList = getItemCustomizationsSummary(i);
      const extrasStr = extrasList.length > 0 ? ` (+ ${extrasList.join(', ')})` : '';
      return `${i.qty}× ${escapeHtml(i.name)}${extrasStr}`;
    }).join(', ');

    const ordTotal = Number(ord.total) || (ord.items || []).reduce((sum, i) => sum + (Number(i.total) || ((Number(i.unitPrice) || Number(i.basePrice) || 0) * (Number(i.qty) || 1))), 0);

    html += `
      <div class="admin-mobile-order-card" style="background:#FFFFFF; border:1px solid #E2E8F0; border-radius:12px; padding:14px; margin-bottom:12px;">
        <div class="admin-moc-head" style="display:flex; justify-content:space-between; align-items:center; margin-bottom:8px;">
          <div style="display:flex; align-items:center; gap:8px;">
            <strong style="font-size:0.95rem; color:#0F172A;">#${ord.id}</strong>
            ${(getOrderTableName(ord) || ord.tableName) ? `<span class="admin-table-chip">🍽️ ${escapeHtml(getOrderTableName(ord) || ord.tableName)}</span>` : ''}
          </div>
          <span class="status-chip chip-${normStatus}">${statusLabel}</span>
        </div>
        <div class="admin-moc-items" style="font-size:0.84rem; color:#334155; margin-bottom:10px;">${itemSummary}</div>
        <div class="admin-moc-foot" style="display:flex; justify-content:space-between; align-items:center; border-top:1px solid #F1F5F9; padding-top:8px;">
          <div style="font-size:0.75rem; color:#64748B;">
            ${escapeHtml(ord.orderType || 'Dine-in')} • ${ord.date || ''} ${ord.timestamp || ''}
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <strong style="color:#B45309; font-size:0.92rem;">${formatMoney(ordTotal)}</strong>
            <button class="btn-table-action" onclick="openOrderModal('${ord.id}')">
              <i data-lucide="eye" style="width:13px; height:13px;"></i>
              <span>View</span>
            </button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
  refreshLucideIcons();
}

// ── Image Preset & Cloudinary Helpers ──
function handleImagePresetChange(val) {
  const customInput = document.getElementById('crud-item-image-custom');
  if (val === 'custom') {
    if (customInput) {
      customInput.style.display = 'block';
      customInput.focus();
      updatePhotoPreview(customInput.value || 'logo.png');
    }
  } else {
    if (customInput) customInput.style.display = 'none';
    updatePhotoPreview(val);
  }
}

function updatePhotoPreview(url) {
  const img = document.getElementById('crud-item-thumb-preview');
  const status = document.getElementById('crud-item-photo-status');
  const cleanUrl = (url || '').trim() || 'logo.png';
  if (img) img.src = cleanUrl;
  if (status) {
    if (cleanUrl.includes('cloudinary.com')) {
      status.innerHTML = `<span style="color:#059669;font-weight:700;">☁️ Cloudinary:</span> ${escapeHtml(cleanUrl.split('/').pop())}`;
    } else {
      status.textContent = `Photo: ${cleanUrl}`;
    }
  }
}

async function handleAdminPhotoUpload(event) {
  const file = event.target.files && event.target.files[0];
  if (!file) return;

  const status = document.getElementById('crud-item-photo-status');
  if (status) status.innerHTML = '<span style="color:var(--brand-terracotta);font-weight:700;">⏳ Uploading to Cloudinary / Server...</span>';

  const reader = new FileReader();
  reader.onload = async (e) => {
    const base64Data = e.target.result;
    try {
      const res = await API.uploadImage(base64Data);
      if (res && res.success && res.url) {
        const sel = document.getElementById('crud-item-image');
        const customInput = document.getElementById('crud-item-image-custom');
        if (sel) sel.value = 'custom';
        if (customInput) {
          customInput.style.display = 'block';
          customInput.value = res.url;
        }
        updatePhotoPreview(res.url);
        toast('Photo uploaded successfully! ☁️', 3000);
      } else {
        toast('Upload notice: ' + ((res && res.error) || 'Failed to upload'), 3500);
        updatePhotoPreview('burger_classic.jpg');
      }
    } catch (err) {
      console.error('Upload error:', err);
      toast('Upload failed. Check server.', 3500);
      updatePhotoPreview('burger_classic.jpg');
    }
  };
  reader.readAsDataURL(file);
}

function getActivePhotoUrl() {
  const sel = document.getElementById('crud-item-image');
  const customInput = document.getElementById('crud-item-image-custom');
  if (sel && sel.value === 'custom') {
    return (customInput && customInput.value.trim()) || 'logo.png';
  }
  return (sel && sel.value) || 'burger_classic.jpg';
}

// ── Item Modal: Open for Create ──
function openCreateItemModal() {
  document.getElementById('crud-item-modal-title').textContent = 'Add Menu Item';
  document.getElementById('crud-item-submit-btn').textContent = 'Save Dish to Real Database';
  document.getElementById('crud-item-id').value = '';
  document.getElementById('crud-item-name').value = '';
  document.getElementById('crud-item-price').value = '';
  document.getElementById('crud-item-discount-price').value = '';
  document.getElementById('crud-item-badge').value = '';
  document.getElementById('crud-item-desc').value = '';
  document.getElementById('crud-item-ingredients').value = '';
  document.getElementById('crud-item-available').checked = true;

  const imgSel = document.getElementById('crud-item-image');
  const customInput = document.getElementById('crud-item-image-custom');
  if (imgSel) imgSel.value = 'burger_classic.jpg';
  if (customInput) {
    customInput.value = '';
    customInput.style.display = 'none';
  }
  updatePhotoPreview('burger_classic.jpg');

  populateAdminCategoryDropdowns();

  document.getElementById('crud-item-overlay').classList.add('open');
  document.getElementById('crud-item-modal').classList.add('open');
  refreshLucideIcons();
}

// ── Item Modal: Open for Edit ──
function openEditItemModal(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  if (!prod) return;

  document.getElementById('crud-item-modal-title').textContent = 'Edit Menu Item';
  document.getElementById('crud-item-submit-btn').textContent = 'Update Dish in Real Database';
  document.getElementById('crud-item-id').value = prod.id;
  document.getElementById('crud-item-name').value = prod.name || '';
  document.getElementById('crud-item-price').value = prod.basePrice || '';
  document.getElementById('crud-item-discount-price').value = prod.discountPrice > 0 ? prod.discountPrice : '';
  document.getElementById('crud-item-badge').value = prod.badge || '';
  document.getElementById('crud-item-desc').value = prod.description || '';
  document.getElementById('crud-item-ingredients').value = Array.isArray(prod.ingredients)
    ? prod.ingredients.join(', ')
    : (prod.ingredients || '');
  document.getElementById('crud-item-available').checked = (prod.available !== false);

  populateAdminCategoryDropdowns();

  const catSel = document.getElementById('crud-item-category');
  if (catSel) catSel.value = prod.categoryId || '';

  const imgSel = document.getElementById('crud-item-image');
  const customInput = document.getElementById('crud-item-image-custom');
  const prodImg = prod.image || 'burger_classic.jpg';
  
  const knownPresets = ['burger_classic.jpg', 'pizza_margherita.jpg', 'chicken_sandwich.jpg', 'smoothie_tropical.jpg', 'milkshake_chocolate.jpg', 'pasta_carbonara.jpg', 'burrito_bowl.jpg'];
  if (knownPresets.includes(prodImg)) {
    if (imgSel) imgSel.value = prodImg;
    if (customInput) {
      customInput.value = '';
      customInput.style.display = 'none';
    }
  } else {
    if (imgSel) imgSel.value = 'custom';
    if (customInput) {
      customInput.value = prodImg;
      customInput.style.display = 'block';
    }
  }
  updatePhotoPreview(prodImg);

  document.getElementById('crud-item-overlay').classList.add('open');
  document.getElementById('crud-item-modal').classList.add('open');
  refreshLucideIcons();
}

// ── Item Modal: Close ──
function closeItemCrudModal() {
  document.getElementById('crud-item-overlay').classList.remove('open');
  document.getElementById('crud-item-modal').classList.remove('open');
}

// ── Item Modal: Save (Create or Update) ──
async function handleSaveItem(event) {
  event.preventDefault();

  const id = document.getElementById('crud-item-id').value.trim();
  const isEdit = !!id;

  const name = document.getElementById('crud-item-name').value.trim();
  const basePrice = parseFloat(document.getElementById('crud-item-price').value);
  const discountPriceRaw = document.getElementById('crud-item-discount-price').value.trim();
  const discountPrice = discountPriceRaw !== '' ? parseFloat(discountPriceRaw) : 0;
  const categoryId = document.getElementById('crud-item-category').value;
  const badge = document.getElementById('crud-item-badge').value.trim();
  const description = document.getElementById('crud-item-desc').value.trim();
  const ingredientsRaw = document.getElementById('crud-item-ingredients').value.trim();
  const available = document.getElementById('crud-item-available').checked;
  const image = getActivePhotoUrl();

  const ingredients = ingredientsRaw
    ? ingredientsRaw.split(',').map(s => s.trim()).filter(Boolean)
    : [];

  const submitBtn = document.getElementById('crud-item-submit-btn');
  submitBtn.textContent = 'Saving...';
  submitBtn.disabled = true;

  const prodPayload = {
    id: isEdit ? id : undefined,
    name,
    basePrice,
    discountPrice: (discountPrice > 0 && discountPrice < basePrice) ? discountPrice : 0,
    categoryId,
    badge,
    description,
    ingredients,
    available,
    image,
    rating: 4.8,
    reviewsCount: 10,
    customizations: []
  };

  try {
    const result = await API.saveProduct(prodPayload, isEdit);
    if (result && result.success) {
      const savedProd = result.data || prodPayload;
      const pIdx = PRODUCTS.findIndex(p => p.id === (isEdit ? id : savedProd.id));
      if (pIdx !== -1) {
        PRODUCTS[pIdx] = { ...PRODUCTS[pIdx], ...savedProd, discountPrice: prodPayload.discountPrice };
      } else {
        PRODUCTS.push({ ...savedProd, discountPrice: prodPayload.discountPrice });
      }
      closeItemCrudModal();
      await syncDataFromBackend(false);
      renderAdminItemsCrud();
      renderMenu();
      populateAdminCategoryDropdowns();
      toast(isEdit ? `"${name}" updated!` : `"${name}" added to menu!`, 3000);
    } else {
      const msg = (result && result.error) ? result.error : 'Save failed';
      toast(`Error: ${msg}`, 3500);
    }
  } catch (err) {
    toast('Network error. Check server is running.', 3500);
    console.error('handleSaveItem error:', err);
  } finally {
    submitBtn.textContent = isEdit ? 'Update Dish in Real Database' : 'Save Dish to Real Database';
    submitBtn.disabled = false;
  }
}

// ── Item: Delete ──
async function handleDeleteItem(productId) {
  const prod = PRODUCTS.find(p => p.id === productId);
  const name = prod ? prod.name : productId;
  if (!confirm(`Delete "${name}" from the menu? This cannot be undone.`)) return;

  try {
    const result = await API.deleteProduct(productId);
    if (result && result.success) {
      await syncDataFromBackend(false);
      renderAdminItemsCrud();
      toast(`"${name}" removed from menu.`);
    } else {
      toast('Delete failed. Try again.', 3000);
    }
  } catch (err) {
    toast('Network error.', 3000);
    console.error('handleDeleteItem error:', err);
  }
}

// ── Category Modal: Open for Create ──
function openCreateCategoryModal() {
  document.getElementById('crud-cat-modal-title').textContent = 'Add Food Category';
  document.getElementById('crud-cat-submit-btn').textContent = 'Save Category to Real Database';
  document.getElementById('crud-cat-is-edit').value = '0';
  document.getElementById('crud-cat-name').value = '';
  document.getElementById('crud-cat-id').value = '';
  document.getElementById('crud-cat-id').readOnly = false;
  const iconSel = document.getElementById('crud-cat-icon');
  if (iconSel) iconSel.value = 'utensils';

  document.getElementById('crud-cat-overlay').classList.add('open');
  document.getElementById('crud-cat-modal').classList.add('open');
  refreshLucideIcons();
}

// ── Category Modal: Open for Edit ──
function openEditCategoryModal(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  if (!cat) return;

  document.getElementById('crud-cat-modal-title').textContent = 'Edit Category';
  document.getElementById('crud-cat-submit-btn').textContent = 'Update Category in Real Database';
  document.getElementById('crud-cat-is-edit').value = '1';
  document.getElementById('crud-cat-name').value = cat.name || '';
  document.getElementById('crud-cat-id').value = cat.id || '';
  document.getElementById('crud-cat-id').readOnly = true; // can't change slug when editing

  const iconSel = document.getElementById('crud-cat-icon');
  if (iconSel && cat.icon) iconSel.value = cat.icon;

  document.getElementById('crud-cat-overlay').classList.add('open');
  document.getElementById('crud-cat-modal').classList.add('open');
  refreshLucideIcons();
}

// ── Category Modal: Auto-generate slug from name ──
function autoGenerateCatId(value) {
  const isEdit = document.getElementById('crud-cat-is-edit')?.value === '1';
  if (isEdit) return; // Don't overwrite slug when editing
  const idField = document.getElementById('crud-cat-id');
  if (idField) {
    idField.value = value.toLowerCase()
      .replace(/[^a-z0-9\s-]/g, '')
      .trim()
      .replace(/\s+/g, '-');
  }
}

// ── Category Modal: Close ──
function closeCategoryCrudModal() {
  document.getElementById('crud-cat-overlay').classList.remove('open');
  document.getElementById('crud-cat-modal').classList.remove('open');
}

// ── Category Modal: Save (Create or Update) ──
async function handleSaveCategory(event) {
  event.preventDefault();

  const isEdit = document.getElementById('crud-cat-is-edit').value === '1';
  const name = document.getElementById('crud-cat-name').value.trim();
  const id = document.getElementById('crud-cat-id').value.trim();
  const icon = document.getElementById('crud-cat-icon').value;

  if (!name || !id) {
    toast('Category name and ID are required.', 2500);
    return;
  }

  const submitBtn = document.getElementById('crud-cat-submit-btn');
  submitBtn.textContent = 'Saving...';
  submitBtn.disabled = true;

  const catPayload = { id, name, icon };

  try {
    const result = await API.saveCategory(catPayload, isEdit);
    if (result && result.success) {
      closeCategoryCrudModal();
      await syncDataFromBackend(false);
      renderAdminCatsCrud();
      populateAdminCategoryDropdowns();
      toast(isEdit ? `Category "${name}" updated!` : `Category "${name}" added!`, 3000);
    } else {
      const msg = (result && result.error) ? result.error : 'Save failed';
      toast(`Error: ${msg}`, 3500);
    }
  } catch (err) {
    toast('Network error. Check server is running.', 3500);
    console.error('handleSaveCategory error:', err);
  } finally {
    submitBtn.textContent = isEdit ? 'Update Category in Real Database' : 'Save Category to Real Database';
    submitBtn.disabled = false;
  }
}

// ── Category: Delete ──
async function handleDeleteCategory(catId) {
  const cat = CATEGORIES.find(c => c.id === catId);
  const name = cat ? cat.name : catId;
  const itemCount = PRODUCTS.filter(p => p.categoryId === catId).length;
  const msg = itemCount > 0
    ? `Delete "${name}"? This will NOT delete the ${itemCount} items in this category, but they will become uncategorized.`
    : `Delete category "${name}"? This cannot be undone.`;
  if (!confirm(msg)) return;

  try {
    const result = await API.deleteCategory(catId);
    if (result && result.success) {
      await syncDataFromBackend(false);
      renderAdminCatsCrud();
      toast(`Category "${name}" removed.`);
    } else {
      toast('Delete failed. Try again.', 3000);
    }
  } catch (err) {
    toast('Network error.', 3000);
    console.error('handleDeleteCategory error:', err);
  }
}

function handleKdsFilterChange(val) {
  APP_STATE.kdsFilter = val;
  renderKdsTickets();
}

// ══ ADMIN STATUS UPDATER (PERSISTS TO SUPABASE & SYNCS IN REAL TIME) ══
async function adminUpdateOrderStatus(orderId, newStatus) {
  const ord = MASTER_ORDERS.find(o => o.id === orderId);
  if (!ord) return;

  let label = 'Order Placed';
  if (newStatus === 'cooking' || newStatus === 'preparing') label = 'Cooking';
  if (newStatus === 'ready' || newStatus === 'completed') label = 'Ready';

  ord.status = newStatus;
  ord.statusLabel = label;

  // Sync to database
  try {
    await API.updateOrderStatus(orderId, newStatus, label);
    toast(`Order #${orderId} marked as "${label}"`, 2500);
  } catch (err) {
    console.error('Failed to update order status:', err);
    toast('Error updating status on server', 3000);
  }

  // Update customer orderHistory if matching
  const custOrd = (APP_STATE.orderHistory || []).find(o => o.id === orderId);
  if (custOrd) {
    custOrd.status = newStatus;
    custOrd.statusLabel = label;
  }

  // Re-render views
  renderAdminOrdersSubpane();
  renderAdminDashboard();
  renderKdsTickets();
  renderHistory();
}

// ═══════════════════════════════════════════════════════════════
// ADMIN EXTRAS & ADD-ONS CRUD MANAGEMENT
// ═══════════════════════════════════════════════════════════════
function renderAdminExtrasCrud() {
  const container = document.getElementById('admin-extras-crud-list');
  const totalCount = document.getElementById('admin-extras-total-count');
  if (!container) return;

  if (totalCount) totalCount.textContent = EXTRAS.length;

  if (EXTRAS.length === 0) {
    container.innerHTML = `
      <div style="text-align:center;padding:40px 20px;color:var(--text-muted);">
        <div style="font-size:2rem;margin-bottom:10px;">✨</div>
        <p style="font-size:0.85rem;">No extras yet. Click "Add Extra" to create your first add-on!</p>
      </div>
    `;
    return;
  }

  let html = '';
  EXTRAS.forEach(extra => {
    const isAvail = extra.available !== false;
    const catPills = (extra.categories && extra.categories.length > 0 && !extra.categories.includes('all'))
      ? extra.categories.map(cid => {
          const cat = CATEGORIES.find(c => c.id === cid);
          return `<span class="extra-cat-pill">${escapeHtml(cat ? cat.name : cid)}</span>`;
        }).join('')
      : '<span class="extra-cat-pill" style="background:#FEF3C7;color:#92400E;border-color:#FDE68A;">All Dishes</span>';

    html += `
      <div class="admin-extra-crud-card">
        <div class="admin-extra-meta">
          <div class="admin-extra-title">${escapeHtml(extra.name)}</div>
          <div class="admin-extra-price">+${formatMoney(extra.price)}</div>
          <div class="admin-extra-cats">${catPills}</div>
        </div>
        <div style="display:flex; flex-direction:column; gap:6px; align-items:flex-end;">
          <button class="crud-stock-pill ${isAvail ? 'stock-active' : 'stock-inactive'}" onclick="toggleExtraStock('${extra.id}')">
            ${isAvail ? '✓ In Stock' : "✕ Sold Out"}
          </button>
          <div class="crud-btn-group">
            <button class="btn-edit-action" onclick="openEditExtraModal('${extra.id}')">✏️ Edit</button>
            <button class="btn-delete-action" onclick="handleDeleteExtra('${extra.id}')">🗑️ Delete</button>
          </div>
        </div>
      </div>
    `;
  });

  container.innerHTML = html;
}

function populateAdminExtraCategoryCheckboxes(selectedCats = []) {
  const container = document.getElementById('crud-extra-categories-checkboxes');
  if (!container) return;

  let html = '';
  CATEGORIES.forEach(cat => {
    const isChecked = selectedCats.includes(cat.id);
    html += `
      <label style="display:flex; align-items:center; gap:6px; font-size:0.8rem; cursor:pointer;">
        <input type="checkbox" name="extra_cat_cb" value="${cat.id}" ${isChecked ? 'checked' : ''}>
        <span>${escapeHtml(cat.name)}</span>
      </label>
    `;
  });
  container.innerHTML = html;
}

function openCreateExtraModal() {
  document.getElementById('crud-extra-modal-title').textContent = 'Add Extra / Add-on';
  document.getElementById('crud-extra-is-edit').value = '0';
  document.getElementById('crud-extra-id').value = '';
  document.getElementById('crud-extra-name').value = '';
  document.getElementById('crud-extra-price').value = '';
  document.getElementById('crud-extra-available').checked = true;
  document.getElementById('crud-extra-submit-btn').textContent = 'Save Extra to Real Database';
  populateAdminExtraCategoryCheckboxes([]);

  document.getElementById('crud-extra-overlay')?.classList.add('open');
  document.getElementById('crud-extra-modal')?.classList.add('open');
}

function openEditExtraModal(id) {
  const extra = EXTRAS.find(e => e.id === id);
  if (!extra) return;

  document.getElementById('crud-extra-modal-title').textContent = 'Edit Extra / Add-on';
  document.getElementById('crud-extra-is-edit').value = '1';
  document.getElementById('crud-extra-id').value = extra.id;
  document.getElementById('crud-extra-name').value = extra.name;
  document.getElementById('crud-extra-price').value = extra.price;
  document.getElementById('crud-extra-available').checked = extra.available !== false;
  document.getElementById('crud-extra-submit-btn').textContent = 'Update Extra';
  populateAdminExtraCategoryCheckboxes(extra.categories || []);

  document.getElementById('crud-extra-overlay')?.classList.add('open');
  document.getElementById('crud-extra-modal')?.classList.add('open');
}

function closeExtraCrudModal() {
  document.getElementById('crud-extra-overlay')?.classList.remove('open');
  document.getElementById('crud-extra-modal')?.classList.remove('open');
}

async function handleSaveExtra(event) {
  event.preventDefault();
  const isEdit = document.getElementById('crud-extra-is-edit').value === '1';
  const id = document.getElementById('crud-extra-id').value || ('ext_' + Date.now().toString(36));
  const name = (document.getElementById('crud-extra-name').value || '').trim();
  const price = Number(document.getElementById('crud-extra-price').value) || 0;
  const available = document.getElementById('crud-extra-available').checked;

  const checkedCats = [];
  document.querySelectorAll('input[name="extra_cat_cb"]:checked').forEach(cb => checkedCats.push(cb.value));

  const extraPayload = {
    id,
    name,
    price,
    categories: checkedCats.length > 0 ? checkedCats : ['all'],
    available
  };

  try {
    if (isEdit) {
      await API.updateExtra(extraPayload);
      const idx = EXTRAS.findIndex(e => e.id === id);
      if (idx !== -1) EXTRAS[idx] = extraPayload;
      toast(`Extra "${name}" updated!`);
    } else {
      await API.createExtra(extraPayload);
      EXTRAS.push(extraPayload);
      toast(`Extra "${name}" added!`);
    }
    closeExtraCrudModal();
    renderAdminExtrasCrud();
  } catch (err) {
    toast(`Error saving extra: ${err.message}`);
  }
}

async function handleDeleteExtra(id) {
  const extra = EXTRAS.find(e => e.id === id);
  if (!confirm(`Delete extra "${extra ? extra.name : id}"?`)) return;

  try {
    await API.deleteExtra(id);
    EXTRAS = EXTRAS.filter(e => e.id !== id);
    toast('Extra deleted');
    renderAdminExtrasCrud();
  } catch (err) {
    toast(`Delete error: ${err.message}`);
  }
}

async function toggleExtraStock(id) {
  const extra = EXTRAS.find(e => e.id === id);
  if (!extra) return;

  extra.available = !extra.available;
  try {
    await API.patchExtraStock(id, extra.available);
    toast(`${extra.name} marked ${extra.available ? 'In Stock' : 'Sold Out'}`);
    renderAdminExtrasCrud();
  } catch (e) {
    renderAdminExtrasCrud();
  }
}

// ═══════════════════════════════════════════════════════════════════════
// ALEMAYA GRILL'D - AUTOMATIC TABLE MANAGEMENT & QR ORDERING SYSTEM
// ═══════════════════════════════════════════════════════════════════════

// ── URL Table Token & Active Table Resolution ──
async function initTableFromUrlOrStorage() {
  try {
    // 1. Extract from URL first (highest priority)
    let tableData = extractTableFromUrl();

    // 2. If not in URL, restore active table from storage
    if (!tableData && !APP_STATE.activeTable) {
      const saved = localStorage.getItem('alemaya_active_table') || sessionStorage.getItem('alemaya_active_table');
      if (saved) {
        try {
          tableData = JSON.parse(saved);
          APP_STATE.activeTable = tableData;
          APP_STATE.orderType = 'Dine-in';
        } catch {}
      }
    } else if (APP_STATE.activeTable) {
      tableData = APP_STATE.activeTable;
    }

    if (tableData) {
      APP_STATE.orderType = 'Dine-in';
      document.querySelectorAll('.ot-tab').forEach(t => t.classList.remove('active'));
      document.getElementById('ot-dinein')?.classList.add('active');

      renderCustomerActiveTableBanner();
      renderCartCheckoutTableSlot();

      // Table assigned silently in background (no notification to customer)

      // Background check if custom table exists in database
      if (tableData.token) {
        API.getTableByToken(tableData.token).then(res => {
          if (res && res.success && res.data) {
            APP_STATE.activeTable = { ...tableData, ...res.data };
            try {
              localStorage.setItem('alemaya_active_table', JSON.stringify(APP_STATE.activeTable));
            } catch {}
            renderCustomerActiveTableBanner();
            renderCartCheckoutTableSlot();
          }
        }).catch(() => {});
      }
    } else {
      renderCustomerActiveTableBanner();
    }
  } catch (e) {
    console.warn('initTableFromUrlOrStorage warning:', e);
  }
}

// ── Customer Active Table Banner Rendering (SILENT IN BACKGROUND) ──
function renderCustomerActiveTableBanner() {
  const banner = document.getElementById('customer-active-table-banner');
  if (banner) {
    banner.classList.add('hidden');
    banner.style.display = 'none';
    banner.innerHTML = '';
  }
}

// ── Clear / Unlink Active Table ──
function clearActiveTable() {
  APP_STATE.activeTable = null;
  try {
    localStorage.removeItem('alemaya_active_table');
    sessionStorage.removeItem('alemaya_active_table');
  } catch {}
  // Also clean the URL query parameter if present
  if (window.location.search && window.location.search.includes('table')) {
    const sp = new URLSearchParams(window.location.search);
    sp.delete('table');
    sp.delete('tableToken');
    sp.delete('tbl');
    sp.delete('t');
    const s = sp.toString() ? '?' + sp.toString() : '';
    history.replaceState(null, '', (window.location.pathname || '/') + s + (window.location.hash || '#menu'));
  }
  renderCustomerActiveTableBanner();
  renderCartCheckoutTableSlot();
  updateCartUI();
  toast('Dining table unlinked');
}

// ── Manual Table Selection in Cart Checkout ──
function handleManualTableSelect(tableId) {
  if (!tableId) {
    clearActiveTable();
    return;
  }
  const found = APP_STATE.tables.find(t => t.id === tableId);
  if (found) {
    APP_STATE.activeTable = found;
    try {
      localStorage.setItem('alemaya_active_table', JSON.stringify(found));
    } catch {}
    renderCustomerActiveTableBanner();
    renderCartCheckoutTableSlot();
    updateCartUI();
    // Table assigned in background
  }
}

// ── Cart Summary Table Slot Renderer (SILENT IN BACKGROUND) ──
function renderCartCheckoutTableSlot() {
  const wrap = document.getElementById('checkout-table-info-wrap');
  if (!wrap) return;
  wrap.style.display = 'none';
  wrap.innerHTML = '';
}

function handleQuickTableInput(val) {
  const clean = (val || '').trim();
  if (clean) {
    const cleanNum = clean.replace(/^table[\s\-_]*/i, '').trim();
    const displayName = /^\d+$/.test(cleanNum) ? `Table ${cleanNum}` : (clean.toLowerCase().startsWith('table') ? clean : `Table ${clean}`);
    APP_STATE.activeTable = {
      id: `table-${cleanNum || clean}`,
      name: displayName,
      tableNumber: cleanNum || clean,
      token: clean,
      capacity: 4,
      active: true
    };
    APP_STATE.orderType = 'Dine-in';
  } else {
    APP_STATE.activeTable = null;
  }
}

// ── QR Code Drawing Engine (QRious + High-Res Fallback) ──
function renderQrToCanvas(canvasEl, text, size = 180) {
  if (typeof canvasEl === 'string') {
    canvasEl = document.getElementById(canvasEl);
  }
  if (!canvasEl) return;

  canvasEl.width = size;
  canvasEl.height = size;

  if (typeof QRious !== 'undefined') {
    try {
      new QRious({
        element: canvasEl,
        value: text,
        size: size,
        level: 'H',
        foreground: '#0F172A',
        background: '#FFFFFF'
      });
      return;
    } catch (e) {
      console.warn('QRious render error, falling back:', e);
    }
  }

  // Graceful Canvas 2D Fallback
  const ctx = canvasEl.getContext('2d');
  if (ctx) {
    ctx.fillStyle = '#FFFFFF';
    ctx.fillRect(0, 0, size, size);
    ctx.strokeStyle = '#0F172A';
    ctx.lineWidth = 4;
    ctx.strokeRect(6, 6, size - 12, size - 12);

    // Mock QR finder patterns
    const drawFinder = (x, y, s) => {
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(x, y, s, s);
      ctx.fillStyle = '#FFFFFF';
      ctx.fillRect(x + 4, y + 4, s - 8, s - 8);
      ctx.fillStyle = '#0F172A';
      ctx.fillRect(x + 8, y + 8, s - 16, s - 16);
    };
    drawFinder(12, 12, 36);
    drawFinder(size - 48, 12, 36);
    drawFinder(12, size - 48, 36);

    ctx.fillStyle = '#64748B';
    ctx.font = '10px sans-serif';
    ctx.textAlign = 'center';
    ctx.fillText('QR Code', size / 2, size / 2 + 3);
  }
}

// ── Table URL Builder ──
function getTableMenuUrl(tableToken) {
  const origin = window.location.origin;
  const path = window.location.pathname.replace(/\/index\.html$/, '') || '/';
  const cleanPath = path.endsWith('/') ? path : `${path}/`;
  return `${origin}${cleanPath}?table=${encodeURIComponent(tableToken)}`;
}

// ── Admin Tables Management Rendering ──
// ── Alemaya Grill'd QR Poster Generator Setup ──
function renderAdminTablesCrud() {
  const menuUrlInput = document.getElementById('menuUrl');
  const tableNoInput = document.getElementById('tableNo');

  // Always use the CURRENT domain so a stale saved URL never appears
  const correctBaseUrl = window.location.origin + '/';
  if (menuUrlInput) {
    menuUrlInput.value = correctBaseUrl;
  }

  if (tableNoInput && !tableNoInput.value) {
    tableNoInput.value = '4';
  }


  if (!_posterQrReady) {
    setTimeout(() => {
      generateTablePoster();
    }, 60);
  }
}


// ── Search & Filter Controls ──
function handleAdminTableSearch(q) {
  APP_STATE.tableSearchQuery = q;
  renderAdminTablesCrud();
}

function handleAdminTableFilter(filter) {
  APP_STATE.tableFilter = filter;
  document.querySelectorAll('.admin-table-filter-btn').forEach(btn => {
    btn.classList.toggle('active', btn.dataset.filter === filter);
  });
  renderAdminTablesCrud();
}

function copyTableUrl(tableId) {
  const input = document.getElementById(`url-input-${tableId}`);
  if (input) {
    input.select();
    input.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(input.value).then(() => {
      toast('Copied table menu URL to clipboard!');
    }).catch(() => {
      document.execCommand('copy');
      toast('Copied table menu URL!');
    });
  }
}

// ── Table Single Add / Edit Modal ──
function openAddTableModal() {
  const modal = document.getElementById('crud-table-modal');
  const title = document.getElementById('crud-table-title');
  const form = document.getElementById('crud-table-form');
  if (!modal || !form) return;

  form.reset();
  document.getElementById('crud-table-id').value = '';
  document.getElementById('crud-table-is-edit').value = 'false';
  document.getElementById('crud-table-name').value = `Table ${(APP_STATE.tables || []).length + 1}`;
  document.getElementById('crud-table-capacity').value = '4';
  document.getElementById('crud-table-active').checked = true;

  if (title) title.textContent = 'Add Dining Table';
  modal.classList.add('active');
}

function openEditTableModal(tableId) {
  const table = (APP_STATE.tables || []).find(t => t.id === tableId);
  if (!table) return;

  const modal = document.getElementById('crud-table-modal');
  const title = document.getElementById('crud-table-title');
  if (!modal) return;

  document.getElementById('crud-table-id').value = table.id;
  document.getElementById('crud-table-is-edit').value = 'true';
  document.getElementById('crud-table-name').value = table.name || '';
  document.getElementById('crud-table-capacity').value = table.capacity || 4;
  document.getElementById('crud-table-active').checked = table.active !== false;

  if (title) title.textContent = `Edit ${table.name}`;
  modal.classList.add('active');
}

function closeTableCrudModal() {
  document.getElementById('crud-table-modal')?.classList.remove('active');
}

async function handleTableCrudSubmit(event) {
  if (event) event.preventDefault();

  const isEdit = document.getElementById('crud-table-is-edit').value === 'true';
  const id = document.getElementById('crud-table-id').value;
  const name = (document.getElementById('crud-table-name').value || '').trim();
  const capacity = parseInt(document.getElementById('crud-table-capacity').value, 10) || 4;
  const active = document.getElementById('crud-table-active').checked;

  if (!name) {
    toast('Please enter a table name');
    return;
  }

  const payload = {
    id: isEdit ? id : undefined,
    name: name,
    capacity: capacity,
    active: active
  };

  const btn = event?.submitter || document.querySelector('#crud-table-form button[type="submit"]');
  if (btn) btn.disabled = true;

  try {
    const res = await API.saveTable(payload, isEdit);
    if (res && res.success) {
      toast(isEdit ? `Updated ${name}` : `Created ${name} with unique QR!`);
      closeTableCrudModal();
      await syncDataFromBackend(false);
    } else {
      toast(`Error saving table: ${res?.error || 'Unknown error'}`);
    }
  } catch (err) {
    toast(`Save table error: ${err.message}`);
  } finally {
    if (btn) btn.disabled = false;
  }
}

// ── Bulk Table Generation Modal ──
function openBulkTablesModal() {
  const modal = document.getElementById('crud-bulk-tables-modal');
  if (!modal) return;
  document.getElementById('crud-bulk-prefix').value = 'Table ';
  document.getElementById('crud-bulk-start').value = '1';
  document.getElementById('crud-bulk-end').value = '10';
  document.getElementById('crud-bulk-capacity').value = '4';
  modal.classList.add('active');
}

function closeBulkTablesModal() {
  document.getElementById('crud-bulk-tables-modal')?.classList.remove('active');
}

async function handleBulkTablesSubmit(event) {
  if (event) event.preventDefault();

  const prefix = document.getElementById('crud-bulk-prefix').value || 'Table ';
  const start = parseInt(document.getElementById('crud-bulk-start').value, 10);
  const end = parseInt(document.getElementById('crud-bulk-end').value, 10);
  const capacity = parseInt(document.getElementById('crud-bulk-capacity').value, 10) || 4;

  if (isNaN(start) || isNaN(end) || start > end) {
    toast('Invalid start/end table number range');
    return;
  }

  const count = (end - start) + 1;
  if (count > 100) {
    toast('Maximum 100 tables can be generated at once');
    return;
  }

  const btn = event?.submitter || document.querySelector('#crud-bulk-tables-form button[type="submit"]');
  if (btn) btn.disabled = true;

  try {
    const res = await API.saveTablesBulk({ prefix, start, end, capacity });
    if (res && res.success) {
      toast(`🎉 Generated ${res.createdCount || count} tables with unique QR codes!`, 4000);
      closeBulkTablesModal();
      await syncDataFromBackend(false);
    } else {
      toast(`Bulk generation error: ${res?.error || 'Failed'}`);
    }
  } catch (e) {
    toast(`Bulk error: ${e.message}`);
  } finally {
    if (btn) btn.disabled = false;
  }
}

// ── Toggle Table Active / Inactive Status ──
async function toggleTableStatus(tableId) {
  const table = (APP_STATE.tables || []).find(t => t.id === tableId);
  if (!table) return;

  const newStatus = !(table.active !== false);
  table.active = newStatus;
  renderAdminTablesCrud();

  try {
    const res = await API.patchTable(tableId, { active: newStatus });
    if (res && res.success) {
      toast(`${table.name} is now ${newStatus ? 'Active' : 'Inactive'}`);
      if (!newStatus && APP_STATE.activeTable && APP_STATE.activeTable.id === tableId) {
        clearActiveTable();
      }
    } else {
      table.active = !newStatus;
      renderAdminTablesCrud();
      toast('Failed to update table status');
    }
  } catch (err) {
    table.active = !newStatus;
    renderAdminTablesCrud();
    toast(`Status error: ${err.message}`);
  }
}

// ── Regenerate Table Token (Invalidates old QR Code) ──
async function handleRegenerateTableToken(tableId) {
  const table = (APP_STATE.tables || []).find(t => t.id === tableId);
  if (!table) return;

  if (!confirm(`Regenerate QR token for "${table.name}"?\n\nThis will invalidate the previous printed QR code and generate a brand-new token.`)) {
    return;
  }

  try {
    const res = await API.regenerateTableToken(tableId);
    if (res && res.success && res.table) {
      table.token = res.table.token;
      toast(`🔄 New QR code generated for ${table.name}!`);
      renderAdminTablesCrud();
      await syncDataFromBackend(false);
    } else {
      toast(`Regenerate error: ${res?.error || 'Failed'}`);
    }
  } catch (err) {
    toast(`Regenerate error: ${err.message}`);
  }
}

// ── Delete Table ──
async function handleDeleteTable(tableId) {
  const table = (APP_STATE.tables || []).find(t => t.id === tableId);
  if (!table) return;

  if (!confirm(`Are you sure you want to delete "${table.name}"?`)) {
    return;
  }

  try {
    const res = await API.deleteTable(tableId);
    if (res && res.success) {
      APP_STATE.tables = (APP_STATE.tables || []).filter(t => t.id !== tableId);
      if (APP_STATE.activeTable && APP_STATE.activeTable.id === tableId) {
        clearActiveTable();
      }
      toast(`Deleted ${table.name}`);
      renderAdminTablesCrud();
      await syncDataFromBackend(false);
    } else {
      toast(`Delete error: ${res?.error || 'Failed'}`);
    }
  } catch (err) {
    toast(`Delete error: ${err.message}`);
  }
}

// ── Table QR Stand Preview & Print Modal ──
let CURRENT_STAND_TABLE = null;

function openTableQrModal(tableId) {
  const table = (APP_STATE.tables || []).find(t => t.id === tableId);
  if (!table) return;

  CURRENT_STAND_TABLE = table;
  const modal = document.getElementById('table-qr-stand-modal');
  if (!modal) return;

  const nameEl = document.getElementById('modal-qr-table-name');
  const capEl = document.getElementById('modal-qr-table-capacity');
  const urlEl = document.getElementById('modal-qr-url-text');
  const tokenEl = document.getElementById('modal-qr-token-text');
  const canvasEl = document.getElementById('modal-qr-canvas');

  const menuUrl = getTableMenuUrl(table.token);

  if (nameEl) nameEl.textContent = table.name;
  if (capEl) capEl.textContent = `Table Seating: ${table.capacity || 4} Guests`;
  if (urlEl) urlEl.textContent = menuUrl;
  if (tokenEl) tokenEl.textContent = `Token: ${table.token}`;

  renderQrToCanvas(canvasEl, menuUrl, 240);

  modal.classList.add('active');
}

function closeTableQrModal() {
  document.getElementById('table-qr-stand-modal')?.classList.remove('active');
  CURRENT_STAND_TABLE = null;
}

function printSingleTableCard() {
  if (!CURRENT_STAND_TABLE) return;
  const table = CURRENT_STAND_TABLE;
  const sheet = document.getElementById('printable-qr-stand-sheet');
  if (!sheet) return;

  const menuUrl = getTableMenuUrl(table.token);

  sheet.innerHTML = `
    <div class="print-acrylic-stand-card">
      <div class="pasc-badge-top">FLAME-GRILLED DELIGHTS</div>
      <img src="logo.png" alt="Alemaya Grill'd Logo" class="pasc-logo" onerror="this.style.display='none'" />
      <h1 class="pasc-table-name">${escapeHtml(table.name)}</h1>
      <p class="pasc-capacity">Capacity: ${table.capacity || 4} Guests</p>

      <div class="pasc-qr-frame">
        <canvas id="print-single-qr-canvas" class="pasc-canvas"></canvas>
      </div>

      <div class="pasc-instructions">
        <span class="pasc-scan-step">1. Open Camera on your Phone</span>
        <span class="pasc-scan-step">2. Point at QR to View Live Menu</span>
        <span class="pasc-scan-step">3. Place Order & Waiter Will Deliver!</span>
      </div>

      <div class="pasc-footer">
        <div class="pasc-footer-brand">Alemaya Grill'd • Harar Road</div>
        <div class="pasc-footer-url">${escapeHtml(menuUrl)}</div>
      </div>
    </div>
  `;

  setTimeout(() => {
    const canvas = document.getElementById('print-single-qr-canvas');
    if (canvas) renderQrToCanvas(canvas, menuUrl, 260);
    setTimeout(() => {
      window.print();
    }, 150);
  }, 30);
}

function downloadCurrentTableQr() {
  const canvas = document.getElementById('modal-qr-canvas');
  if (!canvas || !CURRENT_STAND_TABLE) return;

  try {
    const a = document.createElement('a');
    a.download = `alemaya-${CURRENT_STAND_TABLE.name.toLowerCase().replace(/\s+/g, '-')}-qr.png`;
    a.href = canvas.toDataURL('image/png');
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
    toast(`Downloaded QR Code for ${CURRENT_STAND_TABLE.name}`);
  } catch (e) {
    toast(`Download error: ${e.message}`);
  }
}

// ── Bulk Table Stand Print Modal ──
function openBulkPrintModal() {
  const modal = document.getElementById('table-bulk-print-modal');
  const listEl = document.getElementById('bulk-print-table-checklist');
  if (!modal || !listEl) return;

  const tables = APP_STATE.tables || [];
  if (tables.length === 0) {
    toast('No tables available to print');
    return;
  }

  listEl.innerHTML = tables.map(t => `
    <label class="bulk-print-item-row">
      <input type="checkbox" class="bulk-print-chk" value="${t.id}" checked />
      <span class="bulk-print-item-name">${escapeHtml(t.name)} (${t.capacity || 4} seats)</span>
      <span class="bulk-print-item-status ${t.active !== false ? 'txt-active' : 'txt-inactive'}">
        ${t.active !== false ? 'Active' : 'Inactive'}
      </span>
    </label>
  `).join('');

  modal.classList.add('active');
}

function closeBulkPrintModal() {
  document.getElementById('table-bulk-print-modal')?.classList.remove('active');
}

function toggleSelectAllBulkPrint(masterCheckbox) {
  const chks = document.querySelectorAll('.bulk-print-chk');
  chks.forEach(c => c.checked = masterCheckbox.checked);
}

function executeBulkPrint() {
  const selectedIds = Array.from(document.querySelectorAll('.bulk-print-chk:checked')).map(c => c.value);
  if (selectedIds.length === 0) {
    toast('Please select at least one table to print');
    return;
  }

  const selectedTables = (APP_STATE.tables || []).filter(t => selectedIds.includes(t.id));
  const sheet = document.getElementById('printable-qr-stand-sheet');
  if (!sheet) return;

  sheet.innerHTML = selectedTables.map(t => {
    const menuUrl = getTableMenuUrl(t.token);
    return `
      <div class="print-acrylic-stand-card">
        <div class="pasc-badge-top">FLAME-GRILLED DELIGHTS</div>
        <img src="logo.png" alt="Alemaya Grill'd Logo" class="pasc-logo" onerror="this.style.display='none'" />
        <h1 class="pasc-table-name">${escapeHtml(t.name)}</h1>
        <p class="pasc-capacity">Capacity: ${t.capacity || 4} Guests</p>

        <div class="pasc-qr-frame">
          <canvas id="bulk-qr-${t.id}" class="pasc-canvas"></canvas>
        </div>

        <div class="pasc-instructions">
          <span class="pasc-scan-step">1. Open Camera on your Phone</span>
          <span class="pasc-scan-step">2. Point at QR to View Live Menu</span>
          <span class="pasc-scan-step">3. Place Order & Waiter Will Deliver!</span>
        </div>

        <div class="pasc-footer">
          <div class="pasc-footer-brand">Alemaya Grill'd • Harar Road</div>
          <div class="pasc-footer-url">${escapeHtml(menuUrl)}</div>
        </div>
      </div>
    `;
  }).join('');

  closeBulkPrintModal();

  setTimeout(() => {
    selectedTables.forEach(t => {
      const canvas = document.getElementById(`bulk-qr-${t.id}`);
      if (canvas) {
        renderQrToCanvas(canvas, getTableMenuUrl(t.token), 240);
      }
    });

    setTimeout(() => {
      window.print();
    }, 200);
  }, 50);
}

// ═══════════════════════════════════════════════════════════════════════
// ALEMAYA GRILL'D QR POSTER GENERATOR (Admin → Tables tab)
// Generates live 2:3 preview & full-size 1024 × 1536 PNG export
// ═══════════════════════════════════════════════════════════════════════
let _posterQrReady = false;
let _lastGeneratedPosterUrl = '';

function getPosterTargetUrl(rawLink, tableNo) {
  let link = (rawLink || '').trim();
  if (!link.startsWith('http://') && !link.startsWith('https://')) {
    link = 'https://' + link;
  }
  const cleanTable = String(tableNo || '').trim();
  try {
    const urlObj = new URL(link);
    urlObj.searchParams.set('table', cleanTable);
    return urlObj.toString();
  } catch (e) {
    const sep = link.includes('?') ? '&' : '?';
    return `${link}${sep}table=${encodeURIComponent(cleanTable)}`;
  }
}

async function generateTablePoster() {
  const urlInput = document.getElementById('menuUrl');
  const tableInput = document.getElementById('tableNo');
  const qrSlot = document.getElementById('qrSlot');
  const tableOverlay = document.getElementById('tableOverlay');
  const status = document.getElementById('status');
  const downloadBtn = document.getElementById('download');
  const printBtn = document.getElementById('print-poster-btn');
  const urlDisplay = document.getElementById('qr-target-url-text');

  let link = (urlInput?.value || '').trim();
  const table = (tableInput?.value || '').trim();

  if (!link) {
    link = window.location.origin + '/';
    if (urlInput) urlInput.value = link;
  }

  if (!table) {
    toast('⚠️ Please enter a table number', 3000);
    tableInput?.focus();
    return;
  }

  if (status) status.textContent = 'Generating QR code…';

  const targetUrl = getPosterTargetUrl(link, table);
  _lastGeneratedPosterUrl = targetUrl;

  if (urlDisplay) {
    urlDisplay.textContent = targetUrl;
  }

  // Clear previous QR element
  if (qrSlot) {
    qrSlot.innerHTML = '';
  }

  // Render QR code
  try {
    let rendered = false;
    console.log('[QR Gen] Starting QR generation for:', targetUrl);
    console.log('[QR Gen] QRCode available:', typeof QRCode !== 'undefined');
    console.log('[QR Gen] QRious available:', typeof QRious !== 'undefined');
    console.log('[QR Gen] qrSlot element:', qrSlot);
    
    // Method A: QRCode.js
    if (typeof QRCode !== 'undefined' && qrSlot) {
      console.log('[QR Gen] Using QRCode.js');
      new QRCode(qrSlot, {
        text: targetUrl,
        width: 320,
        height: 320,
        colorDark: '#1b120d',
        colorLight: '#ffffff',
        correctLevel: (typeof QRCode.CorrectLevel !== 'undefined' ? QRCode.CorrectLevel.H : 2)
      });
      rendered = true;
      console.log('[QR Gen] QRCode.js rendered successfully');
    }
    
    // Method B: QRious fallback
    if (!rendered && typeof QRious !== 'undefined' && qrSlot) {
      console.log('[QR Gen] Using QRious fallback');
      const canvas = document.createElement('canvas');
      new QRious({
        element: canvas,
        value: targetUrl,
        size: 320,
        level: 'H',
        background: '#ffffff',
        foreground: '#1b120d'
      });
      qrSlot.appendChild(canvas);
      rendered = true;
      console.log('[QR Gen] QRious rendered successfully');
    }

    if (!rendered && qrSlot) {
      console.log('[QR Gen] Using manual canvas fallback');
      // Method C: Canvas manual fallback
      const canvas = document.createElement('canvas');
      canvas.width = 320;
      canvas.height = 320;
      qrSlot.appendChild(canvas);
      if (typeof renderQrToCanvas === 'function') {
        renderQrToCanvas(canvas, targetUrl, 320);
        console.log('[QR Gen] Manual canvas rendered');
      } else {
        console.warn('[QR Gen] renderQrToCanvas function not available');
      }
    }
    
    if (!rendered) {
      console.error('[QR Gen] Failed to render QR code - no methods available');
      throw new Error('QR code libraries not loaded');
    }

    if (tableOverlay) {
      tableOverlay.textContent = table;
    }

    _posterQrReady = true;
    if (downloadBtn) downloadBtn.disabled = false;
    if (printBtn) printBtn.disabled = false;
    if (status) status.textContent = 'QR code ready. Check the preview, then download your PNG.';

    toast(`✅ QR Code generated for Table ${table}`, 2500);
    refreshLucideIcons();
  } catch (err) {
    console.error('Poster QR Generation Error:', err);
    if (status) status.textContent = 'Error: ' + err.message;
    _posterQrReady = false;
    if (downloadBtn) downloadBtn.disabled = true;
    if (printBtn) printBtn.disabled = true;
  }
}

function handlePosterFormSubmit(e) {
  if (e) e.preventDefault();
  generateTablePoster();
}

async function downloadPosterPng() {
  const tableInput = document.getElementById('tableNo');
  const qrSlot = document.getElementById('qrSlot');
  const status = document.getElementById('status');
  const table = (tableInput?.value || '').trim() || '1';

  if (!_posterQrReady || !qrSlot) {
    toast('⚠️ Please generate the QR code first', 3000);
    return;
  }

  try {
    if (status) status.textContent = 'Preparing full-size 1024 × 1536 PNG…';
    const W = 1024, H = 1536;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const bg = new Image();
    bg.crossOrigin = 'anonymous';
    bg.src = '/poster_bg.png';
    await new Promise((resolve, reject) => {
      if (bg.complete && bg.naturalWidth) resolve();
      else {
        bg.onload = resolve;
        bg.onerror = () => reject(new Error('Failed to load poster background image'));
      }
    });

    // 1. Draw high-res background
    ctx.drawImage(bg, 0, 0, W, H);

    // 2. Draw QR code
    const qrEl = qrSlot.querySelector('canvas') || qrSlot.querySelector('img');
    if (!qrEl) throw new Error('QR code element not found.');

    const slotX = W * 0.301, slotY = H * 0.4755, slotW = W * 0.398, slotH = H * 0.252;
    const qs = slotW * 0.82;
    const qx = slotX + (slotW - qs) / 2;
    const qy = slotY + (slotH - qs) / 2;

    ctx.imageSmoothingEnabled = false;
    // White backing for QR — width AND height both use qs+16 (qy was wrongly used as height before)
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(qx - 8, qy - 8, qs + 16, qs + 16);
    ctx.drawImage(qrEl, qx, qy, qs, qs);

    // 3. Draw Table Number — centered in the right half of the TABLE pill
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fffaf0';
    ctx.font = '800 42px Arial, sans-serif';
    ctx.fillText(table, W * 0.655, H * 0.4155, W * 0.14);

    // 4. Download PNG
    const cleanTable = table.replace(/[^a-z0-9_-]/gi, '_');
    const a = document.createElement('a');
    a.download = `alemaya-table-${cleanTable}.png`;
    a.href = canvas.toDataURL('image/png');
    a.click();

    if (status) status.textContent = 'PNG downloaded successfully.';
    toast(`📥 Poster downloaded: Table ${table}`, 2500);
  } catch (err) {
    console.error('Download Poster Error:', err);
    if (status) status.textContent = 'Could not create PNG: ' + err.message;
    toast('⚠️ Download error: ' + err.message, 3500);
  }
}

async function printPosterDirect() {
  const tableInput = document.getElementById('tableNo');
  const qrSlot = document.getElementById('qrSlot');
  const table = (tableInput?.value || '').trim() || '1';

  if (!_posterQrReady || !qrSlot) {
    toast('⚠️ Please generate the QR code first', 3000);
    return;
  }

  try {
    const W = 1024, H = 1536;
    const canvas = document.createElement('canvas');
    canvas.width = W;
    canvas.height = H;
    const ctx = canvas.getContext('2d');

    const bg = new Image();
    bg.crossOrigin = 'anonymous';
    bg.src = '/poster_bg.png';
    await new Promise((resolve, reject) => {
      if (bg.complete && bg.naturalWidth) resolve();
      else {
        bg.onload = resolve;
        bg.onerror = () => reject(new Error('Failed to load poster background'));
      }
    });

    ctx.drawImage(bg, 0, 0, W, H);

    const qrEl = qrSlot.querySelector('canvas') || qrSlot.querySelector('img');
    if (!qrEl) throw new Error('QR code not ready');

    const slotX = W * 0.301, slotY = H * 0.4755, slotW = W * 0.398, slotH = H * 0.252;
    const qs = slotW * 0.82;
    const qx = slotX + (slotW - qs) / 2;
    const qy = slotY + (slotH - qs) / 2;

    ctx.imageSmoothingEnabled = false;
    // White backing for QR — width AND height both use qs+16
    ctx.fillStyle = '#ffffff';
    ctx.fillRect(qx - 8, qy - 8, qs + 16, qs + 16);
    ctx.drawImage(qrEl, qx, qy, qs, qs);

    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillStyle = '#fffaf0';
    ctx.font = '800 42px Arial, sans-serif';
    ctx.fillText(table, W * 0.655, H * 0.4155, W * 0.14);

    const posterDataUrl = canvas.toDataURL('image/png');
    const printWin = window.open('', '_blank');
    if (!printWin) {
      toast('⚠️ Please allow popups to print', 3000);
      return;
    }

    printWin.document.write(`
      <!DOCTYPE html>
      <html>
      <head>
        <title>Alemaya Grill'd - Table ${table} Poster</title>
        <style>
          * { margin:0; padding:0; box-sizing:border-box; }
          body { display:flex; align-items:center; justify-content:center; min-height:100vh; background:#fff; padding:10px; }
          img { max-width:100%; max-height:98vh; height:auto; object-fit:contain; border-radius:8px; box-shadow:0 4px 20px rgba(0,0,0,0.1); }
          @media print {
            body { padding:0; }
            img { max-height:100vh; width:100%; height:auto; box-shadow:none; border-radius:0; }
          }
        </style>
      </head>
      <body>
        <img src="${posterDataUrl}" alt="Alemaya Grill'd Table ${table} Poster" />
        <script>
          window.onload = function() {
            setTimeout(function() { window.print(); }, 250);
          };
        <\/script>
      </body>
      </html>
    `);
    printWin.document.close();
  } catch (err) {
    console.error('Print Error:', err);
    toast('⚠️ Error generating print poster: ' + err.message, 3000);
  }
}

// ═══════════════════════════════════════════════════════════════════════
// ADMIN SETTINGS MANAGEMENT
// ═══════════════════════════════════════════════════════════════════════

// ── Render Settings Pane ──
function renderAdminSettings() {
  const input = document.getElementById('takeaway-fee-input');
  if (input) {
    input.value = APP_STATE.settings?.takeawayFee || 0;
  }
  const adminPassInput = document.getElementById('admin-password-input');
  if (adminPassInput) {
    adminPassInput.value = APP_STATE.settings?.adminPassword || 'admin';
  }
  const kitchenPassInput = document.getElementById('kitchen-password-input');
  if (kitchenPassInput) {
    kitchenPassInput.value = APP_STATE.settings?.kitchenPassword || 'kitchen';
  }
}

// ── Toggle Password Visibility Helper ──
function togglePasswordVisibility(inputId, btn) {
  const input = document.getElementById(inputId);
  if (!input) return;
  const isPass = input.type === 'password';
  input.type = isPass ? 'text' : 'password';
  const icon = btn?.querySelector('i');
  if (icon) {
    icon.setAttribute('data-lucide', isPass ? 'eye-off' : 'eye');
    refreshLucideIcons();
  }
}

// ── Save Staff Passwords ──
async function saveStaffPasswords(event) {
  if (event) event.preventDefault();

  const adminPassInput = document.getElementById('admin-password-input');
  const kitchenPassInput = document.getElementById('kitchen-password-input');
  const statusEl = document.getElementById('passwords-save-status');

  const adminPassword = (adminPassInput?.value || '').trim() || 'admin';
  const kitchenPassword = (kitchenPassInput?.value || '').trim() || 'kitchen';

  try {
    APP_STATE.settings = APP_STATE.settings || {};
    APP_STATE.settings.adminPassword = adminPassword;
    APP_STATE.settings.kitchenPassword = kitchenPassword;
    saveToStorage();

    await API.updateSettings({
      takeawayFee: APP_STATE.settings.takeawayFee || 0,
      adminPassword,
      kitchenPassword
    });

    if (statusEl) {
      statusEl.style.display = 'inline';
      statusEl.textContent = '✓ Passwords updated successfully';
      statusEl.style.color = '#059669';
      setTimeout(() => { statusEl.style.display = 'none'; }, 3500);
    }
    toast('Security passcodes updated successfully');

    if (SYNC_CHANNEL) {
      try {
        SYNC_CHANNEL.postMessage({ type: 'SETTINGS_UPDATE', settings: APP_STATE.settings });
      } catch (e) {}
    }
  } catch (err) {
    console.warn('Error saving passwords:', err);
    toast('Error updating passwords');
  }
}

// ── Reset Staff Passwords to Defaults ──
async function resetStaffPasswords() {
  if (!confirm('Are you sure you want to reset Admin and Kitchen passcodes to factory defaults ("admin" and "kitchen")?')) return;

  const adminPassInput = document.getElementById('admin-password-input');
  const kitchenPassInput = document.getElementById('kitchen-password-input');
  const statusEl = document.getElementById('passwords-save-status');

  if (adminPassInput) adminPassInput.value = 'admin';
  if (kitchenPassInput) kitchenPassInput.value = 'kitchen';

  try {
    APP_STATE.settings = APP_STATE.settings || {};
    APP_STATE.settings.adminPassword = 'admin';
    APP_STATE.settings.kitchenPassword = 'kitchen';
    saveToStorage();

    await API.updateSettings({
      takeawayFee: APP_STATE.settings.takeawayFee || 0,
      adminPassword: 'admin',
      kitchenPassword: 'kitchen'
    });

    if (statusEl) {
      statusEl.style.display = 'inline';
      statusEl.textContent = '✓ Passcodes reset to defaults';
      statusEl.style.color = '#059669';
      setTimeout(() => { statusEl.style.display = 'none'; }, 3500);
    }
    toast('Passcodes reset to defaults (admin / kitchen)');

    if (SYNC_CHANNEL) {
      try {
        SYNC_CHANNEL.postMessage({ type: 'SETTINGS_UPDATE', settings: APP_STATE.settings });
      } catch (e) {}
    }
  } catch (err) {
    console.warn('Error resetting passwords:', err);
    toast('Error resetting passwords');
  }
}

// ── Save Takeaway Fee ──
async function saveTakeawayFee(event) {
  if (event) event.preventDefault();
  
  const input = document.getElementById('takeaway-fee-input');
  const statusEl = document.getElementById('settings-save-status');
  
  if (!input) return;
  
  const takeawayFee = parseFloat(input.value) || 0;
  
  try {
    APP_STATE.settings = APP_STATE.settings || {};
    APP_STATE.settings.takeawayFee = takeawayFee;
    saveToStorage();

    const result = await API.updateSettings({ takeawayFee });
    
    // Show success message
    if (statusEl) {
      statusEl.style.display = 'inline';
      statusEl.textContent = '✓ Settings saved successfully';
      statusEl.style.color = '#059669';
      
      setTimeout(() => {
        statusEl.style.display = 'none';
      }, 3500);
    }
    
    toast('Takeaway fee updated to ' + formatMoney(takeawayFee));
    
    // Update cart if it exists and order type is takeaway
    if (APP_STATE.cart.length > 0) {
      updateCartUI();
      renderCart();
    }
    
    // Broadcast to other tabs
    if (SYNC_CHANNEL) {
      try {
        SYNC_CHANNEL.postMessage({ type: 'SETTINGS_UPDATE', settings: APP_STATE.settings });
      } catch {}
    }
  } catch (err) {
    console.error('Save settings error:', err);
    // Still saved to client state and localStorage
    APP_STATE.settings = APP_STATE.settings || {};
    APP_STATE.settings.takeawayFee = takeawayFee;
    saveToStorage();

    if (statusEl) {
      statusEl.style.display = 'inline';
      statusEl.textContent = '✓ Settings saved';
      statusEl.style.color = '#059669';
      setTimeout(() => {
        statusEl.style.display = 'none';
      }, 3500);
    }
    toast('Takeaway fee updated (' + formatMoney(takeawayFee) + ')');
  }
}

function copyPosterUrl() {
  const url = _lastGeneratedPosterUrl || document.getElementById('qr-target-url-text')?.textContent || '';
  if (!url) return;
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(url).then(() => {
      toast('📋 Table link copied to clipboard!', 2000);
    }).catch(() => {
      toast(`Copied: ${url}`, 2000);
    });
  } else {
    toast(`Table link: ${url}`, 2500);
  }
}


// ══ ADMIN: CLEAR ALL ORDERS WITH CONFIRMATION ══
async function promptClearAllOrders() {
  const confirmed = confirm("⚠️ Are you sure you want to CLEAR ALL ORDERS from the database?\n\nThis will permanently delete all orders from the kitchen and admin history. This action cannot be undone.");
  if (!confirmed) return;

  try {
    toast('Clearing orders from database...', 2000);
    await API.clearAllOrders();
    MASTER_ORDERS = [];
    APP_STATE.orderHistory = [];
    saveToStorage();
    renderAdminOrdersSubpane();
    renderAdminDashboard();
    updateKitchenCounters();
    if (APP_STATE.portal === 'chef') renderKdsTickets();
    if (APP_STATE.currentTab === 'orders') {
      renderCurrentOrders();
      renderHistory();
    }
    if (SYNC_CHANNEL) {
      try { SYNC_CHANNEL.postMessage({ type: 'ALL_ORDERS_CLEARED' }); } catch {}
    }
    toast('✅ All orders have been cleared from the database', 3500);
  } catch (err) {
    console.error('Error clearing orders:', err);
    toast('Failed to clear orders: ' + err.message);
  }
}

// ══ CUSTOMER: CANCEL / DELETE PRE-COOKING ORDER ══
async function customerCancelOrder(orderId) {
  const ord = MASTER_ORDERS.find(o => o.id === orderId) || (APP_STATE.orderHistory || []).find(o => o.id === orderId);
  if (!ord) return;

  const rawStatus = (ord.status || 'orders').toLowerCase();
  if (rawStatus !== 'orders' && rawStatus !== 'received' && rawStatus !== 'placed') {
    toast('👨‍🍳 The chef has already started cooking. Order can no longer be cancelled.');
    renderCurrentOrders();
    return;
  }

  const ok = confirm(`Are you sure you want to cancel and delete Order #${orderId}?`);
  if (!ok) return;

  closeCustomerEditOrderModal();

  MASTER_ORDERS = MASTER_ORDERS.filter(o => o.id !== orderId);
  APP_STATE.orderHistory = APP_STATE.orderHistory.filter(o => o.id !== orderId);
  saveToStorage();
  updateCartUI();
  renderCurrentOrders();
  renderHistory();
  updateKitchenCounters();
  if (APP_STATE.portal === 'chef') renderKdsTickets();
  if (APP_STATE.portal === 'admin') renderAdminOrdersSubpane();

  toast(`Order #${orderId} was cancelled`, 3000);

  try {
    await API.deleteOrder(orderId);
  } catch (e) {
    console.warn('Delete order error:', e);
  }

  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({
        type: 'ORDER_DELETED',
        orderId: orderId
      });
    } catch {}
  }
}

// ══ CUSTOMER: EDIT & UPDATE PRE-COOKING ORDER ══
let CURRENT_EDITING_ORDER = null;

function openCustomerEditOrderModal(orderId) {
  const ord = (APP_STATE.orderHistory || []).find(o => o.id === orderId) || MASTER_ORDERS.find(o => o.id === orderId);
  if (!ord) {
    toast('Order not found');
    return;
  }

  const rawStatus = (ord.status || 'orders').toLowerCase();
  if (rawStatus !== 'orders' && rawStatus !== 'received' && rawStatus !== 'placed') {
    toast('👨‍🍳 The chef has already started cooking. Order modifications are locked.', 3500);
    renderCurrentOrders();
    return;
  }

  CURRENT_EDITING_ORDER = JSON.parse(JSON.stringify(ord));
  renderCustomerEditOrderModal();

  document.getElementById('customer-edit-order-overlay')?.classList.add('open');
  document.getElementById('customer-edit-order-modal')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  refreshLucideIcons();
}

function closeCustomerEditOrderModal() {
  document.getElementById('customer-edit-order-overlay')?.classList.remove('open');
  document.getElementById('customer-edit-order-modal')?.classList.remove('open');
  document.body.style.overflow = '';
  CURRENT_EDITING_ORDER = null;
}

function renderCustomerEditOrderModal() {
  const wrap = document.getElementById('customer-edit-order-content');
  if (!wrap || !CURRENT_EDITING_ORDER) return;

  const ord = CURRENT_EDITING_ORDER;
  const items = ord.items || [];

  let subtotal = 0;
  items.forEach(i => {
    const q = Number(i.qty) || 1;
    const u = Number(i.unitPrice) || Number(i.basePrice) || 0;
    subtotal += (u * q);
  });
  const total = subtotal;

  let itemsHtml = '';
  if (items.length === 0) {
    itemsHtml = `
      <div style="text-align:center; padding:24px 16px; color:#64748B;">
        <div style="font-size:1.8rem; margin-bottom:8px;">🛒</div>
        <p style="font-size:0.88rem; font-weight:600;">No items left in this order.</p>
        <p style="font-size:0.75rem; margin-top:4px;">Tap Cancel Order below if you wish to remove this ticket.</p>
      </div>
    `;
  } else {
    items.forEach((item, idx) => {
      const extras = getItemCustomizationsSummary(item);
      const extrasStr = extras.join(' • ');
      const uPrice = Number(item.unitPrice) || Number(item.basePrice) || 0;
      const q = Number(item.qty) || 1;
      const itemTotal = (uPrice * q);

      itemsHtml += `
        <div style="display:flex; justify-content:space-between; align-items:center; padding:10px 0; border-bottom:1px solid #F1F5F9; gap:10px;">
          <div style="flex:1; min-width:0;">
            <strong style="font-size:0.9rem; color:#0F172A; display:block; white-space:nowrap; overflow:hidden; text-overflow:ellipsis;">${escapeHtml(item.name)}</strong>
            ${extrasStr ? `<div style="font-size:0.74rem; color:#B45309; margin-top:2px;">${escapeHtml(extrasStr)}</div>` : ''}
            <div style="font-size:0.78rem; color:#64748B; margin-top:2px;">${formatMoney(itemTotal)}</div>
          </div>
          <div style="display:flex; align-items:center; gap:8px;">
            <div style="display:inline-flex; align-items:center; background:#F1F5F9; border-radius:8px; padding:2px;">
              <button type="button" onclick="changeCustomerEditQty(${idx}, -1)" style="width:28px; height:28px; border:none; background:#FFFFFF; border-radius:6px; font-weight:800; cursor:pointer; color:#0F172A; box-shadow:0 1px 2px rgba(0,0,0,0.06);">-</button>
              <span style="min-width:24px; text-align:center; font-weight:700; font-size:0.85rem;">${q}</span>
              <button type="button" onclick="changeCustomerEditQty(${idx}, 1)" style="width:28px; height:28px; border:none; background:#FFFFFF; border-radius:6px; font-weight:800; cursor:pointer; color:#0F172A; box-shadow:0 1px 2px rgba(0,0,0,0.06);">+</button>
            </div>
            <button type="button" onclick="removeCustomerEditItem(${idx})" title="Remove item" style="background:#FEE2E2; border:none; color:#DC2626; width:30px; height:30px; border-radius:8px; cursor:pointer; display:flex; align-items:center; justify-content:center; font-size:0.9rem;">
              ✕
            </button>
          </div>
        </div>
      `;
    });
  }

  wrap.innerHTML = `
    <div style="margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; align-items:center;">
        <h3 style="font-family:var(--font-serif); font-size:1.15rem; color:#0F172A; margin:0;">Edit Order #${ord.id}</h3>
        <span class="status-chip chip-orders" style="font-size:0.72rem;">Pending Chef</span>
      </div>
      <p style="font-size:0.76rem; color:#64748B; margin-top:4px;">
        Adjust quantities or cancel before the chef starts grilling.
      </p>
    </div>

    <div style="max-height:42vh; overflow-y:auto; margin-bottom:12px; padding-right:4px;">
      ${itemsHtml}
    </div>

    <div style="background:#FFFBEB; border:1px solid #FDE68A; border-radius:10px; padding:10px 12px; margin-bottom:14px;">
      <div style="display:flex; justify-content:space-between; font-size:0.88rem; font-weight:700; color:#92400E;">
        <span>Updated Total</span>
        <span style="font-size:1rem;">${formatMoney(total)}</span>
      </div>
    </div>

    <div style="display:flex; gap:10px; justify-content:space-between;">
      <button type="button" onclick="customerCancelOrder('${ord.id}')" style="background:#FEF2F2; color:#DC2626; border:1px solid #FECACA; padding:10px 14px; border-radius:10px; font-weight:700; font-size:0.82rem; cursor:pointer; flex:1;">
        Cancel Order
      </button>
      <button type="button" onclick="saveCustomerOrderEdits('${ord.id}')" style="background:var(--brand-terracotta, #E25D25); color:#FFFFFF; border:none; padding:10px 18px; border-radius:10px; font-weight:700; font-size:0.85rem; cursor:pointer; flex:1.5; ${items.length === 0 ? 'opacity:0.5; pointer-events:none;' : ''}">
        Update Order ✓
      </button>
    </div>
  `;
}

function changeCustomerEditQty(index, delta) {
  if (!CURRENT_EDITING_ORDER || !CURRENT_EDITING_ORDER.items || !CURRENT_EDITING_ORDER.items[index]) return;
  const item = CURRENT_EDITING_ORDER.items[index];
  const newQty = (Number(item.qty) || 1) + delta;
  if (newQty <= 0) {
    CURRENT_EDITING_ORDER.items.splice(index, 1);
  } else {
    item.qty = Math.min(20, newQty);
    const u = Number(item.unitPrice) || Number(item.basePrice) || 0;
    item.total = u * item.qty;
  }
  renderCustomerEditOrderModal();
}

function removeCustomerEditItem(index) {
  if (!CURRENT_EDITING_ORDER || !CURRENT_EDITING_ORDER.items || !CURRENT_EDITING_ORDER.items[index]) return;
  CURRENT_EDITING_ORDER.items.splice(index, 1);
  renderCustomerEditOrderModal();
}

async function saveCustomerOrderEdits(orderId) {
  if (!CURRENT_EDITING_ORDER) return;

  const masterOrd = MASTER_ORDERS.find(o => o.id === orderId);
  if (masterOrd) {
    const rawStatus = (masterOrd.status || 'orders').toLowerCase();
    if (rawStatus !== 'orders' && rawStatus !== 'received' && rawStatus !== 'placed') {
      alert('👨‍🍳 The chef has already started cooking this order! Modifications can no longer be accepted.');
      closeCustomerEditOrderModal();
      renderCurrentOrders();
      return;
    }
  }

  const items = CURRENT_EDITING_ORDER.items || [];
  if (items.length === 0) {
    if (confirm('No items left in order. Do you want to cancel this order?')) {
      customerCancelOrder(orderId);
      closeCustomerEditOrderModal();
    }
    return;
  }

  let subtotal = 0;
  items.forEach(i => {
    const q = Number(i.qty) || 1;
    const u = Number(i.unitPrice) || Number(i.basePrice) || 0;
    const t = (u * q);
    i.total = t;
    subtotal += t;
  });
  const total = subtotal;

  const updatedPayload = {
    items: items,
    subtotal: subtotal,
    total: total
  };

  if (masterOrd) {
    masterOrd.items = items;
    masterOrd.subtotal = subtotal;
    masterOrd.total = total;
  }

  const histOrd = (APP_STATE.orderHistory || []).find(o => o.id === orderId);
  if (histOrd) {
    histOrd.items = items;
    histOrd.subtotal = subtotal;
    histOrd.total = total;
  }

  saveToStorage();
  closeCustomerEditOrderModal();
  renderCurrentOrders();
  if (APP_STATE.portal === 'chef') renderKdsTickets();
  if (APP_STATE.portal === 'admin') renderAdminOrdersSubpane();

  toast(`Order #${orderId} updated successfully!`, 3000);

  if (SYNC_CHANNEL) {
    try {
      SYNC_CHANNEL.postMessage({
        type: 'ORDER_UPDATED',
        orderId: orderId,
        order: masterOrd || histOrd || CURRENT_EDITING_ORDER
      });
    } catch {}
  }

  API.updateOrder(orderId, updatedPayload).catch(e => {
    console.warn('Failed to sync updated order to DB:', e);
  });
}
