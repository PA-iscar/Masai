function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var n=dim[0];
    var r=dim[1];
    var arr=input[1].split(" ").map(Number);
    var sum=0;
    var count = 0;

    for(var i=0;i<n;i++){
        for(var j=0;j<n;j++){
            if((j-i)>=n-l)
            for(var k=i;k<=j;k++){
                sum+=arr[k];
            }
            if(sum%r!=0){
                count++;
            }
            sum=0;
        }
    }
    console.log(count);
}

runProgram(`4 3
2 3 4 6`);