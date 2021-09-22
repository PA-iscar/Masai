// Sandhya is climbing a stair case. It can take 1 step, 2 steps or 3 steps at a time.
// Find the number of ways she can climb the stairs.

function ways(arr,n){
    if(n<0){
        return 0;
    }

    if(n==0){
        return 1;
    }
    if(n==2){
        return 2;
    }
    if(n==4){
        return 5;
    }

    return ways(arr.slice(1),n-1)+ways(arr.slice(2),n-3)+ways(arr.slice(3),n-5);
}

function runProgram(input){
    var n = input;
    var count = 0;
    var arr = [];
    for(var i=0;i<=n;i++){
        arr[i] = 0;
    }
    arr[0] = 1;

    arr[2] = 2;

    arr[4] = 5;
    for(var i=5;i<=n;i++){
        arr[i] = arr[i-1] + arr[i-3] + arr[i-5];
    }
    console.log(arr[n]);

    // console.log(ways(arr,n));
}

runProgram(`7`);