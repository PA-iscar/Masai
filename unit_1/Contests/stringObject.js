var string = {
    item : "FireFox",
    vowelsCount(){
        var len = this.item.length;
        var str = this.item;
        var count = 0;
        while(len--) {
            switch(str[len]){
                case 'a':
                case 'A':
                case 'e':
                case 'E':
                case 'i':
                case 'I':
                case 'o':
                case 'O':
                case 'u':
                case 'U':
                    count++;
                    break;
            }
        }
        console.log(count);
    },
    reverse(){
        var len = this.item.length;
        var str = this.item;
        var out = "";
        while(len--) {
            out += str[len];
        }
        console.log(out);
    },
    changeCase(){
        var len = this.item.length;
        var str = this.item;
        var count = 0;
        var out = "";
        while(count<len) {
            if(str[count] == str[count].toLowerCase() && str != str.toUpperCase()){
                out += (str[count].toUpperCase());
            }
            else
                out += (str[count].toLowerCase());
            count++;
        }
        console.log(out);
    }
}
string.vowelsCount();
string.reverse();
string.changeCase();