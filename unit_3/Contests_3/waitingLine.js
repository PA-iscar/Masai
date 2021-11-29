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
    length() {
        return this.items.length;
    }
}

function runProgram(input){
    input = input.split("\n");
    let index = 1;
    let t = input[0].trim();
    let tom = new Queue;
    while(t--){
        let dim = input[index++].trim().split(" ");
        if(dim[0] == "E"){
            tom.enqueue(dim[1]);
            console.log(tom.length());
        }
        else if(dim[0] == "D"){
            if(tom.isEmpty()){
                console.log(-1,0);
            }
            else{
                console.log(tom.dequeue(),tom.length());
            }
        }
    }
}


runProgram(`6
E 2
D
D
E 3
E 3
D`);