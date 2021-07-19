function earning(len,rate,arr){
    var base = arr[0];
    var builds = 1;
    debugger;
    for(var i=0;i<len;i++){
        if(arr[i]>base){
            base = arr[i];
            builds++;
        }
    }
    return (rate*builds);

}

function runProgram(input){
    var input = input.split("\n");
    var N = Number(input[0]);
    var index = 1;
    for(var i = 0; i<N; i++){
        var cons = input[index++].split(" ").map(Number);
        var len = cons[0];
        var rate = cons[1];
        var arr = input[index++].split(" ").map(Number);
        var profit = earning(len,rate,arr);
        console.log(profit);
    }

}

runProgram(`2
6 3
8 2 3 11 11 10
5 12
12 20 39 45 89`);