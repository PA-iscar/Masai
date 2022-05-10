function runProgram(input){
    input = input.split("\n")
    let v1 = input[0].split(".").map(Number).join("")
    let v2 = input[1].split(".").map(Number).join("")
    console.log(v1<v2?"Version 1 is the latest.":v2<v1?"Version 2 is the latest.":"Both Versions are equal.")
}


runProgram(`1.0.33
1.0.21`);