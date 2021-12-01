function runProgram(input){
    input = input.split("\n");
    let ncr = input[0].split(" ").map(Number);
    let n = ncr[0];
    let c = ncr[1];
    let r = ncr[2];
    let arr = input[1].split(" ").map(Number);

    arr = arr.sort((a,b) => a-b);
    let sum = 0;
    for(let i=0;i<c;i++){
        sum += arr[i];
    }
    if(sum<=r){
        console.log("Party")
    }
    else{
        console.log("Sad")
    }
}


runProgram(`5 3 24
6 4 21 20 13`);