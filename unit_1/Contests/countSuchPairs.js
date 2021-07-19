function runProgram(input){
    var input = input.split("\n");
    var a = input[0].split(" ").map(Number);
    var len = a[0];
    var test = a[1];
    var index = 0;
    var count = 0;
    var arr = input[1].split(" ").map(Number);
    // for(var i = 1; i < len;i++){
    //     if(arr[i]+arr[index]==test){
    //         count++;index++;i=index;
    //     }
    //     if(i==len-1){
    //         index++;
    //         i=index;
    //     }
    // }
    for(var i = 0; i<len;i++){
        for(var j =i+1; j<len;j++){
            if(arr[i]+arr[j]==test){
                count++;
            }
        }
    }
    console.log(count);
}

runProgram(`5 0
-1 1 -1 1 -1`);