function runProgram(input){
    input = input.trim().split("\n");
    let n = Number(input[0]);
    let s = input[1].split(" ").map(Number);
    let c = input[2].split(" ").map(Number);

    s = s.sort((a,b) => b-a);
    c = c.sort((a,b) => b-a);

    let sum = 0;
    for(let i=0;i<n;i++){
        sum += (c[i]*s[i]);
    }
    console.log(sum)
}


runProgram(`2
3 1
4 3`);