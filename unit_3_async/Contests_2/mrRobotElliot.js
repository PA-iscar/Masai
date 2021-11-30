function elliot(str, l, r, res) {
    if (l > r) {
        return res;
    }
    let mid = Math.floor((l + r) / 2);
    res += str[mid] + elliot(str, l, mid - 1, res) + elliot(str, mid + 1, r, res);
    return res;
}

function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let n = Number(input[index++]);
        let str = input[index++];
        let res = "";
        res = elliot(str, 0, n - 1, res);
        console.log(res);
    }
}


runProgram(`3
3
abc
4
abcd
11
abcdefghijk`);