function toBin(num, str = "") {
    if (num === 0) {
      return str;
    }
    if (num % 2 === 0)
        str = "0" + str;
    else
        str = "1" + str;
    return toBin(Math.floor(num / 2), str);
  }

function runProgram(input){
    var input = input.split("\n").map(Number);
    var t = input[0];
    for(var i=1;i<=t;i++){
        console.log(toBin(input[i]));
    }
    
}


runProgram(`2
15
128`);