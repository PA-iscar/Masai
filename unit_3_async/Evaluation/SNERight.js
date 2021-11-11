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
const st = new Stack();

function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let res = [];
    for(let i=n-1;i>=0;i--){
        if(st.isEmpty()){
            res.push(-1);
            st.push(arr[i]);
        }
        else{
            while(!st.isEmpty()){
                if(arr[i]>st.peek()){
                    res.push(st.peek());
                    st.push(arr[i]);
                    break;
                }
                else{
                    st.pop();
                }
                if(st.isEmpty()){
                    res.push(-1);
                    st.push(arr[i]);
                    break;
                }
            }
        }
    }
    var count = 0;
    for(let i=0;i<res.length;i++){
        if(res[i] == -1){
            count++;
        }
    }
    console.log(count);
}


runProgram(`5
4 2 1 3 7`);