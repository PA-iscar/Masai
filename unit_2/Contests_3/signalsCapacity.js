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
    input.trim();
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        stack = [];
        top = -1;
        var res = [];
        var val = 0;
        for(let i=0;i<n;i++){
            var sum = 1;
            if(i==0){
                res[val++] = sum;
                push(arr[i]);
            }
            else{
                for(let j=top;j>=0;j--){
                    var data = stack[j];
                    if(data<=arr[i]){
                        sum++;
                    }
                    else{
                        break;
                    }
                }
                res[val++] = sum;
                push(arr[i]);
            }
        }
        console.log(res.join(" "));
    }
}

runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);