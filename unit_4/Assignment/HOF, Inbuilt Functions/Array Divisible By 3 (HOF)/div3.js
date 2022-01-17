let arr = [3, 5, 6, 9, 12, 11, 100, 1234];

let isDiv = a => a%3 == 0;

let div3 = arr.filter(isDiv);

console.log(div3)