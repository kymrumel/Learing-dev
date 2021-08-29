let cars = ["BMW", "Ford", "Mustang", "McLaren"];

// cars.pop("BMW");
// console.log(cars);

cars.push("Ferrari", "Toyota");
console.log(cars.join(" / "));

console.log(cars.shift());
console.log(cars);
console.log(cars.unshift("BMW"));
console.log(cars);

cars[0] = "Nissan";
console.log(cars);

cars.splice(0, 1, "Corrola");
console.log(cars);
cars.splice(0, 1);
console.log(cars);

cars.sort();
console.log(cars.toString());
cars.reverse();
console.log(cars.toString());

let numbers = [100, 25, 30, 50, 22, 5, 80, 99, 45, 23, 7, 10];
console.log(numbers);
