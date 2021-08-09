var arr = [1,2,3,4,4,5,6,7,8];

var even = function(el,ind){
    return ((el%2==0) && (ind%2==0));
}

var arr2 = arr.filter(even);

console.log(arr2);