function pow(a,b){
    if(b==0){
        return 1;
    }
    if(b==1){
        return a;
    }
    else{
        return a*pow(a,b-1);
    }
}

function runProgram(input){
    var input = input.split(" ").map(Number);
    var a = input[0];
    var b = input[1];
    console.log(pow(a,b));
}

runProgram(`2 0`);