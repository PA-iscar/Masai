function big(arr){
    var n=arr[0];
    for(var i=0; i < arr.length; i++){
        if(arr[i]>n){
            n=arr[i];
        }
    }
    for(var i=0; i < arr.length; i++){
        if(arr[i]==n){
            return i;
        }
    }
}

function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var count = [];
    var j=0;
    var num = arr[0];
    for(var i=0; i<n;i++){
        count[i]=0;
    }
    for(var i = 0; i < n; i++){
        if(arr[i]==num){
            count[j]++;
        }
        else{
            j++;
            num=arr[i--];
        }

    }
    var l=big(count);

        console.log(arr[l]);
}

runProgram(`5
1 2 3 4 5`);