function MyArray(){
    this.length = 0;
    Object.defineProperty(this, 'length', {
        value: 0,
        enumerable: false,
        writable: true
    })
}

MyArray.prototype.push = function(ele){
    this[this.length++] = ele;
    return this.length;
}



MyArray.prototype.pop = function(){
    this.length--;
    var popEle = this[this.length];
    delete this[this.length];
    return popEle;
}

MyArray.prototype.map = function(cb){
    var result = new MyArray();
    for(index in this){
        if(this.hasOwnProperty(index)){
            result.push(cb(this[index],index, this));
        }
    }
    return result
}

MyArray.prototype.reverse = function(){
    var result = [];
    for(key in this){
        // result = result + this[key];
        if(typeof this[key] == 'string')
            result.push(this[key])
    }
    result.reverse();
    return result;
}

MyArray.prototype.print = function(){
    var result = [];
    for(key in this){
        // result = result + this[key];
        if(typeof this[key] == 'string')
            result.push(this[key])
    }
    return result;
}

MyArray.prototype.peek = function(){
    var result = [];
    for(key in this){
        // result = result + this[key];
        if(typeof this[key] == 'string')
            result.push(this[key])
    }
    return result[0];
}

var arr = new MyArray();

arr.push('100');
arr.push('200');
arr.push('300');
arr.pop();
console.log(arr.reverse());
console.log(arr.print());
console.log(arr.peek());
// console.log(arr);