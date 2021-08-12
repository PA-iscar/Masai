var top = -1;
var stack = [];
var ans = [];
var val = 0;
ans[val]=-1;
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
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        stack = [];
        top = -1;
        ans = [];
        val = 0;
        ans[val] = -1;
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var res = [];
        res[0] = -1;
        var ind = 1;
        for(var i=0;i<len;i++){
            var data = arr[i];
            push(data);
        }
        for(var i=top;i>0;i--){
            var data = pop();
            var data2 = peek();
            if(data>=ans[val]){
                ans[val]=data;
            }
            else
                ans[++val]=data;
            if(data>data2){
                res[ind++] = data;
            }
            else{
                for(var j=val;j>=0;j--){
                    if(ans[j]>data2){
                        res[ind++]=ans[j];
                        break;
                    }
                    else if(j==0){
                        res[ind++]=-1;
                        break;
                    }
                }
            }
        }
        res.reverse();
        console.log(res.join(" "));
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
3988 4871 1119 5654 9739`);