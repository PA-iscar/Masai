function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;

    while(t--){
        var dim = input[index++].split(" ").map(Number);
        var row = dim[0];
        var col = dim[1];
        var mat = [];
        for(var i =0; i<row;i++){
            var r = input[index++].split(" ").map(Number);
            mat.push(r);
        }
        var rs=row-1;
        var re=0;
        var cs=0;
        var ce=col-1;
        var out = "";

        while(rs>=re && cs<=ce){
            for(var i=rs; i>=re; i--){
                out += mat[i][cs] + " ";
            }
            cs++;
            for(var i=cs; i<=ce; i++){
                out += mat[re][i] + " ";
            }
            re++;
            if(cs<=ce)
            for(var i=re;i<=rs;i++){
                out += mat[i][ce] + " ";
            }
            ce--;
            if(rs>=re)
            for(var i=ce;i>=cs;i--){
                out += mat[rs][i] + " ";
            }
            rs--;
        }
        console.log(out);
    }
}

runProgram(`2
3 4
1 2 3 4
5 6 7 8
9 10 11 12
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);