function recu(str,s){
    if(str.length == 0){
        console.log(s);
        return;
    }
    // console.log(s);
    recu(str.substr(1),s+str[0]);
    recu(str.substr(1),s);
}

function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);
    var str = input[1];
    var s = "";
    recu(str,s);
}


runProgram(`4
abcd`);