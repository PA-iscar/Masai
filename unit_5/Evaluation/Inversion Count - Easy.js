function runProgram(input) {
  input = input.split("\n");
  let t = Number(input[0]);
  let ind = 1;
  let res = [];
  while (t--) {
    let n = Number(input[ind++]);
    let arr = input[ind++].split(" ").map(Number);

    let stack = [];
    stack.push(arr[n - 1]);
    res.push(0);

    for (let i = n - 2; i >= 0; i--) {
		
      while (stack.length > 0) {
        if (arr[i] > stack[stack.length-1]) {
          res.push(stack.length);
          stack.push(arr[i]);
          break;
        } else {
          stack.pop();
        }
        if (stack.length == 0) {
          res.push(0);
          stack.push(arr[i]);
          break;
        }
      }
    }
	console.log(res.reverse().join(" "))
  }
}

runProgram(`1
4
5 2 6 1`);
