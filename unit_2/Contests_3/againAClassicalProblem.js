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
    var input = input.split("\n");
    var t = Number(input[0]);

    for(var i=1;i<=t;i++){
        var arr = input[i].split("");
        var len = arr.length;
        if(len%2!=0){
            console.log("not balanced");
        }
        else{
            for(var j=0;j<len/2;j++){
                if(arr[j]=='{'){
                    push('}');
                }
                else if(arr[j]=='['){
                    push(']');
                }
                else if(arr[j]=='('){
                    push(')');
                }
            }
            for(var j=len/2;j<len;j++){
                var data = peek();
                if(data == arr[j]){
                    pop();
                }
                else{
                    console.log("not balanced");
                    break;
                }
            }
            if(top==-1){
                console.log("balanced");
            }
        }
    }
}

runProgram(`1
[{)){}}[})`);