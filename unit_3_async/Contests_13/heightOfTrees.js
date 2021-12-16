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
    
    let st = [];
    let ind = 0;
    st[ind] = new Stack();
    st[ind].push(arr[0]);
    
    for(let i=1;i<n;i++){
        let j = 0;
        let once = 0;
        while(j<=(ind-once)){
            if(arr[i] > st[j].peek()){
                st[j].push(arr[i]);
            }
            else{
                if(once){
                    j++
                    continue;
                }
                st[++ind] = new Stack();
                st[ind].push(arr[i]);
                // j++
                once = 1;
            }
            j++;
        }
    }
    let max = -1;
    st.forEach(el => {
        if(el.size() > max){
            max = el.size();
        }
    });
    console.log(max)
}


runProgram(`100
35 92 59 15 40 14 71 9 71 110 68 149 114 27 51 110 134 15 96 145 20 27 43 94 111 125 34 144 11 29 63 91 80 89 14 30 148 19 3 141 13 104 142 108 87 64 68 115 95 47 47 131 122 82 24 127 59 97 48 114 67 123 112 145 1 2 73 110 62 66 104 28 8 64 40 98 136 138 119 75 116 1 53 82 60 90 81 147 107 1 96 18 64 50 58 3 147 147 137 50`);