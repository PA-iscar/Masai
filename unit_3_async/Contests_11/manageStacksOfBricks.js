function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let x = Number(input[index++]);
        let y = Number(input[index++]);
        let ini = [];
        let fin = [];
        for(let i=0;i<n;i++){
            let dim= input[index++].split(" ").map(Number);
            ini.push(dim[0]);
            fin.push(dim[1]);
        }
        ini = ini.sort((a,b) => a - b);
        fin = fin.sort((a,b) => a - b);
        
        let cost = 0;

        for(let i=0;i<n;i++){
            if(ini[i] == fin[i]){

            }else if(ini[i] > fin[i]){
                cost += (y*(ini[i]-fin[i]))
            }else if(ini[i] < fin[i]){
                cost += (x*(fin[i]-ini[i]))
            }
        }
        console.log(cost)
    }
}

runProgram(`1
3
6
4
3 1
1 2
1 2`);