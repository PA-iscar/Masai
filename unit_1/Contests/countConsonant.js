function runProgram(input){
    var s = input;
    var count = 0;
  var len = input.length;
    for(var i = 0; i<len; i++){
      if(s[i]=='a' || s[i]=='e'|| s[i]=='i'|| s[i]=='o'|| s[i]=='u');
      else 
        count++;
  }
  console.log(count);
}
runProgram(`masaischool`);