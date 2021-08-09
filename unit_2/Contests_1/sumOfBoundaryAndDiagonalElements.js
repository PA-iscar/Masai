function runProgram(input){
    input = input.split("\n");
    var n= Number(input[0]);
    var mat = [];
    for(var i=1; i<=n; i++){
        var row = input[i].split(" ").map(Number);
        mat.push(row);
    }
    var sum= 0;
    var rs = 0;
    var re = n;
    var cs = 0;
    var ce = n;

    debugger;

    for(var i=cs; i<ce; i++){
        sum+=(mat[rs][i]);
    }
    rs++;
    for(var i=rs;i<re;i++){
        sum+=(mat[i][ce-1]);
    }
    ce--;
    if(rs<re){
        for(var i=ce-1;i>=cs;i--){
            sum+=(mat[re-1][i]);
        }
        re--;
    }
    if(cs<ce){
        for(var i=re-1;i>=rs;i--){
            sum+=(mat[i][cs]);
        }
        cs++;
    }
    var m=n;
    for(var i=0;i<n;i++){
        if(i==m-1){
            sum+=mat[i][--m];
        }
        else{
            sum+=mat[i][i];
            sum+=mat[i][--m];
        }
    }
    var rep=mat[0][0]+mat[n-1][n-1]+mat[0][n-1]+mat[n-1][0];
    sum-=rep;
    console.log(sum);
}

runProgram(`5
1 2 3 4 5
6 7 8 9 1
2 3 4 5 6
7 8 9 1 2
3 4 5 6 7`);