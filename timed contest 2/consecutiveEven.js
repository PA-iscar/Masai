const check = (A, n) => {
    for(let i=0;i<n;i++){
        if(isEven(A[i])){
            if(isEven(A[++i])){
                if(isEven(A[++i])){
                    console.log("Yes")
                    return
                }
            }
        }
    }
    console.log("No")
    return
}

const isEven = (num) => {
    return (num%2===0)
}

function runProgram(input){
    input = input.split("\n")
    let t = Number(input[0])
    let ind = 1;
    while(t--){
        let n = Number(input[ind++])
        let A = input[ind++].split(" ").map(Number);
        check(A,n)
    }
}


runProgram(`2
3
1 2 3
5
1 2 4 6 8`);