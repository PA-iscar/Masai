function runProgram(input){
    var input = input.split("\n");
    var sum = 0;
    var avg = 0;
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    for(var i = 0; i < len; i++){
        sum += arr[i];
    }
    avg = Math.ceil(sum / len);
    console.log(avg);
}

runProgram(`4
2 5 0 8`);