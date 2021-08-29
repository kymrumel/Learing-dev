let numbers = {
     x: 5,
     y: 10,

     sum: function () {
          return this.x * this.y;
     },
};

console.log(numbers.sum());
console.log(this);
