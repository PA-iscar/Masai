var dp = [];

function recu(n){
    if(n<0){
        return 0
    }
    if(dp[n]){
        return dp[n];
    }
    if(n==1 || n==0){
        return 1
    }
    let val1 = recu(n-1);
    let val2 = recu(n-3);
    let val3 = recu(n-4);
    dp[n-1] = val1;
    dp[n-3] = val2;
    dp[n-4] = val3;
    return val1 + val2 + val3;
}

function runProgram(input){
    let n = Number(input);
    console.log(recu(n))
}

runProgram(`5`);