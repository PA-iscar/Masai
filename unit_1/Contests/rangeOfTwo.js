function runProgram(input){
    var input = input.split(" ").map(Number);
    var L = input[0];
    var R = input[1];
    for(var i = L; i <= R;){
        console.log(i);
        i*=2;
    }
}
runProgram("4 10");