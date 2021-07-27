// function sort(arr){
//     var n = arr.length;
//     for(var i=0;i<n-1;i++){
//         if(arr[i]>arr[i+1]){
//             var temp = arr[i];
//             arr[i] = arr[i+1];
//             arr[i+1] = temp;
//             i=-1;
//         }
//     }
//     return arr;
// }

function quickSort(originalArr) {
    if (originalArr.length <= 1) {
        return originalArr;
    }
    else {
        var leftArr = [];
        var rightArr = [];
        var newArr = [];
        var pivot = originalArr.pop();      //  Take a pivot value
        var length = originalArr.length;
        for (var i = 0; i < length; i++) {
            if (originalArr[i] <= pivot) {    // using pivot value start comparing
                leftArr.push(originalArr[i]);
            } else {
                rightArr.push(originalArr[i]);
            }
        }
        return newArr.concat(quickSort(leftArr), pivot, quickSort(rightArr)); // array will be                                                                            //returned untill sorting occurs
    }
}

function chk(arr,k){
    var n = arr.length;
    var i=0;
    var j=n-1;
    while(i<j){
        if(arr[i]+arr[j]==k){
            return 1;
        }
        if(arr[i]+arr[j]>k){
            j--;
        }
        if(arr[i]+arr[j]<k){
            i++;
        }
    }
    return -1;
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;

    while(t--){
        var dim = input[index++].split(" ").map(Number);
        var n = dim[0];
        var k = dim[1];
        var arr = input[index++].split(" ").map(Number);
        var arr = quickSort(arr);
        // arr = sort(arr);

        var out = chk(arr,k);
        console.log(out);
    }
}

runProgram(`10
6 16
2 0 2 5 -3 0
9 3
6 -6 -7 8 -4 8 -6 1 4
1 -1
1
3 -3
-2 3 0
5 -9
4 5 0 -3 3
7 4
1 2 1 6 -2 7 0
7 -10
2 -5 6 -1 5 -1 6
4 -12
1 -2 -3 -4
6 0
5 -6 5 5 3 0
2 3
-2 -2`);