var arr = ["apple", "windows", "ubuntu"];

var first = function(el){
    return el[0];
}

var res = arr.map(first);
console.log(res);