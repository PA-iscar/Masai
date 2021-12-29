function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let arr = input[index++].trim().split(" ").map(Number);
        // let n = arr.length;

        for(let i=0;i<13;i++){
            if(arr[i] != i){
                console.log(i)
                break;
            }
        }
    }
}

runProgram(`2
0 1 2 3 4 5 6 7 8 9
1 2 3 5 7 8 9 10 11 12`);