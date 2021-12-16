let dp = [];
function now(n){
    if(dp[n]){
        return dp[n];
    }
    if(n<0){
        return 0;
    }
    if(n==0 || n==1 || n==2){
        return n;
    }
    if(n==3){
        return 4;
    }
    dp[n-1] = now(n-1);
    dp[n-2] = now(n-2);
    dp[n-3] = now(n-3);
    return dp[n-1] + dp[n-2] + dp[n-3];
}

function runProgram(input){
    let n = Number(input);
    console.log(now(n));  
}


runProgram(`43`);