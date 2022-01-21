function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let cBag = input[1].split(" ").map(Number);
    let hBag = input[2].split(" ").map(Number);
    let limit1 = 15;
    let limit2 = 7;

    for(let i=0;i<n;i++){
        if(cBag[i]<=limit1 && hBag[i] <= limit2){
            console.log("Boarding")
        }
        else {
            console.log("Stop")
        }
    }
}

runProgram(`4
12 14 15 6
8 5 7 4`);