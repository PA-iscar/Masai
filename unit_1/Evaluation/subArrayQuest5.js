function chkcon(out){
    var arr = out.split("").map(Number);
    var len = arr.length-1;
    console.log(arr);
    if((arr[0]+arr[len])%2!=0){
        return true;
    }
}

function subarr(len,arr) {
    var out = "";
    var result = "";
    var count = 0;
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            for(var k=i;k<=j;k++){
                out += arr[k];
            }
            if(out)
            if(chkcon(out)){
                count++;
            }
            out = "";
        }
    }
    result += count;
    console.log(result);
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    for(var i=0;i<t;i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        subarr(len,arr);
    }
}

runProgram(`2
5
1 2 3 4 5
3
1 2 3`);