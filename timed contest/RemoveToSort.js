function runProgram(input){
    input = input.split("\n")
    let n = Number(input[0])
    let arr = input[1].split(" ").map(Number);
    let prev = arr[0];
    for(let i=1;i<n;i++){
        if(arr[i]<prev){
            arr.splice(i,1)
            n-=1;
            i-=1;
        }
        prev = arr[i]
    }
    console.log(arr.join(" "))
}


runProgram(`10
1 2 4 3 5 7 8 6 9 10`);