let result = ""
const print = (arr,rs,re,cs,ce) => {
    if(rs>re || cs>ce){
        return
    }
    for(let i=rs;i<=re;i++){
        result+=arr[i][cs]+" "
    }
    cs++;
    for(let i=cs;i<=ce;i++){
        result+=arr[re][i]+" "
    }
    re--;
    print(arr,rs,re,cs,ce)
}

function runProgram(input){
    input = input.split("\n")
    let t = Number(input[0])
    let ind = 1
    while(t--){
        let dim = input[ind++].split(" ").map(Number);
        let n = dim[0]
        let m = dim[1]
        result = "";
        let arr = new Array(n)
        for(let i=0;i<n;i++){
            arr[i] = input[ind++].trim().split(" ").map(Number);
        }
        print(arr,0,n-1,0,m-1)
        console.log(result.trim())
    }
}


runProgram(`2
3 3
1 2 3
4 5 6
7 8 9
4 3
1 2 3
4 5 6
7 8 9
10 11 12`);