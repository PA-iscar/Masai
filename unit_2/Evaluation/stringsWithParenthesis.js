function check(a) {
    var stack = [];
    var top = -1;
    for (var j = 0; j < a.length; j++) {
        if (a[j] == '[' || a[j] == '{' || a[j] == '(')
            stack[++top] = a[j];
        if (a[j] == ']' || a[j] == '}' || a[j] == ')') {
            if (top == -1) {
                return 0;
            }

            else {
                if (!same(stack[top--], a[j])) {
                    return 0;
                }
            }
        }
    }
    if (top != -1) {
        return 0;
    }
    return 1;
}

function same(a, b) {
    if (a == '[' && b == ']')
        return 1;
    if (a == '{' && b == '}')
        return 1;
    if (a == '(' && b == ')')
        return 1;
    return 0;
}

function runProgram(input){
    var valid = 0;
        var str = input.split("");
        valid = check(str);
        if (valid == 1)
            console.log("balanced");
        else
            console.log("unbalanced");
}


runProgram(`[one[two[three[four[five[six[seven[eight[nine[ten]]]]]]]]]]`);