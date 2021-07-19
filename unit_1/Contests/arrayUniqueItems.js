var items = ['a', 'b', 'c', 'd', 'a', 'c'];
var result = [];
var len = items.length;
debugger;
for (var i = 0; i < len; i++){
    var count = 0;
    for(var j = i+1; j < len; j++){
        if(items[i] == items[j]){
            count++;
        }
    }
    if(count>0){
        result.push(items[i]);
    }debugger;
}

console.log(result);