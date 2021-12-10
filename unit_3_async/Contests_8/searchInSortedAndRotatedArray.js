function bSearch(arr,k,l,r){
    if(l>=r){
        return -1;
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k){
        return mid;
    }
    else if(k < arr[mid]){
        return bSearch(arr,k,l,mid);
    }
    else{
        return bSearch(arr,k,mid+1,r);
    }  
}

function minRa(arr,l,r){
    let mid = parseInt(l + ((r-l)/2));
    if(l>=r){
        return mid;
    }
    if(arr[mid] >= arr[r]){
        return minRa(arr,mid+1,r);
    }
    if(arr[mid] < arr[r]){
        return minRa(arr,l,mid);
    }
}

function pSearch(arr,n,k){
    let pivot = minRa(arr,0,n-1);
    if(pivot == 0){
        return bSearch(arr,k,0,n);
    }
    if(arr[pivot] == k){
        return pivot;
    }
    if(arr[0] <= k){
        return bSearch(arr,k,0,pivot-1)
    }
    return bSearch(arr,k,pivot,n)
}

function runProgram(input){
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let k = dim[1];
    let arr = input[1].split(" ").map(Number);
    console.log(pSearch(arr,n,k))
}

runProgram(`15 14
10 11 12 13 14 15 -1 0 1 2 3 4 5 7 8`);