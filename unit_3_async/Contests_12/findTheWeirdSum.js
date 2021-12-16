let val = 0;

function subSeq(str, res, cur, run) {
    if (run) {
        return run
    }
    if (res.length != 0) {
        let sum = 0;
        let arr = res
        arr.forEach(el => {
            sum += Number(el);
        });
        if (sum == val) {
            run = 1;
        }
    }
    if (cur == str.length) {
        return run
    }
    for (let i = cur; i < str.length; i++) {
        res.push(str[i])
        run = subSeq(str, res, i + 1,run);
        res = res.slice(0, res.pop());
    }
    return run
}

function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        val = -1;
        for(let i=0;i<n;i++){
            if(arr[i] > val){
                val = arr[i];
            }
        }
        for(let i=0;i<n;i++){
            if(arr[i] == val){
                arr.splice(i,1)
                break
            }
        }
        let run = 0;
        run = subSeq(arr, [], 0, run);
        if(run){
            console.log("Yes");
        }else{
            console.log("No");
        }
    }
}

runProgram(`10
8
2 8 4 9 0 7 5 6
4
3 6 5 1
3
4 1 3
5
8 0 2 4 6
3
6 8 0
3
4 1 2
8
7 5 8 2 1 4 6 9
6
5 1 6 3 4 7
3
1 3 6
4
2 4 0 6`);