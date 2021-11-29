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
            return "No elements in Queue";
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

var q = new Queue();
var q1 = new Queue();
var q2 = new Queue();
var q3 = new Queue();
var q4 = new Queue();

function runProgram(input){
    var input = input.split("\n");
    var index = 1;
    var t = Number(input[0]);
    var bool = [false,false,false,false];
    while(t--){
        var op = input[index++].split(" ");

        if(op[0]=='E'){
            if(op[1] == 1){
                if(!bool[0]){
                    q.enqueue(op[1]);
                    bool[0] = true;
                }
                q1.enqueue(op[2]);
            }
            if(op[1] == 2){
                if(!bool[1]){
                    q.enqueue(op[1]);
                    bool[1] = true;
                }
                q2.enqueue(op[2]);
            }
            if(op[1] == 3){
                if(!bool[2]){
                    q.enqueue(op[1]);
                    bool[2] = true;
                }
                q3.enqueue(op[2]);
            }
            if(op[1] == 4){
                if(!bool[3]){
                    q.enqueue(op[1]);
                    bool[3] = true;
                }
                q4.enqueue(op[2]);
            }
        }
        if(op[0]=='D'){
            switch (q.front()){
                case '1':
                    console.log('1',q1.front());
                    q1.dequeue();
                    if(q1.isEmpty()){
                        bool[0] = false;
                        q.dequeue();
                    }
                    break;
                case '2':
                    console.log('2',q2.front());
                    q2.dequeue();
                    if(q2.isEmpty()){
                        bool[1] = false;
                        q.dequeue();
                    }
                    break;
                case '3':
                    console.log('3',q3.front());
                    q3.dequeue();
                    if(q3.isEmpty()){
                        bool[2] = false;
                        q.dequeue();
                    }
                    break;
                case '4':
                    console.log('4',q4.front());
                    q4.dequeue();
                    if(q4.isEmpty()){
                        bool[3] = false;
                        q.dequeue();
                    }
                    break;
            }
        }
        
    }
}


runProgram(`7
E 3 1
D
E 3 1
E 3 2
E 2 1
D
D`);