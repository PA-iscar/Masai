function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ");
    let dep = input[2].split(" ");
    let arr2 = [];
    let dep2 = [];
    for(let i=0;i<n;i++){
        let str = arr[i];
        let res = "";
        for(let j=0;j<str.length;j++){
            if(str[j] >= '0' && str[j] <= '9'){
                res += str[j];
            }
        }
        arr2.push(Number(res));

        str = dep[i];
        res = "";
        for(let j=0;j<str.length;j++){
            if(str[j] >= '0' && str[j] <= '9'){
                res += str[j];
            }
        }
        dep2.push(Number(res));
    }

    console.log(arr2,dep2);
    // console.log(n,arr,dep)
}

runProgram(`6
9:00 9:40 9:50 11:00 15:00 18:00
9:10 12:00 11:20 11:30 19:00 20:00`);