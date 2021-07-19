function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var arr = [];
    var out = "";
    for(var i = 1; i <= row;i++){
        arr.push(input[i].split(" ").map(Number));
    }
    for(var i=col-1;i>=0;i--){
        for(var j=0;j<row;j++){
            out += (arr[j][i]) + " ";
        }
    }
    console.log(out);
}

runProgram(`4 3
1 8 9
2 7 10
3 6 11
4 5 12`);