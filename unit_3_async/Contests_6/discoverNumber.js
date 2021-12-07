function bSearch(arr,k,l,r){
    if(l>=r){
        return false;
    }
    let mid = Math.floor(l +((r-l)/2));

    if(arr[mid] == k){
        return true;
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
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let t = dim[1];
    let arr = input[1].split(" ").map(Number);
    let index = 2;
    arr = arr.sort((a,b) => a - b);
    while(t--){
        let k = Number(input[index++]);
        console.log(bSearch(arr,k,0,n)? "YES" : "NO");
    }
}


runProgram(`5 10
50 40 30 20 10
10
20
30
40
50
60
70
80
90
100`);