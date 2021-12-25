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
    let str = input.split("");
    let n = str.length;

    for(let i=0;i<n;i++){
        let wrd = str[i];
        if (wrd.charCodeAt(0) >= 97 && wrd.charCodeAt(0) <= 122) {
            st.push(wrd);
        }
        else{
            let v2 = st.pop();
            let v1 = st.pop();
            st.push(`(${v1}${wrd}${v2})`)
        }
    }
    console.log(st.peek())
}

runProgram(`ab+c-def-*g/+hij/*+`);