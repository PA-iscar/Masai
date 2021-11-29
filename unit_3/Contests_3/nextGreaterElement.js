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
    let st = new Stack();
    if(n==0 || n==1){
        return -1
    }
    let res = [];
    for (let i = n - 1; i >= 0; i--) {
        do {
            if (st.peek() > arr[i]) {
                res.push(st.peek());
                st.push(arr[i]);
                break;
            }
            st.pop();
            if (st.isEmpty()) {
                res.push(-1);
                st.push(arr[i]);
                break;
            }
        } while (!st.isEmpty())

    }
    res = res.reverse();
    return res.join(" ");
}

function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;

    while (t--) {
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);
        nge(arr, n);
        console.log(nge(arr, n));
    }
}


runProgram(`10
6
8 11 1 20 15 19
1
15
9
2 5 1 6 2 4 4 5 5
6
8 8 10 3 8 3
11
16 10 8 10 9 8 15 9 4 16 15
2
4 2
11
6 9 10 5 6 3 9 2 10 11 4
13
11 1 6 12 12 1 14 12 10 12 7 11 15
12
3 1 1 3 2 5 6 4 3 3 5 4
14
9 8 9 8 4 4 8 9 4 5 5 4 3 3`);