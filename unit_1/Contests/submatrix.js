var out = "";
var arr =[      [ 1, 2, 3],
                [ 5, 6, 7],
                [ 7, 8, 9]
        ]; 

var sRow = 0,sCol = 0;
var eRow = 1,eCol = 1;

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        if(i>=sRow && i<=eRow)
            if(j>=sCol && j<=eCol)
                out += arr[i][j] + " ";
    }
    out += "\n";
}
console.log(out);