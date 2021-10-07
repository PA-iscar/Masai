function cacl(arr){
    var count = 1;
    var arr2 = new Array;
    for(var i=0;i<arr.length-1;i++){
            if(arr[i]==arr[i+1]){
                count++;
            }
            else{
                arr2.push(count);
                count = 1;
            }
    }
    var max = count;
    for(var i=0;i<arr2.length;i++){
        if(arr2[i]>max){
            max = arr2[i];
        }
    }
    return max

}

function runProgram(input){
    input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var arr = input[index++];
        console.log(cacl(arr));
    }
}

runProgram(`4
aaaaaa
aaabbb
asd
aabbcc`);