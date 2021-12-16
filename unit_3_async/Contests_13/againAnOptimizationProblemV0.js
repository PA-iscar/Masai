function runProgram(input) {
    input = input.trim().split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let dim = input[index++].split(" ").map(Number);
        let s = dim[0];
        let n = dim[1];
        let z = n;
        let wei = [];
        let val = [];
        while (z--) {
            let wv = input[index++].split(" ").map(Number);
            wei.push(wv[0]);
            val.push(wv[1]);
        }
        let wvr = [];
        for (let i = 0; i < n; i++) {
            let tom = {};
            tom['v'] = val[i];
            tom['w'] = wei[i];
            wvr.push(tom);
        }
        wvr.sort((a, b) => {
            let r1 = a.v / a.w;
            let r2 = b.v / b.w;
            return r2 - r1
        })
        let profit = 0;
        for(let i=0;i<n;i++){
            if(wvr[i].w <= s){
                s -= wvr[i].w;
                profit += wvr[i].v;
            }
        }
        console.log(profit)
        
    }
}

runProgram(`1
4 5
1 8
2 4
3 0
2 5
2 3`);