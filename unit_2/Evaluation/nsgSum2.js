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
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var s1 = new Stack();
        var s2 = new Stack();
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        for(var i=n-1;i>=0;i--){
            if(!s1.size()){
                s1.push(arr[i]);
            }
            
        }

    }
}

runProgram(`1
6
5 1 6 2 5 1`);