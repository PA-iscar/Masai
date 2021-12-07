function bSearch(arr,k,l,r){
    let mid = Math.floor(l +((r-l)/2));
    if(l>=r){
        return mid;
    }

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

function ubSearch(arr,k,l,r){
    if(l>=r){
        return mid
    }
    let mid = Math.floor(l +((r-l)/2));

    if(k < arr[mid] && k >= arr[mid-1]){
        return mid
    }
    else if(k < arr[mid]){
        return ubSearch(arr,k,l,mid);
    }
    else{
        return ubSearch(arr,k,mid+1,r);
    }  
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    arr = arr.sort((a,b) => a-b)
    let t = Number(input[2]);
    let index = 3;
    while(t--){
        let q = input[index++].split(" ").map(Number);
        let i = q[0];
        let x = q[1];
        if(i==0){
            console.log(n-bSearch(arr,x,0,n));
        }
        if(i==1){
            console.log(n-ubSearch(arr,x,0,n));
        }
    }
}

runProgram(`4
1 2 3 4
3
0 5
1 3
0 3`);