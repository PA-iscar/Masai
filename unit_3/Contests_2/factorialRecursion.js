function fact(n){
    if(n==1){
        return 1;
    }
    else
        return n*(fact(n-1));
}

function runProgram(input){
    var n = Number(input);
    console.log(fact(n));
}


runProgram(`5`);