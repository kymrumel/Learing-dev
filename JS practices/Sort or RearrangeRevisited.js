let products = [
     "Football",
     "Tennis Ball",
     "Cricket Ball",
     "Pool",
     "Boots",
     "Cards",
     "Ace",
     "Zed",
     "Shurikane",
     "Fence",
];
products.sort();
console.log(products.toString());
products.reverse();
console.log(products.toString());

let points = [1, 5, 20, 30, 45, 100, 50, 10, 23];
let pointsSort = points.sort(function (a, b) {
     return a - b;
});
console.log(pointsSort.toString());

let pointsSortRev = points.sort(function (a, b) {
     return b - a;
});
console.log(pointsSortRev.toString());
