function bSearch(arr, x) {
  let l = 0;
  let r = arr.length - 1;
  let mid;
  while (r >= l) {
    mid = l + Math.floor((r - l) / 2);
    if (arr[mid] == x) return 1;
    if (arr[mid] > x) r = mid - 1;
    else l = mid + 1;
  }
  return -1;
}

function runProgram(input) {
  input = input.split("\n");
  let dim = input[0].split(" ").map(Number);
  let n = dim[0];
  let key = dim[1];
  let arr = input[1].split(" ").map(Number);
  arr = arr.sort((a, b) => a - b);

  console.log(bSearch(arr, key, 0, n - 1));
}

runProgram(`5 0
  2 -2 0 3 4`);
