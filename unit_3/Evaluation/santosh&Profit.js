function profit(n){
    if(n<0){
        return 0;
    }
    if(n==0){
        return 1;
    }
    return profit(n-4)+profit(n-8);
}

function runProgram(input){
    var input = input.split("\n").map(Number);
    var t = input[0];
    var index = 1;

    while(t--){
        var n = input[index++];
        console.log(profit(n));
    }
}


runProgram(`1
12`);