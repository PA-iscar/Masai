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

function signal(arr,n){
    let st = new Stack();
    let res = [];

    for(let i=0;i<n;i++){
        if(st.isEmpty()){
            res.push(1);
            st.push(i)
        }else{
            if(arr[st.peek()]<arr[i]){
                while(arr[st.peek()]<arr[i] && !st.isEmpty()){
                    st.pop();
                }
                if(st.isEmpty()){
                    res.push(i+1);
                    st.push(i);
                }else{
                    res.push(i-st.peek());
                }

            }else{
                res.push(1);
                st.push(i);
            }
        }
    }
    console.log(res.join(" "))
}

function runProgram(input){
    input = input.split("\n");
    let index = 1;
    let t = Number(input[0]);
    while(t--){
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);;
        signal(arr,n);
    }
}


runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);