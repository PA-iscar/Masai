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

    for(let i=0;i<n;i++){
        if(st.isEmpty()){
            res.push(-1);
            st.push(arr[i]);
        }else{
            if(st.peek()<arr[i]){
                res.push(st.peek());
                st.push(arr[i]);
            }
            else{
                while(!st.isEmpty() && st.peek()>=arr[i]){
                    st.pop();
                }
                if(st.isEmpty()){
                    res.push(-1);
                    st.push(arr[i]);
                }
                else if(st.peek()<arr[i]){
                    res.push(st.peek());
                    st.push(arr[i]);
                }
            }
        }
    }
    console.log(res.join(" "))
}


runProgram(`8
39 27 11 4 24 32 32 1`);