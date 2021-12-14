function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    
    let cost = 0;
    let unit = 0;
    let price = -1;
    for(let i=0;i<n;i++){
        if(price == -1){ 
            price = arr[i];
        }
        if(price > arr[i]){
            cost += (price*unit);
            price = arr[i];
            unit = 0;
        }

        unit++;
    }
    cost += (price*unit);
    console.log(cost);
}

runProgram(`5
4 7 8 3 4`);