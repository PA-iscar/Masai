function runProgram(input) {
  input = input.split("\n");
  let t = Number(input[0]);
  let ind = 1;
  while (t--) {
    let n = Number(input[ind++]);
    let arr = input[ind++].split(" ").map(Number);
    let prod = new Array(n);

    let temp = 1;
    for (let i = 0; i < n; i++) {
      prod[i] = temp;
      temp *= arr[i];
    }
    temp = 1;
    for (let i = n - 1; i >= 0; i--) {
      prod[i] *= temp;
      temp *= arr[i];
    }
    console.log(prod.join(" "))
  }
}

runProgram(`2
5
1 2 3 4 5
3
3 2 7`);
