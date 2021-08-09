var top = -1;
var stack = [];
var ans = [];
var val = 0;
ans[val]=1000000;
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

function runProgram(input) {
    var res = [];
    res[0]=-1;
    var index = 1;
    var input = input.split("\n");
    var t = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var len = arr.length;
    for (var i = len - 1; i >= 0; i--) {
        var data = arr[i];
        push(data);
    }

    for(var i=top;i>0;i--){
        var data = pop();
        var data2 = peek();
        if(data<=ans[val])
            ans[val]=data;
        else
            ans[++val]=data;
        if(data<data2){
            res[index++]=data;
        }
        else{
            for(var j=val;j>=0;j--){
                if(ans[j]<data2){
                    res[index++]=ans[j];
                    break;
                }
                else if(j==0){
                    res[index++]=-1;
                    break;
                }
            }
        }
    }
    console.log(res.join(" "));
}

runProgram(`10
10 10 10 10 10 10 10 10 10 10`);