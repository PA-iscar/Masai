var sum = 0;
var out = "";
var arr1 =[     [ 1, 2, 1],
                [ 2, 1, 2],
                [ 1, 2, 1]
        ];
var arr2 =[     [ 2, 1, 2],
                [ 1, 2, 1],
                [ 2, 1, 2]
        ];

for(var i = 0; i < arr1.length; i++){
     for(var j = 0; j < arr1[i].length; j++){
        sum = 0;
        sum += arr1[i][j] + arr2[i][j];
        out += sum + " ";
     }

}
console.log(out);