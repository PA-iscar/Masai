function minRa(arr,l,r){
    let mid = parseInt(l + ((r-l)/2));
    if(l>=r || arr[mid] == arr[r]){
        return mid;
    }
    if(arr[mid] >= arr[r]){
        return minRa(arr,mid+1,r);
    }
    if(arr[mid] < arr[r]){
        return minRa(arr,l,mid);
    }
}

function isSorted(arr,n){
    let pivot = minRa(arr,0,n-1);
    if(pivot == 0){
        return "NO";
    }
    else{
        for(let i=0;i<pivot-1;i++){
            if(arr[i]>arr[i+1]){
                return "NO";
            }
        }
        for(let i=pivot;i<n-1;i++){
            if(arr[i]>arr[i+1]){
                return "NO";
            }
        }
    }
    return "YES";
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    console.log(isSorted(arr,n))
}

runProgram(`6
3 4 7 1 3 2`);