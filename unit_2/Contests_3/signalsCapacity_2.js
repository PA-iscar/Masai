function runProgram(input){
    input.trim();
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input.split(" ").map(Number);
        var stack=[];
        var top = -1;
        var sum = [];
        var val = 1;
        sum[0] = 1;
        
        for(var i=0;i<n;i++){
            var add = 1;
            if(i==0){
                stack.push(arr[i]);
                top++;
            }
            else{
                var len = stack.length-1;
                for(var j=len;j>=0;j--){
                    if(stack[j]<=arr[i]){
                        stack.pop();
                        stack.push(arr[i]);
                        sum[val]++;
                    }
                    else{
                        sum.push(add);
                        val++;
                        stack.push(arr[i]);
                        top++;
                        break;
                    }
                }
            }
        }


    }
}

runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);