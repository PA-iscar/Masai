function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var count = 0;
    var tom = {};
    for(var i=1; i<=t;i++){
        var row = input[i];
        tom[row] = ++count;
        
    }
    console.log(tom["India"]);
}

runProgram(`5
Russia
USA
Japan
China
India`);