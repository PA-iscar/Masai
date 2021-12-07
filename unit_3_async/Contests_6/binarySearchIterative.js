function runProgram(input){
    input = input.split("\n");
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let k = dim[1];
    let arr = input[1].split(" ").map(Number);
    arr = arr.sort((a,b) => a-b);
    let l = 0;
    let r = n;
    let found = 0;

    while(!(l>=r)){
        let mid = Math.floor(l + ((r-l)/2));
        
        if(arr[mid] == k){
            found = 1;
            break;
        }
        else if(k < arr[mid]){
            r = mid;
        }
        else{
            l = mid+1;
        }
    }
    console.log(found?1:-1);
}

runProgram(`5 0
2 -2 0 3 4`);