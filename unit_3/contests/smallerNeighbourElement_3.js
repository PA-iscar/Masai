function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var top = 0;
    var res = "-1 ";
    var val = -1;
    var sol = -1;
    for(var i = 1;i<t;i++,top++){
        for(var j=top;j>=0;j--){
            if(arr[j]<arr[i]){
                val = arr[j];
                break;
            }
            else{
                if(sol == -1){
                    val = -1;
                    break;
                }
                else{
                    if(sol<arr[i]){
                        val = sol;
                    }
                    else{
                        val = -1;
                    }
                    break;
                }
            }
        }
        sol = val;
        res += val + " ";
    }
    console.log(res);
}

runProgram(`8
39 27 11 4 24 32 32 1`);