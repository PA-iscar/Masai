function runProgram(input){
    input = input.split("\n");
    let nk = input[0].split(" ").map(Number);
    let n = nk[0]
    let k = nk[1]
    let arr = input[1].split(" ").map(Number);

    arr = arr.sort((a,b) => a-b);
    let count = 0
    for(let i=0;i<n;i++){
        if(k-arr[i]>=0){
            count++;
            k -= arr[i];
        }else{
            break;
        }
    }
    console.log(count)
}


runProgram(`4 10
5 4 2 4`);