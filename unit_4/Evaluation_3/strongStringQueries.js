function check(st,end,arr){
    let count = 0;
    for(let i=st;i<=end;i++){
        if(isVowel(arr[i][0]) && isVowel(arr[i][arr[i].length-1])){
            count++;
        }
    }
    return count
}

function isVowel (ch) {
    if(ch == 'a' || ch == 'A' || ch == 'e' || ch == 'E' || ch == 'i' || ch == 'I' || ch == 'o' || ch == 'O' || ch == 'u' || ch == 'U'){
        return true
    }
    return false
}   

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let strArr = input[1].split(" ");
    let q = Number(input[2]);
    let ind = 3;
    while(q--){
        let dim = input[ind++].split(" ").map(Number);
        let st = dim[0]-1;
        let end = dim[1]-1;

        let result = check(st,end,strArr);
        console.log(result)
    }
}


runProgram(`5
aba suna oua tes aba
5
1 5
2 4
1 3
3 5
5 5`);