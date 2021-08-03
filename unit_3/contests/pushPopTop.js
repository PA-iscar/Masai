function runProgram(input){
    var input = input.split("\n");
    var t= Number(input[0]);
    var arr = [];
    var top  = -1;
    for(var i=1;i<=t;i++){
        var j = input[i].split(" ").map(Number);
        if(j[0]==1){
            top++;
            arr[top]=j[1];
        }
        else if(j[0]==2){
            if(top>=0){
                arr[top]=undefined;
                top--;
            }
        }
        else if(j[0]==3){
            if(top>=0)
                console.log(arr[top]);
            else
                console.log("Empty!");
        }
    }
}

runProgram(`6
1 15
1 20
2
3
2
3`);