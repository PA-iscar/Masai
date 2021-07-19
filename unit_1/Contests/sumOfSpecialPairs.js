function isPrime(num){
    debugger;
    var N = num;
    var isprime = false;
    if(N == 2 || N == 3){
        isprime = true;
    }
    else
        for(var i = 2; i < N;i++){
            if(N%i==0){
                isprime = false;
                break;
            }
            else
                isprime = true;
        }
    return isprime;
}

function runProgram(input){
    debugger;
    var input = input.split("\n");
    var len = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var diff = 0;
    var sum = 0;

    for(var i = 0; i < len; i++){
        for(var j = 0; j <len; j++){
            if(i<j){
                if(isPrime(j-i)){
                    var min,max;
                    if(arr[i]>arr[j]){
                        max = arr[i];
                        min = arr[j];
                    }
                    else{
                        min = arr[i];
                        max = arr[j];
                    }
                    diff = max - min ;
                    sum += diff;
                }
            }
        }
    }
    console.log(sum);
}

runProgram(`6
1 2 3 5 7 12`);