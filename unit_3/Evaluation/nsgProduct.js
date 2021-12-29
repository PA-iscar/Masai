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

function nge(arr, n) {
    if (n == 0 || n == 1) {
        return -1
    }
    let st = new Stack();
    let st1 = new Stack();
    let res = [];
    for (let i = n - 1; i >= 0; i--) {
        do {
            if (st.peek() > arr[i]) {
                while (st1.peek() != st.peek() && !st1.isEmpty()) {
                    st1.pop();
                }
                do {
                    if (st1.peek() < st.peek()) {
                        res.push(st1.peek());
                        st1.push(st.peek());
                        break;
                    }
                    st1.pop();
                    if (st1.isEmpty()) {
                        res.push(-1);
                        st1.push(st.peek());
                        break;
                    }
                } while (!st1.isEmpty())
                st.push(arr[i]);
                st1.push(arr[i]);
                break;
            }
            st.pop();
            if (st.isEmpty()) {
                res.push(-1);
                st.push(arr[i]);
                st1.push(arr[i]);
                break;
            }
        } while (!st.isEmpty())
    }
    return res;
}

function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        let res = nge(arr, n);
        let prod = 1;
        res.forEach(el => {
            prod*=el;
        });
        console.log(prod)
    }
}

runProgram(`2
5
9 4 2 3 9
6
9 2 1 1 10 7`);