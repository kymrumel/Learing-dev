let person = {
     fname: "John",
     lname: "Wick",
     age: 40,
     Weapon: "Heckler & Koch PL30(Custom Fitted)",
};
person.car = "Ford Mustang Boss 429";
for (let a in person) {
     console.log(person[a]);
}

console.log(Object.getOwnPropertyNames(person));
