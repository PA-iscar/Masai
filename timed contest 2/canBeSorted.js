const isSorted = (arr) => {
    for(let i=0;i<arr.length-1;i++){
        if(arr[i+1]<arr[i]){
            return false
        }
    }
    return true
}

function runProgram(input){
    input = input.split("\n")
    let n = Number(input[0])
    let arr = input[1].split(" ").map(Number);
    let prev;
    let arr2 = [];
    for(let i=0;i<n-1;i++){
        if(arr[i+1]<arr[i]){
            arr2.push(arr[i])
            prev = arr[i+1]
        }
    }
    arr2.push(prev)

    for(let i=0;i<n;i++){
        if(arr[i] === arr2[0]){
            let l = i;
            let j = i;
            let isIt = true;
            for(let k=0;k<arr2.length;k++){
                if(arr2[k] !== arr[j++]){
                    isIt = false
                }
            }
            if(isIt){
                arr.splice(l,arr2.length,...arr2.reverse())
            }
        }
    }
    console.log(isSorted(arr)?"YES":"NO")
}



runProgram(`12
-1 0 1 2 3 10 9 7 6 4 11 12`);