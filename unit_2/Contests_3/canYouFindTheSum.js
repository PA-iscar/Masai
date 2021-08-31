function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var stack1 = [];
    var stack2 = [];
    for(var i=0;i<n;i++){
        var forX = 0;
        for(var x=i-1;x>=0;x--){
            if(arr[x]>arr[i]){
                stack1.push(x+1);
                forX = 1;
                break;
            }
            forX = 0;
        }
        if(!forX){
            stack1.push(-1);
        }
        
        var forY = 0;
        for(var y=i+1;y<n;y++){
            if(arr[y]>arr[i]){
                stack2.push(y+1);
                forY = 1;
                break;
            }
            forY = 0;
        }
        if(!forY){
            stack2.push(-1);
        }
    }
    var res = [];
    for(var i=0;i<n;i++){
        res[i] = stack1[i]+stack2[i];
    }
    console.log(res.join(" "));
}


runProgram(`5
5 4 1 3 2`);