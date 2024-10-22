const products = [
    // Electronics
    { name: "Wireless Mouse", price: 25.99, category: "Electronics", brand: "Logitech", availability: true },
    { name: "Smartphone", price: 699.99, category: "Electronics", brand: "Samsung", availability: false },
    { name: "LED Monitor", price: 129.99, category: "Electronics", brand: "Dell", availability: true },
    { name: "Bluetooth Speaker", price: 45.99, category: "Electronics", brand: "JBL", availability: true },
    { name: "Laptop", price: 999.99, category: "Electronics", brand: "Apple", availability: false },
    
    // Footwear
    { name: "Running Shoes", price: 59.99, category: "Footwear", brand: "Nike", availability: true },
    { name: "Sneakers", price: 75.99, category: "Footwear", brand: "Adidas", availability: true },
    { name: "Sandals", price: 25.99, category: "Footwear", brand: "Teva", availability: false },
    { name: "Formal Shoes", price: 120.00, category: "Footwear", brand: "Clarks", availability: true },
    { name: "Boots", price: 150.00, category: "Footwear", brand: "Timberland", availability: true },
    
    // Home Appliances
    { name: "Blender", price: 34.99, category: "Home Appliances", brand: "Oster", availability: true },
    { name: "Microwave Oven", price: 99.99, category: "Home Appliances", brand: "Panasonic", availability: false },
    { name: "Air Conditioner", price: 299.99, category: "Home Appliances", brand: "LG", availability: true },
    { name: "Vacuum Cleaner", price: 149.99, category: "Home Appliances", brand: "Dyson", availability: true },
    { name: "Toaster", price: 29.99, category: "Home Appliances", brand: "Breville", availability: false },
    
    // Stationery
    { name: "Notebook", price: 3.99, category: "Stationery", brand: "Moleskine", availability: true },
    { name: "Pen Set", price: 12.99, category: "Stationery", brand: "Parker", availability: false },
    { name: "Highlighters", price: 5.99, category: "Stationery", brand: "Sharpie", availability: true },
    { name: "Stapler", price: 7.99, category: "Stationery", brand: "Swingline", availability: true },
    { name: "Planner", price: 14.99, category: "Stationery", brand: "Erin Condren", availability: false },
    
    // Furniture
    { name: "Desk Chair", price: 89.99, category: "Furniture", brand: "Ikea", availability: true },
    { name: "Coffee Table", price: 129.99, category: "Furniture", brand: "West Elm", availability: false },
    { name: "Sofa", price: 499.99, category: "Furniture", brand: "Ashley Furniture", availability: true },
    { name: "Bookshelf", price: 79.99, category: "Furniture", brand: "Sauder", availability: true },
    { name: "Dining Table", price: 399.99, category: "Furniture", brand: "Pottery Barn", availability: false },
    
    // Fitness
    { name: "Yoga Mat", price: 19.99, category: "Fitness", brand: "Gaiam", availability: true },
    { name: "Dumbbells", price: 49.99, category: "Fitness", brand: "Bowflex", availability: true },
    { name: "Treadmill", price: 699.99, category: "Fitness", brand: "NordicTrack", availability: false },
    { name: "Resistance Bands", price: 14.99, category: "Fitness", brand: "Fit Simplify", availability: true },
    { name: "Exercise Bike", price: 299.99, category: "Fitness", brand: "Peloton", availability: true },
    
    // Kitchen Appliances
    { name: "Coffee Maker", price: 49.99, category: "Kitchen Appliances", brand: "Keurig", availability: true },
    { name: "Air Fryer", price: 89.99, category: "Kitchen Appliances", brand: "Ninja", availability: false },
    { name: "Stand Mixer", price: 199.99, category: "Kitchen Appliances", brand: "KitchenAid", availability: true },
    { name: "Refrigerator", price: 799.99, category: "Kitchen Appliances", brand: "Whirlpool", availability: true },
    { name: "Dishwasher", price: 399.99, category: "Kitchen Appliances", brand: "Bosch", availability: false }
];


let container=document.querySelector(".container");
let box =document.querySelector(".box");
let btns=document.querySelector(".btn");
let array=[];

function rednderProduct(arr){
container.innerHTML=""
    arr.map((item,index)=>{
       container.innerHTML +=`<div class="card"> 
       <h2>${item.category}</h2>
       <h2>${item.brand}</h2>
       <h2>${item.price}</h2>
<button id="button">Add Cart</button>
       </div> 
       `
    })
}

rednderProduct(products);
products.map((item) => {
    
    if (array.indexOf(item.category) === -1) {
        array.push(item.category);
         btns.innerHTML += `<button id="button"  onclick="filteredItem('${item.category}')">${item.category}</button>`
    }
});

function filteredItem(value) {
    const FilProduct = products.filter((item) => {
        return item.category === value;
    });
    box.innerHTML = "Thank you for searching";
    rednderProduct(FilProduct);
}

