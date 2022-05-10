function runProgram(input){
    input = input.split("\n")
    let n = Number(input[0])
    let arr = input[1].split(" ").map(Number);

    arr.sort((a,b) => a-b)
    for(let i=0;i<n;i++){
        let temp = arr[i]
        arr[i] = arr[i+1]
        arr[i+1] = temp
        i++
    }
    console.log(arr.join(" "))
}

runProgram(`10
9 8 4 10 3 6 5 7 1 2`);