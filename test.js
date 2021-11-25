const LinkedListNode = class {
    constructor(nodeData) {
        this.data = nodeData;
        this.next = null;
    }
};

var addOneToLinkedList = function(head) {
    let temp = head;
    let arr = [];
    while(temp){
        arr.push(temp.data);
        temp = temp.next;
    }
    arr = arr.reverse()

    let carry = 1;
    
    for(let i=0;i<arr.length;i++){
        if(i==arr.length-1 && arr[i] == 9){
            arr[i] = 0;
            arr.push(1);
            break;
        }
        else if(arr[i] == 9){
            arr[i] = 0;
            carry = 1;
        }
        else{
            arr[i]+= carry;
            carry = 0;
            break;
        }
    }
    arr = arr.reverse();
    
    
    temp = head;
    

    for(let i=0;i<arr.length;i++){
        temp.data = arr[i];
        if(temp.next == null && arr[i+1] != null){
            temp.next = new LinkedListNode(arr[i+1])
            break;
        }
        temp = temp.next;
    }
    // console.log(head)
    
    return head
};

function runProgram(){
    
    let head = new LinkedListNode(2);
    let temp = head;
    temp.next = new LinkedListNode(3);
    temp = temp.next;
    temp.next = new LinkedListNode(1);
    temp = temp.next;
    temp.next = new LinkedListNode(3);
    addOneToLinkedList(head)
    console.log(head)

}

runProgram();