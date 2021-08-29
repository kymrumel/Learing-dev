function math(a, b, c, d) {
     this.a = a;
     this.b = b;
     this.c = c;
     this.d = d;
     this.total = function () {
          return this.a + this.b + this.c * this.d;
     };
}
let sum = new math(5, 6, 11, 20);
console.log(sum.total());

let mathA = new math(10, 11, 12, 20);
console.log(mathA.total());

function person(fname, lname, age, weapons, breed) {
     this.firstname = fname;
     this.lastname = lname;
     this.age = age;
     this.weapons = weapons;
     this.pet = breed;
     this.intro = function () {
          return this.firstname + this.lastname + this.pet + this.weapons;
     };
}
let introduction = new person(
     "John ",
     "Wick ",
     40,
     "Heckler & Koch PL30(Custom Fitted)",
     "Pitbull"
);
console.log(introduction.intro());
