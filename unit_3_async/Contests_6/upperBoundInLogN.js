function bSearch(arr,k,l,r){
    let mid = Math.floor(l +((r-l)/2));

    if(k < arr[mid] && k >= arr[mid-1]){
        return mid
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
    console.log(bSearch(arr,k,0,n));
}

runProgram(`10 4
0 2 4 4 5 5 7 7 9 10`);