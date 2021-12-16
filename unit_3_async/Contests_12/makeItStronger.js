function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr1 = input[1].split(" ").map(Number);
    arr1.sort((a,b) => a - b)
    let arr = [];
    // let arr2 = [];
    // console.log(arr)
    let i=0;
    let j=n-1;
    while(i<j){
        arr.push(arr1[i])
        arr.push(arr1[j])
        i++;
        j--;
    }
    // console.log(arr)
    let str = []
    for(let i=0;i<n;i++){
        if(i==n-1){
            str.push(Math.abs(arr[i] - arr[0]))
            break;
        }
        str.push(Math.abs(arr[i] - arr[i+1]))
    }
    let sum = 0
    str.forEach(el => {
        sum += Number(el);
    })
    console.log(sum)
}

runProgram(`4
1 2 4 8`);