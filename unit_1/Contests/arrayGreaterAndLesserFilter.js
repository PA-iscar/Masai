var filter = {
    data:[1, 2, 6, 7, 3, 4, 9, 0],
    lessThanItems(num){
        var len = this.data.length;
        var arr = this.data;
        var newarr = [];
        for (var i = 0; i < len;i++){
            if(arr[i]<num)
                newarr.push(arr[i]);
        }
        console.log(newarr);
    },
    greaterThanItems(num){
        var len = this.data.length;
        var arr = this.data;
        var newarr = [];
        for (var i = 0; i < len;i++){
            if(arr[i]>num)
                newarr.push(arr[i]);
        }
        console.log(newarr);
    }
}

filter.lessThanItems(4);
filter.greaterThanItems(6);