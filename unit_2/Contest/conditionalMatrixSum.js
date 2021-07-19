function runProgram(input){
    input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var arr = [];
    for(var i=1;i<=row;i++){
        var r=input[i].split(" ").map(Number);
        arr.push(r);
    }
    var sum = 0;
    for(var i=0;i<row;i++){
        for(var j=0;j<col;j++){
            if(arr[i][j]%3==0){
                sum+=arr[i][j];
            }
        }
    }
    console.log(sum);
}

runProgram(`2 3
3 1 8
2 6 0`);