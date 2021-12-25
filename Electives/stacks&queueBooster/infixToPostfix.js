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
    let str = input.split("");
    let n = str.length;
    let res = [];
    for (let i = 0; i < n; i++) {
        let wrd = str[i];
        if (wrd.charCodeAt(0) >= 97 && wrd.charCodeAt(0) <= 122) {
            res.push(wrd);
        }
        else {
            if (st.isEmpty()) {
                st.push(wrd);
            }
            else {
                if (wrd == '+' || wrd == '-') {
                    if (st.peek() == '+' || st.peek() == '-') {
                        res.push(st.pop());
                        st.push(wrd);
                    }
                    else if (st.peek() == '(') {
                        st.push(wrd);
                    }
                    else if (st.peek() == '*' || st.peek() == '/') {
                        res.push(st.pop())
                        if (st.peek() == '+' || st.peek() == '-') {
                            res.push(st.pop())
                        }
                        st.push(wrd);
                    }
                    else if (st.peek() == '^') {
                        res.push(st.pop())
                        if (st.peek() == '*' || st.peek() == '/') {
                            res.push(st.pop())
                            if (st.peek() == '+' || st.peek() == '-') {
                                res.push(st.pop())
                            }
                        }
                        else if (st.peek() == '+' || st.peek() == '-') {
                            res.push(st.pop())
                        }
                        st.push(wrd);
                    }
                }
                else if (wrd == '*' || wrd == '/') {
                    if (st.peek() == '+' || st.peek() == '-') {
                        st.push(wrd);
                    }
                    else if (st.peek() == '*' || st.peek() == '/') {
                        res.push(st.pop());
                        st.push(wrd);
                    }
                    else if (st.peek() == '(') {
                        st.push(wrd);
                    }
                    else if (st.peek() == '^') {
                        res.push(st.pop())
                        if(st.peek() == '*' || st.peek() == '/'){
                            res.push(st.pop())
                        }
                        st.push(wrd);
                    }
                }
                else if (wrd == '(' || wrd == ')') {
                    if (wrd == '(') {
                        st.push(wrd);
                    }
                    else if (wrd == ')') {
                        while (st.peek() != '(') {
                            res.push(st.pop())
                        }
                        st.pop();
                    }
                }
                else if (wrd == '^') {
                    if (st.peek() == '+' || st.peek() == '-' || st.peek() == '*' || st.peek() == '/') {
                        st.push(wrd);
                    }
                    else if (st.peek() == '^') {
                        res.push(st.pop());
                        st.push(wrd);
                    }
                    else if (st.peek() == '(') {
                        st.push(wrd);
                    }
                }
            }
        }

    }
    while (!st.isEmpty()) {
        res.push(st.pop())
    }
    console.log(res.join(""))
}

runProgram(`a+b*(c^d-e)^(f+g*h)-i`);
