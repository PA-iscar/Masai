function runProgram(input){
    var N = Number(input);
    var sum = 2;
    var isprime = true;
    debugger;
    for(var i = 3; i <= N;i++){
        for(var j = 2; j <i;j++){
            if(i%j==0){
                isprime = false;
                break;
            }
            else{
                isprime = true;
            }
        }
        if(isprime){
            sum += i;
        }
    }
    console.log(sum);
}

runProgram(13);