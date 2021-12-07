function bSearch(arr,k,l,r){
    let mid = Math.floor(l +((r-l)/2));
    if(l>=r){
        return mid;
    }

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

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let k = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        let n = arr.length;
        let val = bSearch(arr,k,0,n);
        // console.log(val)
        if(val == 0){
            console.log("Front" +" "+ arr[0]);
        }
        else if(val == n){
            console.log(arr[n-1] +" "+ "Last");
        }
        else{
            console.log(arr[val-1] +" "+ arr[val])
        }

    }
}


runProgram(`3
3
1 4 5 6 8 9
5 
1 2 6 7 8
1
2 3 4 5 6`);