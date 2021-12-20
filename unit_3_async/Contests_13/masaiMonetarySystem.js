let dp = [];

function money(n) {
    // if (dp[n] || dp[n] == 0) {
    //     return dp[n];
    // }
    if (n <= 0) {
        dp[0] = 0;
        return 0;
    }
    if (n == 1) {
        dp[n] = 1;
        return 1;
    }
    if (dp[n] != -1) {
        return dp[n];
    }
    // if (n == 1) {
    //     dp[1] = 1;
    //     return 1;
    // }

    let val = money(parseInt(n / 2)) + money(parseInt(n / 3)) + money(parseInt(n / 4));
    dp[n] = (val > dp[n] ? val : dp[n]);
    return dp[n]
}

function runProgram(input) {
    let arr = input.split("\n").map(Number);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        dp = new Array(n);
        dp.fill(-1);
        console.log(money(arr[i]))
        // console.log(dp)
    }
}

runProgram(`12
1
2
3
4
100
1000000000
12342135
1234213
5673457`);