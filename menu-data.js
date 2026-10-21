const MENU_DATA = {
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
  categories: [
    { id: "burgers",    name: "Burgers",              icon: "burger",   order: 1 },
    { id: "pizza",      name: "Pizza",                icon: "pizza",    order: 2 },
    { id: "burritos",   name: "Burritos & Plates",    icon: "burrito",  order: 3 },
    { id: "pasta",      name: "Pasta",                icon: "pasta",    order: 4 },
    { id: "sandwiches", name: "Sandwiches",           icon: "sandwich", order: 5 },
    { id: "chicken",    name: "Chicken & Bowls",      icon: "chicken",  order: 6 },
    { id: "breakfast",  name: "Breakfast",            icon: "egg",      order: 7 },
    { id: "sides",      name: "Sides & Extras",       icon: "fries",    order: 8 },
    { id: "wraps",      name: "Special Wraps",        icon: "wrap",     order: 9 },
    { id: "protein",    name: "Protein Drinks",       icon: "dumbbell", order: 10 },
    { id: "superjuice", name: "Superjuice & Smoothies",icon: "leaf",   order: 11 },
    { id: "juice",      name: "Juice",                icon: "juice",    order: 12 },
    { id: "milkshakes", name: "Milkshakes",           icon: "shake",    order: 13 },
    { id: "desserts",   name: "Desserts",             icon: "cake",     order: 14 }
  ],
  products: []
};
window.MENU_DATA = MENU_DATA;
