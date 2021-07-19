function test(arr,len) {
    var out = "";
    var rs = len;
    var cs = 0;
    var re = 0;
    var ce = 0;
    for(var i = 0; i < len; i++) {
        rs--;
        out += arr[rs][cs] + " ";
        
    }
    for(var i = 0; i <len-1;i++) {
        cs++;
        out += arr[rs][cs] + " ";
    }
    for(var i = 0;i<len-1;i++) {
        rs++;
        out += arr[rs][cs] + " ";
    }
    for(var i = 0; i <len-2;i++){
        cs--;
        out += arr[rs][cs] + " ";
    }
    console.log(out);
}

function runProgram(input){
    debugger;

    var input = input.split("\n");
    var T = Number(input[0]);
    var index = 1;
    for(var i = 0;i<T;i++){
        var len = Number(input[index++]);
        var arr = [];
        for(var j = 0;j<len;j++){
            var row = input[index++].split(" ").map(Number);
            arr.push(row);
        }
        test(arr,len);
    }
}

runProgram(`2
3
1 2 3
4 5 6
7 8 9
4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16`);