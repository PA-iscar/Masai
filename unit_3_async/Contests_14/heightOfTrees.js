let dp = [];

function hot(arr,n){
    if(n==0){
        dp[0] = 1;
        return;
    }
    hot(arr,n-1);

    for(let i=n-1;i>=0;i--){
        if(arr[i] < arr[n]){
            if((dp[i]+1) > dp[n]){
                dp[n] = dp[i]+1;
            }
        }
    }
    return;
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    dp = new Array(n);
    dp.fill(1);

    hot(arr,n-1);
    console.log(dp.sort((a,b) => a - b )[n-1])
}

runProgram(`9
10 22 9 33 21 50 41 60 80`);