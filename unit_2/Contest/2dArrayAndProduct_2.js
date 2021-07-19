function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var key = dim[2];
    var mat = [];

    for(var i=1; i<=row;i++){
        mat.push(input[i].split(" ").map(Number));
    }
    debugger;
 
    var count = 0;
    for(var i=0;i<row;i++){
        var x=0,y=x+1,z=y+1;
        var prod = 1;
        while(z<col){
            prod = mat[i][x]*mat[i][y]*mat[i][z];
            if(prod==key){
                count++;
            }
            x++;y++;z++;
        }
    }

    for(var i=0;i<col;i++){
        var x=0,y=x+1,z=y+1;
        var prod = 1;
        while(z<row){
            prod = mat[x][i]*mat[y][i]*mat[z][i];
            if(prod==key){
                count++;
            }
            x++;y++;z++;
        }
    }
    for(var i=0;i<row-2;i++){
        var x=0,y=x+1,z=y+1;
        var prod = 1;
        while(z<col){
            prod = mat[i][x]*mat[i+1][y]*mat[i+2][z];
            if(prod==key){
            count++;
            }
            x++;y++;z++;
        }
    }
    for(var i=0;i<row-2;i++){
        var x=col-1,y=x-1,z=y-1;
        var prod = 1;
        while(z>=0){
            prod = mat[i][x]*mat[i+1][y]*mat[i+2][z];
            if(prod==key){
                count++;
            }
            x--;y--;z--;
        }
    }
    console.log(count);
}

runProgram(`8 8 8
4 4 2 2 4 1 4 4
3 4 1 1 1 3 4 5
3 3 5 1 3 1 5 1
2 3 1 4 3 4 4 5
2 3 1 5 1 1 5 5
2 2 2 1 4 2 3 2
1 2 4 3 5 3 1 5
2 5 2 5 3 3 2 4`);