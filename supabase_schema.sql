-- =============================================================
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
  ('burger', 'Burger', 'burger', 1),
  ('pizza', 'Pizza', 'pizza', 2),
  ('spaghetti', 'Spaghetti', 'soup', 3),
  ('sandwich', 'Sandwich', 'sandwich', 4),
  ('burrito', 'Burrito', 'wrap', 5),
  ('special-wrap', 'Special Wrap', 'wrap', 6),
  ('rice', 'Rice', 'soup', 7),
  ('chicken', 'Chicken', 'package', 8),
  ('breakfast', 'Breakfast', 'soup', 9),
  ('dessert', 'Dessert', 'cake-slice', 10),
  ('extra', 'Extra', 'package', 11),
  ('protein', 'Protein', 'cup-soda', 12),
  ('superjuice', 'Superjuice', 'citrus', 13),
  ('smoothies', 'Smoothies', 'cup-soda', 14),
  ('milkshakes', 'Milkshakes', 'ice-cream-2', 15),
  ('juice', 'Juice', 'citrus', 16);

-- INSERT 85 REAL MENU DISHES
INSERT INTO public.products (id, category_id, name, badge, rating, reviews_count, description, ingredients, base_price, image, available) VALUES
  ('item_1', 'burger', 'Grilled Special Burger', 'CHEF''S SPECIAL', 4.9, 227, 'Fresh, grilled-to-order grilled special burger prepared daily with quality local ingredients.', '["Grilled Special Burger","House Seasoning","Fresh Ingredients"]'::jsonb, 799, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_2', 'burger', 'Chicken Burger', 'POPULAR', 4.8, 248, 'Fresh, grilled-to-order chicken burger prepared daily with quality local ingredients.', '["Chicken Burger","House Seasoning","Fresh Ingredients"]'::jsonb, 809, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_3', 'burger', 'Cheese Burger', 'BESTSELLER', 4.9, 207, 'Fresh, grilled-to-order cheese burger prepared daily with quality local ingredients.', '["Cheese Burger","House Seasoning","Fresh Ingredients"]'::jsonb, 569, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_4', 'burger', 'Beef Burger', NULL, 4.7, 119, 'Fresh, grilled-to-order beef burger prepared daily with quality local ingredients.', '["Beef Burger","House Seasoning","Fresh Ingredients"]'::jsonb, 369, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_5', 'burger', 'BBQ Burger', 'SMOKY', 4.8, 205, 'Fresh, grilled-to-order bbq burger prepared daily with quality local ingredients.', '["BBQ Burger","House Seasoning","Fresh Ingredients"]'::jsonb, 499, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_6', 'pizza', 'Grilled Special Pizza', 'CHEF''S CHOICE', 4.9, 137, 'Fresh, grilled-to-order grilled special pizza prepared daily with quality local ingredients.', '["Grilled Special Pizza","House Seasoning","Fresh Ingredients"]'::jsonb, 899, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg', TRUE),
  ('item_7', 'pizza', 'Margarita Pizza', NULL, 4.8, 198, 'Fresh, grilled-to-order margarita pizza prepared daily with quality local ingredients.', '["Margarita Pizza","House Seasoning","Fresh Ingredients"]'::jsonb, 699, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg', TRUE),
  ('item_8', 'pizza', 'Pepperoni Pizza', 'BESTSELLER', 4.9, 189, 'Fresh, grilled-to-order pepperoni pizza prepared daily with quality local ingredients.', '["Pepperoni Pizza","House Seasoning","Fresh Ingredients"]'::jsonb, 799, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg', TRUE),
  ('item_9', 'pizza', 'Chicken Pizza', 'POPULAR', 4.8, 168, 'Fresh, grilled-to-order chicken pizza prepared daily with quality local ingredients.', '["Chicken Pizza","House Seasoning","Fresh Ingredients"]'::jsonb, 869, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg', TRUE),
  ('item_10', 'pizza', 'Pizza al Tuna', NULL, 4.7, 127, 'Fresh, grilled-to-order pizza al tuna prepared daily with quality local ingredients.', '["Pizza al Tuna","House Seasoning","Fresh Ingredients"]'::jsonb, 689, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg', TRUE),
  ('item_11', 'pizza', 'Veggie Pizza', 'VEGETARIAN', 4.8, 240, 'Fresh, grilled-to-order veggie pizza prepared daily with quality local ingredients.', '["Veggie Pizza","House Seasoning","Fresh Ingredients"]'::jsonb, 599, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656231/alemaya-burger/pizza_margherita.jpg', TRUE),
  ('item_12', 'spaghetti', 'Spaghetti with Chicken Vegetables', 'POPULAR', 4.8, 249, 'Fresh, grilled-to-order spaghetti with chicken vegetables prepared daily with quality local ingredients.', '["Spaghetti with Chicken Vegetables","House Seasoning","Fresh Ingredients"]'::jsonb, 649, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg', TRUE),
  ('item_13', 'spaghetti', 'Spaghetti', NULL, 4.7, 146, 'Fresh, grilled-to-order spaghetti prepared daily with quality local ingredients.', '["Spaghetti","House Seasoning","Fresh Ingredients"]'::jsonb, 419, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg', TRUE),
  ('item_14', 'spaghetti', 'Spaghetti with Bologna', 'FAVORITE', 4.8, 185, 'Fresh, grilled-to-order spaghetti with bologna prepared daily with quality local ingredients.', '["Spaghetti with Bologna","House Seasoning","Fresh Ingredients"]'::jsonb, 469, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg', TRUE),
  ('item_15', 'spaghetti', 'Spaghetti Bologna with Cheese', 'BESTSELLER', 4.9, 133, 'Fresh, grilled-to-order spaghetti bologna with cheese prepared daily with quality local ingredients.', '["Spaghetti Bologna with Cheese","House Seasoning","Fresh Ingredients"]'::jsonb, 469, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656234/alemaya-burger/pasta_carbonara.jpg', TRUE),
  ('item_16', 'sandwich', 'Egg Sandwich', NULL, 4.7, 137, 'Fresh, grilled-to-order egg sandwich prepared daily with quality local ingredients.', '["Egg Sandwich","House Seasoning","Fresh Ingredients"]'::jsonb, 449, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_17', 'sandwich', 'Club Sandwich', 'SIGNATURE', 4.9, 118, 'Fresh, grilled-to-order club sandwich prepared daily with quality local ingredients.', '["Club Sandwich","House Seasoning","Fresh Ingredients"]'::jsonb, 799, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_18', 'sandwich', 'Veg Club Sandwich', 'VEGGIE', 4.7, 164, 'Fresh, grilled-to-order veg club sandwich prepared daily with quality local ingredients.', '["Veg Club Sandwich","House Seasoning","Fresh Ingredients"]'::jsonb, 309, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_19', 'sandwich', 'Cheese Sandwich', NULL, 4.6, 154, 'Fresh, grilled-to-order cheese sandwich prepared daily with quality local ingredients.', '["Cheese Sandwich","House Seasoning","Fresh Ingredients"]'::jsonb, 409, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_20', 'sandwich', 'Tuna Sandwich', 'POPULAR', 4.8, 274, 'Fresh, grilled-to-order tuna sandwich prepared daily with quality local ingredients.', '["Tuna Sandwich","House Seasoning","Fresh Ingredients"]'::jsonb, 709, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_21', 'burrito', 'Chicken Burrito', 'BESTSELLER', 4.9, 120, 'Fresh, grilled-to-order chicken burrito prepared daily with quality local ingredients.', '["Chicken Burrito","House Seasoning","Fresh Ingredients"]'::jsonb, 1066, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_22', 'burrito', 'Beef Burrito', 'POPULAR', 4.8, 103, 'Fresh, grilled-to-order beef burrito prepared daily with quality local ingredients.', '["Beef Burrito","House Seasoning","Fresh Ingredients"]'::jsonb, 966, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_23', 'burrito', 'Chicken Shawarma', 'HOUSE SPECIAL', 4.9, 107, 'Fresh, grilled-to-order chicken shawarma prepared daily with quality local ingredients.', '["Chicken Shawarma","House Seasoning","Fresh Ingredients"]'::jsonb, 899, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_24', 'burrito', 'Chicken Breast Plate', 'HIGH PROTEIN', 4.9, 245, 'Fresh, grilled-to-order chicken breast plate prepared daily with quality local ingredients.', '["Chicken Breast Plate","House Seasoning","Fresh Ingredients"]'::jsonb, 1099, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_25', 'burrito', 'Veggie Burrito', 'VEGGIE', 4.7, 263, 'Fresh, grilled-to-order veggie burrito prepared daily with quality local ingredients.', '["Veggie Burrito","House Seasoning","Fresh Ingredients"]'::jsonb, 566, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_26', 'special-wrap', 'Beef with Cheese Wrap', 'BESTSELLER', 4.8, 138, 'Fresh, grilled-to-order beef with cheese wrap prepared daily with quality local ingredients.', '["Beef with Cheese Wrap","House Seasoning","Fresh Ingredients"]'::jsonb, 569, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_27', 'special-wrap', 'Chicken with Cheese Wrap', 'POPULAR', 4.8, 230, 'Fresh, grilled-to-order chicken with cheese wrap prepared daily with quality local ingredients.', '["Chicken with Cheese Wrap","House Seasoning","Fresh Ingredients"]'::jsonb, 659, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_28', 'special-wrap', 'Tuna with Cheese Wrap', NULL, 4.7, 175, 'Fresh, grilled-to-order tuna with cheese wrap prepared daily with quality local ingredients.', '["Tuna with Cheese Wrap","House Seasoning","Fresh Ingredients"]'::jsonb, 500, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_29', 'special-wrap', 'Beef Chicken & Cheese Wrap', 'SUPER MIX', 4.9, 266, 'Fresh, grilled-to-order beef chicken & cheese wrap prepared daily with quality local ingredients.', '["Beef Chicken & Cheese Wrap","House Seasoning","Fresh Ingredients"]'::jsonb, 579, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_30', 'special-wrap', 'Fasting Tuna Wrap', 'FASTING', 4.7, 217, 'Fresh, grilled-to-order fasting tuna wrap prepared daily with quality local ingredients.', '["Fasting Tuna Wrap","House Seasoning","Fresh Ingredients"]'::jsonb, 449, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_31', 'rice', 'Rice', NULL, 4.6, 253, 'Fresh, grilled-to-order rice prepared daily with quality local ingredients.', '["Rice","House Seasoning","Fresh Ingredients"]'::jsonb, 229, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_32', 'rice', 'Rice with Bologna', NULL, 4.7, 138, 'Fresh, grilled-to-order rice with bologna prepared daily with quality local ingredients.', '["Rice with Bologna","House Seasoning","Fresh Ingredients"]'::jsonb, 329, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_33', 'rice', 'Rice Bologna with Cheese', 'POPULAR', 4.8, 242, 'Fresh, grilled-to-order rice bologna with cheese prepared daily with quality local ingredients.', '["Rice Bologna with Cheese","House Seasoning","Fresh Ingredients"]'::jsonb, 379, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_34', 'chicken', 'Grilled Chicken', 'CHEF''S SPECIAL', 4.9, 164, 'Fresh, grilled-to-order grilled chicken prepared daily with quality local ingredients.', '["Grilled Chicken","House Seasoning","Fresh Ingredients"]'::jsonb, 1379, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_35', 'chicken', 'Grilled Chicken Bowl', 'HEALTHY', 4.9, 152, 'Fresh, grilled-to-order grilled chicken bowl prepared daily with quality local ingredients.', '["Grilled Chicken Bowl","House Seasoning","Fresh Ingredients"]'::jsonb, 999, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_36', 'chicken', 'Grilled Beef Bowl', 'PROTEIN BOWL', 4.8, 281, 'Tender grilled spiced beef served with fresh garden greens and savory house garnish.', '["Grilled Beef Bowl","House Seasoning","Fresh Ingredients"]'::jsonb, 789, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656221/alemaya-burger/chicken_sandwich.jpg', TRUE),
  ('item_37', 'breakfast', 'Special Fetira', 'TRADITIONAL', 4.9, 216, 'Crispy layered pastry served warm with eggs and sweet natural honey.', '["Special Fetira","House Seasoning","Fresh Ingredients"]'::jsonb, 439, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_38', 'breakfast', 'Normal Fetira', NULL, 4.7, 236, 'Crispy freshly fried traditional fetira pastry.', '["Normal Fetira","House Seasoning","Fresh Ingredients"]'::jsonb, 309, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_39', 'breakfast', 'Special Chechebsa', 'POPULAR', 4.9, 247, 'Torn flatbread pan-fried with spiced clarified butter, berbere, honey, and yogurt.', '["Torn flatbread pan-fried with spiced clarified butter","berbere","honey","and yogurt"]'::jsonb, 469, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_40', 'breakfast', 'Normal Chechebsa', NULL, 4.8, 217, 'Traditional Ethiopian breakfast shredded flatbread tossed with aromatic spiced butter.', '["Normal Chechebsa","House Seasoning","Fresh Ingredients"]'::jsonb, 369, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_41', 'breakfast', 'Tikur Teff Chechebsa', 'HEALTHY TEFF', 4.9, 230, 'Nutritious whole black teff chechebsa with Ethiopian spiced butter.', '["Tikur Teff Chechebsa","House Seasoning","Fresh Ingredients"]'::jsonb, 399, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_42', 'breakfast', 'Scrambled Egg', NULL, 4.7, 175, 'Farm fresh eggs scrambled with tomatoes, onions, and jalapeño peppers.', '["Farm fresh eggs scrambled with tomatoes","onions","and jalapeño peppers"]'::jsonb, 369, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_43', 'breakfast', 'Plain Omelette', NULL, 4.7, 179, 'Fluffy 3-egg skillet omelette cooked with fresh herbs.', '["Plain Omelette","House Seasoning","Fresh Ingredients"]'::jsonb, 399, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_44', 'breakfast', 'Cheese Omelette', 'BESTSELLER', 4.8, 226, 'Folded golden omelette stuffed with gooey melted mozzarella and cheddar.', '["Cheese Omelette","House Seasoning","Fresh Ingredients"]'::jsonb, 449, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_45', 'breakfast', 'Lasagna', 'OVEN BAKED', 4.8, 149, 'Rich layers of pasta sheets, savory minced meat sauce, creamy bechamel, and melted cheese.', '["Rich layers of pasta sheets","savory minced meat sauce","creamy bechamel","and melted cheese"]'::jsonb, 799, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656240/alemaya-burger/burrito_bowl.jpg', TRUE),
  ('item_46', 'dessert', 'Pan Cake', NULL, 4.8, 195, 'Fluffy golden pancake stack drizzled with pure honey and whipped butter.', '["Pan Cake","House Seasoning","Fresh Ingredients"]'::jsonb, 249, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_47', 'dessert', 'Waffle & Teff Waffle', 'SIGNATURE', 4.9, 174, 'Crisp Belgian waffle made with teff flour, served with maple drizzle and fresh fruit.', '["Crisp Belgian waffle made with teff flour","served with maple drizzle and fresh fruit"]'::jsonb, 299, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_48', 'dessert', 'French Toast', NULL, 4.7, 103, 'Golden pan-fried brioche soaked in vanilla custard and cinnamon sugar.', '["French Toast","House Seasoning","Fresh Ingredients"]'::jsonb, 199, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_49', 'extra', 'Cheese', NULL, 4.8, 266, 'Extra melted cheddar or mozzarella slice.', '["Cheese","House Seasoning","Fresh Ingredients"]'::jsonb, 149, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_50', 'extra', 'Chicken', NULL, 4.8, 219, 'Extra portion of flame grilled chicken breast.', '["Chicken","House Seasoning","Fresh Ingredients"]'::jsonb, 169, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_51', 'extra', 'Egg', NULL, 4.8, 168, 'One fried or boiled farm egg.', '["Egg","House Seasoning","Fresh Ingredients"]'::jsonb, 45, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_52', 'extra', 'Tuna', NULL, 4.8, 147, 'Extra portion of premium flaked tuna.', '["Tuna","House Seasoning","Fresh Ingredients"]'::jsonb, 269, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_53', 'extra', 'Mayonnaise', NULL, 4.8, 178, 'Side cup of creamy garlic mayonnaise.', '["Mayonnaise","House Seasoning","Fresh Ingredients"]'::jsonb, 79, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_54', 'extra', 'Honey', NULL, 4.8, 209, 'Pure local organic natural honey.', '["Honey","House Seasoning","Fresh Ingredients"]'::jsonb, 59, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_55', 'extra', 'Beef', NULL, 4.8, 179, 'Extra flame grilled 100% pure beef patty.', '["Beef","House Seasoning","Fresh Ingredients"]'::jsonb, 149, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656219/alemaya-burger/burger_classic.jpg', TRUE),
  ('item_56', 'protein', 'Alemaya Special', 'SIGNATURE', 4.9, 114, 'Orange, apple, avocado, mango, banana and honey.', '["Orange","apple","avocado","mango","banana and honey"]'::jsonb, 259, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_57', 'protein', 'Body Building', 'FITNESS', 4.9, 258, 'Avocado, mango, papaya, peanut, banana, flax and honey.', '["Avocado","mango","papaya","peanut","banana","flax and honey"]'::jsonb, 259, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_58', 'protein', 'Muscle Building', 'POWER', 4.9, 266, 'Avocado, papaya, banana, peanut and honey.', '["Avocado","papaya","banana","peanut and honey"]'::jsonb, 259, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_59', 'protein', 'Vegitable Special', 'WELLNESS', 4.8, 224, 'Avocado, mango, papaya, flax, cucumber and honey.', '["Avocado","mango","papaya","flax","cucumber and honey"]'::jsonb, 259, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_60', 'superjuice', 'Energy Booster', 'REVITALIZE', 4.8, 263, 'Carrot, beetroot, apple and ginger.', '["Carrot","beetroot","apple and ginger"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_61', 'superjuice', 'Cool Refresh', 'HYDRATING', 4.8, 227, 'Watermelon, mint and lemon.', '["Watermelon","mint and lemon"]'::jsonb, 219, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_62', 'superjuice', 'Immunity Shoot', 'IMMUNITY', 4.9, 139, 'Lemon, ginger, mint and honey.', '["Lemon","ginger","mint and honey"]'::jsonb, 219, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_63', 'superjuice', 'Avocado Smoothie', 'CREAMY', 4.9, 212, 'Avocado, banana, milk and honey.', '["Avocado","banana","milk and honey"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_64', 'superjuice', 'Cooling Factor', 'SUMMER', 4.8, 246, 'Mango, papaya, strawberry and honey.', '["Mango","papaya","strawberry and honey"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_65', 'superjuice', 'Immunity Boost', 'VITAMIN C', 4.9, 143, 'Carrot, orange, apple and honey.', '["Carrot","orange","apple and honey"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_66', 'smoothies', 'Apple Burst', 'FRUITY', 4.8, 175, 'Strawberry, apple, pineapple, orange, mint and honey.', '["Strawberry","apple","pineapple","orange","mint and honey"]'::jsonb, 259, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_67', 'smoothies', 'Weight Loss', 'DETOX', 4.8, 217, 'Mango, carrot and orange.', '["Mango","carrot and orange"]'::jsonb, 229, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_68', 'smoothies', 'Mango Lassie', 'FAVORITE', 4.9, 251, 'Mango, chilled yogurt, cardamom, and honey.', '["Mango","chilled yogurt","cardamom","and honey"]'::jsonb, 259, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_69', 'smoothies', 'Apple Mix', NULL, 4.7, 262, 'Apple, pineapple, mango and honey.', '["Apple","pineapple","mango and honey"]'::jsonb, 229, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_70', 'smoothies', 'Strawberry Mix', 'BERRY', 4.9, 130, 'Strawberry, mango, avocado and honey.', '["Strawberry","mango","avocado and honey"]'::jsonb, 269, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_71', 'smoothies', 'Fruit Punch', NULL, 4.7, 109, 'Chef''s daily blend of freshly sliced seasonal fruits.', '["Fruit Punch","House Seasoning","Fresh Ingredients"]'::jsonb, 229, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_72', 'milkshakes', 'Avocado Shake', 'CREAMY', 4.9, 208, 'Fresh ripe avocado blended with chilled milk and honey.', '["Avocado Shake","House Seasoning","Fresh Ingredients"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_73', 'milkshakes', 'Mango Shake', 'POPULAR', 4.8, 114, 'Luscious mango chunks blended with creamy milk and honey.', '["Mango Shake","House Seasoning","Fresh Ingredients"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_74', 'milkshakes', 'Strawberry Shake', 'BESTSELLER', 4.9, 175, 'Fresh strawberries blended with rich milk and sweet honey.', '["Strawberry Shake","House Seasoning","Fresh Ingredients"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_75', 'milkshakes', 'Papaya Shake', NULL, 4.7, 183, 'Sweet tropical papaya whipped with rich milk and honey.', '["Papaya Shake","House Seasoning","Fresh Ingredients"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_76', 'milkshakes', 'Banana Shake', NULL, 4.8, 238, 'Ripe bananas blended with thick cold milk and honey.', '["Banana Shake","House Seasoning","Fresh Ingredients"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656246/alemaya-burger/milkshake_chocolate.jpg', TRUE),
  ('item_77', 'juice', 'Avocado Juice', 'THICK', 4.9, 104, 'Pure fresh avocado layers with a hint of lime and honey.', '["Avocado Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 229, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_78', 'juice', 'Mango Juice', 'SWEET', 4.8, 114, '100% freshly pressed ripe Ethiopian mango.', '["Mango Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_79', 'juice', 'Papaya Juice', NULL, 4.7, 164, 'Pure freshly pressed sweet golden papaya.', '["Papaya Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 199, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_80', 'juice', 'Pineapple Juice', 'TANGY', 4.8, 129, 'Zesty freshly extracted tropical pineapple juice.', '["Pineapple Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 249, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_81', 'juice', 'Carrot Juice', NULL, 4.7, 256, 'Freshly cold-pressed sweet highland carrots.', '["Carrot Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 199, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_82', 'juice', 'Strawberry Juice', 'FRESH', 4.8, 205, 'Cold-pressed fresh handpicked sweet strawberries.', '["Strawberry Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 239, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_83', 'juice', 'Water Melon Juice', 'COOL', 4.8, 252, 'Crisp and thirst-quenching cold fresh watermelon.', '["Water Melon Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 199, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_84', 'juice', 'Orange Juice', 'CITRUS', 4.9, 171, 'Freshly squeezed sweet highland oranges.', '["Orange Juice","House Seasoning","Fresh Ingredients"]'::jsonb, 269, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE),
  ('item_85', 'juice', 'Mixed Juice', 'SPRIS SIGNATURE', 4.9, 156, 'Traditional Ethiopian layered Spris juice (Avocado, Mango, Papaya, and Guava).', '["Traditional Ethiopian layered Spris juice (Avocado","Mango","Papaya","and Guava)"]'::jsonb, 279, 'https://res.cloudinary.com/xheul1fe/image/upload/v1792656243/alemaya-burger/smoothie_tropical.jpg', TRUE);

-- ═══════════════════════════════════════════════════════════════════
-- TABLE: EXTRAS & ADD-ONS (MANAGED BY ADMIN & CATEGORY-SCOPED)
-- ═══════════════════════════════════════════════════════════════════
CREATE TABLE IF NOT EXISTS public.extras (
  id TEXT PRIMARY KEY,
  name TEXT NOT NULL,
  price NUMERIC NOT NULL DEFAULT 0,
  categories JSONB DEFAULT '["all"]'::jsonb,
  available BOOLEAN DEFAULT TRUE,
  created_at TIMESTAMPTZ DEFAULT NOW()
);

INSERT INTO public.extras (id, name, price, categories, available) VALUES
  ('ext_cheese', 'Extra Melted Cheese', 149, '["burger", "sandwich", "pizza", "spaghetti", "burrito", "special-wrap"]'::jsonb, TRUE),
  ('ext_beef', 'Extra Flame Grilled Beef Patty', 169, '["burger", "sandwich", "burrito", "rice"]'::jsonb, TRUE),
  ('ext_chicken', 'Extra Flame Grilled Chicken', 169, '["burger", "sandwich", "burrito", "special-wrap", "rice", "chicken"]'::jsonb, TRUE),
  ('ext_egg', 'Extra Farm Egg', 45, '["burger", "sandwich", "breakfast", "rice"]'::jsonb, TRUE),
  ('ext_tuna', 'Extra Premium Tuna', 269, '["sandwich", "special-wrap", "rice"]'::jsonb, TRUE),
  ('ext_mayo', 'Creamy Mayonnaise', 79, '["burger", "sandwich", "special-wrap", "chicken"]'::jsonb, TRUE),
  ('ext_honey', 'Organic Pure Honey', 59, '["smoothies", "juice", "milkshakes", "superjuice", "dessert", "breakfast"]'::jsonb, TRUE),
  ('ext_protein', 'Whey Protein Scoop', 199, '["protein", "smoothies", "milkshakes"]'::jsonb, TRUE),
  ('ext_icecream', 'Vanilla Ice Cream Scoop', 89, '["dessert", "milkshakes"]'::jsonb, TRUE),
  ('ext_jalapeno', 'Spicy Pickled Jalapeños', 65, '["burger", "pizza", "sandwich", "burrito", "special-wrap"]'::jsonb, TRUE)
ON CONFLICT (id) DO UPDATE SET
  name = EXCLUDED.name,
  price = EXCLUDED.price,
  categories = EXCLUDED.categories,
  available = EXCLUDED.available;

-- ENABLE ROW LEVEL SECURITY & POLICIES
ALTER TABLE public.categories ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.products ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.orders ENABLE ROW LEVEL SECURITY;
ALTER TABLE public.extras ENABLE ROW LEVEL SECURITY;

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
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow public read extras') THEN
    CREATE POLICY "Allow public read extras" ON public.extras FOR SELECT USING (true);
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
  IF NOT EXISTS (SELECT 1 FROM pg_policies WHERE policyname = 'Allow service insert extras') THEN
    CREATE POLICY "Allow service insert extras" ON public.extras FOR ALL USING (true);
  END IF;
END $$;

