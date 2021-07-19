function transpose(matrix) {
    var mat = [];
    var out = "";
    var rows = matrix.split("\n");
    var len = rows.length;
    var row = rows[0].split(" ");
    var bre = row.length;
    
    for(var i = 0; i < len; i++) {
        row = rows[i].split(" ");
        mat.push(row);
    }
    for(var i = 0; i < bre; i++) {
        for(var j = 0; j < len; j++) {
            out += mat[j][i] + " ";
        }
        out += "\n";
    }
    console.log(out);
}

transpose(`1 2 3
4 5 6`);