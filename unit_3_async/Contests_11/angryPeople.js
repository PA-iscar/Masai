function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    arr = arr.sort((a,b) => a - b);
    let r1 = [];
    let r2 = [];
    let tp1 = 1;
    let tp2 = 0;
    for(let i=0;i<n;i++){
        if(i==0 || i==n-1){
            r1.push(arr[i]);
            r2.push(arr[i]);
        }
        else if(tp1){
            r1.push(arr[i]);
            tp1 = 0;
            tp2 = 1;
        }
        else if(tp2){
            r2.push(arr[i]);
            tp2 = 0;
            tp1 = 1;
        }
    }

    let d = -1;

    for(let i=0;i<r1.length-1;i++){
        let val = Math.abs(r1[i] - r1[i+1]);
        if(val > d){
            d = val;
        }
    }
    for(let i=0;i<r2.length-1;i++){
        let val = Math.abs(r2[i] - r2[i+1]);
        if(val > d){
            d = val;
        }
    }
    console.log(d)
}

runProgram(`4
5 10 6 8`);