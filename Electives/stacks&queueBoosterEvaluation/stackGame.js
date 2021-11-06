class Stack{
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count-1;
    }

    pop() {
        if(this.count == 0){
            return undefined;
        }
        let deleteItem = this.items[this.count - 1];
        this.count--;
        return deleteItem;
    }

    peek() {
        return this.items[this.count - 1];
    }

    top() {
        return this.count - 1;
    }

    isEmpty() {
        return this.count == 0;
    }

    size() {
        return this.count;
    }

    print() {
        let str = '';
        for(let i=0;i<this.count;i++){
            str += this.items[i] + ' ';
        }
        return str;
    }

    clear() {
        this.items = [];
        this.count = 0;
        return this.items;
    }
}


function runProgram(input){
    input = input.split("\n");
    let T = Number(input[0]);
    let index = 1;
    while(T--){
        let score = 0;
        const st = new Stack();
        let vals = input[index++].split(" ").map(Number);
        let N = vals[0];
        let M = vals[1];
        let S = input[index++];
        for(let i=0;i<(N+M);i++){
            if(S[i] == "("){
                st.push(S[i]);
            }
            else if(S[i] == ")"){
                if(st.isEmpty()){
                    score = -1;
                    break;
                }
                else{
                    st.pop();
                }
            }
        }
        if(score == -1){
            console.log("no");
        }
        else if(st.size() == 0){
            console.log("yes");
        }
        else {
            console.log("no");
        }
        
    }
}


runProgram(`2
2 3
()())
1 1
()`);