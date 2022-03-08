function runProgram(input){
    input = input.split("\n")
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let sum = 0;
    arr.sort((a,b) => a-b);
    while(arr.length>0){
        console.log(arr)
        arr.splice(arr.length-1,1)
        console.log(arr)
        sum += arr.splice(arr.length-1,1)[0]
        console.log(arr)
        arr.splice(0,1)
        console.log(arr)
    }
    console.log(sum)
}

runProgram(`12
5 1 3 5 3 21 4 7 54 3 2 123`);