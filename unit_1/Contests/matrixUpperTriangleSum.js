var sum = 0;
var arr =[      [ 1, 2, 1],
                [ 2, 1, 2],
                [ 1, 2, 1]
        ];

for(var i = 0; i < arr.length; i++){
    for(var j = 0; j < arr[i].length; j++){
        if(j>=i)
        sum += arr[i][j];
    }
}
console.log(sum);
