function runProgram(input){
    var input = input.split("\n");
    var obj = input[0].split(" ").map(Number);
    var n = obj[0];
    var k = obj[1];
    var arr = input[1].split(" ").map(BigInt);
    var max = -1;
    if(k<n){
        for(var i=0;i<=k;i++){
            if(arr[i]>max){
                max = arr[i];
            }
        }
    }
    else if(n<k){
        var v = k%n;
        if(v==0){
            ;
        }
        else
            for(var i=0;i<=v;i++){
                if(arr[i]>max){
                    max = arr[i];
                }
            }
    }
    var st = "";
    st += max;
    console.log(st);
}

runProgram(`6 4
1 2 4 3 3 5`);