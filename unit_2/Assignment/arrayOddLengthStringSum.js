var arr = ["Apple", "Windows", "Linux", "Kindle", "Quiz"];

var odd = function(el){
    return el.length%2!=0;
}

var len = function(el){
    return el.length;
}
var sum = function(ac,el){
    return ac + el;
}

var res = arr.filter(odd).map(len).reduce(sum);

console.log(res);