function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let dim = input[index++].split(" ").map(Number);
        let n = dim[0];
        let k = dim[1];
        let arr = input[index++].split(" ").map(Number);
        
        let res = [];

        
        for(let i=0;i+k<=n;i++){
            
            let max = Number.MIN_VALUE
            for(let j=i;j<i+k;j++){
                if(arr[j]>max){
                    max = arr[j];
                }
            }
            res.push(max)   
        }
        console.log(res.join(" "))
    }
}


runProgram(`1
9 3
1 2 3 1 4 5 2 3 6`);