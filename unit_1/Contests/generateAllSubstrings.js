function subString(arr,len) {
    var out = "";
    var didit = false;
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            for(var k=i;k<=j;k++){
                out += arr[k];
                didit = true;
            }
            if(didit&&i!=len-1){
                out += "\n";
                didit = false;
            }
        }
    }
    console.log(out);
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;

    for(var i = 0; i < t; i++){
        var len = Number(input[index++]);
        var arr = input[index++];
        subString(arr,len);
    }
}

runProgram(`1
4
aman`);