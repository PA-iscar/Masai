function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var str = input[1];
    var out = "";
    for(var i=0; i<len; i++){
        for(var j=0; j<len; j++){
            for(var k=i; k<=j; k++){
                out+=str[k];
            }
            if(out=="@#$"){
                con = true;
                break;
            }
            else
                con = false;
            out="";
        }
    }
    if(con){
        console.log("Yes");
    }
    else
        console.log("No");
}

runProgram(`5
ab@#$`);