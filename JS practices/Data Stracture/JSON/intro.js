let jsonObject = {
     workers: [
          { firstname: "John", lastname: "Wick", age: 40 },
          { firstname: "Randy", lastname: "Orton", age: 45 },
          { firstname: "John", lastname: "Snow", age: 35 },
     ],
};

let data = JSON.stringify(jsonObject);
console.log(data);

let d = JSON.parse(data);
console.log(d);
