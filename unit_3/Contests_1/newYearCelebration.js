function Queue () {
    collection = [];
    this.print = function() {
        console.log(collection);
    };
    this.enqueue = function(element){
        collection.push(element);
    };
    this.dequeue = function(){
        return collection.shift();
    };
    this.front = function(){
        return collection[0];
    };
    this.size = function(){
        return collection.length;
    };
    this.isEmpty = function(){
        return (collection.length === 0);
    };
}
var q = new Queue();

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
var st = new Stack();

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var op = input[index++].split(" ");
        if(op[0] == 1){
            q.enqueue(op[1]);
        }
        if(op[0] == 2){
            st.push(op[1]);
        }
        if(op[0] == 3){
            if(q.isEmpty()){
                console.log(-1);
            }
            else
                console.log(q.front());
        }
        if(op[0] == 4){
            if(st.isEmpty()){
                console.log(-1);
            }
            else
                console.log(st.peek());
        }
        if(op[0] == 5){
            st.push(q.front());
            q.dequeue();
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