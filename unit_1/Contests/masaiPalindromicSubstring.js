function pali(input) {
    var arr = input.split("");
    var arr1 = [];
    var len = arr.length;
    var j =0;
    for(var i = len; i>=0; i--,j++){
        arr1[j] = arr[i];
    }
    arr1 = arr1.join("");
    arr = arr.join("");
    if(arr1 == arr){
        return len;
    }

}

function runProgram(input){
    var len = input.length;
    var out = "";
    var cond = false;
    var length;
    var length1 = 0;

    for(var i = 0; i < len; i++){
        for(var j = 0; j < len; j++){
            for(var k = i; k<=j; k++){
                if(input[i]==input[j]){
                    out += (input[k]);
                    cond = true;
                }
            }
            if(cond){
                length = pali(out);
                if(length >length1){
                    length1 = length;
                }
                out = "";
                cond = false;
            }
        }
    }
    console.log(length1);
    
}

runProgram(`thisracecarisgood`);