function count(str){
    if(str.length == 0){
        return 0
    }
    return 1+count(str.slice(1))
}

function runProgram(input){
    console.log(count(input))   
}


runProgram(`masaischool`);