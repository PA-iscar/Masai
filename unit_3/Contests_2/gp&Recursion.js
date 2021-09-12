function check(n,r){
    if(n==0){
        return 1;
    }
    return 1/r**n + check(n-1,r);
}

function runProgram(input){
    var input = input.split(" ").map(Number);
    var n = input[0];
    var r = input[1];
    var s = check(n,r);
    console.log(s.toFixed(4));
}


runProgram(`3 5`);