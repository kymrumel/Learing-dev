class car {
     constructor(name, year) {
          this.name = name;
          this.year = year;
     }
     info() {
          return this.name + " " + this.year;
     }
     makeYear() {}
}
let mycar = new car("Ford Mustang Boss 429", 1969);

console.log(mycar.info());
