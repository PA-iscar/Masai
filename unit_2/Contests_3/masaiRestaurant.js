function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var arr = [];
    var top = -1;
    for(var i=1;i<=t;i++){
        var q=input[i].split(" ").map(Number);
        if(q[0]==1){
            if(top>=0){
                console.log(arr[top]);
                arr[top]=undefined;
                top--;
            }
            else{
                console.log("No Food");
            }
        }
        else if(q[0]==2){
            top++;
            arr[top]=q[1];
        }
    }
}

runProgram(`6
1
2 5
2 7
2 9
1
1`);