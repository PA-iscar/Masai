function runProgram(input){
    var input = input.split("\n");
    var so = false;
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    for(var i=0; i<len; i++){
        if(arr[i]==42){
            so = true;
            break;
        }
        else
            so = false;
    }
    if(so){
        console.log("Yes");
    }
    else
        console.log("No");

}

runProgram(`5
3 7 0 9 8`);