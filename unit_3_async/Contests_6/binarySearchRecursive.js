function bSearch(arr,k,l,r){
    if(l>=r){
        return false;
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k){
        return true;
    }
    else if(k < arr[mid]){
        return bSearch(arr,k,l,mid);
    }
    else{
        return bSearch(arr,k,mid+1,r);
    }  
}

function runProgram(input){
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let k = dim[1];
    let arr = input[1].split(" ").map(Number);
    arr = arr.sort((a,b) => a-b);
    console.log(bSearch(arr,k,0,n)?1:-1);
}

runProgram(`5 2
8 4 1 9 11`);