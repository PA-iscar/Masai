var arr = ["apple", "windows", "ubuntu", "cola", "system"];

var a = function(el){
    return el[0]=='a' || el[el.length-1]=='a';
}

var res = arr.filter(a);

console.log(res);