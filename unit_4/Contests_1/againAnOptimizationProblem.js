function knapSack(p,w,n,s){
    if(n<0 || s<=0){
        return 0;
    }
    let inc = p[n] + knapSack(p,w,n-1,s-w[n]);
    
    let exc = knapSack(p,w,n-1,s);

    return Math.max(inc,exc)
}


function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let dim = input[index++].split(" ").map(Number);
        let s = dim[0]
        let n = dim[1]
        let w = [];
        let p = [];
        let wp = [];
        for(let i=0;i<n;i++){
            let op = input[index++].split(" ").map(Number);
            w.push(op[0]);
            p.push(op[1]);
        }
        console.log(knapSack(p,w,n-1,s))
    }
}

runProgram(`1
2000 20
1384 86
778 115
1794 135
1387 92
650 21
363 27
691 59
1764 126
541 26
1173 136
1212 168
568 29
1783 130
863 123
68 135
1930 2
23 58
1070 167
1394 56
1012 42`);