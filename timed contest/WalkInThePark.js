function walk(ins, arr, n, m, i, j, jumps) {
    if(isSafe(arr,i,j,n,m)){
        arr[i][j] = 1;
        switch (ins[i][j]) {
            case 'R':
                j++;
                break
            case 'L':
                j--;
                break
            case 'D':
                i++;
                break
            case 'U':
                i--;
                break
        }
        return walk(ins,arr,n,m,i,j,jumps+1)
    }
    return jumps
}

function isSafe(arr,i,j,n,m) {
    if(i>=0 && j>=0 && i<n && j<m && arr[i][j] == 0){
        return true
    }
    return false
}

function runProgram(input) {
  input = input.split("\n");
  let t = Number(input[0]);
  let ind = 1;
  while (t--) {
    let dim = input[ind++].split(" ").map(Number);
    let n = dim[0];
    let m = dim[1];
    let arr = new Array(n);

    let ins = new Array(n);
    for (let i = 0; i < n; i++) {
      let val = input[ind++].split("");
      ins[i] = val;
      arr[i] = new Array(m).fill(0);
    }
    let jumps = walk(ins, arr, n, m, 0, 0, 0);
    console.log(jumps)
  }
}

runProgram(`1
3 4
RRDR
LLUD
LLLL`);
