function runProgram(input) {
	var out = [];
  	var top = -1;

  for(var i=0;i<input.length;i++){
  		if(i==0)
          out[++top]=input[i];
    	else{
          	if(out[top]==input[i])
              top--;
          	else
              out[++top]=input[i];
        }
  }
  if(top==-1)
    console.log("Empty String");
  else
  {
    out=out.join("");
    console.log(out);
  }
}
process.stdin.resume();
process.stdin.setEncoding("ascii");
let read = "";
process.stdin.on("data", function (input) {
  read += input;
});
process.stdin.on("end", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
});
process.on("SIGINT", function () {
  read = read.replace(/\n$/, "");
  runProgram(read);
  process.exit(0);
});
