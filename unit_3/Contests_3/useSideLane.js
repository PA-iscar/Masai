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
    let ind = 0;
    let n = Number(input[ind++]);
    do{
        let arr = input[ind++].trim().split(" ").map(Number);
        let st = new Stack();
        let ex = 1;
        let index = 0;
        let nf = false;
        while(1){
            if(arr[index] == ex){
                ex++;
                index++;
            }
            if(st.peek() == ex){
                ex++;
                st.pop();
            }
            if(st.isEmpty() || st.peek()>arr[index]){
                st.push(arr[index]);
                index++;
            }
            if(st.peek() != ex && arr[index] != ex && arr[index] > st.peek()){
                nf = true;
                break;
            }
            if(ex >=n){
                break;
            }
        }
        if(nf){
            console.log("no");
        }
        else{
            console.log("yes");
        }
        n = Number(input[ind++]);
    }while(n!=0)
}



runProgram(`5
4 1 2 5 3 
0`);