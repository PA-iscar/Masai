function test (len,arr){
    var min = arr[0];
    var out = "";
    for(var i = 0; i<len;i++){
        if(min>arr[i]){
            min = arr[i];
        }
    }
    for(var i = 0; i<len;i++){
        if(arr[i]%min == 0){
            arr[i] = -1;
        }
    }
    var out = arr.join(" ");
    return out;
}

function runProgram(input){
    var input = input.split("\n");
    var T = Number(input[0]);
    var index = 1;
    for(var i = 0;i<T;i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var result = test(len,arr);
        console.log(result);
    }
}

runProgram(`2
3
1 3 2
5
3 3 2 9 7`);