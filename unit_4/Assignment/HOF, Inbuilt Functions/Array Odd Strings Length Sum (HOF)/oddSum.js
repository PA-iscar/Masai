let arr = ["masai", "school", "tom", "shaktiman", "desk", "rofl"];
let isOdd = a => a.length%2 != 0;
let findSum = (res,a) => res + a.length;

// arr = arr.filter(isOdd);
let sum = arr.filter(isOdd).reduce(findSum,0);
console.log(sum)