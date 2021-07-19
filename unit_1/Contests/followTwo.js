function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    for(var i = 0; i < len;i++){
        if(i==len-1 && arr[i] == 2)
            console.log("-1");
        else if(arr[i] == 2){
            console.log(arr[i+1]);
        }
    }
}

runProgram(`5
3 4 0 1 2`);