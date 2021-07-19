function runProgram(input){
    debugger;
    var input = input.split("");
    var len = input.length;
    var out = "";
    var count = 0;
    for(var i=0;i<len;i++){
        var test = false;
        for(var j=0;j<len;j++){
            for(var k=i;k<=j;k++){
                if(input[i]==input[j]){
                    out += input[k];
                    test = true;
                }
                else
                    test = false;
            }
            if(test){
                count++;
            }
            out += "\n";
        }
    }
    console.log(count);
}

runProgram(`abcab`);