function runProgram(input){
    var arr = input.split("\n");
    var dim = arr[0].split(" ").map(Number);
    var m1RowDim = dim[0];
    var m1ColDim = dim[1];
    var m2RowDim = dim[2];
    var m2ColDim = dim[3];
    if(m1RowDim == m2RowDim && m1ColDim == m2ColDim){
        {    var rowD = m1RowDim;
            var colD = m1ColDim;
            var m1 = arr.slice(1, rowD+1);
            var m2 = arr.slice(rowD+1, rowD+1+rowD);
            var mat1 = [];
            var mat2 = [];
            for(var i = 0; i < rowD; i++){
                var row1 = m1[i].split(" ").map(Number);
                mat1.push(row1);
            }
            for(var i = 0; i < rowD; i++){
                var row2 = m2[i].split(" ").map(Number);
                mat2.push(row2);
            }
        }
        var sol = "";
        for(var i = 0; i < rowD; i++){
            var row = [];
            for(var j = 0; j < colD;j++){
                var ele = mat1[i][j] + mat2[i][j];
                sol += ele + " ";
            }
            sol += "\n";
        }
        console.log(sol);
    }
    else
        console.log("-1");
}


runProgram(`2 2 2 2
1 2
3 4
2 3
4 5`);