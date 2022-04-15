function bSearchFirst(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let res = -1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) {
      res = mid;
      r = mid - 1;
    } else if (x > arr[mid]) l = mid + 1;
    else r = mid - 1;
  }
  return res;
}

function bSearchLast(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let res = -1;
  let mid;
  while (l <= r) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) {
      res = mid;
      l = mid + 1;
    } else if (x > arr[mid]) l = mid + 1;
    else r = mid - 1;
  }
  return res;
}

function runProgram(input) {
  input = input.split("\n");
  let n = Number(input[0]);
  let arr = input[1].split(" ").map(Number);
  let key = Number(input[2]);

  let first = bSearchFirst(arr, key, 0, n - 1);
  let last = bSearchLast(arr, key, 0, n - 1);
  let frequency = first === -1 && last === -1 ? 0 : last - first + 1;

  console.log(first, last, frequency);
}

runProgram(`6
1 1 1 2 2 2
1`);
