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

function runProgram(input) {
    var index = -1;
    var res = "";
    var len = input.length;
    for (var i = len-1; i >= 0; i--) {
        var data = input[i];
        push(data);
    }
    for (var i = 0; (i < len && top!=-1); i++) {
        var data = pop();
        var data2 = peek();
        if(data == data2){
            top--;
        }
        else{
            res += data;
        }
    }
    if(res)
        console.log(res);
    else
        console.log("Empty String");
}

runProgram(`aaabccddd`);