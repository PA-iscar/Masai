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
        if(this.isEmpty())
            return -1;
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

class Queue {
    constructor() {
        this.items = [];
    }
    enqueue(element) {
        this.items.push(element);
    }
    dequeue() {
        if (this.isEmpty())
            return "Underflow";
        return this.items.shift();
    }
    front() {
        if (this.isEmpty())
            return -1;
        return this.items[0];
    }
    isEmpty() {
        return this.items.length == 0;
    }
    printQueue() {
        var str = "";
        for (var i = 0; i < this.items.length; i++)
            str += this.items[i] + " ";
        return str;
    }
}

function runProgram(input){
    input = input.split("\n");
    const st = new Stack();
    const line = new Queue();
    let Q = Number(input[0]);
    let index = 1;
    while(Q--){
        let dim = input[index++].trim().split(" ").map(Number);
        switch(dim[0]){
            case 1:
                line.enqueue(dim[1]);
                break;
            case 2:
                st.push(dim[1]);
                break;
            case 3:
                console.log(line.front());
                break;
            case 4:
                console.log(st.peek());
                break;
            case 5:
                (line.front() == -1? 0 : st.push(line.front()), line.dequeue())
                break;
        }
    }
}


runProgram(`7
1 4
2 3
1 2
3
4
5
4`);