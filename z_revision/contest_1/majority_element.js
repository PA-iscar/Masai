const mooresVotingAlgorithm = (arr, n) => {
  let j = 0;
  let count = 1;
  for (let i = 1; i < n; i++) {
    if (arr[j] === arr[i]) {
      count++;
    } else {
      count--;
    }
    if (count === 0) {
      j = i;
      count = 1;
    }
  }
  return arr[j];
};

const check = (val, arr, n) => {
  let count = 0;
  for (let i = 0; i < n; i++) {
    if (val === arr[i]) {
      count++;
    }
  }
  return count > n / 2;
};

function runProgram(input) {
  input = input.split("\n");
  let t = Number(input[0]);
  let ind = 1;
  while (t--) {
    let n = Number(input[ind++]);
    let arr = input[ind++].split(" ").map(Number);

    let ans = mooresVotingAlgorithm(arr, n);
    if (check(ans, arr, n)) {
      console.log(ans);
    } else {
      console.log(-1);
    }
  }
}

runProgram(`2
6
1 1 1 1 2 3
5
1 1 2 2 3`);
