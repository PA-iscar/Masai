function runProgram(input) {
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while (t--) {
        var found = 0;
        var dim = input[index++].split(" ").map(Number);
        var n = dim[0];
        var k = dim[1];
        var arr = input[index++].split(" ").map(Number);
        for (var i = 0; i < n; i++) {
            
            for (var j = i + 1; j < n; j++) {
                if (arr[i] + arr[j] == k) {
                    found = 1;
                    break;
                }
            }
            if (found == 1)
                break;
        }
        if (found)
            console.log("1");
        else
            console.log("-1");
    }

}

runProgram(`1
5 2
3 4 0 2 7`);