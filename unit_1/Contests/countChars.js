function runProgram(input){
    var input = input.split("");
    var len = input.length;
    var count = 0;
    var index = 0;
    var out = "";
    debugger;
    for(var i = 0; i<=len; i++){
      if(input[index] == input[i]){
          count++;
      }
        else{
            out +=input[index]+count;
          index = i;
            i--;
            count = 0;
      }
      
  }
    console.log(out);
}

runProgram(`aaabbbbcc`);