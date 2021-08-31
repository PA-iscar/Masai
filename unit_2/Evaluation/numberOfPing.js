function runProgram(input){
    input.trim();
    var input = input.split("\n");
    var t = Number(input[0]);
    var index = 1;
    while(t--){
        var n = Number(input[index++]);
        var str = input[index++].trim();
        var tom = {};
        for(var i=0;i<n;i++){
            if(str[i]=='p' || str[i]=='i' || str[i]=='n' || str[i]=='g')
            tom[str[i]] ? tom[str[i]]++ : tom[str[i]] = 1;
        }
        var i = 0;
        var min = 1000000;
        for(var key in tom){
            i++;
            if(tom[key]<min){
                min = tom[key];
            }
        }
        if(i==4){
            console.log(min);
        }
        else
            console.log(0);
    }
}



runProgram(`2
7
pinpint
8
pingping`);