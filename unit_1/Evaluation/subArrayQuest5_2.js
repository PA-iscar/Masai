function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var counter = 0;
    var index = 1;
    for(var i=0;i<t;i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);

        for(var i=0; i<len; i++){
            for(var j=0; j<len;j++){
                
                if((arr[i]+arr[j])%2==0){
                    counter++;
                }
            }
        }
    }
    console.log(counter);
}

runProgram(`1
5
1 2 3 4 5`);