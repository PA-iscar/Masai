function bSearch(arr,k,l,r){
    if(l>=r){
        return '-1';
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k && (arr[mid-1] < k || arr[mid-1] == null)){
        return mid;
    }
    else if(k <= arr[mid]){
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

runProgram(`7 1
1 1 4 5 6 7 8`);