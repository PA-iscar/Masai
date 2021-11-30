function fact(n){
    if(n==0 || n==1){
        return 1;
    }
    return n*fact(n-1);
}

function runProgram(input){
    num = Number(input);
    console.log(fact(num));
}


runProgram(`5`);