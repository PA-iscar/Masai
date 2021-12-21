function subSet(arr,n,res){
    if(n<0){
        return;
    }
    console.log(res)
    subSet(arr.slice(1),n-1,res+" "+arr[0]);
    res = res.slice(res.length-2);
    
}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let k = Number(input[2]);

    

    subSet(arr,n,"");

}

runProgram(`3
1 2 1
2`);