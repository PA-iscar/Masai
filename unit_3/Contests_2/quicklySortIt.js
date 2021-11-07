function quick(arr,l,r){
    if(l<r){
        p = partition(arr,l,r);
        quick(arr,l,p-1);
        quick(arr,p+1,r);
    }
}

function partition(arr,l,r){
    let pivot = arr[r];
    let i = l-1;
    for(let j=l;j<r;j++){
        if(arr[j]<pivot){
            i+=1;
            let temp = arr[j];
            arr[j] = arr[i];
            arr[i] = temp;
        }
    }
    let temp = arr[i+1];
    arr[i+1] = arr[r];
    arr[r] = temp;
    return i+1
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);

    quick(arr,0,n-1);
    console.log(arr.join(" "));
}


runProgram(`5
3 5 0 9 8`);