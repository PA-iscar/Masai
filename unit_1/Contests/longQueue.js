function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    count = 1;
    for(var i = 0; i < len; i++){
        if(arr[i+1]<arr[i]){
            count++;
        }
    }
    console.log(count);
}

runProgram(`6
1 2 4 3 5 8`);