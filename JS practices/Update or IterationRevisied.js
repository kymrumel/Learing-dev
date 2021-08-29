let products = [
     { id: 2, title: "Cup", sizes: ["XS"], price: 20, color: "blue" },
     { id: 3, title: "T-Shirt", sizes: ["S"], price: 40, color: "green" },
     { id: 4, title: "Pant", sizes: ["XXL"], price: 400 },
     { id: 5, title: "Football", sizes: ["S"], price: 120, color: "blue" },
     { id: 6, title: "Chair", sizes: ["XXL"], price: 10 },
     { id: 7, title: "Sofa", price: 50 },
     { id: 8, title: "Couch", price: 200 },
];
let forPrices = products.forEach((m) => m.price);

let FilterPrice = products
     .filter((m) => m.price < 200)
     .map((m) => m.id + " " + m.title + " " + m.price);

console.log(FilterPrice.toString());

let colorProducts = products
     .filter((m) => m.color === "blue")
     .map((m) => m.title + " " + m.color + " " + m.price);
console.log(colorProducts.toString());

let pandcProducts = products
     .filter((m) => m.color === "blue")
     .map((m) => "This " + m.color + " is  " + m.title + " " + m.price + "$ ");
console.log(pandcProducts.toString());
