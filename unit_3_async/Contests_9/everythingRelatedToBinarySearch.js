function uSearch(arr,k,l,r){
    let mid = Math.floor(l +((r-l)/2));

    if( arr[mid] == k && (arr[mid+1] > k || arr[mid+1] == null)){
        return mid;
    }
    else if(k < arr[mid]){
        return uSearch(arr,k,l,mid);
    }
    else{
        return uSearch(arr,k,mid+1,r);
    }  
}

function lSearch(arr,k,l,r){
    // if(l>=r){
    //     return -1;
    // }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k && (arr[mid-1] < k || arr[mid-1] == null)){
        return mid;
    }
    else if(k <= arr[mid]){
        return lSearch(arr,k,l,mid);
    }
    else{
        return lSearch(arr,k,mid+1,r);
    }  
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let k = Number(input[2]);
    let high = uSearch(arr,k,0,n-1);
    let low = lSearch(arr,k,0,n-1);
    console.log(low,high, (low==-1)?0:high-low+1)

}

runProgram(`5
1 2 3 4 5
5`);