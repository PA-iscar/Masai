function transpose(row,col,mat) {
    debugger;
    var out = "";
    for(var i = 0; i < col; i++) {
        for(var j = 0; j < row; j++) {
            out += mat[j][i] + " ";
        }
        out += "\n";
    }
    console.log(out);
}

function runProgram(input){
    debugger;
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var index = 1;
    var arr = [];
    for(var i=0;i<row; i++){
            var r = input[index++].split(" ").map(Number);
            arr.push(r);
    }
    transpose(row,col,arr);
}

runProgram(`5 4
0 0 0 0
1 1 1 1
2 2 2 2
3 3 3 3
4 4 4 4`);