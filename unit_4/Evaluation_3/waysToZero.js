function now(val) {
    if (val < 0) {
        return 0;
    }
    if (val == 0) {
        return 1;
    }

    return now(val - 1) + now(val - 2) + now(val - 5);
}

function runProgram(input) {
    input = input.split("\n").map(Number);
    let n = input[0];
    let ind = 1;
    while (n--) {
        let val = input[ind++];
        let result = now(val);
        console.log(result)
    }
}


runProgram(`4
4
1
0
30`);