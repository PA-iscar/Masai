function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr1 = input[1].split(" ").map(Number);
    var arr2 = input[2].split(" ").map(Number);
    var test = false;
    for(var i=0; i<len; i++){
        if(test){
            break;
        }
        for(var j=0; j<len; j++){
            if(arr1[i]==arr2[j]){
                console.log(arr1[i]);
                test = true;
                break;
            }
        }
    }
}

runProgram(`3
4 5 7
9 2 5`);