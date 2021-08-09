function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var top = t-1;
    var val = -1;
    var res = [];
    var index = 0;
    for(var i=top;i>=0;i--){
        for(var j=i-1;j>=0;j--){
            if(arr[j]<arr[i]){
                val = arr[j];
                break;
            }
        }
        // top--;
        res[index++] = val;
        val = -1;
    }

    var i=0;
    while(i<t-i-1){
        var temp = res[i];
        res[i] = res[t-i-1];
        res[t-i-1] = temp;
        i++;
    }
    console.log(res.join(" "));
}

runProgram(`8
39 27 11 4 24 32 32 1`);