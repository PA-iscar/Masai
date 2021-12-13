function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        let k = Number(input[index++]);
        let val = -1;
        for(let i=0;i<n;i++){
            for(let j=0;j<n;j++){
                if(i!=j){
                    let s = arr[i] + arr[j];
                    if((s < k) && s > val){
                        val = s;
                    }
                }
            }
        }
        console.log(val)
    }
}

runProgram(`9
6
9 1 3 8 8 3
1
3
8 4 2
7
9
4 1 4 5 9 7 2 5 7
9
4
6 8 9 3
4
7
3 2 1 4 1 2 6
9
5
7 1 6 8 9
3
2
9 2
9
6
4 7 9 6 6 2
7
8
1 4 9 1 5 7 8 3
4`);