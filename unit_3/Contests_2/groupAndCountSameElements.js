function makeNew(str){
    // if(str){
    var newStr = "";
    for(var i=0;i<str.length;i++){
        var counter = 0;
        var j=i;
        while(str[i] == str[j]){
            counter++;
            j++;
        }
        newStr += `${counter}${str[i]}`
        i=j-1;
    }
    // }
    // console.log(newStr);
    return newStr;
}

function runProgram(input){
    var input = input.split("\n").map(Number);
    var n = input[0];
    for(var i=1;i<=n;i++){
        var num = input[i];
        var arr = [];
        arr[0] = '0';
        arr[1] = '1';
        for(var j=2;j<=num;j++){
            arr[j] = makeNew(arr[j-1]);
        }
        console.log(arr[num]);
    }
}


runProgram(`3
1
2
5`);