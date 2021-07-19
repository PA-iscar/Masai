function matrix(matrix){
    var mat = [];
    var rows = matrix.split("\n");
    var len = rows.length;
    var row = [];
    for(var i = 0; i < len; i++){
        row = rows[i].split(" ").map(Number);
        mat.push(row);
    }
    var dg1Sum = 0;
    var dg2Sum = 0;
    for(var i = 0; i < len; i++){
        for(var j = 0; j < len; j++){
            if(i==j){
                dg1Sum += mat[i][j];
            }
            if(i+j==(len-1)){
                dg2Sum += mat[i][j];
            }
        }
    }
    console.log(dg1Sum-dg2Sum);
}

matrix(`1 2 3
4 5 6
0 8 9`)