function runProgram(input){
    debugger;
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var arr = [];
    var out = "";
    for(var i = 1; i<=row;i++){
        arr.push(input[i].split(" ").map(Number));
    }

    var j;
    for(var i = 0;i<row;i++){
        if (i%2==0){
            j=col-1;
        }
        else{
            j=0;
        }
        while(j<col&&j>=0){
            out+=arr[i][j]+" ";
            if (i%2==0){
                j--;
            }
            else{
                j++;
            }
        }
    }

    console.log(out);
}

runProgram(`5 5
4 7 1 1 7
8 9 9 6 1
6 4 9 5 1
7 7 4 7 7
8 6 2 5 5`);