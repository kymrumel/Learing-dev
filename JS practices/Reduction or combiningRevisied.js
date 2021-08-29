// let numbers = [20, 40, 400, 120, 10, 50, 200];

let NumberReduce = {
     points: [20, 30, 50],
     subtotal: 0,
};
NumberReduce.subtotal = NumberReduce.points.reduce(
     (total, points) => total + points
);
console.log(NumberReduce);
