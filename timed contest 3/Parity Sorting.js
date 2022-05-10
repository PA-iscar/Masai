function runProgram(input){
    input = input.split("\n")
    let n = Number(input[0])
    let arr = input[1].split(" ").map(Number);
    let arrOdd = []
    let arrEven = []
    for(let i=0;i<n;i++){
        if(arr[i]%2==0){
            arrEven.push(arr[i])
        }
        else{
            arrOdd.push(arr[i])
        }
    }
    console.log([...arrOdd.sort((a,b)=>a-b),...arrEven.sort((a,b)=>a-b)].join(" "))
}


runProgram(`5
2 5 1 4 2`);