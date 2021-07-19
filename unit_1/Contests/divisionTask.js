function runProgram(input){
    var n = Number(input);
    var x = Math.floor(32/n);
    if(x==0){
        console.log("Too Low");
    }
    else if(n==0){
        console.log("-1");
    }
    else
        console.log(x);
}
runProgram(16);