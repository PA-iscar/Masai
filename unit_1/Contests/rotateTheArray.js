function rotate(arr,len,key) {
    for(var i=0;i<key;i++){
        var last = arr.pop();
        arr.unshift(last);
    }
    arr = arr.join(" ");
    console.log(arr);
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index =1;
    for(var i=0;i<t;i++){
        var ins = input[index++].split(" ").map(Number);
        var len = ins[0];
        var key = ins[1];
        var arr = input[index++].split(" ").map(Number);

        rotate(arr,len,key);
    }
}

runProgram(`3
3 1
1 2 3
2 2
1 2
2 3
1 2`);