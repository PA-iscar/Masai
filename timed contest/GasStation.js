function runProgram(input){
    input = input.split("\n")
    let n = Number(input[0])
    let gas = input[1].split(" ").map(Number);
    let cost = input[2].split(" ").map(Number);

    let ans = -1
    let tank = 0;
    let ind = 0;
    for(let i=0;i<n;i++){
        if(gas[i]-cost[i]>0){
            ans = check(gas,cost,i,n)
            break
        }
    }
    console.log(ans)
}

function check(gas,cost,i,n){
    let ind = 0;
    let tank = 0
    while(ind<n){
        ind++;
        tank += gas[i]
        if(tank-cost[i] == 0){
            return i+1
        }
        if(tank-cost[i] < 0){
            return -1
        }
        if(tank-cost[i] > 0){
            tank-=cost[i]
        }
        i++
        if(i>=n){
            i=0
        }
    }
}

runProgram(`5
1 2 3 4 5
3 4 5 1 2`);