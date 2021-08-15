var top = -1;
var stack = [];

function push(data) {
    stack[++top] = data;
    return top;
}

function pop() {
    return stack[top--];
}

function peek() {
    return stack[top];
}

function runProgram(input){
    input = input.trim();
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var res = [];
        stack = [];
        top = -1;
        var val = 0;
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var len = arr.length-1
        for(var i=len;i>=0;i--){
            if(arr[i+1]){
                if(arr[i]<arr[i+1]){
                    push(arr[i+1]);
                }
                var data = peek();
                if(top==-1){
                    res[val++] = -1;
                }
                else
                    for(var j=top;j>=0;j--){
                        if(arr[i]<stack[j]){
                            res[val++] = stack[j];
                            break;
                        }
                        if(j==0){
                            res[val++] = -1;
                        }
                    }
                // if(arr[i]<data){
                //     res[val++] = data;
                // }
                // else{
                //     res[val++] = -1;
                // }

                // if(arr[i]>data){
                //     push(arr[i]);
                // }
            }
            else{
                res[val++] = -1;
            }
        }
     	res.reverse();

        console.log(res.join(" "));
    //   res = [];
    //   val = 0;
    }
}

runProgram(`4
1
9444
6
1549 9638 7397 8313 3150 7284
3
9213 9172 1892
5
3988 4871 1119 5654 9739 `);