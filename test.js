function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        
        let i=0;
        let j=n-1;

        let c1 = 0;
        let c2 = 0;
        
        let count1 = 0;
        let count2 = 0;

        while(i<=j){
            if(c1>=arr[i]){
                c1 = c1-arr[i];
                count1++;
                i++;
            }

            if(c2>=arr[j]){
                c2 = c2-arr[j];
                count2++;
                j--;
            }
            c1+=2;
            c2+=1;
        }
        console.log(count1,count2);
    }
}

runProgram(`1
5
2 9 8 2 7`);