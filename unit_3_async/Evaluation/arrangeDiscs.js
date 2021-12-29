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

    sum() {
        let sum = 0;
        for(let i=0;i<this.count;i++){
            sum += this.items[i];
        }
        return sum;
    }
}

function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while(t--){
        let n = Number(input[index++]);
        let R = [];
        let H = [];
        let arr = [];

        for(let i=0;i<n;i++){
            let dim = input[index++].split(" ").map(Number);
            let tom = {};
            tom['r'] = dim[0]
            tom['h'] = dim[1]
            arr.push(tom);
        }
        arr.sort((a,b) => b.r - a.r)

        let st = [];
        let ind = 0;
        for(let i=0;i<n-1;i++){
            if(i==0){
                st[ind] = new Stack();
                st[ind].push(arr[i].h)
            }

            if(!(arr[i].h > arr[i+1].h)){
                st[++ind] = new Stack();
            }
            for(let j=0;j<=ind;j++){
                if(st[j].isEmpty() || st[j].peek() > arr[i+1].h){
                    st[j].push(arr[i+1].h)
                }
            }
        }
        for(let i=0;i<st.length;i++){
            console.log(st[i].sum())
        }
        console.log(arr)        
        
    }
}

runProgram(`2
3
4 3
1 4
3 2
5
5 6
4 3
1 2
7 5
3 4`);