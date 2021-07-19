function isItTriangle(s1,s2,s3) {
    var out = "";

    if((s1<s2+s3)&&(s2<s1+s3)&&(s3<s2+s1)){
        out += "Yes";
    }
    else
        out += "No";
    return out;
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    for(var i = 1;i<=t;i++){
        var sides = input[i].split(" ").map(Number);
        var s1 = sides[0];
        var s2 = sides[1];
        var s3 = sides[2];

        console.log(isItTriangle(s1,s2,s3));
    }
}

runProgram(`4
4 5 13
7 1 8
2 5 4
2 2 2`);