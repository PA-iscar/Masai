function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var res = [];
    res[0]=-1;
    var index = 1;
    for(var top = 1;top<t;top++){
        var j= top-1;
        
            if(arr[j]<arr[top]){
                val = arr[j];
            }
            else
            {
                if(j-1>=0 && val<arr[top]){

                }
                else{
                    val = -1;
                }
            }
        
        res[index++]=val;
    }
    console.log(res.join(" "));
}

runProgram(`8
10 10 10 10 9 10 10 10`);