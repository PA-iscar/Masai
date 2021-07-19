function sum(len,arr){
    var sm = 0;
    var num = 0;
    for(var i=0;i<len;i++){
        num++;
        if(arr[i]){

        }
        else
        {
            sm+=num;
        }
    }
    return sm;
}

function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    console.log(sum(len,arr));
}

runProgram(`5
1 0 0 1 1`);