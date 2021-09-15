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
    var index = 0;
    var n = Number(input[index++]);
    do{
        var arr = input[index++].split(" ").map(Number);
        var expected = 1;
        var st = new Stack();
        var found = 0;
        for(var i=0;(i<n || !found);i++){
            if(arr[i]==expected){
                expected++;
            }
            else{
                if(st.isEmpty()){
                    st.push(arr[i]);
                }
                if(st.peek() == expected){
                    st.pop();
                    expected++;
                    i--;
                }
                else if(st.peek()>arr[i]){
                    st.push(arr[i]);
                }
                else if(st.peek()<arr[i]){
                    found = 0;
                    break;
                }
                
            }
            if(expected == n+1){
                found = 1;
            }
        }
        if(found){
            console.log("yes");
        }
        else{
            console.log("no");
        }
        
        
        n = Number(input[index++]);
    }while(n!=0)
}


runProgram(`5
5 1 2 4 3
0`);