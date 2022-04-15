function isRotated(arr, n) {
  let minEle = Number.MAX_VALUE;

  let minIndex = -1;

  for (let i = 0; i < n; i++) {
    if (arr[i] < minEle) {
      minEle = arr[i];
      minIndex = i;
    }
  }

  let flag1 = true;

  for (let i = 1; i < minIndex; i++) {
    if (arr[i] < arr[i - 1]) {
      flag1 = false;
      break;
    }
  }

  let flag2 = true;

  for (let i = minIndex + 1; i < n; i++) {
    if (arr[i] < arr[i - 1]) {
      flag2 = false;
      break;
    }
  }

  if (flag1 && flag2 && arr[n - 1] < arr[0]) return "YES";
  else return "NO";
}

function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  console.log(isRotated(arr, n));
}

runProgram(`6
3 4 7 9 1 2`);
