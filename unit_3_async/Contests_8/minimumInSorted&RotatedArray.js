function pSearch(arr,l,r){
    let mid = parseInt(l + ((r-l)/2));
    if(l>=r){
        return mid;
    }
    if(arr[mid] >= arr[r]){
        return pSearch(arr,mid+1,r);
    }
    if(arr[mid] < arr[r]){
        return pSearch(arr,l,mid);
    }
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    console.log(arr[pSearch(arr,0,n-1)])
}
runProgram(`5
1 2 3 4 5`);