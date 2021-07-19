function sort(mat){
    var len = mat.length;
    var t=100;
    while(t--)
    for(var i =0;i<len-1;i++){
        if(mat[i]>mat[i+1]){
            var temp = mat[i];
            mat[i] = mat[i+1];
            mat[i+1] = temp;
        }
    }
}

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var tom = {};
    var mat = [];
    for(var i=1;i<=t;i++){
        var word = input[i];
        mat.push(word);    
    }
    sort(mat);
    for(var i=0;i<t;i++){
        var word = mat[i]; 
        tom[word] ? tom[word]++ : tom[word] = 1;
    }

    for(var key in tom){
        
        console.log(key,tom[key]);
    }
}

runProgram(`4
masai
school
masai
asdf`);