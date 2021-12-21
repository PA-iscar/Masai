let dp = [];

function money(n) {
    if (dp[n] || dp[n] == 0) {
        return dp[n];
    }
    if (n <= 0) {
        return 0;
    }
    if (n == 1) {
        dp[n] = n;
        return 1;
    }
    let v1 = money(parseInt(n/2));
    let v2 = money(parseInt(n/3));
    let v3 = money(parseInt(n/4));
    let val = v1+v2+v3;
    dp[n] = (val>n?val:n);
    return dp[n]
}

function runProgram(input) {
    let arr = input.split("\n").map(Number);
    let n = arr.length;
    for (let i = 0; i < n; i++) {
        dp = []
        console.log(money(arr[i]))
    }
}

runProgram(`12
317
381
910
4176025
3349949
684407731
861466906
815968858
682390379
548900521`);