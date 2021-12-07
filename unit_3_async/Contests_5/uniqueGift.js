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

function uniqueGift(str){
    let n = str.length;
    let q = new Queue();
    let tom = {};
    let res = "";
    for(let i=0;i<n;i++){
        (tom[str[i]] == null) ? tom[str[i]] = 0 : tom[str[i]]++;
        if(!(tom[str[i]])){
            q.enqueue(str[i]);
        }
        else{
            while(tom[q.front()]){
                q.dequeue();
            }
        }
        res += (q.isEmpty() ? '#' : q.front());
    }
    console.log(res)
}

function runProgram(input){
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let str = input[index++];
        uniqueGift(str);
    }
}


runProgram(`3
abadbc
hhmowrbdjogxpmppsyrz
abcabc`);