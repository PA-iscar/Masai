function bSearch(arr,l,r,k){
    let mid = parseInt(l + ((r-l)/2));
    if(l>=r){
        return mid;
    }
    if(k == arr[mid] && arr[mid] != arr[mid-1]){
        return mid
    }
    if(k <= arr[mid]){
        return bSearch(arr,l,mid,k);
    }
    else{
        return bSearch(arr,mid+1,r,k);
    }
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let t = Number(input[2]);
    let index = 3;
    arr = arr.sort((a,b) => a - b);
    while(t--){
        let q = Number(input[index++]);
        let res = bSearch(arr,0,n,q);
        console.log(res);
    }
}


runProgram(`5
1 4 6 5 6
4
2
3
6
11`);