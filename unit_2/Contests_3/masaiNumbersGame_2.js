function runProgram(input){
    input = input.trim().split("\n");
    const t = Number(input.shift());
    const arr = input.map(Number);
    let pointer = 0;
    let ngp = 1;
    let nsp = 1;
    let cn = -1;
    let result = [];
    while(pointer < t){
        while(arr[ngp]<=arr[pointer]){
            ngp++;
            nsp++;
            cn = arr[ngp];
        }
        if(ngp === t && nsp === t){
            cn = -1;
        }
        while(arr[nsp] >= arr[ngp]){
            nsp++;
            cn = arr[nsp];
        }
        if(nsp === t){
            cn = -1;
        }
        result.push(cn);
        pointer++;
        ngp = pointer+1;
        nsp = pointer+1;
    }
    console.log(result.join(" "));
}


runProgram(``);