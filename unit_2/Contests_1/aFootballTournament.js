// function runProgram(input){
//     var input = input.split("\n");
//     var t = Number(input[0]);
//     var tom = {};

//     for(var i=1; i<=t;i++){
//         var row = input[i].split("");
//         var l = row.length;
//         for(var j=0; j<l; j++){
//             tom[row[j]] ? tom[row[j]]++ : tom[row[j]] = 1;
//         }
//     }
//     var max = 0;
//     var out = "";
//     for (var key in tom) {
//         max = (max < tom[key]) ? tom[key] : max;
//     }
//     for (var key in tom) {
//         if (max == tom[key]) {
//             out += key;
//         }
//     }
//     console.log(out);
// }

function runProgram(input){
    var input = input.split("\n");
    var t = Number(input[0]);
    var tom = {};
    for(var i=1; i<=t;i++){
        var row = input[i];
        tom[row] ? tom[row]++ : tom[row] = 1;
    }
    var max = 0;
    var out = "";
    for(var key in tom){
        if(max<tom[key]){
            max = tom[key];
            out = key;
        }

        
    }
    console.log(out);

}

runProgram(`3
QCCYXL
QCCYXL
AXGLFQDD`);