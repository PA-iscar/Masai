function array(...val) {
    this.val = {}
    this.length = val.length
    for(let i=0;i<this.length;i++){
        this.val[i] = val[i]
    }
}

array.prototype.push = function(v) {
    this.val[this.length++] = v
}

array.prototype.reverse = function() {
    let res = {}
    let ind = this.length-1;
    for(let i=0;i<this.length;i++){
        res[i] = this.val[ind--]
    }

    return res
}

array.prototype.print = function() {
    let res = []
    for(let i=0;i<this.length;i++){
        res[i] = this.val[i]
    }
    console.log(res)
}

array.prototype.first = function() {
    return this.val[0]
}

let arr = new array(1,2)

console.log(arr)
arr.push(5)
arr.push(3)
console.log(arr)
console.log(arr.reverse())
arr.print()
console.log(arr.first())
