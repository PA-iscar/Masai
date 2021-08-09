var arr = [1,2,3,4,5,6,7,8,9];

var square = function(el){
    console.log(el*el);
}

var double = function(el){
    return el*2;
}

var odd = function(el){
    if(el%2==0){
        return false;
    }
    else
        return true;
}

var sum = function(ac,el){
    return ac + el;
}

var product = function(ac,el){
    return ac*el;
}

var div3 = function(el){
    if(el%3==0){
        return true;
    }
    else
        return false;
}

var cube = function(el){
    return el ** 3;
}

var sq = arr.forEach(square);

var db = arr.map(double);

var od = arr.filter(odd);

var pr = arr.reduce(product);

var sm = arr.filter(odd).reduce(sum);

var cu = arr.filter(div3).map(cube).reduce(sum);

console.log(db,od,pr,sm,cu);
