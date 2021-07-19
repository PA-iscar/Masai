function runProgram(input){
    var input = input.split("").map(Number);
    var test = [4,2,0];
    var len = input.length;
    var cond = false;
    
    var index = 0;
    debugger;
    for(var i=0; i<len; i++){
        if(input[i]==test[index]){
            var j = (test.length)-1;
            while(j--){
                if(input[i+1]==test[index+1]){
                    cond = true;
                    i+=2;
                    index+=2;
                }
                else
                    cond = false;
                    
            }       
               
        }
    }
    if(cond){
        console.log("Caught");
    }
    else
        console.log("Escaped");
}

runProgram(`4420`);