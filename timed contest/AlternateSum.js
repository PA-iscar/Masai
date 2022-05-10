function runProgram(input){
    input = input.split("\n")
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let sum = 0;
    for(let i=0;i<n;i+=2){
        sum += arr[i]
    }
    console.log(sum)
}

runProgram(`7
4 5 5 5 6 6 7`);