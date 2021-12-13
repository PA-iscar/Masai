function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let dim = input[index++].split(" ").map(Number);
        let n = dim[0];
        let k = dim[1];
        let arr = input[index++].split(" ").map(Number);
        // arr.pop()
        k = k%n;
        while(k--){
            arr.splice(0,0,arr.pop());
        }
        console.log(arr.join(" "))
    }
}

runProgram(`3
2 1
1 2
2 2
1 2
3 1
1 2 3`);