function runProgram(input) {debugger;
    input = input.split("\n");
    var T = Number(input[0]);
    for (var i = 1; i <= T; i++){
     var N = Number(input[(i * 2) - 1]);
        var arr = input[i * 2].split(" ").map(Number);
        var isPre = false;
        for (var k = 0; k < N; k++){
             var store  = 0;
            for (var j = k; j < N; j++){
                store += arr[j];
                if (store % 2 == 0) {
                 isPre = true;
            }
        }
        }   if (!isPre) {
             console.log("No")
         } else { console.log("Yes") }
    } 
} runProgram(`2
1
5
4
1 2 3 4`)