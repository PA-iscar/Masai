function bSearch (arr,l,r){

    if(l>=r){
        return arr[l]
    }

    let mid = parseInt(r+(l-r)/2);

    if(arr[mid]>arr[r]){
        if(arr[mid]>arr[mid+1]){
            return arr[mid]
        }
        else if(arr[mid]<=arr[mid+1]){
            return bSearch(arr,mid+1,r)
        }
    }
    else{
        if( arr[mid-1] && arr[mid] > arr[mid-1]){
            if(arr[l]<arr[mid]){
                return bSearch(arr,mid+1,r)
            }
            else{
                return bSearch(arr,l,mid-1)
            }
        }
        else if(!arr[mid-1]){
            return bSearch(arr,mid+1,r);
        }
        else{
            return bSearch(arr,l,mid-1);
        }
    }


}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);

    let result = bSearch(arr,0,n-1);
    console.log(result)
}


runProgram(`5
6 7 1 2 4`);