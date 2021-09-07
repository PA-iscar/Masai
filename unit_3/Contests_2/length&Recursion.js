function count(str){
    if(str==""){
        return 0;
    }
    else
        return 1+count(str.substr(1));
}

function runProgram(input){
    var input = input;
    console.log(count(input));
}



runProgram(`masaischool`);