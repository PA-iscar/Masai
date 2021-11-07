function subString(str){
    let res = [];
    for(let i=0;i<str.length;i++){
        for(let j=i+1;j<str.length+1;j++){
            res.push(str.slice(i,j));
        }
    }
    return palindrome(res);
}

function palindrome(arr) {
    let res = [];
    for(let i=0;i<arr.length;i++){
        let str = arr[i];
        let l = 0;
        let r = str.length-1;
        while(l<=r){
            if(str[l] == str[r]){
                flag = 1;
            }
            else{
                flag = 0;
                break;
            }
            l++;
            r--;
        }
        if(flag){
            res.push(str);
        }
    }
    res.sort()
    res.push(-1);
    res = res.join(" ");
    return res
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let str = input[index++];
        // subString(str);
        console.log(subString(str));
    }
}

runProgram(`2
3
abc
4
aaaa`);