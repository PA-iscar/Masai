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
const st = new Stack();

function killIt(arr,did) {
    var didIt = 0;
    for(var i=0;i<arr.length;i++){
        if(arr[i]==arr[i+1]){
            i++;
            didIt=1;
        }
        else{
            st.push(arr[i]);
        }
    }
    var arr2 = [];
    var len = st.size();
    for(var i=len-1;i>=0;i--){
        arr2[i] = st.pop();
    }
    if(didIt){
        return killIt(arr2,0);
    }
    else{
        return arr2;
    }
}


function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);
    var arr = input[1];
    var ar = killIt(arr,0);
    if(ar.length == 0){
        console.log("-1");
    }
    else{
        console.log(ar.join(""));
    }
}


runProgram(`2
aa`);