function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var n = dim[0];
    var l = dim[1];
    var arr = input[1].split(" ").map(Number);
    var tom = {};
    var max = 0;
    var val = 0;
    for(var i=0;i<n;i++){
        for(var j=i;j<n;j++){
            var sum = 0;
            for(var k=i;k<=j;k++){
                sum += arr[k];
            }
            if(sum%l!=0){
                var k=(j-i+1);
                tom[k] ? tom[k]++ : tom[k] = 1;
                if(Number(k)>=max){
                    max = Number(k);
                    val = tom[k];
                }
            }
        }
    }

    console.log(val);
}

runProgram(`5 3
2 4 3 5 1`);