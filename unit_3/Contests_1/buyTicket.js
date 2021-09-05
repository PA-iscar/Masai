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

function runProgram(input){
    var q = new Queue();
    var input = input.split("\n");
    var t = Number(input[0]);
    var q = new Queue();
    var index = 1;
    while(t--){
        var op = input[index++].split(" ");
        if(op[0]=='E'){
            q.enqueue(op[1]);
            console.log(q.size());
        }
        else if(op[0]=='D'){
            if(q.size() == 0)
                console.log(`-1 ${q.size()}`);
            else{
                console.log(`${q.front()} ${q.size()-1}`);
                q.dequeue();
            }
        }
    }
}



runProgram(`5
E 2
D
D
E 3
D`);