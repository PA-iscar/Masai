function runProgram(input){
    debugger;
    var input = input.split("\n");
    var sum = 0;
    var count = 0;
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    for(var i=0; i<len; i++){
        for(var j=0; j<len;j++){
            for(var k=i;k<=j;k++){
                sum += arr[k];
            }
            if(sum)
            if(sum%2==0){
                count++;
            }
            sum = 0;
        }
    }
    console.log(count);
}

runProgram(`3
1 2 3`);