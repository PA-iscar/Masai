function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var res = [];
        res[0] = 1;
        for(var i=1;i<n;i++){
            var count = 1;
            for(var j=i-1;j>=0;j--){
                if(arr[j] <= arr[i]){
                    count++;
                }
                else if(arr[j]>arr[i]){
                    break;
                }
                else{
                    ;
                }
            }
            res[i] = count;
        }
        console.log(res.join(" "));
    }
}


runProgram(`1
6
100 60 70 65 80 85`);