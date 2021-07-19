function runProgram(input){
    var N = Number(input);
    var isprime = true;
    for(var i = 2; i < N;i++){
        if(N%i==0){
            isprime = false;
            break;
        }
        else
            isprime = true;
    }
    if(isprime){
        console.log("Yes");
    }
    else
        console.log("No");
}

runProgram(1);