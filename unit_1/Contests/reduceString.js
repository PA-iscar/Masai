function runProgram(input) {
    var arr=input.split("");
    var out="";
    var count=0;
  for(var i=0;i<arr.length;i++){
      var curr=arr[i];
      count=0;
        for(var j=0;j<arr.length;j++){
          var next=arr[j];
            if(curr===next){
              count++;
          }
        
      }
    i+=count-1;
    if(count%2!==0)
      out+=curr;
 } 
if(out)
    console.log(out);
else
  console.log("Empty String");
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