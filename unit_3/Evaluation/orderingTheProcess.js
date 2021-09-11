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
    var n = Number(input[0]);
    for(var i=0;i<n;i++){
        var el = input[1].split(" ").map(Number);
        q1.enqueue(el[i]);

    }
    for(var i=0;i<n;i++){
        var el = input[2].split(" ").map(Number);
        q2.enqueue(el[i]);

    }

    var count = 0;
    do{
        if(q1.front() == q2.front()){
            ;
        }
        else{
            count++;
            q1.enqueue(q1.front());
            q1.dequeue();
        }
    }while(q1.front()!=q2.front())
    console.log(count+3);
}

runProgram(`3
2 1 3
1 3 2`);