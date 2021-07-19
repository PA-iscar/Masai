function runProgram(input){
    var n = Number(input);
    var sum = 0;
    if(n%2!=0){
        n--;
    }
    for(var i=0; i<=n; i++){
        sum += i;
        i++;
    }
    console.log(sum);
}

runProgram(2);