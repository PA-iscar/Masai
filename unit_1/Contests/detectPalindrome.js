function pal(arr,len){
    var arr1 = [];
    var j = 0;
    for(var i = len; i>=0; i--,j++){
       arr1[j] = arr[i];
    }
    arr1 = arr1.join("");
    arr = arr.join("");
    if(arr1 == arr)
      console.log("Yes");
    else
        console.log("No");

}

function runProgram(input){
  var input = input.split("").map(Number);
    pal(input,input.length-1);
}

runProgram(`1221`);