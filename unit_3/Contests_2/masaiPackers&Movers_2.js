var rrr = [];
var count = 0;

function now(arr, n, k) {
    if (k < 0) {
        count--;
        return 0
    }
    if (k == 0) {
        rrr.push(count);
        count--;
        return 1
    }
    var res = 0;
    for (var i = 0; i < n; i++) {
        count++;
        let val = now(arr, n, k - arr[i]);
        res = res + val;
    }
    count--;
    return res;
}

function runProgram(input) {
    input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var k = dim[0];
    var n = dim[1];
    var arr = input[1].split(" ").map(Number);
    // console.log(now(arr, n, k));
    now(arr,n,k);
    let min = rrr[0];
    let max = rrr[0];

    for(let i=0;i<rrr.length;i++){
        if(rrr[i] < min){
            min = rrr[i];
        }
        if(rrr[i] > max){
            max = rrr[i];
        }
    }
    if(rrr.length == 0){
        console.log(-1)
    }
    else
        console.log(min,max)
}

runProgram(`39 3
8 10 2`);