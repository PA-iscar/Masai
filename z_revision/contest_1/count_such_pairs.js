function runProgram(input) {
  input = input.split("\n");
  let dim = input[0].split(" ").map(Number);
  let n = dim[0];
  let target = dim[1];
  let arr = input[1].split(" ").map(Number);
  let count = 0;
  let obj = {};
  for (let i = 0; i < n; i++) {
    if (obj[target - arr[i]]) {
      count += obj[target - arr[i]];
    }

    obj[arr[i]] = obj[arr[i]] ? obj[arr[i]] + 1 : 1;
  }
  console.log(count);
}

runProgram(`5 0
-1 1 -1 1 -1`);
