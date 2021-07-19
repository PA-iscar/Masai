function runProgram(input){
    var input = input.split(" ").map(Number);
    var n = input[0];
    var m = input[1];
    var count = 0;
    for(var x = 0; x < 100; x++)
        for(var y = 0; y < 100; y++)
            if((x*x + y) == n)
                if((x + y*y) ==m)
                    count++;
    console.log(count);
}

runProgram(`9 3`);