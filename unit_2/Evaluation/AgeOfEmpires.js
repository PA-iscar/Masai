function min(dat,dat2){
    if(dat<dat2){
        return dat;
    }
    else
        return dat2;
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var min = 0;
    var sum = 0;
    for(var i=0;i<arr.length;i++){
        for(var j=i+1;j<arr.length;j++){
            if(arr[i]>=arr[j]){
                arr[i].pop();
                arr[j].pop();
                i-=2;
            }
        }
    }
}

runProgram(`2
1 3 1 2`);