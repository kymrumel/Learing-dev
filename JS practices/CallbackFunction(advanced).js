function sum(x, y, callback) {
     let a = x * y;
     callback(a);
}

sum(5, 10, combineTogether);

function combineTogether(a) {
     function multiply(c, b, callback) {
          let z = c * b;
          let result = z * a;
          callback(result);
     }
     multiply(11, 12, (z) => {
          console.log(z);
     });
}

