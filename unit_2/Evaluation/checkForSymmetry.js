function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var mat = [];
        for(var i=0;i<n;i++){
            var row = input[index++].split("");
            mat[i] = row;
            // console.log(row,mat);
        }
        var rowTest = 1;
        var colTest = 1;
        for(var i=0;i<=n/2;i++){
            for(var j=0;j<n;j++){
                if(mat[i][j]==mat[n-i-1][j]){
                    rowTest = 1;
                }
                else{
                    rowTest = 0;
                    break;
                }
            }
            if(rowTest == 0){
                break;
            }
        }
        for(var i=0;i<n;i++){
            for(var j=0;j<n;j++){
                if(mat[j][i] == mat[j][n-i-1]){
                    colTest = 1;
                }
                else{
                    colTest = 0;
                    break;
                }
            }
            if(colTest == 0){
                break;
            }
        }
        if(rowTest&&colTest)
        {
            console.log("BOTH");
        }
        else if(rowTest){
            console.log("HORIZONTAL");
        }
        else if(colTest){
            console.log("VERTICAL");
        }
        else{
            console.log("NO");
        }
    }
}


runProgram(`3
4
*.*.
.*.*
*.*.
.*.*
3
.*.
*.*
.*.
3
..*
**.
..*`);