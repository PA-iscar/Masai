var count = 0;
function subSeq(arr,str = ""){
    if(arr.length == 0){

        str = str.split(" ");
        if(str){
            let sum = 0;
            for(let i=0;i<str.length;i++){
                sum += Number(str[i]);
            }
            if(sum%2 != 0){
                count++;
            }
            console.log(str,sum);
        }
        return;
    }
    subSeq(arr.slice(1),str+" "+arr[0])
    subSeq(arr.slice(1),str);
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        count = 0;
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        subSeq(arr)
        console.log(count);
    }
}


runProgram(`2
4
4 3 2 -1
2
2 0`);