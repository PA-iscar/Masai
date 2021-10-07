function profit(n){
    if(n<0){
        return 0;
    }
    if(n==0){
        return 1;
    }
    return profit(n-1)+profit(n-3)+profit(n-5);
}

function runProgram(input){
    var n = Number(input);
        console.log(profit(n));
}

runProgram(`7`);