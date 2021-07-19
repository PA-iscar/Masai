function runProgram(input){
    var sum =0;
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    for(var i = 0; i < len; i+=2){
        sum+=arr[i];
    }
    console.log(sum);
}

runProgram(`7
4 5 5 5 6 6 7`);