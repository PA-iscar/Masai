function now(x,y,n){
    let sum = 0;
    for(let i=0;i<n;i++){
        let energy = 0;
        for(let j=i;j<n;j++){
            energy += Number(y[j]);
            if(x[j]+energy >= 100000){
                sum++;
                break;
            }
            else if(x[j]+energy >= x[j+1]){
                energy -= x[j+1]-x[j]
            }else{
                break;
            }
        }
    }
    return sum;
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let x = input[index++].split(" ").map(Number);
        let y = input[index++].split(" ").map(Number);
         
        console.log(now(x,y,n))
    }
}

runProgram(`2
3
99991 99994 99997
3 3 3
3
1 4 7
3 3 3`);