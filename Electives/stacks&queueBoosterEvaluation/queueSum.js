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

var Q = new Queue;

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let S = 0;
    let index = 1;
    while(t--){
        let X = input[index++].split(" ").map(Number);
        if(X[0] == 1){
            Q.enqueue(X[1]);
        }
        else if(X[0] == 2){
            if(Q.isEmpty()){
                S--;
            }
            else{
                S += Q.dequeue();
            }
        }
    }
    console.log(S);
}


runProgram(`3
1 2
2
2`);