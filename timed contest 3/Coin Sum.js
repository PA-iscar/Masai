const subArr = (arr, n) => {
    let out = []
  for (let i = 0; i < n; i++) {
    for (let j = 0; j < n; j++) {
        let sum = 0;
      for (let k = i; k <= j; k++) {
        sum += (arr[k])
      }
      if(i<=j)
      out.push(sum)
    }
  }
  console.log(out.length)
  console.log(out.sort((a,b) => a-b).join(" "))
};

function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);

  subArr(arr, n);
}

runProgram(`3
3 5 2`);
