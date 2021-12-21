var dp = []
var count1 = 0;
var count2 = 0;
var count3 = 0;


function noc(n){
    if(n<0){
        return 0;
    }
    if(n==0){
        return 1;
    }
    count1++;
    let v1 = noc(n-1)
    count1--;
    count2++;
    let v2 = noc(n-5)
    count2--
    count3++
    let v3 = noc(n-7)
    count3--
    let val = v1+v2+v3
    dp[n] = val
    return val;
}

function runProgram(input){
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let p = dim[1];
    let arr = input[1].split(" ").map(Number);
    
    console.log(noc(p))
}

runProgram(`3 11
1 5 7`);