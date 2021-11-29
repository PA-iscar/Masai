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
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    let res = [];
    const st1 = new Stack();
    const st2 = new Stack();

    for(let i=0;i<n;i++){
        let f1 = false;
        let f2 = false;
        for(let x=i-1;x>=0;x--){
            if(arr[x]>arr[i]){
                st1.push(x+1);
                f1 = true;
                break;
            }
        }
        for(let y=i+1;y<n;y++){
            if(arr[y]>arr[i]){
                st2.push(y+1);
                f2 = true;
                break;
            }
        }
        if(!f1){
            st1.push(-1);
        }
        if(!f2){
            st2.push(-1);
        }
        res[i] = st1.peek() + st2.peek();
    }
    console.log(res.join(" "))
}


runProgram(`5
5 4 1 3 2`);