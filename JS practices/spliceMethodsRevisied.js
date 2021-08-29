let cars = ["BMW", "Volvo", "Ford", "Mustang", "Mclaren"];
let back;
console.log(cars.toString());

back = cars.splice(1, 1);
console.log(cars, back);

back = cars.splice(0, 1, "Nissan", "Ferrari", "Rolls Royace");
console.log(cars, back);

back = cars.splice(3);
console.log(cars, back);
