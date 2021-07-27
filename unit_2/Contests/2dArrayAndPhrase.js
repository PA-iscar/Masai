function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var mat = [];
    var key = "saba";
    var key2 = "abas";

    for(var i=1;i<=row;i++){
        mat.push(input[i].split(""));
    }
    var count = 0;
    for(var i=0;i<row;i++){
        var x=0,y=x+1,z=y+1,a=z+1;
        var sum = "";
        while(a<col){
            
            sum = mat[i][x]+mat[i][y]+mat[i][z]+mat[i][a];
            if(sum==key){
                count++;
            }
            x++;y++;z++;a++;
        }
    }
    for(var i=0;i<col;i++){
        var x=0,y=x+1,z=y+1,a=z+1;
        var sum = "";
        while(a<row){
            
            sum = mat[x][i]+mat[y][i]+mat[z][i]+mat[a][i];
            if(sum==key){
                count++;
            }
            x++;y++;z++;a++;
        }
    }
    for(var i=0;i<row-3;i++){
        var x=0,y=x+1,z=y+1,a=z+1;
        var sum = "";
        while(a<col){
            
            sum = mat[i][x]+mat[i+1][y]+mat[i+2][z]+mat[i+3][a];
            if(sum==key){
            count++;
            }
            x++;y++;z++;a++;
        }
    }
    for(var i=0;i<row-3;i++){
        var x=col-1,y=x-1,z=y-1,a=z-1;
        var sum = "";
        while(a>=0){
            
            sum = mat[i][x]+mat[i+1][y]+mat[i+2][z]+mat[i+3][a];
            if(sum == key2){
                count++;
            }
            x--;y--;z--;a--;
        }
    }

    console.log(count);
}

runProgram(`5 5
safer
amjad
babol
aaron
songs`);
