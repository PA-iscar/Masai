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
    var input = input.split("\n").map(Number);
    var n = input[0];
    var a = [];
    var index = 1;
    for(var i=0;i<n;i++){
        a[i] = input[index++];
    }
    var s1 = new Stack();
    var s2 = new Stack();


    var nge = [];
    var nse = [];

    for(var i=n-1;i>=0;i--){
        while(s1.size()!=0 && a[s1.top()]<=a[i]){
            s1.pop();
        }

        if(s1.size()!=0){
            nge[i] = s1.top();
        }
        else
        nge[i] = -1;

        s1.push(i);
    }
    for(var i=n-1;i>=0;i--){
        while(s2.size()!=0 && a[s2.top()]<=a[i]){
            s2.pop();
        }

        if(s2.size()!=0){
            nse[i] = s2.top();
        }
        else
        nse[i] = -1;

        s2.push(i);
    }

    for(var i=0;i<n;i++){
        if(nge!=-1){
            console.log(nse[nge[i]]);
        }
        else
            console.log(-1);
    }

}

runProgram(`8
3
7
1
7
8
4
5
2`);