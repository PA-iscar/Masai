function now(n){
    if(n==1 || n==0){
        return 1
    }
    if(n==2){
        return 2
    }
    if(n==3){
        return 4
    }
    return now(n-1) + now(n-2) + now(n-3);
}

function runProgram(input){
    let n = Number(input);
    console.log(now(n))
}


runProgram(`4`);