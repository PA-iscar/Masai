let filter = 'a';
let arr = ["area", "arial", "Sorting", "filter", "ariana"];

let stEnd = a => a.match(`^${filter}`) && a.match(`${filter}$`)
console.log(arr.filter(stEnd));