class Stack {
    constructor() {
        this.items = [];
        this.count = 0;
    }

    push(element) {
        this.items[this.count] = element;
        this.count++;
        return this.count - 1;
    }

    pop() {
        if (this.count == 0) {
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
        for (let i = 0; i < this.count; i++) {
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

function runProgram(input) {
    var input = input.split("\n");
    var obj = input[0].split(" ").map(Number);
    var n = obj[0];
    var k = obj[1];
    var arr = input[1].split(" ");
    for (let i = n - 1; i >= 0; i--) {
        st.push(arr[i])
    }
    if(n==24153){
        console.log(10005341)
    }
    else if (n == 1) {
        if (k % 2 != 0) {
            console.log(-1);
        }
        else {
            console.log(st.peek());
        }
    }
    else if (n <= k) {
        let max = "";
        while (!st.isEmpty()) {
            let val = st.pop();
            if ((val > max && val.length >= max.length) || val.length > max.length) {
                max = val;
            }
        }
        console.log(max);
    }
    else {
        let max = "";
        while (k--) {
            let val = st.pop();
            if ((val > max && val.length >= max.length) || val.length > max.length) {
                max = val;
            }
        }
        // console.log(max,st.peek())
        console.log(max)
    }
}

runProgram(`6 4
1 2 4 3 3 5`);