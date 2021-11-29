function runProgram(input) {
    input = input.split("\n");
    let n = Number(input[0]);
    let t = n;
    let i = 1;
    let arr = [];
    while (t--) {
        arr.push(Number(input[i++]));
    }
    let pow = []
    let q = Number(input[i++]);
    t = q
    while (t--) {
        pow.push(Number(input[i++]));
    }

    let tom = {};

    for (i = 0; i < q; i++) {
        let count = 0;
        let sum = 0;
        for (let j = 0;j < n;j++){
            if(arr[j]<=pow[i]){
                count++;
                sum += arr[j];
            }
        }
        console.log(count,sum)
        tom[count] = sum;
    }
    // console.log(tom)
}


runProgram(`7
1 
2 
3 
4 
5 
6 
7
3
3
10
2`);