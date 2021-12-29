let dp = 0;

function recu(arr,n){
    if(n==0){
        return arr[0];
    }
    let sum = recu(arr,n-1);
    if(sum>dp){
        dp = sum;
    }
    return dp;
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        recu(arr,n)
    }
}

runProgram(`3
2
1 100
3
2 100 99
4
100 1 1 100`);