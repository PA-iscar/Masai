function runProgram(input) {
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);

    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i; j++) {
            if (arr[j] > arr[j + 1]) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    console.log(arr.join(" "));
}

runProgram(`5
3 5 0 9 8`);