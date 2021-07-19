function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var count = 0;
    var arr = input[1];
    for(var i = 0; i < len;i++){
        if(arr[i] == 'a' || arr[i] == 'e' || arr[i] == 'i' || arr[i] == 'o' || arr[i] == 'u'){
            if(arr[i+1] != 'a' || arr[i+1] != 'e' || arr[i+1] != 'i' || arr[i+1] != 'o' || arr[i+1] != 'u'){
                count++;
            }
        }
    }
    console.log(count);
}

runProgram(`5
abced`);