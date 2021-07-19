function chk(len,word,K){
    var out = "";
    var count = 0;

    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            for(var k = i; k<=j;k++){
                out += word[k];
            }
            if(out[0]==K)
                count++;
            out = "";
        }
    }
    return count;
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var len = Number(input[index++]);
        var word = input[index++];
        var K = input[index++];
        console.log(chk(len,word,K));
    }
}

runProgram(`1
4
aman
a`);