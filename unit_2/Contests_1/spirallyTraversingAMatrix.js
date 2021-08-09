function runProgram(input){
    var out = "";

    var input = input.split("\n");
    var n = Number(input[0]);
    var mat = [];
    for(var i = 1; i <= n; i++){
        var row = input[i].split(" ").map(Number);
        mat.push(row);
    }

    var rs = 0;
    var re = n;
    var cs = 0;
    var ce = n;

    debugger;

    while(rs<re && cs<ce){

        for(var i=cs; i<ce; i++){
            out+=(mat[rs][i])+" ";
        }
        rs++;
        for(var i=rs;i<re;i++){
            out+=(mat[i][ce-1])+" ";
        }
        ce--;
        if(rs<re){
            for(var i=ce-1;i>=cs;i--){
                out+=(mat[re-1][i])+" ";
            }
            re--;
        }
        if(cs<ce){
            for(var i=re-1;i>=rs;i--){
                out+=(mat[i][cs])+" ";
            }
            cs++;
        }
    }
    console.log(out);
}

runProgram(`4
1 2 3 4
5 6 7 8
1 2 3 4
5 6 7 8`);