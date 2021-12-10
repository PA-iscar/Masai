function runProgram(input){
    input = input.split("\n");
    let k = Number(input[0]);
    let arr1 = input[1].split(" ").map(Number);
    let arr2 = input[2].split(" ").map(Number);
    let tom = {};
    for(let i=0;i<arr1.length;i++){
        tom[arr2[i]] = arr1[i];
    }
    let arv = [];
    let dep = [];
    for(var key in tom){
        dep.push(Number(key));
        arv.push(tom[key]);
    }
    let count = 1;
    for(let i=0;i<dep.length;i++){
        if(arv[i+1]<=dep[i]){
            count++;
        }
    }
    if(count > k){
        console.log("Not Possible");
    }
    else{
        console.log("Possible");
    }
}

runProgram(`1
1 2 7
2 7 8`);