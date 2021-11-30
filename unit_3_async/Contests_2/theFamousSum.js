function superSum(n,k){
    val = add(String(n))*k
    return add(String(val));
}

function add(n){
    let sum = 0;
    for(let i=0;i<n.length;i++){
        sum += Number(n[i]);
    }
    if(sum>9){
        return add(String(sum));
    }
    return sum;
}

function runProgram(input){
    input = input.split(" ");
    let n = input[0];
    let k = Number(input[1]);

    console.log(superSum(n,k));
}


runProgram(`3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736 100000`);