let arr = [1,3,4,2,14,13,6,7,24,5];

let prod = (res, a) => res*a;

let product = arr.reduce(prod,1);

console.log(product)