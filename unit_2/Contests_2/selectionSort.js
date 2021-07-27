function runProgram(input) {
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);


    for (var i = 0; i < n; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (arr[min] > arr[j]) {
                min = j;
            }
        }
        if (min !== i) {
            var tmp = arr[i];
            arr[i] = arr[min];
            arr[min] = tmp;
        }
    }
    console.log(arr.join(" "));
}


runProgram(`5
3 5 0 9 8`);