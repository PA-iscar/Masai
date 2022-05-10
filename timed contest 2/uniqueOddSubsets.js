let ans = "False"
const subSet = (arr, res, k) => {
  if (arr.length === 0) {
    let s = res.trim().split(" ").map(Number);
    let sum = 0;
    let tom = {};
    for (let i = 0; i < s.length; i++) {
      sum += s[i];
      if (tom[s[i]]) {
        tom[s[i]]++;
      } else {
        tom[s[i]] = 1;
      }
    }
    if (sum % 2 !== 0 && tom.length === k) {
        ans = "True"
      return
    }
    return
  }
  subSet(arr.slice(1),res)
  subSet(arr.slice(1),res+" "+arr[0])
};

function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  let k = Number(input[0]);
  subSet(arr, "", k)
  console.log(ans)
}

runProgram(`3 
2 2 2
2`);
