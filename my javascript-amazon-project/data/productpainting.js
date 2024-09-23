
export function getProduct(productId) {
  let matchingProduct;

  products.forEach((product) => {
    if (product.id === productId) {
      matchingProduct = product;
    }
  });
  console.log(matchingProduct)
  return matchingProduct;
}


class Product {
  id;
  image;
  name;
  rating;
  priceCents;

  constructor(productDetails) {
    this.id = productDetails.id;
    this.image = productDetails.image;
    this.name = productDetails.name;
    this.rating = productDetails.rating;
    this.priceCents = productDetails.priceCents;
  }

  getStarsUrl() {
    return `./my javascript-amazon-project/images/ratings/rating-${this.rating.stars}.png`;
  }

  getPrice() {
    return `₹${(this.priceCents)}`;
  }

}

export const products = [
  { id: "15b6fc6f-327a-4ec4-896f-486349e85a3d",
    image:"./my javascript-amazon-project/images/products/Paintings/a1.webp",
    name: "Rousrie Canvas Board for Acrylic, Gouache, Watercolour,Ink Painting Board, Art Supplies for Artist (100% Cotton Canvas)(12 PC (4x4Inches))",
    rating : {
        stars:45,
        count:'6,264'
      },
    priceCents:322
    },{
    id: "aad29d11-ea98-41ee-9285-b916638cac4a",
    image:"./my javascript-amazon-project/images/products/Paintings/a2.jpg",
    name: "Grandink® Premium Artist Wooden Easel Stand 5 FEET with Angle and Height Adjustment for Canvas Painting Display 5 ft [154 cm]",
    rating:{
        stars:40,
        count:'1,436'
      },
    priceCents:1392
    
    },{ 
    id: "82bb68d7-ebc9-476a-989c-c78a40ee5cd9",  
    image : "./my javascript-amazon-project/images/products/Paintings/a3.webp",
    name: "ARTIOS Paint Brush Set of 15 - Handmade Professional Artist Painting Brush Set for Acrylic, Watercolor, & Gouache Painting with Brush Holder - Cruelty-Free (15 Assorted Brushes)(Wood)",
    rating:{
      stars:40,
      count:'1,531'
    },
    priceCents: 895
    },{
    id: "6b07d4e7-f540-454e-8a1e-363f25dbae7d",
    image : "./my javascript-amazon-project/images/products/Paintings/a4.webp",
    name: "ARTIFY 12 PCS Watercolor Brushes Set, Synthetic Paint Brushes for Watercolor Painting, Acrylic, Gouache & Oil Painting - Detail Paint Brushes, Round, Flat, Cat's Tongue,Liner for Beginners & Kids",
    rating:{
      stars:40,
      count:'1,140'
    },
    priceCents:639
    },{
    id: "1c079479-8586-494f-ab53-219325432536",
    image : "./my javascript-amazon-project/images/products/Paintings/a5.webp",
    name: "ARTIOS Painting Kit for Artists - 105pcs Painting Set for Adults and Kids with Professional Paint Brush Set, Mixed Media Cartridge Papers, Watercolor Papers, Canvas Boards,Easel & Wooden Palette",
    rating:{
      stars:40,
      count:'1,437'
    },
    priceCents:2695
  },{
    id: "a45cfa0a-66d6-4dc7-9475-e2b01595f7d7",
    image : "./my javascript-amazon-project/images/products/Paintings/a6.webp",
    name: "Qatalitic Set of 5 Palette Painting Knives of Various Sizes & Shapes, Stainless Steel Scraper Spatula Polished Brown Handle for Artist Canvas Oil Paint Color Mixing",
    rating:{
      stars:45,
      count:'4,237'
    },
    priceCents:251
  },{
    id: "36c64692-677f-4f58-b5ec-0dc2cf109e27",
    image : "./my javascript-amazon-project/images/products/Paintings/a7.webp",
    name: "Crafts 4 ALL Acrylic Paint Set For Kids And Adults - 24 Pack Of 12Ml Craft Paint Colors For Wood, Canvas, Fabric And Ceramics W/ 3 Different Sized Brushes - Art Supplies, Multi",
    rating:{
      stars:50,
      count:'28,992'
    },
    priceCents:550
  },{
    id: "77a845b1-16ed-4eac-bdf9-5b591882113d",
    image : "./my javascript-amazon-project/images/products/Paintings/a8.webp",
    name: "GRANOTONE Acrylic Artist's Varnish Non Yellowing Non Toxic (100 ML HIGH Gloss)",
    rating:{
      stars:45,
      count:'2,294'
    },
    priceCents:198
  },{
    id: "b86ddc8b-3501-4b17-9889-a3bad6fb585f",
    image : "./my javascript-amazon-project/images/products/Paintings/a9.webp",
    name: "Pidilite Combo kit of Acrylic Colours, Glass Colours 3D Outliners and Fine Art Canvas with Brushes, Gift set for Students, Children, Artists",
    rating:{
      stars:45,
      count:'3,592'
    },
    priceCents:655
  },{
    id: "a434b69f-1bc1-482d-9ce7-cd7f4a66ce8d",
    image : "./my javascript-amazon-project/images/products/Paintings/a10.webp",
    name: " ARTIOS Fine Detailing Brush for Painting ,Long Liner Rigger Brush Set of 4 pcs for Artists with Brush Holder for Acrylic, Oil, Watercolor & Gouache - Handmade Cruelty-Free Paint Brush Set(Wood)",
    rating:{
      stars: '40',
      count:'1,531'
    },
    priceCents:359
  },{
    id: "4e37dd03-3b23-4bc6-9ff8-44e112a92c64",
    image : "./my javascript-amazon-project/images/products/Paintings/a11.webp",
    name: "ArtRight Artists' Round Paint Brush Set of 7 with Seamless Synthetic Bristles & Free Brush Holder - Professional Artist Handmade Round Paintbrush Set for Watercolor Painting",
    rating:{
      stars: '15',
      count:'481'
    },
    priceCents:499
  },{
    id: "04701903-bc79-49c6-bc11-1af7e3651358",
    image : "./my javascript-amazon-project/images/products/Paintings/a12.webp",
    name: "KritArt Design Synthetic Hair Artist Painting Brush Set, for Water Poster Acrylic Gouache and Oil Colour [Set of 8 Mix Brushes with Super White Color Mixing Palette]",
    rating:{
      stars: '10',
      count:'242'
    },
    priceCents:349
  },{
    id: "a93a101d-79ef-4cf3-a6cf-6dbe532a1b4a",
    image : "./my javascript-amazon-project/images/products/Paintings/a13.webp",
    name: "Amazon Brand - Solimo Paint Brushes for Oil and Acrylic, with Carry Case, 13 Piece Set",
    rating:{
      stars: '35',
      count:'1,150'
    },
    priceCents:1299
  },{
    id: "901eb2ca-386d-432e-82f0-6fb1ee7bf969",
    image : "./my javascript-amazon-project/images/products/Paintings/a14.webp",
    name: "Kabeer Art 15 Pcs Paint Brush Set Includes Pop-up Carrying Case with 1 Sponge for Acrylic, Watercolor and Gouache Painting",
    rating:{
      stars: '40',
      count:'1,808'
    },
    priceCents:899
  },{
    id: "c2a82c5e-aff4-435f-9975-517cfaba2ece",
    image : "./my javascript-amazon-project/images/products/Paintings/a15.webp",
    name: "Craft Qila Party Time (50 Sheets, 100 Pages) A5 Sketchbook | Top Spiral-Bound Sketchpad for Artists | Professional Grade Drawing and Sketchbook Acrylic, Ink, Paper",
    rating:{
      stars: '40',
      count:'1,392'
    },
    priceCents:149
  },{
    id: "3fdfe8d6-9a15-4979-b459-585b0d0545b9",
    image : "./my javascript-amazon-project/images/products/Paintings/a16.webp",
    name: "Worison Roy Fine Art Primed Cotton Pre Stretched Canvas with Wooden Frame White, 4 x 6 Inch (Pack of 6)",
    rating:{
      stars: '15',
      count:'107'
    },
    priceCents:349
  },{
    id: "5968897c-4d27-4872-89f6-5bcb052746d7",
    image : "./my javascript-amazon-project/images/products/Paintings/a17.webp",
    name: "Fevicryl DIY Art of India Mandala Art | Acrylic Paints 6 Shades| Set of 2 Round Brushes | 3 Pre-Designed MDF Board | For Artists, Students, Children | Best Gift for Children above 10 years | Painting Kit with Workshop Included",
    rating:{
      stars: '20',
      count:'713'
    },
    priceCents:426
  },{
    id: "77919bbe-0e56-475b-adde-4f24dfed3a04",
    image : "./my javascript-amazon-project/images/products/Paintings/a18.webp",
    name: "Fevicryl Mould It, 900 g, Clay Set for Modelling and Sculpting, Air Dry Clay for Art and Craft, Gift for Artists, Students, Children",
    rating:{
      stars: '45',
      count:'14,152'
    },
    priceCents:272
  },{
    id: "dd82ca78-a18b-4e2a-9250-31e67412f98d",
    image : "./my javascript-amazon-project/images/products/Paintings/a19.webp",
    name: "ARTIOS Wooden Painting Palette - 37x20cm Handmade Paint Palette with Thumb Hole for Acrylic, Oil, Watercolor, Gouache Painting - for Professional Artists, Art Enthusiasts & Kids",
    rating:{
      stars: '25',
      count:'298'
    },
    priceCents:367
  },{
    id: "8c9c52b5-5a19-4bcb-a5d1-158a74287c53",
    image : "./my javascript-amazon-project/images/products/Paintings/a20.webp",
    name: "Flash Water Colours for Painting-Painting Kit for Kids Artists Professionals Hobby Painters-Matt Finish Rich Pigments Non Toxic Watercolor Set-25 ml Each (Set of 25)",
    rating:{
      stars: '35',
      count:'665'
    },
    priceCents:531
  },{
    id: "3ebe75dc-64d2-4137-8860-1f5a963e534b",
    image : "./my javascript-amazon-project/images/products/Paintings/a21.webp",
    name: "Kamal Artist Painting Brush Kit - Essential Full Toolkit Paint Brushes Set - Paint Brushes Roller and Knife for Acrylic Paints, Oil, Modern Art Painting etc (Set of 10)",
    rating:{
      stars: '25',
      count:'454'
    },
    priceCents:463
  },{
    id: "54e0eccd-8f36-462b-b68a-8182611d9add",
    image : "./my javascript-amazon-project/images/products/Paintings/a22.jpg",
    name: "Amazon Brand - Solimo Sketchbooks, Spiral-Bound, Mini Size, Professional-Grade Sheets, Compatible with a Range of Art Material (A5, Set of 2)",
    rating:{
      stars: '35',
      count:'627'
    },
    priceCents:199
  },{
    id: "83d4ca15-0f35-48f5-b7a3-1ea210004f2e",
    image : "./my javascript-amazon-project/images/products/Paintings/a23.jpg",
    name: "Camel Artists Fixative Spray,200Ml,Transparent",
    rating:{
      stars: '40',
      count:'6,750'
    },
    priceCents:343
  },{
    id: "e43638ce-6aa0-4b85-b27f-e1d07eb678c6",
    image : "./my javascript-amazon-project/images/products/Paintings/a24.jpg",
    name: "BRUSTRO Artists Acrylic Glued Paper Pad 400 GSM, A4-12 Sheets",
    rating:{
      stars: '35',
      count:'343'
    },
    priceCents:359
  }
  /*{
    
    image: "./images/products/25.webp",
    name: "Black and Gray Athletic Cotton Socks - 6 Pairs",
    rating: {
      stars: 45,
      count: 87
    },
    priceCents: 1090,
    keywords: [
      "socks",
      "sports",
      "apparel"
    ]
  },
  {
    
    image: "./images/products/26.jpg",
    name: "Intermediate Size Basketball",
    rating: {
      stars: 4,
      count: 127
    },
    priceCents: 2095,
    keywords: [
      "sports",
      "basketballs"
    ]
  },
  {
    
    image: "./images/products/27.jpg",
    name: "Adults Plain Cotton T-Shirt - 2 Pack",
    rating: {
      stars: 45,
      count: 56
    },
    priceCents: 799,
    keywords: [
      "tshirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    
    image: "./images/products/27.jpg",
    name: "2 Slot Toaster - Black",
    rating: {
      stars: 5,
      count: 2197
    },
    priceCents: 1899,
    keywords: [
      "toaster",
      "kitchen",
      "appliances"
    ]
  },
  {
    
    image: "./images/products/28.jpg",
    name: "6 Piece White Dinner Plate Set",
    rating: {
      stars: 4,
      count: 37
    },
    priceCents: 2067,
    keywords: [
      "plates",
      "kitchen",
      "dining"
    ]
  },
  {
    
    image: "./images/products/29.jpg",
    name: "6-Piece Nonstick, Carbon Steel Oven Bakeware Baking Set",
    rating: {
      stars: 45,
      count: 175
    },
    priceCents: 3499,
    keywords: [
      "kitchen",
      "cookware"
    ]
  },
  {
    
    image: "./images/products/30.jpg",
    name: "Plain Hooded Fleece Sweatshirt",
    rating: {
      stars: 45,
      count: 317
    },
    priceCents: 2400,
    keywords: [
      "hoodies",
      "sweaters",
      "apparel"
    ]
  },
  {
   
    image: "./images/products/31.jpg",
    name: "Luxury Towel Set - Graphite Gray",
    rating: {
      stars: 45,
      count: 144
    },
    priceCents: 3599,
    keywords: [
      "bathroom",
      "washroom",
      "restroom",
      "towels",
      "bath towels"
    ]
  },
  {
    
    image: "./images/products/31.jpg",
    name: "Liquid Laundry Detergent, 110 Loads, 82.5 Fl Oz",
    rating: {
      stars: 45,
      count: 305
    },
    priceCents: 2899,
    keywords: [
      "bathroom",
      "cleaning"
    ]
  },
  {
    id: "58b4fc92-e98c-42aa-8c55-b6b79996769a",
    image: "./images/products/32.jpg",
    name: "Waterproof Knit Athletic Sneakers - Gray",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear"
    ]
  },
  {
    
    image: "./images/products/33.jpg",
    name: "Women's Chiffon Beachwear Cover Up - Black",
    rating: {
      stars: 45,
      count: 235
    },
    priceCents: 2070,
    keywords: [
      "robe",
      "swimsuit",
      "swimming",
      "bathing",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    
    image: "./images/products/34.jpg",
    name: "Round Sunglasses",
    rating: {
      stars: 45,
      count: 30
    },
    priceCents: 1560,
    keywords: [
      "accessories",
      "shades"
    ]
  },
  {
    
    image: "./images/products/35.jpg",
    name: "Women's Two Strap Buckle Sandals - Tan",
    rating: {
      stars: 45,
      count: 562
    },
    priceCents: 2499,
    keywords: [
      "footwear",
      "sandals",
      "womens",
      "beach",
      "summer"
    ]
  },
  {
    
    image: "./images/products/36.jpg",
    name: "Blackout Curtains Set 4-Pack - Beige",
    rating: {
      stars: 45,
      count: 232
    },
    priceCents: 4599,
    keywords: [
      "bedroom",
      "curtains",
      "home"
    ]
  },
  {
    
    image: "i./images/products/37.jpg",
    name: "Men's Slim-Fit Summer Shorts",
    rating: {
      stars: 4,
      count: 160
    },
    priceCents: 1699,
    keywords: [
      "shorts",
      "apparel",
      "mens"
    ]
  },
  {
    
    image: "38",
    name: "Electric Glass and Steel Hot Tea Water Kettle - 1.7-Liter",
    rating: {
      stars: 5,
      count: 846
    },
    priceCents: 3074,
    keywords: [
      "water boiler",
      "appliances",
      "kitchen"
    ]
  },
  {
    
    image: "39",
    name: "Ultra Soft Tissue 2-Ply - 18 Box",
    rating: {
      stars: 4,
      count: 99
    },
    priceCents: 2374,
    keywords: [
      "kleenex",
      "tissues",
      "kitchen",
      "tissues box",
      "napkins"
    ]
  },
  {
    id: "a82c6bac-3067-4e68-a5ba-d827ac0be010",
    image: "./images/products/40.jpg",
    name: "Straw Lifeguard Sun Hat",
    rating: {
      stars: 4,
      count: 215
    },
    priceCents: 2200,
    keywords: [
      "hats",
      "straw hats",
      "summer",
      "apparel"
    ]
  },
  {
    id: "e4f64a65-1377-42bc-89a5-e572d19252e2",
    image: "./images/products/41.jpg",
    name: "Sterling Silver Sky Flower Stud Earrings",
    rating: {
      stars: 45,
      count: 52
    },
    priceCents: 1799,
    keywords: [
      "jewelry",
      "accessories",
      "womens"
    ]
  },
  {
    id: "b0f17cc5-8b40-4ca5-9142-b61fe3d98c85",
    image: "./images/products/42.jpg",
    name: "Women's Stretch Popover Hoodie",
    rating: {
      stars: 45,
      count: 2465
    },
    priceCents: 1374,
    keywords: [
      "hooded",
      "hoodies",
      "sweaters",
      "womens",
      "apparel"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    
    image: "images/products/bathroom-rug.jpg",
    name: "Bathroom Bath Rug Mat 20 x 31 Inch - Grey",
    rating: {
      stars: 45,
      count: 119
    },
    priceCents: 1250,
    keywords: [
      "bathmat",
      "bathroom",
      "home"
    ]
  },
  {
    id: "4f4fbcc2-4e72-45cc-935c-9e13d79cc57f",
    image: "images/products/women-knit-ballet-flat-black.jpg",
    name: "Women's Knit Ballet Flat",
    rating: {
      stars: 4,
      count: 326
    },
    priceCents: 2640,
    keywords: [
      "shoes",
      "flats",
      "womens",
      "footwear"
    ]
  },
  {
    id: "8b5a2ee1-6055-422a-a666-b34ba28b76d4",
    image: "images/products/men-golf-polo-t-shirt-blue.jpg",
    name: "Men's Regular-Fit Quick-Dry Golf Polo Shirt",
    rating: {
      stars: 45,
      count: 2556
    },
    priceCents: 1599,
    keywords: [
      "tshirts",
      "shirts",
      "apparel",
      "mens"
    ],
    type: "clothing",
    sizeChartLink: "images/clothing-size-chart.png"
  },
  {
    
    image: "images/products/trash-can-with-foot-pedal-50-liter.jpg",
    name: "Trash Can with Foot Pedal - Brushed Stainless Steel",
    rating: {
      stars: 45,
      count: 2286
    },
    priceCents: 8300,
    keywords: [
      "garbage",
      "bins",
      "cans",
      "kitchen"
    ]
  },
  {
    id: "19c6a64a-5463-4d45-9af8-e41140a4100c",
    image: "images/products/duvet-cover-set-blue-twin.jpg",
    name: "Duvet Cover Set with Zipper Closure",
    rating: {
      stars: 4,
      count: 456
    },
    priceCents: 2399,
    keywords: [
      "bedroom",
      "bed sheets",
      "sheets",
      "covers",
      "home"
    ]
  },
  {
    id: "d2785924-743d-49b3-8f03-ec258e640503",
    image: "images/products/women-chunky-beanie-gray.webp",
    name: "Women's Chunky Cable Beanie - Gray",
    rating: {
      stars: 5,
      count: 83
    },
    priceCents: 1250,
    keywords: [
      "hats",
      "winter hats",
      "beanies",
      "tuques",
      "apparel",
      "womens"
    ]
  },
  {
    id: "ee1f7c56-f977-40a4-9642-12ba5072e2b0",
    image: "images/products/men-chino-pants-beige.jpg",
    name: "Men's Classic-fit Pleated Chino Pants",
    rating: {
      stars: 45,
      count: 9017
    },
    priceCents: 2290,
    keywords: [
      "pants",
      "apparel",
      "mens"
    ]
  },
  {
    
    image: "images/products/men-athletic-shoes-green.jpg",
    name: "Men's Athletic Sneaker",
    rating: {
      stars: 4,
      count: 229
    },
    priceCents: 3890,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "mens"
    ]
  },
  {
    id: "4df68c27-fd59-4a6a-bbd1-e754ddb6d53c",
    image: "images/products/men-navigator-sunglasses-brown.jpg",
    name: "Men's Navigator Sunglasses Pilot",
    rating: {
      stars: 35,
      count: 42
    },
    priceCents: 1690,
    keywords: [
      "sunglasses",
      "glasses",
      "accessories",
      "shades"
    ]
  },
  {
    
    image: "images/products/non-stick-cooking-set-15-pieces.webp",
    name: "Non-Stick Cookware Set, Pots, Pans and Utensils - 15 Pieces",
    rating: {
      stars: 4.5,
      count: 511
    },
    priceCents: 6797,
    keywords: [
      "cooking set",
      "kitchen"
    ]
  },
  {
    
    image: "images/products/vanity-mirror-silver.jpg",
    name: "Vanity Mirror with Heavy Base - Chrome",
    rating: {
      stars: 4.5,
      count: 130
    },
    priceCents: 1649,
    keywords: [
      "bathroom",
      "washroom",
      "mirrors",
      "home"
    ]
  },
  {
    
    image: "images/products/women-french-terry-fleece-jogger-camo.jpg",
    name: "Women's Fleece Jogger Sweatpant",
    rating: {
      stars: 4.5,
      count: 248
    },
    priceCents: 2400,
    keywords: [
      "pants",
      "sweatpants",
      "jogging",
      "apparel",
      "womens"
    ]
  },
  {
    id: "d339adf3-e004-4c20-a120-40e8874c66cb",
    image: "images/products/double-elongated-twist-french-wire-earrings.webp",
    name: "Double Oval Twist French Wire Earrings - Gold",
    rating: {
      stars: 4.5,
      count: 117
    },
    priceCents: 2400,
    keywords: [
      "accessories",
      "womens"
    ]
  },
  {
    id: "d37a651a-d501-483b-aae6-a9659b0757a0",
    image: "images/products/round-airtight-food-storage-containers.jpg",
    name: "Round Airtight Food Storage Containers - 5 Piece",
    rating: {
      stars: 4,
      count: 126
    },
    priceCents: 2899,
    keywords: [
      "boxes",
      "food containers",
      "kitchen"
    ]
  },
  {
    id: "0d7f9afa-2efe-4fd9-b0fd-ba5663e0a524",
    image: "images/products/coffeemaker-with-glass-carafe-black.jpg",
    name: "Coffeemaker with Glass Carafe and Reusable Filter - 25 Oz, Black",
    rating: {
      stars: 4.5,
      count: 1211
    },
    priceCents: 2250,
    keywords: [
      "coffeemakers",
      "kitchen",
      "appliances"
    ]
  },
  {
    id: "02e3a47e-dd68-467e-9f71-8bf6f723fdae",
    image: "images/products/blackout-curtains-black.jpg",
    name: "Blackout Curtains Set 42 x 84-Inch - Black, 2 Panels",
    rating: {
      stars: 4.5,
      count: 363
    },
    priceCents: 3099,
    keywords: [
      "bedroom",
      "home"
    ]
  },
  {
    id: "8a53b080-6d40-4a65-ab26-b24ecf700bce",
    image: "images/products/cotton-bath-towels-teal.webp",
    name: "100% Cotton Bath Towels - 2 Pack, Light Teal",
    rating: {
      stars: 4.5,
      count: 93
    },
    priceCents: 2110,
    keywords: [
      "bathroom",
      "home",
      "towels"
    ]
  },
  {
    id: "10ed8504-57db-433c-b0a3-fc71a35c88a1",
    image: "images/products/knit-athletic-sneakers-pink.webp",
    name: "Waterproof Knit Athletic Sneakers - Pink",
    rating: {
      stars: 4,
      count: 89
    },
    priceCents: 3390,
    keywords: [
      "shoes",
      "running shoes",
      "footwear",
      "womens"
    ]
  },
  {
    
    image: "images/products/countertop-blender-64-oz.jpg",
    name: "Countertop Blender - 64oz, 1400 Watts",
    rating: {
      stars: 4,
      count: 3
    },
    priceCents: 10747,
    keywords: [
      "food blenders",
      "kitchen",
      "appliances"
    ]
  },
  {
   
    image: "images/products/floral-mixing-bowl-set.jpg",
    name: "10-Piece Mixing Bowl Set with Lids - Floral",
    rating: {
      stars: 5,
      count: 679
    },
    priceCents: 3899,
    keywords: [
      "mixing bowls",
      "baking",
      "cookware",
      "kitchen"
    ]
  },
  {
    id: "aaa65ef3-8d6f-4eb3-bc9b-a6ea49047d8f",
    image: "images/products/kitchen-paper-towels-30-pack.jpg",
    name: "2-Ply Kitchen Paper Towels - 30 Pack",
    rating: {
      stars: 4.5,
      count: 1045
    },
    priceCents: 5799,
    keywords: [
      "kitchen",
      "kitchen towels",
      "tissues"
    ]
  },
  {
    id: "bc2847e9-5323-403f-b7cf-57fde044a955",
    image: "images/products/men-cozy-fleece-zip-up-hoodie-red.jpg",
    name: "Men's Full-Zip Hooded Fleece Sweatshirt",
    rating: {
      stars: 4.5,
      count: 3157
    },
    priceCents: 2400,
    keywords: [
      "sweaters",
      "hoodies",
      "apparel",
      "mens"
   ]}
*/
].map((productDetails) => {
  return new Product(productDetails);
});

