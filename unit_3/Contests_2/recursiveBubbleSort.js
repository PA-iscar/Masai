function bubble(arr,n){
    if(n==1){
        console.log(arr.join(" "));
        return
    }
    for(var i=0;i<n-1;i++){
        if(arr[i]>arr[i+1]){
            let temp = arr[i];
            arr[i] = arr[i+1];
            arr[i+1] = temp;
        }
    }
    return bubble(arr,n-1)
}

function runProgram(input){
    input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);

    bubble(arr,n);
}


runProgram(`5
3 5 0 9 8`);