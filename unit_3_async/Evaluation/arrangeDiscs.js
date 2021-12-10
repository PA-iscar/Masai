function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let R = [];
        let H = [];
        for(let i=0;i<n;i++){
            let dim = input[index++].split(" ").map(Number);
            R.push(dim[0])
            H.push(dim[1])
        }
        let tom = {};
        for(let i=0;i<n;i++){
            tom[R[i]] = H[i];
        }
        let r = [];
        let h = [];
        for(var key in tom){
            r.push(Number(key))
            h.push(tom[key]);
        }
        let height = 0;
        for(let i=n-1;i>=0;i--){
            if(i==n-1){
                height += h[i];
            }else{
                if(h[i] < h[i+1]){
                    height += h[i];
                }
            }
        }
        console.log(height)
    }
}

runProgram(`2
3
4 3
1 4
3 2
5
5 6
4 3
1 2
7 5
3 4`);