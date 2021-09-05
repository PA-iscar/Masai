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
var q1 = new Queue();
var q2 = new Queue();


function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var op = input[index++].split(" ").map(Number);
        if(op[0] == 0){
            q2.enqueue(op[1]);
            while(!q1.isEmpty()){
                q2.enqueue(q1.front());
                q1.dequeue();
            }
            var temp = q2;
            q2 = q1;
            q1 = temp;
        }
        if(op[0] == 1){
            console.log(q1.front());
        }
        if(op[0] == 2){
            q1.dequeue();
        }
    }
}


runProgram(`6
0 1
0 2
0 3
1 
2
1`);