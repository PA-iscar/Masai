var sum = 0;
var arr =[  [ 1, 2, 3],
            [ 5, 6, 7],
            [ 7, 8, 9]
        ];
for (var i = 0; i < arr[0].length; i++){
    sum=0;
    for (var j = 0; j < arr.length; j++){
        sum += arr[j][i];
    }
    console.log(sum);
}
