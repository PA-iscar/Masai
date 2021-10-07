function merge(arr,l,mid,r){
    let n1 = mid-l+1;
    let n2 = r-mid;

    let a = new Array(n1);
    let b = new Array(n2);
    
    for(let i=0;i<n1;i++){
        a[i] = arr[l+i]
    }
    for(let i=0;i<n2;i++){
        b[i] = arr[mid+1+i]
    }
    let i=0;
    let j=0;
    let k=l;
    while(i<n1 && j<n2){
        if(a[i]<=b[j]){
            arr[k] = a[i]
            i++;
        }
        else{
            arr[k] = b[j];
            j++;
        }
        k++;
    }
    while(i<n1){
        arr[k] = a[i];
        i++;
        k++;
    }
    while(j<n2){
        arr[k] = b[j];
        j++;
        k++;
    }
    
}

function mergeSort(arr,l,r){
    if(l<r){
        let mid = Math.floor((l+r)/2);
        mergeSort(arr,l,mid)
        mergeSort(arr,mid+1,r);

        merge(arr,l,mid,r);
    }
}

function runProgram(input){
    input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    mergeSort(arr,0,n-1)
    console.log(arr);
}


runProgram(`5
3 5 0 9 8`);