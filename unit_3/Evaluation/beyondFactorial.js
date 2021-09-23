function fact(n){
    if(n==1){
        return 0;
    }
    return Math.log(n)+fact(n-1);
}

function runProgram(input){
    var n = Number(input);
    console.log(fact(n).toFixed(4));
}


runProgram(`3`);