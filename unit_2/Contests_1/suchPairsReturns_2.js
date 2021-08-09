function quick(arr,l,r){

    if(l<r){
        if(arr[0]>arr[1]){
            var temp = arr[0];
            arr[0] = arr[1];
            arr[1] = temp;
        }
        quick(arr.slice(1),l,r-1);
    }
}

function runProgram(input){
    var input  = input.split("\n");
    var t= Number(input[0]);
    var i=1;
    while(t--){
        var dim = input[i++].split(" ").map(Number);
        var n=dim[0];
        var k=dim[1];
        var arr = input[i++].split(" ").map(Number);
        console.log(arr);
        quick(arr,0,n);
        console.log(arr);

    }
}

runProgram(`1
5 2
3 4 0 2 7`);