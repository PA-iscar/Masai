function sum(arr,len) {
    for(var i=0;i<len;i++){
        if(!arr[i+1]){
            arr[i+1] = 0;
        }
        for(var j=i+1;j<len;j++){
            if((arr[i]+arr[j])%2==0){
                return "Yes";
            }
        }
    }
    return "No";
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    for(var i = 0;i<t;i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        console.log(sum(arr,len));
    }
}

runProgram(`2
1
5
4
1 2 3 4`);