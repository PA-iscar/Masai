var count = 0;

function subSet(arr, res){
    if(arr.length==0){
        let arr2 = res.split(" ").map(Number);
        let sum = 0;
        for(let i=0;i<arr2.length;i++){
            sum+=arr2[i];
        }
        if(sum%2 != 0){
            count++;
        }
        return
    }
    subSet(arr.slice(1), res);
    subSet(arr.slice(1), res+" "+arr[0]);

}

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let res = "";
    subSet(arr,res);
    console.log(count);
}

runProgram(`3
2 3 1`);