let multiply = function () {
     return this.a * this.b * this.c * this.d;
};

let math = {
     a: 12,
     b: 6,
     c: 2,
     d: 5,
     sum: function () {
          return this.a + this.b + this.c + this.d;
     },
     multiply,
};
math.minus = function () {
     return this.a - this.b - this.c - this.d;
};

console.log(math.multiply());
console.log(math.sum());
console.log(math.minus());

let person = {
     fname: "John",
     lname: "Wick",
     age: 40,
     id: 66669,
     fullnameAndAge: function () {
          return this.fname + " " + this.lname + " " + this.age;
     },
};

person.name = function () {
     return (this.fname + " " + this.lname).toUpperCase();
};

console.log(person.fullnameAndAge());

console.log(person.name());
