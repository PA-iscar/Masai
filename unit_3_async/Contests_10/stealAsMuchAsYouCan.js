function runProgram(input){
    input = input.trim().split("\n");
    let C = Number(input[0]);
    let n = Number(input[1]);
    let val = input[2].trim().split(" ").map(Number);
    let wei = input[3].trim().split(" ").map(Number);
    let wvr = [];
    for(let i=0;i<n;i++){
        let tom = {};
        tom['v'] = val[i];
        tom['w'] = wei[i];
        wvr.push(tom);
    }
    wvr.sort((a,b) => {
        let r1 = a.v/a.w;
        let r2 = b.v/b.w;
        return r2 - r1
    })
    let profit = 0;
    
    for(let i=0;i<n;i++){
        if((C-wvr[i].w) >= 0){
            profit += wvr[i].v;
            C -= wvr[i].w;
        }else{
            profit += wvr[i].v*(C/wvr[i].w)
            C -= wvr[i].w * (C/wvr[i].w);
        }
    }
    console.log(Math.round(profit))
}

runProgram(`520
10
206 377 199 189 244 58 118 297 132 181
100 158 128 134 140 142 161 148 149 125`);