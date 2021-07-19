function test(out){
    debugger;
    var odd = 0;
    out = out.split(" ").map(Number);
    var len = out.length;
    for(var i = 0; i < len;i++){
        if(out[i]%2==0){
            
        }
        else
        {
            odd++;
        }
    }
    return odd;

}
function subArray(len,arr,key) {
    debugger;
    var out = "";
    var count = 0;
    for(var i=0;i<len;i++){
        for(var j=0;j<len;j++){
            var result = 0;
            for(var k=i;k<=j;k++){
                out += arr[k];
                if(k!=j){
                    out += " ";
                }
            }
            if(out){
                result =(test(out))
            }
            out = "";
            if(result == key){
                count++;
            }
        }
    }
    console.log(count);
}
function runProgram(input){
    debugger;
    var input = input.split("\n");
    var cons = input[0].split(" ").map(Number);
    
    var len = cons[0];
    var key = cons[1];
    var arr = input[1].split(" ").map(Number);
        subArray(len,arr,key);
}
runProgram(`3 1 
1 2 3`);