var ans = -1;
function bSearch(k,l,r){
    if(k==1){
        return 1
    }
    let mid = parseInt(l +((r-l)/2));
    if(l>=r){
        return ans;
    }
    if(mid*mid == k){
        return mid;
    }
    else if(k < mid*mid){
        return bSearch(k,l,mid);
    }
    else{
        ans = mid;
        return bSearch(k,mid+1,r);
    }
}

function runProgram(input){
    input = input.split("\n").map(Number);
    let index = 0;
    let t = input[index++];
    while(t--){
        let n = input[index++];
        console.log(bSearch(n,0,n)?bSearch(n,0,n):ans);
    }
}


runProgram(`2
36
1`);