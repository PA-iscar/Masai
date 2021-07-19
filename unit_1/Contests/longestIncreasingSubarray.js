function check(len, arr){
    debugger;
    var count = 1;
    var checkpoint = 0;
    for(var i=0; i<len; i++){
        if(arr[i+1]>arr[i]){
            count++;
        }
        else{
            if(count>checkpoint)
            checkpoint = count;
            count = 1;
        }

    }
    return checkpoint;
}

function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);
    var index = 1;

    for(var i=0; i<n; i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var order = check(len, arr);
        console.log(order);
    }
}

runProgram(`2
2
1 1
6
1 2 1 2 3 1`);