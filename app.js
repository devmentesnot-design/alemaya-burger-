// ══ CONFIG ══
const CFG={currencySymbol:'Br',serviceCharge:0.10,estimatedTime:'15-25 min'};
const CATEGORIES=[
  {id:'burgers',name:'Burgers',icon:'🍔'},{id:'pizza',name:'Pizza',icon:'🍕'},
  {id:'burritos',name:'Burritos & Plates',icon:'🌯'},{id:'pasta',name:'Pasta',icon:'🍝'},
  {id:'sandwiches',name:'Sandwiches',icon:'🥪'},{id:'chicken',name:'Chicken & Bowls',icon:'🍗'},
  {id:'breakfast',name:'Breakfast',icon:'🍳'},{id:'sides',name:'Sides & Extras',icon:'🍟'},
  {id:'wraps',name:'Special Wraps',icon:'🫔'},{id:'protein',name:'Protein Drinks',icon:'💪'},
  {id:'superjuice',name:'Superjuice & Smoothies',icon:'🥤'},
  {id:'juice',name:'Juice',icon:'🧃'},{id:'milkshakes',name:'Milkshakes',icon:'🥛'},
  {id:'desserts',name:'Desserts',icon:'🍰'}
];
const PRODUCTS=[
  {id:'b001',categoryId:'burgers',name:'Alemaya Classic Burger',badge:'SIGNATURE',
   description:'Signature grilled beef patty with fresh lettuce, tomato, pickles, caramelized onions, and Alemaya special sauce on a toasted brioche bun.',
   ingredients:['Beef patty','Brioche bun','Lettuce','Tomato','Pickles','Caramelized onions','Alemaya sauce'],
   basePrice:185,image:'burger_classic.jpg',available:true,
   customizations:[
    {id:'cooking',name:'Cooked your way',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'medium',label:'Medium',priceAdd:0,default:true},{id:'medwell',label:'Medium well',priceAdd:0},
      {id:'well',label:'Well done',priceAdd:0}]},
    {id:'bun',name:'Choose your bun',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'brioche',label:'Brioche',priceAdd:0,default:true},{id:'potato',label:'Potato bun',priceAdd:0},
      {id:'wholegrain',label:'Wholegrain',priceAdd:15}]},
    {id:'extras',name:'A little extra',required:false,multiSelect:true,min:0,max:4,options:[
      {id:'extracheddar',label:'Extra cheddar',priceAdd:25},{id:'avocado',label:'Avocado',priceAdd:40},
      {id:'egg',label:'Fried egg',priceAdd:20},{id:'bacon',label:'Crispy beef bacon',priceAdd:35}]},
    {id:'remove',name:'Remove ingredients',required:false,multiSelect:true,min:0,max:5,options:[
      {id:'no_lettuce',label:'No lettuce',priceAdd:0},{id:'no_tomato',label:'No tomato',priceAdd:0},
      {id:'no_pickles',label:'No pickles',priceAdd:0},{id:'no_onions',label:'No onions',priceAdd:0},
      {id:'no_sauce',label:'No sauce',priceAdd:0}]}]},
  {id:'b002',categoryId:'burgers',name:'Double Smash Burger',badge:'BESTSELLER',
   description:'Two smashed beef patties with double American cheese, pickles, mustard, and special smash sauce on a potato bun.',
   ingredients:['2x Beef patty','American cheese','Pickles','Mustard','Smash sauce','Potato bun'],
   basePrice:230,image:'burger_classic.jpg',available:true,
   customizations:[
    {id:'cooking',name:'Cooked your way',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'medium',label:'Medium',priceAdd:0,default:true},{id:'well',label:'Well done',priceAdd:0}]},
    {id:'extras',name:'A little extra',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'extracheddar',label:'Extra cheddar',priceAdd:25},{id:'jalapenos',label:'Jalapenos',priceAdd:20},
      {id:'bacon',label:'Crispy beef bacon',priceAdd:35}]}]},
  {id:'b003',categoryId:'burgers',name:'Crispy Chicken Burger',
   description:'Crispy fried chicken fillet with coleslaw, pickles, and sriracha mayo on a sesame bun.',
   ingredients:['Chicken fillet','Coleslaw','Pickles','Sriracha mayo','Sesame bun'],
   basePrice:175,image:'chicken_sandwich.jpg',available:true,
   customizations:[
    {id:'bun',name:'Choose your bun',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'sesame',label:'Sesame',priceAdd:0,default:true},{id:'brioche',label:'Brioche',priceAdd:10}]},
    {id:'heat',name:'Spice level',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'mild',label:'Mild',priceAdd:0,default:true},{id:'medium',label:'Medium',priceAdd:0},
      {id:'hot',label:'Hot',priceAdd:0}]},
    {id:'extras',name:'A little extra',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'avocado',label:'Avocado',priceAdd:40},{id:'extracheddar',label:'Extra cheddar',priceAdd:25},
      {id:'bacon',label:'Crispy beef bacon',priceAdd:35}]}]},
  {id:'b004',categoryId:'burgers',name:'Veggie Stack Burger',badge:'VEGETARIAN',
   description:'Grilled portobello mushroom and black bean patty with avocado, spinach, tomato, and herb mayo on wholegrain bun.',
   ingredients:['Portobello patty','Avocado','Spinach','Tomato','Herb mayo','Wholegrain bun'],
   basePrice:160,image:'burger_classic.jpg',available:true,
   customizations:[
    {id:'extras',name:'A little extra',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'vegancheese',label:'Vegan cheese',priceAdd:30},{id:'extraavo',label:'Extra avocado',priceAdd:35},
      {id:'egg',label:'Fried egg',priceAdd:20}]}]},
  {id:'b005',categoryId:'burgers',name:'BBQ Bacon Burger',
   description:'Grilled beef patty with smoky BBQ sauce, crispy beef bacon, cheddar, onion rings, and lettuce on a brioche bun.',
   ingredients:['Beef patty','BBQ sauce','Beef bacon','Cheddar','Onion rings','Lettuce','Brioche bun'],
   basePrice:210,image:'burger_classic.jpg',available:true,
   customizations:[
    {id:'cooking',name:'Cooked your way',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'medium',label:'Medium',priceAdd:0,default:true},{id:'well',label:'Well done',priceAdd:0}]},
    {id:'extras',name:'A little extra',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'extrabacon',label:'Extra bacon',priceAdd:35},{id:'extracheddar',label:'Extra cheddar',priceAdd:25},
      {id:'jalapenos',label:'Jalapenos',priceAdd:20}]}]},
  {id:'p001',categoryId:'pizza',name:'Margherita Pizza',badge:'VEGETARIAN',
   description:'Classic Neapolitan pizza with fresh tomato sauce, mozzarella cheese, and fresh basil.',
   ingredients:['Tomato sauce','Mozzarella','Fresh basil','Olive oil'],
   basePrice:220,image:'pizza_margherita.jpg',available:true,
   customizations:[
    {id:'size',name:'Choose size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'small',label:'Small (8")',priceAdd:0,default:true},{id:'medium',label:'Medium (10")',priceAdd:50},
      {id:'large',label:'Large (12")',priceAdd:100}]},
    {id:'crust',name:'Choose crust',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'thin',label:'Thin crust',priceAdd:0,default:true},{id:'thick',label:'Thick crust',priceAdd:20},
      {id:'stuffed',label:'Stuffed crust',priceAdd:40}]},
    {id:'extras',name:'Extra toppings',required:false,multiSelect:true,min:0,max:5,options:[
      {id:'extracheese',label:'Extra cheese',priceAdd:30},{id:'mushrooms',label:'Mushrooms',priceAdd:25},
      {id:'bellpepper',label:'Bell peppers',priceAdd:20},{id:'olives',label:'Black olives',priceAdd:20},
      {id:'jalapenos',label:'Jalapenos',priceAdd:20}]}]},
  {id:'p002',categoryId:'pizza',name:'Chicken BBQ Pizza',
   description:'Grilled chicken strips, red onion, smoked BBQ sauce, mozzarella, and fresh cilantro.',
   ingredients:['Grilled chicken','Red onion','BBQ sauce','Mozzarella','Cilantro'],
   basePrice:270,image:'pizza_margherita.jpg',available:true,
   customizations:[
    {id:'size',name:'Choose size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'small',label:'Small (8")',priceAdd:0,default:true},{id:'medium',label:'Medium (10")',priceAdd:50},
      {id:'large',label:'Large (12")',priceAdd:100}]},
    {id:'crust',name:'Choose crust',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'thin',label:'Thin crust',priceAdd:0,default:true},{id:'thick',label:'Thick crust',priceAdd:20}]},
    {id:'extras',name:'Extra toppings',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'extrachicken',label:'Extra chicken',priceAdd:40},{id:'extracheese',label:'Extra cheese',priceAdd:30},
      {id:'jalapenos',label:'Jalapenos',priceAdd:20}]}]},
  {id:'p003',categoryId:'pizza',name:'Meat Lovers Pizza',
   description:'Loaded with seasoned beef, beef salami, crispy beef bacon, mozzarella, and spicy tomato sauce.',
   ingredients:['Seasoned beef','Beef salami','Beef bacon','Mozzarella','Spicy tomato sauce'],
   basePrice:310,image:'pizza_margherita.jpg',available:true,
   customizations:[
    {id:'size',name:'Choose size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'small',label:'Small (8")',priceAdd:0,default:true},{id:'medium',label:'Medium (10")',priceAdd:50},
      {id:'large',label:'Large (12")',priceAdd:100}]},
    {id:'crust',name:'Choose crust',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'thin',label:'Thin crust',priceAdd:0,default:true},{id:'stuffed',label:'Stuffed crust',priceAdd:40}]}]},
  {id:'br001',categoryId:'burritos',name:'Grilled Chicken Burrito',
   description:'Seasoned grilled chicken, rice, black beans, pico de gallo, sour cream, and cheese in a warm flour tortilla.',
   ingredients:['Grilled chicken','Rice','Black beans','Pico de gallo','Sour cream','Cheese','Flour tortilla'],
   basePrice:195,image:'burrito_bowl.jpg',available:true,
   customizations:[
    {id:'protein',name:'Choose protein',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'chicken',label:'Grilled chicken',priceAdd:0,default:true},{id:'beef',label:'Seasoned beef',priceAdd:20},
      {id:'veggie',label:'Veggie',priceAdd:-20}]},
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'guacamole',label:'Guacamole',priceAdd:35},{id:'extraricebeans',label:'Extra rice & beans',priceAdd:20},
      {id:'extracheese',label:'Extra cheese',priceAdd:25}]}]},
  {id:'br002',categoryId:'burritos',name:'Chicken Bowl',
   description:'Grilled chicken on seasoned rice with black beans, corn salsa, avocado, and chipotle lime dressing.',
   ingredients:['Grilled chicken','Seasoned rice','Black beans','Corn salsa','Avocado','Chipotle dressing'],
   basePrice:185,image:'burrito_bowl.jpg',available:true,
   customizations:[
    {id:'base',name:'Choose base',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'rice',label:'Seasoned rice',priceAdd:0,default:true},{id:'salad',label:'Mixed salad',priceAdd:0},
      {id:'quinoa',label:'Quinoa',priceAdd:30}]},
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'guacamole',label:'Guacamole',priceAdd:35},{id:'sourcream',label:'Sour cream',priceAdd:15},
      {id:'extrachicken',label:'Extra chicken',priceAdd:40}]}]},
  {id:'pa001',categoryId:'pasta',name:'Spaghetti Carbonara',
   description:'Classic carbonara with spaghetti, crispy beef bacon, egg yolk, parmesan, and black pepper.',
   ingredients:['Spaghetti','Beef bacon','Egg yolk','Parmesan','Black pepper'],
   basePrice:175,image:'pasta_carbonara.jpg',available:true,
   customizations:[
    {id:'pasta',name:'Choose pasta',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'spaghetti',label:'Spaghetti',priceAdd:0,default:true},{id:'penne',label:'Penne',priceAdd:0},
      {id:'fettuccine',label:'Fettuccine',priceAdd:0}]},
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'extrabacon',label:'Extra bacon',priceAdd:35},{id:'extraparmesan',label:'Extra parmesan',priceAdd:20},
      {id:'mushrooms',label:'Mushrooms',priceAdd:25}]}]},
  {id:'pa002',categoryId:'pasta',name:'Penne Arrabiata',badge:'VEGETARIAN',
   description:'Penne pasta in spicy tomato sauce with garlic, chili flakes, and fresh parsley.',
   ingredients:['Penne','Tomato sauce','Garlic','Chili flakes','Fresh parsley'],
   basePrice:145,image:'pasta_carbonara.jpg',available:true,
   customizations:[
    {id:'heat',name:'Spice level',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'mild',label:'Mild',priceAdd:0},{id:'medium',label:'Medium',priceAdd:0,default:true},
      {id:'hot',label:'Extra hot',priceAdd:0}]},
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:2,options:[
      {id:'chicken',label:'Grilled chicken',priceAdd:50},{id:'extraparmesan',label:'Extra parmesan',priceAdd:20}]}]},
  {id:'pa003',categoryId:'pasta',name:'Chicken Alfredo',
   description:'Creamy alfredo sauce with fettuccine, grilled chicken, and a sprinkle of parmesan.',
   ingredients:['Fettuccine','Grilled chicken','Cream','Butter','Parmesan','Garlic'],
   basePrice:195,image:'pasta_carbonara.jpg',available:true,
   customizations:[
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'mushrooms',label:'Mushrooms',priceAdd:25},{id:'extrachicken',label:'Extra chicken',priceAdd:40},
      {id:'extraparmesan',label:'Extra parmesan',priceAdd:20}]}]},
  {id:'s001',categoryId:'sandwiches',name:'Club Sandwich',
   description:'Triple-decker with grilled chicken, beef bacon, lettuce, tomato, cheddar, and mayo on toasted sourdough.',
   ingredients:['Grilled chicken','Beef bacon','Lettuce','Tomato','Cheddar','Mayo','Sourdough'],
   basePrice:155,image:'chicken_sandwich.jpg',available:true,
   customizations:[
    {id:'bread',name:'Choose bread',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'sourdough',label:'Sourdough',priceAdd:0,default:true},{id:'wholegrain',label:'Wholegrain',priceAdd:10},
      {id:'white',label:'White bread',priceAdd:0}]},
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'avocado',label:'Avocado',priceAdd:40},{id:'extrabacon',label:'Extra bacon',priceAdd:35},
      {id:'extracheddar',label:'Extra cheddar',priceAdd:25}]}]},
  {id:'s002',categoryId:'sandwiches',name:'Grilled Cheese Sandwich',badge:'VEGETARIAN',
   description:'Thick slices of sourdough with triple melted cheese blend, grilled until golden.',
   ingredients:['Sourdough','Cheddar','Mozzarella','Gouda','Butter'],
   basePrice:120,image:'chicken_sandwich.jpg',available:true,
   customizations:[
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'tomato',label:'Tomato slices',priceAdd:10},{id:'jalapenos',label:'Jalapenos',priceAdd:15},
      {id:'bacon',label:'Beef bacon',priceAdd:35}]}]},
  {id:'c001',categoryId:'chicken',name:'Grilled Chicken Plate',
   description:'Char-grilled seasoned chicken breast with garlic rice, grilled vegetables, and house salad.',
   ingredients:['Chicken breast','Garlic rice','Grilled vegetables','House salad'],
   basePrice:200,image:'chicken_sandwich.jpg',available:true,
   customizations:[
    {id:'side',name:'Choose your side',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'rice',label:'Garlic rice',priceAdd:0,default:true},{id:'fries',label:'Crispy fries',priceAdd:0},
      {id:'salad',label:'House salad',priceAdd:0}]},
    {id:'sauce',name:'Choose sauce',required:false,multiSelect:false,min:0,max:1,options:[
      {id:'garlic',label:'Garlic aioli',priceAdd:0,default:true},{id:'bbq',label:'BBQ sauce',priceAdd:0},
      {id:'sriracha',label:'Sriracha mayo',priceAdd:0}]}]},
  {id:'c002',categoryId:'chicken',name:'Chicken Tenders',
   description:'5 crispy chicken tenders with your choice of dipping sauce.',
   ingredients:['Chicken tenders','Seasoned breadcrumbs','Choice of sauce'],
   basePrice:160,image:'chicken_sandwich.jpg',available:true,
   customizations:[
    {id:'sauce',name:'Choose dipping sauce',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'ranch',label:'Ranch',priceAdd:0,default:true},{id:'bbq',label:'BBQ',priceAdd:0},
      {id:'honey',label:'Honey mustard',priceAdd:0},{id:'sriracha',label:'Sriracha',priceAdd:0}]},
    {id:'qty',name:'Quantity',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'5pc',label:'5 pieces',priceAdd:0,default:true},{id:'8pc',label:'8 pieces',priceAdd:60},
      {id:'10pc',label:'10 pieces',priceAdd:100}]}]},
  {id:'bk001',categoryId:'breakfast',name:'Alemaya Big Breakfast',
   description:'2 scrambled eggs, crispy beef bacon, hash browns, grilled tomato, mushrooms, and sourdough toast.',
   ingredients:['Eggs','Beef bacon','Hash browns','Grilled tomato','Mushrooms','Sourdough toast'],
   basePrice:180,image:'burger_classic.jpg',available:true,
   customizations:[
    {id:'eggs',name:'How do you want your eggs?',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'scrambled',label:'Scrambled',priceAdd:0,default:true},{id:'fried',label:'Fried',priceAdd:0},
      {id:'poached',label:'Poached',priceAdd:0},{id:'omelette',label:'Omelette',priceAdd:0}]},
    {id:'toast',name:'Choose your toast',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'sourdough',label:'Sourdough',priceAdd:0,default:true},{id:'wholegrain',label:'Wholegrain',priceAdd:0},
      {id:'white',label:'White',priceAdd:0}]},
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:4,options:[
      {id:'extrabacon',label:'Extra bacon',priceAdd:35},{id:'extraeggs',label:'Extra eggs',priceAdd:25},
      {id:'avocado',label:'Avocado',priceAdd:40},{id:'haloumi',label:'Grilled halloumi',priceAdd:45}]}]},
  {id:'bk002',categoryId:'breakfast',name:'Acai Bowl',badge:'HEALTHY',
   description:'Thick blended acai with banana, honey, topped with granola, fresh strawberries, and coconut flakes.',
   ingredients:['Acai','Banana','Honey','Granola','Strawberries','Coconut flakes'],
   basePrice:150,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'toppings',name:'Choose toppings',required:false,multiSelect:true,min:0,max:4,options:[
      {id:'extragranola',label:'Extra granola',priceAdd:20},{id:'pbutter',label:'Peanut butter',priceAdd:25},
      {id:'chia',label:'Chia seeds',priceAdd:15},{id:'cacao',label:'Cacao nibs',priceAdd:20}]}]},
  {id:'bk003',categoryId:'breakfast',name:'Breakfast Burrito',
   description:'Scrambled eggs, cheese, beef bacon, salsa, and sour cream in a warm flour tortilla.',
   ingredients:['Scrambled eggs','Cheddar','Beef bacon','Salsa','Sour cream','Flour tortilla'],
   basePrice:145,image:'burrito_bowl.jpg',available:true,
   customizations:[
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'avocado',label:'Avocado',priceAdd:40},{id:'extraeggs',label:'Extra eggs',priceAdd:25},
      {id:'extrabacon',label:'Extra bacon',priceAdd:35}]}]},
  {id:'si001',categoryId:'sides',name:'Crispy Fries',
   description:'Golden seasoned fries with sea salt and herbs. Served with your choice of dipping sauce.',
   ingredients:['Potatoes','Sea salt','Herbs'],
   basePrice:75,image:'burger_classic.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular',priceAdd:0,default:true},{id:'large',label:'Large',priceAdd:30}]},
    {id:'sauce',name:'Dipping sauce',required:false,multiSelect:false,min:0,max:1,options:[
      {id:'ketchup',label:'Ketchup',priceAdd:0,default:true},{id:'mayo',label:'Mayo',priceAdd:0},
      {id:'bbq',label:'BBQ sauce',priceAdd:0},{id:'aioli',label:'Garlic aioli',priceAdd:0}]}]},
  {id:'si002',categoryId:'sides',name:'Sweet Potato Fries',badge:'HEALTHY',
   description:'Crispy sweet potato fries with cinnamon sugar and chipotle dip.',
   ingredients:['Sweet potato','Cinnamon sugar','Chipotle dip'],
   basePrice:90,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular',priceAdd:0,default:true},{id:'large',label:'Large',priceAdd:30}]}]},
  {id:'si003',categoryId:'sides',name:'Onion Rings',
   description:'Golden crispy battered onion rings with smoky BBQ dip.',
   ingredients:['Onion','Batter','BBQ dip'],basePrice:80,image:'burger_classic.jpg',available:true,customizations:[]},
  {id:'si004',categoryId:'sides',name:'Side Salad',badge:'HEALTHY',
   description:'Mixed greens, cucumber, cherry tomato, red onion, and lemon vinaigrette.',
   ingredients:['Mixed greens','Cucumber','Cherry tomato','Red onion','Lemon vinaigrette'],
   basePrice:70,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'dressing',name:'Choose dressing',required:false,multiSelect:false,min:0,max:1,options:[
      {id:'lemon',label:'Lemon vinaigrette',priceAdd:0,default:true},{id:'caesar',label:'Caesar',priceAdd:0},
      {id:'ranch',label:'Ranch',priceAdd:0}]}]},
  {id:'si005',categoryId:'sides',name:'Garlic Bread',
   description:'Toasted sourdough bread with garlic butter and parsley.',
   ingredients:['Sourdough','Garlic butter','Parsley'],basePrice:55,image:'burger_classic.jpg',available:true,
   customizations:[
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:2,options:[
      {id:'cheese',label:'Melted cheese',priceAdd:20},{id:'jalapenos',label:'Jalapenos',priceAdd:15}]}]},
  {id:'w001',categoryId:'wraps',name:'Chicken Caesar Wrap',
   description:'Grilled chicken, romaine lettuce, parmesan, croutons, and Caesar dressing in a spinach wrap.',
   ingredients:['Grilled chicken','Romaine lettuce','Parmesan','Croutons','Caesar dressing','Spinach wrap'],
   basePrice:165,image:'chicken_sandwich.jpg',available:true,
   customizations:[
    {id:'wrap',name:'Choose wrap',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'spinach',label:'Spinach wrap',priceAdd:0,default:true},{id:'plain',label:'Plain wrap',priceAdd:0},
      {id:'tomato',label:'Tomato wrap',priceAdd:0}]},
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:2,options:[
      {id:'avocado',label:'Avocado',priceAdd:40},{id:'extrachicken',label:'Extra chicken',priceAdd:40}]}]},
  {id:'w002',categoryId:'wraps',name:'Falafel Wrap',badge:'VEGETARIAN',
   description:'Crispy falafel, hummus, tabbouleh, cucumber, and tahini in a warm pita.',
   ingredients:['Falafel','Hummus','Tabbouleh','Cucumber','Tahini','Pita'],
   basePrice:145,image:'burrito_bowl.jpg',available:true,
   customizations:[
    {id:'extras',name:'Add extras',required:false,multiSelect:true,min:0,max:2,options:[
      {id:'extrahummus',label:'Extra hummus',priceAdd:20},{id:'fetacheese',label:'Feta cheese',priceAdd:25}]}]},
  {id:'pr001',categoryId:'protein',name:'Vanilla Protein Shake',badge:'HEALTHY',
   description:'25g protein blend, banana, oat milk, vanilla extract, and honey.',
   ingredients:['Whey protein','Banana','Oat milk','Vanilla extract','Honey'],
   basePrice:130,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'milk',name:'Choose milk',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'oat',label:'Oat milk',priceAdd:0,default:true},{id:'almond',label:'Almond milk',priceAdd:0},
      {id:'whole',label:'Whole milk',priceAdd:0}]},
    {id:'extras',name:'Boost it',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'pbutter',label:'Peanut butter',priceAdd:25},{id:'chia',label:'Chia seeds',priceAdd:15},
      {id:'extraprotein',label:'Extra protein scoop',priceAdd:40}]}]},
  {id:'pr002',categoryId:'protein',name:'Chocolate Protein Shake',badge:'HEALTHY',
   description:'25g chocolate protein, cocoa powder, almond milk, and banana.',
   ingredients:['Chocolate protein','Cocoa powder','Almond milk','Banana'],
   basePrice:130,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'milk',name:'Choose milk',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'almond',label:'Almond milk',priceAdd:0,default:true},{id:'oat',label:'Oat milk',priceAdd:0},
      {id:'whole',label:'Whole milk',priceAdd:0}]},
    {id:'extras',name:'Boost it',required:false,multiSelect:true,min:0,max:2,options:[
      {id:'extraprotein',label:'Extra protein scoop',priceAdd:40},{id:'pbutter',label:'Peanut butter',priceAdd:25}]}]},
  {id:'sj001',categoryId:'superjuice',name:'Green Superjuice',badge:'HEALTHY',
   description:'Spinach, kale, cucumber, green apple, ginger, lemon, and coconut water.',
   ingredients:['Spinach','Kale','Cucumber','Green apple','Ginger','Lemon','Coconut water'],
   basePrice:95,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (350ml)',priceAdd:0,default:true},{id:'large',label:'Large (500ml)',priceAdd:30}]},
    {id:'extras',name:'Boost it',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'collagen',label:'Collagen powder',priceAdd:35},{id:'spirulina',label:'Spirulina',priceAdd:25},
      {id:'chia',label:'Chia seeds',priceAdd:15}]}]},
  {id:'sj002',categoryId:'superjuice',name:'Tropical Smoothie',badge:'HEALTHY',
   description:'Mango, pineapple, spinach, banana, and coconut milk. A tropical escape.',
   ingredients:['Mango','Pineapple','Spinach','Banana','Coconut milk'],
   basePrice:100,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (350ml)',priceAdd:0,default:true},{id:'large',label:'Large (500ml)',priceAdd:30}]}]},
  {id:'sj003',categoryId:'superjuice',name:'Berry Blast Smoothie',
   description:'Strawberry, blueberry, raspberry, banana, and oat milk.',
   ingredients:['Strawberry','Blueberry','Raspberry','Banana','Oat milk'],
   basePrice:100,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (350ml)',priceAdd:0,default:true},{id:'large',label:'Large (500ml)',priceAdd:30}]}]},
  {id:'j001',categoryId:'juice',name:'Fresh Orange Juice',
   description:'Freshly squeezed Valencia oranges. Pure and refreshing.',
   ingredients:['Fresh oranges'],basePrice:70,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (300ml)',priceAdd:0,default:true},{id:'large',label:'Large (500ml)',priceAdd:30}]}]},
  {id:'j002',categoryId:'juice',name:'Watermelon Mint Juice',
   description:'Fresh watermelon blended with mint leaves and a squeeze of lime.',
   ingredients:['Watermelon','Fresh mint','Lime'],basePrice:75,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (300ml)',priceAdd:0,default:true},{id:'large',label:'Large (500ml)',priceAdd:30}]}]},
  {id:'j003',categoryId:'juice',name:'Mango Passion Juice',
   description:'Fresh mango and passion fruit blended into a tropical delight.',
   ingredients:['Mango','Passion fruit'],basePrice:80,image:'smoothie_tropical.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (300ml)',priceAdd:0,default:true},{id:'large',label:'Large (500ml)',priceAdd:30}]}]},
  {id:'ms001',categoryId:'milkshakes',name:'Chocolate Milkshake',badge:'BESTSELLER',
   description:'Rich chocolate ice cream blended with cold milk, topped with whipped cream and chocolate drizzle.',
   ingredients:['Chocolate ice cream','Whole milk','Chocolate syrup','Whipped cream'],
   basePrice:110,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (400ml)',priceAdd:0,default:true},{id:'large',label:'Large (600ml)',priceAdd:40}]},
    {id:'extras',name:'Make it extra',required:false,multiSelect:true,min:0,max:3,options:[
      {id:'extrascoop',label:'Extra ice cream scoop',priceAdd:30},{id:'oreo',label:'Oreo crumbs',priceAdd:20},
      {id:'saltedcaramel',label:'Salted caramel',priceAdd:20}]}]},
  {id:'ms002',categoryId:'milkshakes',name:'Vanilla Milkshake',
   description:'Classic creamy vanilla shake with whipped cream and a cherry on top.',
   ingredients:['Vanilla ice cream','Whole milk','Vanilla extract','Whipped cream'],
   basePrice:105,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (400ml)',priceAdd:0,default:true},{id:'large',label:'Large (600ml)',priceAdd:40}]},
    {id:'extras',name:'Make it extra',required:false,multiSelect:true,min:0,max:2,options:[
      {id:'extrascoop',label:'Extra ice cream scoop',priceAdd:30},{id:'strawberry',label:'Fresh strawberries',priceAdd:20}]}]},
  {id:'ms003',categoryId:'milkshakes',name:'Strawberry Milkshake',
   description:'Fresh strawberry shake blended with ice cream, topped with whipped cream.',
   ingredients:['Strawberry ice cream','Fresh strawberries','Whole milk','Whipped cream'],
   basePrice:110,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'size',name:'Size',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'regular',label:'Regular (400ml)',priceAdd:0,default:true},{id:'large',label:'Large (600ml)',priceAdd:40}]}]},
  {id:'d001',categoryId:'desserts',name:'Chocolate Lava Cake',badge:'MUST TRY',
   description:'Warm Belgian chocolate cake with a molten center, served with vanilla ice cream.',
   ingredients:['Belgian dark chocolate','Butter','Eggs','Sugar','Flour','Vanilla ice cream'],
   basePrice:130,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'extras',name:'Add on',required:false,multiSelect:true,min:0,max:2,options:[
      {id:'extraicecream',label:'Extra ice cream',priceAdd:30},{id:'whip',label:'Whipped cream',priceAdd:15}]}]},
  {id:'d002',categoryId:'desserts',name:'Cheesecake Slice',
   description:'New York-style baked cheesecake with berry coulis and whipped cream.',
   ingredients:['Cream cheese','Eggs','Sugar','Graham cracker crust','Berry coulis'],
   basePrice:110,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'sauce',name:'Choose sauce',required:false,multiSelect:false,min:0,max:1,options:[
      {id:'berry',label:'Berry coulis',priceAdd:0,default:true},{id:'caramel',label:'Salted caramel',priceAdd:0},
      {id:'choc',label:'Chocolate sauce',priceAdd:0}]}]},
  {id:'d003',categoryId:'desserts',name:'Brownies & Ice Cream',
   description:'Warm fudgy brownies topped with two scoops of ice cream and chocolate sauce.',
   ingredients:['Fudge brownies','Vanilla ice cream','Chocolate sauce'],
   basePrice:120,image:'milkshake_chocolate.jpg',available:true,
   customizations:[
    {id:'icecream',name:'Choose ice cream flavor',required:true,multiSelect:false,min:1,max:1,options:[
      {id:'vanilla',label:'Vanilla',priceAdd:0,default:true},{id:'chocolate',label:'Chocolate',priceAdd:0},
      {id:'strawberry',label:'Strawberry',priceAdd:0}]}]}
];

// ══ CATEGORY IMAGES ══
const CAT_IMAGES={
  burgers:'burger_classic.jpg',pizza:'pizza_margherita.jpg',burritos:'burrito_bowl.jpg',
  pasta:'pasta_carbonara.jpg',sandwiches:'chicken_sandwich.jpg',chicken:'chicken_sandwich.jpg',
  breakfast:'smoothie_tropical.jpg',sides:'burger_classic.jpg',wraps:'chicken_sandwich.jpg',
  protein:'milkshake_chocolate.jpg',superjuice:'smoothie_tropical.jpg',juice:'smoothie_tropical.jpg',
  milkshakes:'milkshake_chocolate.jpg',desserts:'milkshake_chocolate.jpg'
};

// ══ STATE ══
let ST={currentView:'welcome',activeCategory:'burgers',searchQuery:'',orderType:'Dine-In',
  cart:[],editingIndex:-1,sheet:{product:null,selections:{},qty:1,note:'',isEdit:false}};

// ══ INIT ══
document.addEventListener('DOMContentLoaded',()=>{
  setTimeout(()=>document.getElementById('splash').classList.add('hidden'),2200);
  buildCategoryPills();buildOrderTypeTabs();renderMenu();
  restoreCart();updateCartUI();
});

// ══ NAV ══
function showView(id){
  document.querySelectorAll('.view').forEach(v=>v.classList.remove('active'));
  document.getElementById('view-'+id).classList.add('active');
  ST.currentView=id;window.scrollTo(0,0);
}
function startOrder(){showView('menu');setTimeout(()=>selectCategory(ST.activeCategory),100);}
function showMenu(){showView('menu');updateCartBar();}
function showCart(){showView('cart');renderCart();document.getElementById('cart-bar').classList.add('hidden');}

// ══ CATEGORY GRID ══
function buildCategoryPills(){
  const c=document.getElementById('cat-pills');
  CATEGORIES.forEach(cat=>{
    const b=document.createElement('button');
    b.className='cgitem'+(cat.id===ST.activeCategory?' active':'');
    b.id='pill-'+cat.id;
    b.innerHTML='<span class="cgitem-ic">'+cat.icon+'</span><span class="cgitem-nm">'+cat.name+'</span>';
    b.onclick=()=>selectCategory(cat.id);c.appendChild(b);
  });
}
function selectCategory(id){
  ST.activeCategory=id;
  document.querySelectorAll('.cgitem').forEach(p=>p.classList.remove('active'));
  const p=document.getElementById('pill-'+id);if(p)p.classList.add('active');
  ST.searchQuery='';
  const si=document.getElementById('search-input');if(si)si.value='';
  updateBanner(id);
  renderMenu();
}
function updateBanner(catId){
  const img=document.getElementById('cat-banner-img');
  const lbl=document.getElementById('cat-banner-label');
  if(!img)return;
  const cat=CATEGORIES.find(c=>c.id===catId);
  img.style.opacity='0';
  setTimeout(()=>{
    img.src=CAT_IMAGES[catId]||'burger_classic.jpg';
    img.onerror=()=>{img.src='logo.png';};
    if(lbl&&cat)lbl.textContent=cat.icon+' '+cat.name;
    img.style.opacity='1';
  },220);
}

// ══ ORDER TYPE ══
function buildOrderTypeTabs(){
  const b=document.getElementById('ot-bar');
  ['Dine-In','Takeaway','Delivery'].forEach(t=>{
    const btn=document.createElement('button');
    btn.className='ot-btn'+(t===ST.orderType?' active':'');
    btn.textContent=t;
    btn.onclick=()=>{ST.orderType=t;document.querySelectorAll('.ot-btn').forEach(x=>x.classList.remove('active'));btn.classList.add('active');};
    b.appendChild(btn);
  });
}

// ══ SEARCH ══
function toggleSearch(){
  const b=document.getElementById('search-bar');
  if(b.style.display==='none'){b.style.display='block';document.getElementById('search-input').focus();}
  else{b.style.display='none';ST.searchQuery='';document.getElementById('search-input').value='';renderMenu();}
}
function filterMenu(q){ST.searchQuery=q.toLowerCase();renderMenu();}

// ══ RENDER MENU ══
function renderMenu(){
  const c=document.getElementById('menu-content');c.innerHTML='';
  if(ST.searchQuery.length>0){
    const res=PRODUCTS.filter(p=>p.name.toLowerCase().includes(ST.searchQuery)||(p.description&&p.description.toLowerCase().includes(ST.searchQuery))||(p.ingredients&&p.ingredients.some(i=>i.toLowerCase().includes(ST.searchQuery))));
    if(res.length===0){c.innerHTML='<div class="nores"><div class="nores-ic">&#128269;</div><p>No items found for "'+esc(ST.searchQuery)+'"</p></div>';return;}
    const s=document.createElement('div');
    s.innerHTML='<div class="sec-hd"><span class="sec-title">Search results</span></div>';
    const g=document.createElement('div');g.className='pgrid';
    res.forEach(p=>g.appendChild(makeListCard(p)));
    s.appendChild(g);c.appendChild(s);return;
  }
  const cat=CATEGORIES.find(x=>x.id===ST.activeCategory);if(!cat)return;
  const prods=PRODUCTS.filter(p=>p.categoryId===cat.id);
  const feat=prods.slice(0,3),rest=prods.slice(3);
  const hdr=document.createElement('div');hdr.className='mh';
  hdr.innerHTML='<h2 class="mtitle">'+cat.icon+' '+cat.name+'</h2><p class="msub">Fresh, made to order.</p>';
  c.appendChild(hdr);
  if(feat.length>0){
    const fs=document.createElement('div');
    const fscroll=document.createElement('div');fscroll.className='feat-scroll';
    feat.forEach(p=>fscroll.appendChild(makeFeatCard(p)));
    fs.appendChild(fscroll);c.appendChild(fs);
  }
  if(rest.length>0){
    const ls=document.createElement('div');
    ls.innerHTML='<div class="sec-hd"><span class="sec-title">More options</span></div>';
    const g=document.createElement('div');g.className='pgrid';
    rest.forEach(p=>g.appendChild(makeListCard(p)));
    ls.appendChild(g);c.appendChild(ls);
  }
  if(prods.length===0)c.innerHTML+='<div class="nores"><div class="nores-ic">'+cat.icon+'</div><p>No items in this category yet.</p></div>';
}

function badgeCls(b){const m={'SIGNATURE':'bs','BESTSELLER':'bb','VEGETARIAN':'bv','HEALTHY':'bh','MUST TRY':'bmt'};return m[b]||'bb';}
function makeFeatCard(p){
  const d=document.createElement('div');d.className='pc-feat';
  const bdg=p.badge?'<span class="cbi '+badgeCls(p.badge)+'">'+p.badge+'</span>':'';
  d.innerHTML='<img src="'+p.image+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.src=\'logo.png\'">'
    +'<div class="cb">'+bdg+'<div class="cname">'+esc(p.name)+'</div><div class="cprice">'+fmt(p.basePrice)+'</div></div>'
    +(p.available?'<button class="cadd" onclick="event.stopPropagation();openProduct(\''+p.id+'\')" aria-label="Add">+</button>':'');
  if(p.available)d.onclick=()=>openProduct(p.id);
  if(!p.available){const o=document.createElement('div');o.className='unav';o.innerHTML='<span class="unav-tag">Unavailable</span>';d.appendChild(o);}
  return d;
}
function makeListCard(p){
  const d=document.createElement('div');d.className='pc-list';
  const bdg=p.badge?'<span class="lbadge '+badgeCls(p.badge)+'">'+p.badge+'</span>':'';
  d.innerHTML='<img src="'+p.image+'" alt="'+esc(p.name)+'" loading="lazy" onerror="this.src=\'logo.png\'">'
    +'<div class="li">'+bdg+'<div class="lname">'+esc(p.name)+'</div>'
    +'<div class="ldesc">'+esc(p.description||'')+'</div>'
    +'<div class="lfoot"><span class="lprice">'+fmt(p.basePrice)+'</span>'
    +(p.available?'<button class="ladd" onclick="event.stopPropagation();openProduct(\''+p.id+'\')" aria-label="Add">+</button>':'<span class="unav-tag">Unavailable</span>')
    +'</div></div>';
  if(p.available)d.onclick=()=>openProduct(p.id);
  return d;
}

// ══ PRODUCT SHEET ══
function openProduct(pid,editIdx){
  const p=PRODUCTS.find(x=>x.id===pid);if(!p)return;
  const isEdit=editIdx!==undefined&&editIdx>=0;
  const existing=isEdit?ST.cart[editIdx]:null;
  ST.sheet.product=p;ST.sheet.qty=existing?existing.qty:1;
  ST.sheet.note=existing?existing.note:'';ST.sheet.isEdit=isEdit;
  if(isEdit)ST.editingIndex=editIdx;
  const sels={};
  p.customizations.forEach(g=>{
    if(existing&&existing.selections[g.id]!==undefined)sels[g.id]=existing.selections[g.id];
    else{const defs=g.options.filter(o=>o.default).map(o=>o.id);sels[g.id]=g.multiSelect?defs:(defs[0]||null);}
  });
  ST.sheet.selections=sels;
  renderSheet(p);
  document.getElementById('prod-overlay').classList.add('open');
  document.getElementById('prod-sheet').classList.add('open');
  document.body.style.overflow='hidden';
}
function closeSheet(){
  document.getElementById('prod-overlay').classList.remove('open');
  document.getElementById('prod-sheet').classList.remove('open');
  document.body.style.overflow='';ST.editingIndex=-1;
}
function renderSheet(p){
  const c=document.getElementById('sheet-content');
  const bdg=p.badge?'<div class="ps-tag">'+p.badge+'</div>':'';
  const ing=p.ingredients?'<div class="ing-chips">'+p.ingredients.map(i=>'<span class="ing-chip">'+esc(i)+'</span>').join('')+'</div>':'';
  let custs='';
  p.customizations.forEach(g=>{
    const meta=g.required?'<span class="cgm creq">Required</span>':'<span class="cgm coptl">Optional</span>';
    let opts='';
    g.options.forEach(o=>{
      const sel=g.multiSelect?(ST.sheet.selections[g.id]||[]).includes(o.id):ST.sheet.selections[g.id]===o.id;
      const ck=sel?'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':'';
      const shape='co-ck'+(g.multiSelect?' co-sq':'');
      const pr=o.priceAdd!==0?'<span class="co-pr">'+(o.priceAdd>0?'+':'')+fmt(o.priceAdd)+'</span>':'';
      opts+='<div class="co'+(sel?' sel':'')+'" onclick="toggleOpt(\''+g.id+'\',\''+o.id+'\','+g.multiSelect+')">'
        +'<div class="co-l"><div class="'+shape+'">'+ck+'</div><span class="co-lb">'+esc(o.label)+'</span></div>'+pr+'</div>';
    });
    custs+='<div class="cg" id="cg-'+g.id+'"><div class="cgh"><span class="cgn">'+esc(g.name)+'</span>'+meta+'</div><div class="copts" id="copts-'+g.id+'">'+opts+'</div></div>';
  });
  const lbl=ST.sheet.isEdit?'Update order':'Add to order';
  c.innerHTML='<img class="ps-img" src="'+p.image+'" alt="'+esc(p.name)+'" onerror="this.src=\'logo.png\'">'
    +'<div class="ps-body">'+bdg+'<h2 class="ps-name">'+esc(p.name)+'</h2>'
    +'<div class="ps-price" id="sh-price">'+fmt(p.basePrice)+'</div>'
    +'<p class="ps-desc">'+esc(p.description||'')+'</p>'+ing+'</div>'
    +'<div class="custs">'+custs+'</div>'
    +'<div class="kns"><div class="knl">A note for the kitchen<span class="kno">Optional</span></div>'
    +'<textarea class="kni" id="kni" placeholder="Anything we should know?" oninput="ST.sheet.note=this.value">'+esc(ST.sheet.note)+'</textarea></div>'
    +'<div class="sh-foot"><div class="qc">'
    +'<button class="qb" onclick="chgQty(-1)">&#8722;</button>'
    +'<span class="qn" id="sh-qty">'+ST.sheet.qty+'</span>'
    +'<button class="qb" onclick="chgQty(1)">&#43;</button></div>'
    +'<button class="btn-ac" onclick="addToCart()">'+lbl+' &mdash; <span id="sh-tot">'+fmt(calcSheetTotal())+'</span></button></div>';
}
function toggleOpt(gid,oid,isMulti){
  const sel=ST.sheet.selections;
  if(isMulti){if(!Array.isArray(sel[gid]))sel[gid]=[];const i=sel[gid].indexOf(oid);if(i>=0)sel[gid].splice(i,1);else sel[gid].push(oid);}
  else sel[gid]=oid;
  const g=ST.sheet.product.customizations.find(x=>x.id===gid);if(!g)return;
  const ct=document.getElementById('copts-'+gid);if(!ct)return;
  ct.querySelectorAll('.co').forEach(el=>{
    const oid2=el.getAttribute('onclick').match(/'([^']+)'\s*,\s*'([^']+)'/)?.[2]||'';
    const s=isMulti?sel[gid].includes(oid2):sel[gid]===oid2;
    el.classList.toggle('sel',s);
    const ck=el.querySelector('.co-ck');
    if(ck)ck.innerHTML=s?'<svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"><polyline points="20 6 9 17 4 12"/></svg>':'';
  });
  updSheetPrice();
}
function chgQty(d){
  ST.sheet.qty=Math.max(1,Math.min(20,ST.sheet.qty+d));
  const el=document.getElementById('sh-qty');if(el)el.textContent=ST.sheet.qty;
  updSheetPrice();
}
function calcSheetTotal(){
  const p=ST.sheet.product;if(!p)return 0;
  let ex=0;
  p.customizations.forEach(g=>{
    const s=ST.sheet.selections[g.id];
    if(g.multiSelect&&Array.isArray(s))s.forEach(oid=>{const o=g.options.find(x=>x.id===oid);if(o)ex+=o.priceAdd;});
    else if(!g.multiSelect&&s){const o=g.options.find(x=>x.id===s);if(o)ex+=o.priceAdd;}
  });
  return(p.basePrice+ex)*ST.sheet.qty;
}
function updSheetPrice(){
  const t=calcSheetTotal();
  const el=document.getElementById('sh-tot');if(el)el.textContent=fmt(t);
  const p=ST.sheet.product;if(!p)return;
  let ex=0;
  p.customizations.forEach(g=>{
    const s=ST.sheet.selections[g.id];
    if(g.multiSelect&&Array.isArray(s))s.forEach(oid=>{const o=g.options.find(x=>x.id===oid);if(o)ex+=o.priceAdd;});
    else if(!g.multiSelect&&s){const o=g.options.find(x=>x.id===s);if(o)ex+=o.priceAdd;}
  });
  const pe=document.getElementById('sh-price');if(pe)pe.textContent=fmt(p.basePrice+ex);
}

// ══ CART ══
function addToCart(){
  const p=ST.sheet.product;if(!p)return;
  for(const g of p.customizations){
    if(g.required){const s=ST.sheet.selections[g.id];
      if(g.multiSelect){if(!Array.isArray(s)||s.length<g.min){toast('Please select '+g.name.toLowerCase());return;}}
      else{if(!s){toast('Please select '+g.name.toLowerCase());return;}}
    }
  }
  const item={productId:p.id,name:p.name,image:p.image,basePrice:p.basePrice,
    selections:JSON.parse(JSON.stringify(ST.sheet.selections)),qty:ST.sheet.qty,
    note:ST.sheet.note,total:calcSheetTotal()};
  if(ST.sheet.isEdit&&ST.editingIndex>=0){ST.cart[ST.editingIndex]=item;toast('Item updated!');}
  else{ST.cart.push(item);toast(p.name+' added!');}
  saveCart();updateCartUI();closeSheet();
  const b=document.getElementById('cart-badge');
  if(b){b.classList.remove('bounce');void b.offsetWidth;b.classList.add('bounce');}
}
function removeFromCart(i){ST.cart.splice(i,1);saveCart();updateCartUI();renderCart();toast('Item removed');}
function updItemQty(i,d){
  const item=ST.cart[i];if(!item)return;
  const p=PRODUCTS.find(x=>x.id===item.productId);if(!p)return;
  item.qty=Math.max(1,Math.min(20,item.qty+d));
  let ex=0;
  p.customizations.forEach(g=>{const s=item.selections[g.id];
    if(g.multiSelect&&Array.isArray(s))s.forEach(oid=>{const o=g.options.find(x=>x.id===oid);if(o)ex+=o.priceAdd;});
    else if(!g.multiSelect&&s){const o=g.options.find(x=>x.id===s);if(o)ex+=o.priceAdd;}
  });
  item.total=(p.basePrice+ex)*item.qty;
  saveCart();updateCartUI();renderCart();
}
function getTotals(){
  const sub=ST.cart.reduce((s,i)=>s+i.total,0);
  const svc=Math.round(sub*CFG.serviceCharge);
  return{sub,svc,total:sub+svc};
}
function updateCartUI(){
  const cnt=ST.cart.reduce((s,i)=>s+i.qty,0);
  const{total}=getTotals();
  const b=document.getElementById('cart-badge');
  if(b){if(cnt>0){b.style.display='flex';b.textContent=cnt;}else b.style.display='none';}
  updateCartBar();
}
function updateCartBar(){
  const cnt=ST.cart.reduce((s,i)=>s+i.qty,0);
  const{total}=getTotals();
  const bar=document.getElementById('cart-bar');
  if(bar){
    if(cnt>0&&ST.currentView==='menu'){
      bar.classList.remove('hidden');
      document.getElementById('cbar-cnt').textContent=cnt+(cnt===1?' item':' items');
      document.getElementById('cbar-tot').textContent=fmt(total);
    }else bar.classList.add('hidden');
  }
}

// ══ RENDER CART ══
function renderCart(){
  const body=document.getElementById('cart-body');
  const posec=document.getElementById('po-sec');
  if(ST.cart.length===0){
    body.innerHTML='<div class="cart-empty"><div class="ce-ic">&#128722;</div><p class="ce-tx">Your order is empty</p><p class="ce-sb">Add something delicious from the menu</p><button class="btn-primary" style="max-width:200px;margin-top:20px" onclick="showMenu()">Browse menu</button></div>';
    posec.style.display='none';return;
  }
  let html='<div class="cart-items">';
  ST.cart.forEach((item,i)=>{
    const p=PRODUCTS.find(x=>x.id===item.productId);
    let mods=[];
    if(p)p.customizations.forEach(g=>{const s=item.selections[g.id];
      if(g.multiSelect&&Array.isArray(s)&&s.length>0)s.forEach(oid=>{const o=g.options.find(x=>x.id===oid);if(o)mods.push(o.label);});
      else if(!g.multiSelect&&s){const o=g.options.find(x=>x.id===s);if(o)mods.push(o.label);}
    });
    const modsText=mods.join(', ');
    const noteHtml=item.note?'<div class="ci-nt">&ldquo;'+esc(item.note)+'&rdquo;</div>':'';
    html+='<div class="ci"><img src="'+item.image+'" alt="'+esc(item.name)+'" onerror="this.src=\'logo.png\'">'
      +'<div class="ci-inf"><div class="ci-nm">'+esc(item.name)+'</div>'
      +(modsText?'<div class="ci-md">'+esc(modsText)+'</div>':'')
      +noteHtml
      +'<div class="ci-ft"><span class="ci-pr">'+fmt(item.total)+'</span>'
      +'<div class="ci-ac"><div class="ci-qc">'
      +'<button class="ci-qb" onclick="updItemQty('+i+',-1)">&#8722;</button>'
      +'<span class="ci-qn">'+item.qty+'</span>'
      +'<button class="ci-qb" onclick="updItemQty('+i+',1)">&#43;</button></div>'
      +'<button class="ci-ed" onclick="openProduct(\''+item.productId+'\','+i+')" title="Edit">'
      +'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/><path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/></svg></button>'
      +'<button class="ci-dl" onclick="removeFromCart('+i+')" title="Remove">'
      +'<svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="3 6 5 6 21 6"/><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2"/></svg></button>'
      +'</div></div></div></div>';
  });
  html+='</div>';
  const{sub,svc,total}=getTotals();
  html+='<div class="ord-sum"><div class="os-title">Order summary</div>'
    +'<div class="sr lbl"><span>Subtotal</span><span>'+fmt(sub)+'</span></div>'
    +'<div class="sr lbl"><span>Service charge (10%)</span><span>'+fmt(svc)+'</span></div>'
    +'<div class="sr tot"><span>Total</span><span class="sv">'+fmt(total)+'</span></div></div>';
  body.innerHTML=html;
  posec.style.display='block';
  document.getElementById('po-total').textContent=fmt(total);
}

// ══ PLACE ORDER ══
function placeOrder(){
  if(ST.cart.length===0){toast('Your cart is empty');return;}
  ST.cart=[];saveCart();updateCartUI();
  document.getElementById('cart-bar').classList.add('hidden');
  showView('menu');renderMenu();
  ST.activeCategory='burgers';
  document.querySelectorAll('.cpill').forEach(p=>p.classList.remove('active'));
  const p=document.getElementById('pill-burgers');if(p)p.classList.add('active');
  setTimeout(()=>toast('Order placed! Ready in '+CFG.estimatedTime+' ✓',3500),300);
}

// ══ STORAGE ══
function saveCart(){try{localStorage.setItem('alemaya_cart',JSON.stringify(ST.cart));}catch(e){}}
function restoreCart(){try{const s=localStorage.getItem('alemaya_cart');if(s)ST.cart=JSON.parse(s);}catch(e){}}

// ══ HELPERS ══
function fmt(n){return CFG.currencySymbol+' '+Math.abs(n).toLocaleString('en-ET',{minimumFractionDigits:0,maximumFractionDigits:0});}
function esc(s){if(!s)return'';return s.replace(/&/g,'&amp;').replace(/</g,'&lt;').replace(/>/g,'&gt;').replace(/"/g,'&quot;');}
function toast(msg,dur){
  const t=document.getElementById('toast');t.textContent=msg;t.classList.add('show');
  setTimeout(()=>t.classList.remove('show'),dur||2500);
}
