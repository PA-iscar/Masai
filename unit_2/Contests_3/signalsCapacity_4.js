//* Solution

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
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        const st1 = new Stack();
        const st2 = new Stack();
        var n = Number(input[index++]);
        var arr = input[index++].split(" ").map(Number);
        var result = [];
        result[0] = 1;
        for(var i=0;i<n;i++){
            if(i==0){
                st1.push(arr[i]);
                st2.push(i);
            }
            else{
                if(st1.peek()>arr[i]){
                    result[i] = i-st2.peek();
                    st1.push(arr[i]);
                    st2.push(i);
                }
                else{
                    while(st1.peek()<=arr[i]){
                        st1.pop();
                        st2.pop();
                        if(st1.peek()>arr[i]){
                            result[i] = i-st2.peek();
                            st1.push(arr[i]);
                            st2.push(i);
                            break;
                        }
                        if(st1.isEmpty()){
                            result[i] = i+1;
                            st1.push(arr[i]);
                            st2.push(i);
                            break;
                        }
                    }
                }
            }
        }
        console.log(result.join(" "));
    }
}

runProgram(`2
7
100 80 60 70 60 75 85
5
3 5 0 9 8`);