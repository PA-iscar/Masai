function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var N=dim[0];
    var M=dim[1];
    var K=dim[2];
    var arr = input[1].split(" ").map(Number);
    var index = 0;
    var mat=[];
    var mat1=[];
    var mat2=[];
    for(var i=0;i<N;i++){
        for(var j=0;j<M;j++){
            for(var l=0;l<K;l++){
                mat.push(arr[index++]);
            }
            mat1.push(mat);
            mat = [];
        }
        mat2.push(mat1);
        mat1=[];
    }
    var out="";
    for(var i=0;i<N;i++){
        for(var j=0;j<M;j++){
            for(var l=0;l<K;l++){
                out += mat2[i][j][l] + " ";
            }
            out+="\n";
        }
    }
    console.log(out);
}

runProgram(`2 2 2
1 2 3 4 5 6 7 8`);