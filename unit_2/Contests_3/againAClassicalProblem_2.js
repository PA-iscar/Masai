function same(a, b) {
    if (a == '[' && b == ']')
        return 1;
    if (a == '{' && b == '}')
        return 1;
    if (a == '(' && b == ')')
        return 1;
    return 0;
}

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

function runProgram(input) {
    var input = input.split("\n");
    var n = Number(input[0]);
    var valid = 0;
    for (var i = 1; i <= n; i++)
    {
        var a = input[i].split("");
        valid = check(a);
        if (valid == 1)
            console.log("balanced");
        else
            console.log("not balanced");
    }
}


runProgram(`3
{([])}
()
([]`);