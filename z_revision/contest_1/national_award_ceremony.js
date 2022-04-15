function runProgram(input) {
  input = input.split("\n");
  let t = Number(input[0]);
  let ind = 1;
  while (t--) {
    let n = Number(input[ind++]);
    let arr = input[ind++].split(" ").map(Number);
    // if (n === 1) {
    //   console.log(arr[0]);
    // }
    let obj = {};
    for (let i = 0; i < n; i++) {
      obj[arr[i]] ? obj[arr[i]]++ : (obj[arr[i]] = 1);
    }

    let res = "";
    if (obj[0]) {
      for (let i = 0; i < obj[0]; i++) {
        res += "0 ";
      }
    //   console.log(obj[0]);
    }
    if (obj[1]) {
      for (let i = 0; i < obj[1]; i++) {
        res += "1 ";
      }
    //   console.log(obj[1]);
    }
    if (obj[2]) {
      for (let i = 0; i < obj[2]; i++) {
        res += "2 ";
      }
    //   console.log(obj[2]);
    }
    console.log(res)
  }
}


runProgram(`3
1
2
3
2 0 1
4
2 0 2 1`);
