function merge(arr1,arr2,n){
    let res = [];
    let i = 0;
    let j = 0;
    while(res.length!=n+n){
        if(arr1[i] <= arr2[j]){
            res.push(arr1[i]);
            i++;
        }else if(arr1[i] > arr2[j]){
            res.push(arr2[j]);
            j++;
        }else if(i>=n && j<n){
            res.push(arr2[j])
            j++;
        }else if(i<n && j>=n){
            res.push(arr1[i]);
            i++;
        }
    }
    return res;
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr1 = input[1].split(" ").map(Number);
    let arr2 = input[2].split(" ").map(Number);
    let res = merge(arr1,arr2,n)
    console.log(res.join(" "))
}

runProgram(`4
1 5 7 9
2 4 6 8`);