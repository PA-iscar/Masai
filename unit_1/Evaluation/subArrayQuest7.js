function test(out){
    var even = 0;
    var odd = 0;
    out = out.split(" ").map(Number);
    var len = out.length;
    for(var i = 0; i < len;i++){
        if(out[i]%2==0){
            even++;
        }
        else
        {
            odd++;
        }
    }
    return (odd>even);

}
function subArray(len,arr) {
    var out = "";
    var count = 0;
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            for(var k=i;k<=j;k++){
                out += arr[k];
                if(k!=j){
                    out += " ";
                }
            }
            if(out)
            if(test(out)){
                count++;
            }
            out = "";
        }
    }
    console.log(count);
}
function runProgram(input){
    var input = input.split("\n");
    var T = Number(input[0]);
    var index = 1;
    for(var i = 0; i<T;i++){
        var len = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        subArray(len,arr);
    }
}

runProgram(`1
5
1 2 3 4 5`);