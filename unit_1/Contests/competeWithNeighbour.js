function greed(prev,curr,next) {
    debugger;
    if(!prev)
        prev = next;
    if(!next&&next!=0)
        next = prev;
    if(curr>prev&&curr>next)
        return true;
    else
        return false;
}

function runProgram(input){
    var count = 0;
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    for(var i = 0; i < len;i++){
        var curr = arr[i];
        var prev = arr[i-1];
        var next = arr[i+1];
        var isit = greed(prev,curr,next);
        if(isit){
            count++;
        }
        debugger;
    }
    console.log(count);

}

runProgram(`6
-5 -2 0 1 13 9`);