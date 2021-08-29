function Person(fname, lname, age, weapons) {
     this.firstname = fname;
     this.lastname = lname;
     this.age = age;
     this.weapons = weapons;
}

Person.prototype.height = 186;

let introduction = new Person();

console.log(introduction.height);
