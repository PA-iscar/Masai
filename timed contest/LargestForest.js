let max = 0;
let counter = 0;

function startSearch(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length; j++) {
      if (isTree(arr, i, j)) {
        findLen(arr, i, j);
        max = counter > max ? counter : max;
        counter = 0;
      }
    }
  }
}

function findLen(arr, i, j) {
  if (isTree(arr, i, j)) {
    counter++;
    arr[i][j] = "W";
    findLen(arr, i - 1, j);
    findLen(arr, i, j + 1);
    findLen(arr, i + 1, j);
    findLen(arr, i, j - 1);
  }

  return;
}

const isTree = (arr, i, j) => {
  if (
    i >= 0 &&
    j >= 0 &&
    i < arr.length &&
    j < arr.length &&
    arr[i][j] === "T"
  ) {
    return true;
  }
  return false;
};

function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = new Array(n);
  for (let i = 0; i < n; i++) {
    arr[i] = input[i + 1].split("");
  }
  startSearch(arr);
  console.log(max);
}

runProgram(`5
TTTWW
TWWTT
TWWTT
TWTTT
WWTTT`);
