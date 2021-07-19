function runProgram(input){
    var test = true;
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var min = arr[0];
    var max = arr[0];
        for(var i = 0; i < len; i++){
            if(min > arr[i]){
                min = arr[i];

            }
            if(max < arr[i]){
                max = arr[i];
            }
        }
    console.log(min);
    console.log(max);
}

runProgram(`4
-2 0 8 4`);