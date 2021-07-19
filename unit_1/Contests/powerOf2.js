function isPower(num) {
    if(num<=0){
        return "False";
    }

    if(num%2==0){
        while(num){
            if(num%2==0){
                num/=2;
            }
            if(num%2==1){
                if(num==1){
                    return "True";
                }
                else
                    return "False";
            }
        }
    }
    else
        return "False";
}

function runProgram(input){
    var input = input.split("\n").map(Number);
    var t = input[0];
    for(var i = 1; i <= t; i++){
        var num = input[i];
        console.log(isPower(num));
    }
}

runProgram(`1
66`);