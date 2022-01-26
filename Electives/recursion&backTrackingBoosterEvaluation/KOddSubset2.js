let count = 0;
function subSet(arr,res,k){
    if(arr.length==0){
        let s = (res.trim().split(" ").map(Number));
        let odds = 0;
        for(let i=0;i<s.length;i++){
            if(isOdd(s[i])){
                odds++;
            }
        }
        if(odds == k){
            count++;
        }

        return
    }
    subSet(arr.slice(1),res,k)
    subSet(arr.slice(1),res+" "+arr[0],k)
}

function isOdd(num){
    return num%2 != 0
}


function runProgram(input){
    input = input.split("\n")
    let t = Number(input[0])
    let ind = 1;
    while(t--){
        count = 0
        let dim = input[ind++].split(" ").map(Number)
        let n = dim[0]
        let k = dim[1]

        let arr = input[ind++].split(" ").map(Number);
        subSet(arr,"",k);
        
        console.log(count);
    }
}


runProgram(`2
4 2
4 3 2 1
2 1
2 3`);