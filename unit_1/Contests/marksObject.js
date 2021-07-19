var marks = {
    data : [
        {
            name : "Nrupul",
            marks : 10
        },
        {
            name : "Prateek",
            marks : 20
        },
        {
            name : "Aman",
            marks : 30
        },
        {
            name : "Albert",
            marks : 5
        },
        {
            name : "Yogesh",
            marks : 15
        }
    ],
    average(){
        var data = this.data;
        var sum = 0;
        for (var i = 0; i < data.length; i++){
            sum += data[i].marks;
        }
        console.log(sum/data.length);
    },
    minimum(){
        var data = this.data;
        var minimum = data[0].marks;
        for (var i = 0; i < data.length; i++){
            if(minimum > data[i].marks)
                minimum = data[i].marks;
        }
        for(var i = 0; i < data.length; i++){
            if(minimum == data[i].marks){
                console.log(data[i].name);
                break;
            }
        }
    },
    maximum(){
        var data = this.data;
        var maximum = data[0].marks;
        for (var i = 0; i < data.length; i++){
            if(maximum < data[i].marks)
                maximum = data[i].marks;
        }
        for(var i = 0; i < data.length; i++){
            if(maximum == data[i].marks){
                console.log(data[i].name);
                break;
            }
        }
    }
}
marks.average();
marks.minimum();
marks.maximum();