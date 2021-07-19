function chksum(out) {
    var sum = 0;
    var arr = out.split("").map(Number);
    var len = arr.length;
    for (var i = 0; i < len; i++) {
        sum += arr[i];
    }
    return (sum%2==0);
}

function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var subarr = 0;
    var result = "";
    var out = "";
    for(var i = 0; i < len;i++){
        for(var j = 0; j < len;j++){
            for(var k=i;k<=j;k++){
                out +=(arr[k]);
            }
            if(out)
            if(chksum(out)){
                subarr++;
            }
            out = "";
        }
    }
    result = subarr;
    console.log(result);
}

runProgram(`6
1 2 3 4 5 6`);