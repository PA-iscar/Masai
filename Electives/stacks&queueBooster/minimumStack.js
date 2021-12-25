class Stack{
    constructor() {
        this.items = [];
        this.count = 0;
        this.min = 0;
    }

    getMin(){
        if(this.count == 0){
            return "NO"
        }else{
            return this.min
        }
    }

    pop(){
        if(this.count == 0){
            return;
        }

        let t = this.items[this.count-1];
        this.items.pop();

        if(t<this.min){
            this.min = 2*this.min - t;
        }
    }

    push(el){
        if(this.count)
    }
}
const st = new Stack();
const min = new Stack();

function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let op = input[index++].split(" ");
        if (op[0] == "push") {
            st.push(op[1]);
            // if(min.isEmpty() || op[1]<=min.peek()){
            //     min.push(op[1]);
            // }
        }
        else if (op[0] == "pop") {
            let temp = st.pop();
            // if(temp == min.peek()){
            //     min.pop();
            // }
        }
        else if (op[0] == "getMin") {
            console.log(st.getMin())
            // console.log(min.peek());
        }
    }
}

runProgram(`8
push 5
push 3
push 1
getMin
pop
getMin
pop
getMin`);