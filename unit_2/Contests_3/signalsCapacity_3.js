function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        arr.reverse();
        var str = "";
        for(var i=0;i<n;i++){
            var count = 1;
            for(var j=i+1;j<n;j++){
                if(arr[i]<arr[j]){
                    break;
                }
                else{
                    count++;
                }
            }
            str += count + " ";
        }
        var res = str.trim().split(" ").map(Number);
        res.reverse();
        console.log(res.join(" "));
    }
}


runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);