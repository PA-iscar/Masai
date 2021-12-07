var count = 0;

function bSearch(arr,k,l,r){
    if(l>=r){
        return false;
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k){
        while(arr[mid] == k){
            mid++;
        }
        mid--;
        while(arr[mid] == k){
            mid--;
            count++;
        }
        return true;
    }
    if(k < arr[mid]){
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

    bSearch(arr,k,0,n);
    console.log(count)
}

runProgram(`6 3
2 3 3 3 6 9`);