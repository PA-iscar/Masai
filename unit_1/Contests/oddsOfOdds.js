function isOdd(len,arr) {
    var count = 0;
    for(var i=0;i<len;i++){
        if(arr[i]%2 != 0){
            count++;
        }
    }
    if(count%2 != 0){
        return true;
    }
    else{
        return false;
    }
}
function runProgram(input){
    var input = input.split("\n");
    var length = Number(input[0]);
    var index = 1;
    for(var i=0; i<length; i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var result = isOdd(len,arr);
        if(result){
            console.log("Yes");
        }
        else
            console.log("No");
    }
}

runProgram(`3
1
1
2
1 101
2
1 200`);