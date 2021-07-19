function runProgram(input){
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var count = 0;
    var odd1 = 0;

    for(var i = 0; i < len;i++){
        if(arr[i]%2!=0){
            count = 0;
            for(var j = i; j <len;j++){
                if(arr[j]%2==0){
                    break;
                }
                else if(arr[i]==arr[j])
                    count++;
            }
            if(odd1<count){
                odd1 = count;
            }
        }
    }
    console.log(odd1);
}

runProgram(`12
1 1 1 1 2 2 2 2 2 1 1 1`);