var top = -1;
var stack = [];
function push(data){
    stack[++top] = data;
}
function pop(){
    return stack[top--];
}
function peek(){
    return stack[top];
}


function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        for(var i=0;i<n;i++){
            push(arr[i]);
        }
        var res = []
        res[0] = -1;
        var index = 1;
        var ans = [];
        var val = 0;
        ans[val] = -10000;
        for(var i=1;i<n;i++){
            var data1 = pop();
            var data2 = peek();
            if(data1>ans[val]){
                ans[val]=data1;
            }
            else{
                ans[++val]=data1
            }
            if(data1>data2){
                res[index++] = data1;
            }
            else{
                for(var j=0;j<val;j++)
                if(data1<ans[j]){
                    res[index++] = ans[j];
                }
                else{
                    res[index++] = -1;
                }
            }
        }
        for(var i=0;i<n/2;i++){
            var temp = res[i];
            res[i]=res[n-i-1];
            res[n-i-1]=temp;
        }
        console.log(res.join(" "));
    }
}

runProgram(`1
4
1 3 2 4`);