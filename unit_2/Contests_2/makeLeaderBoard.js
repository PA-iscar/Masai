function runProgram(input){
    var input = input.split("\n");
    var n = Number(input[0]);

    var name = [];
    var score = [];

    for(var i=1;i<=n;i++){
        var dim = input[i].split(" ");
        name[i-1]=dim[0];
        score[i-1]=dim[1];
    }
    for (var i = 0; i < n; i++) {
        var min = i;
        for (var j = i + 1; j < n; j++) {
            if (score[min] < score[j]) {
                min = j;
            }
        }
        if (min !== i) {
            var tmpscr = score[i];
            score[i] = score[min];
            score[min] = tmpscr;
            var tmpname = name[i];
            name[i] = name[min];
            name[min] = tmpname;
        }
    }

    for(var i=0;i<n;i++){
        for(var j=i+1;j<n;j++){
            if(score[i]==score[j]){
                if(name[i]>name[j]){
                    var temp = name[i];
                    name[i] = name[j];
                    name[j] = temp;
                }
            }
        }
    }


    var counter = 0;
    for(var i=0;i<n;i++){
        var num = score[i];
        for(var j=i;j<=n;j++){
            if(score[j]==num){
                score[j]=i+1;
                counter++;
            }
            else{
                i+=counter-1;
                counter=0;
                break;
            }
        }
    }

    for(var i=0;i<n;i++){
        console.log(score[i],name[i]);
    }
}

runProgram(`6
rancho 45
chatur 32
raju 30
farhan 30
virus 45
joy 45`);