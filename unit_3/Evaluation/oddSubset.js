var count = 0;
function subSet(arr,res){
    if(arr.length<1){
        var s = (res.trim().split(" ").map(Number));
        var sum = 0;
        for(var i=0;i<s.length;i++){
            sum += s[i];
        }
        if(sum%2!=0){
            count++;
        }
        // console.log(res,s);
        return
    }
    subSet(arr.slice(1),res)
    subSet(arr.slice(1),res+" "+arr[0])
}

function runProgram(input){
    input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var res = "";
    subSet(arr,res);
    console.log(count);
}


runProgram(`2
2 4`);