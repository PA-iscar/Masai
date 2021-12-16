function subStr(st1, st2) {
    var l1 = st1.length;
    var l2 = st2.length;
    var arr = [];
    let k = 0;
    for (var i = 0; i < l1; i++) {
        for (var j = k; j < l2; j++) {
            if (st1[i] === st2[j]) {
                arr.push(st1[i]);
                k = j;
                break;
            }
        }
    }
    return arr.length;
}

function runProgram(input) {
    input = input.split("\n");
    let str1 = input[0];
    let str2 = input[1];

    console.log(subStr(str1, str2))
}

runProgram(`eziowiomkvrrdzx
orugiebaolddavd`);