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

function b2Search(mat,k,l,r,c){
    if(l>=r){
        return false;
    }
    let mid = Math.floor(l + ((r-l)/2));
    
    if(k >= mat[mid][0] && k <= mat[mid][c-1]){
        return bSearch(mat[mid],k,0,c);
    }
    else if( k < mat[mid][0]){
        return b2Search(mat,k,l,mid,c);
    }
    else{
        return b2Search(mat,k,mid+1,r,c);
    }
    
}

function runProgram(input){
    input = input.trim().split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let dim = input[index++].trim().split(" ").map(Number);
        let r = dim[0];
        let c = dim[1];
        let mat = new Array(r);
        for(let i=0;i<r;i++){
            mat[i] = new Array(c);
            mat[i] = input[index++].trim().split(" ").map(Number);
        }
        let k = Number(input[index++]);

        console.log(b2Search(mat,k,0,r,c))

    }
}


runProgram(`2
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16 
13
4 4
1 2 3 4
5 6 7 8
9 10 11 12
13 14 15 16 
17`);