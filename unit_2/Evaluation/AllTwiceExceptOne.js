function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var tom = {};
        for(var i=0;i<n;i++){
            tom[arr[i]]?tom[arr[i]]++:tom[arr[i]]=1;
        }
        for(var key in tom){
            if(tom[key]==1){
                console.log(key);
            }
        }
    }
}

runProgram(`2
1
5
5
1 2 1 3 2
`);