function transpose(len,mat) {
    debugger;
    var out = [];
    var arr = [];
    for(var i = 0; i < len; i++) {
        for(var j = 0; j < len; j++) {
            out.push(mat[j][i]);
        }
            arr.push(out);
            out = [];
    }
    rotate(len,arr);
}

function rotate(len,mat) {
    debugger;
    var out = "";
    for(var i = len-1; i >= 0; i--) {
        for(var j = 0; j < len; j++) {
            out += mat[i][j] + " ";
        }
        out += "\n";
    }
    console.log(out);
}

function runProgram(input){
    debugger;
    var input = input.split("\n");
    var len = Number(input[0]);
    var index = 1;
    var arr = [];
    for(var i = 0; i < len; i++){
        var row = input[index++].split(" ").map(Number);
        arr.push(row);
    }
    transpose(len,arr);
}

runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);