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
            st.push(arr[i]);
            res.push(arr[i]);
        }
        else{
            while(!st.isEmpty()){
                if(st.peek()>arr[i]){
                    break;
                }
                st.pop();
            }
            if(st.isEmpty()){
                st.push(arr[i]);
                res.push(arr[i]);
            }
        }
    }
    console.log(res.reverse().join(" "))
}


runProgram(`6
16 17 4 3 5 2`);