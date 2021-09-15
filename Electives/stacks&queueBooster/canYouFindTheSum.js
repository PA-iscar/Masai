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
    var n = Number(input[0]);
    var arr = input[1].split(" ").map(Number);
    var x = new Stack();
    var y = new Stack();
    var res = [];
    for(var i=0;i<n;i++){
        var found = 0;
        for(var j=i-1;j>=0;j--){
            if(arr[j]>arr[i]){
                found = 1;
                x.push(j+1);
                break;
            }
        }
        if(!found){
            x.push(-1);
        }
        found = 0;
        for(var j=i+1;j<n;j++){
            if(arr[j]>arr[i]){
                found = 1;
                y.push(j+1);
                break;
            }
        }
        if(!found){
            y.push(-1);
        }
        res.push(x.peek()+y.peek());
    }
    console.log(res.join(" "));
    
}


runProgram(`5
5 4 1 3 2`);