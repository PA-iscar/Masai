function runProgram(input){
	var s = input.split(" ");
  	var out = "";
  	var len = s.length - 1;
  	for(var i=len;i>=0;i--){
    	out += s[i];
      	if(i==0);
      	else
          	out += " ";
    }
  	
  	console.log(out);
}

runProgram(`A Transformation in education`);