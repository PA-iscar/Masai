function runProgram(input) {
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ");
    let dep = input[2].split(" ");

    for (let i = 0; i < n; i++) {
        arr[i] = Number(arr[i].split(":").join(""));
        dep[i] = Number(dep[i].split(":").join(""));
    }

    arr.sort((a,b) => a - b);
    dep.sort((a,b) => a - b);
    // console.log(arr2,dep2);
    let i=0;
    let j=0;
    let count = 0;
    let ans = -1;
    while(i<n && j<n){
        if(arr[i] < dep[j]){
            count++
            i++;
        }
        if(dep[j] <= arr[i]){
            if(count > ans){
                ans = count;
            }
            count--;
            j++;
        }
    }
    if(count > ans){
        ans = count;
    }
    console.log(ans)
}

runProgram(`6
9:05 10:40 10:50 10:10 11:00 11:15
9:10 11:00 11:20 11:30 13:00 20:00`);