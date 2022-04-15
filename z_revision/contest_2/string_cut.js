function runProgram(input) {
  let str = input.split("");
  let n = str.length;
  let mid = n / 2;
  if (n % 2 === 0) {
    console.log(
      str.slice(0, mid).reverse().concat(str.slice(mid, n).reverse()).join("")
    );
  } else {
    console.log(
      str
        .slice(0, mid)
        .reverse()
        .concat(str[Math.floor(mid)], str.slice(mid + 1, n).reverse()).join("")
    );
  }
}

runProgram(`abcxyz`);
runProgram(`abcdxyz`);
