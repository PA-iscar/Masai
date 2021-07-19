function runProgram(input){
    var esum = 0;
    var osum = 0;
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    for(var i=0; i<len; i++){
        if(arr[i]%2 == 0){
            esum+= arr[i];
        }
        else
            osum+= arr[i];
    }
    if(esum<osum)
        console.log("Odd");
    else
        console.log("Even");
}

runProgram(`4
5 2 3 4`);