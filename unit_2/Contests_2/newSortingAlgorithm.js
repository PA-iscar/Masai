function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var n=dim[0];
    var k=dim[1];
    var arr = input[1].split(" ").map(Number);
    
    for (var i = 0; i < n; i++) {
        for (var j = 0; j < n - i; j++) {
            if (arr[j]%k > arr[j + 1]%k) {
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }

    console.log(arr.join(" "));
}

runProgram(`5 6
12 18 17 65 46`);