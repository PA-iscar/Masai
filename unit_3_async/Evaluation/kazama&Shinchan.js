function binary(l,r,arr,k){
    if(l==r){
        if(arr[l] == k){
            console.log(l)
            return;
        }
        console.log(l)
        return;
    }
    let mid = Math.floor(l+((r-l)/2));
    if(k<=arr[mid]){
        binary(l,mid,arr,k)
    }
    else if(k>arr[mid]){
        binary(mid+1,r,arr,k);
    }
}


function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].trim().split(" ").map(Number);
    let k = Number(input[2]);

    binary(0,n,arr,k);
}


runProgram(`4
1 2 3 4
5`);