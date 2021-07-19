function runProgram(input){
    debugger;

    var input = input.split("\n");
    var arr = [];
    var isX = false;
    var isO = false;
    for(var i=0; i<input.length; i++){
        arr.push(input[i].split(" "));
    }
    for(var i=0;i<3;i++){
        if(arr[i][0] == arr[i][1] && arr[i][0] == arr[i][2])
            if(arr[i][1] == 'x')
                isX = true;
            else
                isO = true;
    }
    for(var i=0;i<3;i++){
        if(arr[0][i] == arr[1][i] && arr[1][i] == arr[2][i])
            if(arr[1][i] == 'x')
                    isX = true;
                else
                    isO = true;
    }
    if(arr[0][0] == arr[1][1] && arr[1][1] == arr[2][2]){
        if(arr[1][1] == 'x')
            isX = true;
        else
            isO = true;
    }
    if(arr[0][2] == arr[1][1] && arr[1][1] == arr[2][0]){
        if(arr[1][1] == 'x')
            isX = true;
        else
            isO = true;
    }
    if(isO && !isX){
        console.log("o");
    }
    else if(isX &&!isO){
        console.log("x");
    }
    else
        console.log("Tie");
}

runProgram(`x o x
o o x
o o o`);