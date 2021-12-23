let dp = [];

function coinChange(arr, i, sum, n) {

    if(dp[i][sum] || dp[i][sum] == 0){
        return dp[i][sum];
    }
    
    if (sum < 0 || i == n) {
        return 0;
    }
    if (sum == 0) {
        dp[i][sum] = 1;
        return 1;
    }
    let v1 = coinChange(arr, i, sum - arr[i], n);
    let v2 = coinChange(arr, i + 1, sum, n);

    dp[i][sum-arr[i]] = v1;
    dp[i+1][sum] = v2;

    return v1+v2;
}

function runProgram(input) {
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let m = dim[0];
    let n = dim[1];
    let arr = input[1].split(" ").map(Number);
    dp = new Array();
    for(let i=0;i<=n;i++){
        dp[i] = new Array();
    }
    console.log(coinChange(arr, 0, m, n))
}


runProgram(`10 4
2 5 3 6`);