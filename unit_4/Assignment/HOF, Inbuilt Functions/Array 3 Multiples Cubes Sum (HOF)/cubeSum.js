let arr = [3, 5, 6, 9, 12, 11, 100, 1234];

let isDiv = a => a%3 == 0;
let cubeSum = (res,a) => res + Math.pow(a,3);

let sum = arr.filter(isDiv).reduce(cubeSum,0);

console.log(sum)