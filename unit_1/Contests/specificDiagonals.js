function runProgram(input){
    var input = input.split("\n");
    var len = input.length;
    var key = Number(input[len - 1]);
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var arr = [];
    var r,c;

    for(var i=0;i<row;i++){
        arr.push(input[i+1].split(" ").map(Number));

        for(var j=0;j<col;j++){
            if(key == arr[i][j]){
                r=i;
                c=j;
            }
        }
    }
    var done = true;
    var r1=r,c1=c;
    var r2=r,c2=c;
    while(done){
        done = false;
        if(((r1-1)>=0&&(r1-1)<row)&&((c1-1)>=0&&(c1-1)<col)){
            r1--;
            c1--;
            done = true;
        }
        if(((r2-1)>=0&&(r2-1)<row)&&((c2+1)>=0&&(c2+1)<col)){
            r2--;
            c2++;
            done = true;
        }
    }

    var out = "";
    while(1){
        if(r1<row&&c1<col){
            out += arr[r1][c1] + " ";
        }
        else
            break;
        r1++;
        c1++;

    }
    out += "\n";
    while(1){
        if(r2<row&&c2>=0){
            out += arr[r2][c2] + " ";
        }
        else
            break;
        r2++;
        c2--;

    }
    console.log(out);
}

runProgram(`3 3
1 2 3
4 5 6
7 8 9
6`);