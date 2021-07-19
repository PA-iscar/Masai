function sum(arr,len) {
    var sum = 0;
    for(var i=0;i<len;i++){
        sum += arr[i];
    }
    var wsum = 0;
    for(var i=0;i<len;i++){
        wsum += (i*arr[i]);
    }
    console.log(sum+wsum);
}

function runProgram(input){
    input = input.split("\n");
    var T = Number(input[0]);
    var index = 1;
    for(var i = 0; i <T;i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        sum(arr,len);
    }
}

runProgram(`2
5
1 2 3 4 5
2
100 1`);