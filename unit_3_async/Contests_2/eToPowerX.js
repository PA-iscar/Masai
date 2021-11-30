function calcu(x,n){
    if(n==0){
        return 1;
    }
    return (Math.pow(x,n)/fact(n)) + calcu(x,n-1);
}
function fact(n){
    if(n==0){
        return 1;
    }
    return n* fact(n-1);
}

function runProgram(input){
    input = input.split(" ").map(Number);
    let x = input[0];
    let n = input[1];
    let res = calcu(x,n)
    console.log(res.toFixed(4))
}

runProgram(`4 2`);