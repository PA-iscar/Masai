function runProgram(input){
    debugger;
    var input = input.split("\n");
    var len = Number(input[0]);
    var count =0;
    var s = input[1].split("");
    for(var i = 0; i < len; i++){
        if(s[i] == 'a' || s[i] == 'e' || s[i] == 'i' || s[i] == 'o' || s[i] == 'u'){
            var j= i + 1;
            if(s[j] != 'a' && s[j] != 'e' && s[j] != 'i' && s[j] != 'o' && s[j] != 'u')
                if(j<len)
                    count++;
        }
    }
    console.log(count);
}

runProgram(`6
cdefge`);