function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let dim = input[index++].split(" ").map(Number);
        let M = dim[0];
        let N = dim[1];
        let bo = input[index++].split(" ").map(Number);
        let gi = input[index++].split(" ").map(Number);

        bo = bo.sort((a,b) => a-b);
        gi = gi.sort((a,b) => a-b);
        for(let i=0;i<M;i++){
            if(bo[i]>gi[i]){
                ans = "YES"
            }
            else{
                ans = "NO"
                break;
            }
        }
        console.log(ans)
    }
}


runProgram(`1
4 5
2 5 6 8
3 8 5 1 7`);