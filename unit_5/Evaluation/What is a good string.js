let defaulter = {};
let delCount = 0;

const isGood = (str, n) => {
  if (n == 0) {
    return true;
  }
  if (n % 2 == 0) {
    for (let i = 0; i < n; i += 2) {
      if (str[i] == str[i + 1]) {
        defaulter = {
          letter: str[i],
          index: i,
        };
        return false;
      }
    }
    return true;
  }
  return false;
};

const makeGood = (str, n, defaulter) => {
  if (n === 1) {
    delCount++;
    return "";
  }
  if (str[1] != str[2]) {
    str = str.split("");
    str.splice(defaulter.index || 0, 1);
    str = str.join("");
  }
  else{
    str = str.split("")
    str.splice(defaulter.index || 1, 1);
    str = str.join("");
  }
  delCount++;
  return str;
};

function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let str = input[1];

  defaulter = {};
  delCount = 0;

  while (n != 0) {
    let isIt = isGood(str, n);
    if (!isIt) {
      str = makeGood(str, n, defaulter);
      n = str.length;
    }
    if (isIt) {
      break;
    }
  }
  console.log(delCount);
  console.log(str);
}


runProgram(`4
good`);

runProgram(`6
string`);

runProgram(`4
xyyz`);

runProgram(`3
bad`);

runProgram(`2
aa`);

runProgram(`4
aabc`);
