function superSum(p){
    if(p.length == 1){
        return p;
    }
    // p = p.split("").map(Number);
    let sum = 0;
    for(let i=0;i<p.length;i++){
        sum += Number(p[i]);
    }
    sum = sum.toString();

    return superSum(sum);
}

function runProgram(input){
    input = input.split(" ");
    let n = input[0];
    let k = input[1];

    let p = n;
    p = superSum(p);
    p = p*k;
    p = p.toString();
    console.log(superSum(p));
}


runProgram(`3546630947312051453014172159647935984478824945973141333062252613718025688716704470547449723886626736 100000`);