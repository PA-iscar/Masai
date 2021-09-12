// Sandhya is climbing a stair case. It can take 1 step, 2 steps or 3 steps at a time.
// Find the number of ways she can climb the stairs.

function runProgram(input){
    var n = input;
    var count = 0;
    var arr = [];
    for(var i=0;i<=n;i++){
        arr[i] = 0;
    }
    arr[0] = 1;
    arr[1] = 1;
    arr[2] = 2;
    for(var i=3;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-2] + arr[i-3];
    }
    console.log(arr[n]);

}

runProgram(`4`);