function runProgram(input){
    var arr = [];
    var res = "";
    var len = input.length-1;
    var top = -1;
    for(var i=len;i>=0;i--){
        arr[++top]=input[i];
    }
    var count = 1;
    for(var i=0;i<=len;i++){
        var val = arr[top];
        arr[top--]=null;
        if(val==arr[top]){
            count++;
        }
        else{
            if(count%2!=0){
                res+=val;
            }
            count = 1;
        }
    }
    if(!res)
        res+="Empty String";
    console.log(res);
}

runProgram(`aaabccddd`);