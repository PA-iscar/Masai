function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);
    var list = input[1].split(" ").map(Number);
    var line = input[2].split(" ").map(Number);
    var move = -1;

    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if(list[i]==line[j]){
                move++;
                line[j] = 0;
                break;
            }
            else{
                if(line[j]==0){
                    ;
                }
                else
                    move++;
            }
        }
    }
    console.log(move);
}


runProgram(`4
1 2 3 4
4 2 3 1`);