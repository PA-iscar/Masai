function optiCandy(points) {
    var candy = 0;
    while(points>0){
        candy++;
        if(candy%10==0){
            points++;
        }
        points--;
    }
    return candy;
}

function runProgram(input){
    var input = input.split("\n").map(Number);
    var len = input[0];
    for (var i=1;i<=len;i++) {
        var candy = optiCandy(input[i]);
        console.log(candy);
    }
}

runProgram(`6
1
10
19
9876
12345
1000000000`);