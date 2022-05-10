function runProgram(input){
    input = input.split("\n")
    let dim = input[0].split(" ").map(Number);
    let n = dim[0]
    let w = dim[1]
    let arr = input[1].split(" ").map(Number);
    arr.sort((a,b) => a-b)
    let count = 0;
    let sum = 0;
    for(let i=0;i<n;i++){
        sum += arr[i]
        if(sum<=w){
            count++
        }
        else{
            break
        }
    }
    console.log(count-1)
}


runProgram(`4 20
3 10 4 4`);