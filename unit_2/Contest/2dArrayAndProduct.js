function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var row = dim[0];
    var col = dim[1];
    var key = dim[2];
    var mat = [];
    var count = 0;
    var fac = [];
    var fac2 = [];
    for(var i=1; i<=row;i++){
        mat.push(input[i].split(" ").map(Number));
    }
    debugger;
    for (i = 1; i <= key; ++i) {
        if (key % i == 0) {
            fac.push(i);
        }
    }
    for(var i=0;i<fac.length;i++) {
        for (var j = 1; j <= fac[i]; j++) {
            if (fac[i] % j == 0) {
                fac2.push(j);
            }
        }
    }
    
    var out = "";
    var mul = [];
    var index = 0;
    for(var i=0;i<fac2.length;i++) {
        for(var j=0;j<fac2.length;j++){
            for(var k=i;k<=j;k++){
                out += fac2[k];
            }
            if(out.length==3){
                mul[index++]=Number(out);
            }
            out = "";
        }
    }
    console.log(mul);
}

runProgram(`8 8 8
4 4 2 2 4 1 4 4
3 4 1 1 1 3 4 5
3 3 5 1 3 1 5 1
2 3 1 4 3 4 4 5
2 3 1 5 1 1 5 5
2 2 2 1 4 2 3 2
1 2 4 3 5 3 1 5
2 5 2 5 3 3 2 4`);