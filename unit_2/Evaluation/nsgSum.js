function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var res = [];
        for(var i=0;i<n;i++){
            var num = arr[i];
            var found = 0;
            for(var j=i+1;j<n;j++){
                if(num<arr[j]){
                    for(var k=j+1;k<n;k++){
                        if(arr[j]>arr[k]){
                            res.push(arr[k]);
                            found = 1;
                            break;
                        }
                        if(k==n-1){
                            found = 0;
                        }
                    }
                    if(found == 1){
                        break;
                    }
                }
                if(j==n-1){
                    found = 0;
                }
            }
            if(found == 0){
                res.push(-1);
            }
        }
        var sum = 0;
        for(var key in res){
            sum += res[key];
        }
        console.log(sum);
    }
}


runProgram(`1
6
5 1 6 2 5 1`);