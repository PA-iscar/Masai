function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        arr.sort((a,b) => a - b);
        let res = 0;
        for(let i=0;i<(2*n)-1;i+=2){
            if(arr[i] != arr[i+1]){
                res = arr[i];
                break;
            }
        }
        console.log(res)
    }
}


runProgram(`1
5
1 2 1 3 4 4 5 2 3`);