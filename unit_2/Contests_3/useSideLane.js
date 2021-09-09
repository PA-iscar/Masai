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
        var found = 1;
        var arr = input[index++].trim().split(" ").map(Number);
        var sidelane = new Stack();
        var expected = 1;
        for(var i=0;(i<n)||(expected!=n+1);i++){
            if(arr[i]==expected){
                expected++;
            }
            else{
                if(sidelane.isEmpty()){
                    sidelane.push(arr[i]);
                }
                else{
                    if(sidelane.peek()==expected){
                        sidelane.pop();
                        i--;
                        expected++;
                    }
                    else{
                        if(sidelane.peek()>arr[i]){
                            sidelane.push(arr[i]);
                        }
                        else{
                            console.log("no");
                            found = 0;
                            break;
                        }
                    }
                }
            }
        }
        if(found){
            console.log("yes");
        }


        var n = Number(input[index++]);
    }while(n!=0)
}


runProgram(`5 
4 1 5 3 2 
5 
3 1 2 5 4 
5 
5 3 2 1 4 
10 
1 2 10 5 4 3 7 6 8 9 
10 
1 2 10 5 4 3 9 8 7 6 
5 
3 5 2 4 1 
5 
1 2 4 3 5 
4 
4 2 3 1 
0`);