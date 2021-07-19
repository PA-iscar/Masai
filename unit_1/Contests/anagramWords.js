function test(w1,w2){
var condition = false;
debugger;
if(w1.length==w2.length){
    var len = w1.length;
    var word1 = w1.split("");
    var word2 = w2.split("");
    var i=0;
        for (var j = 0; j < len; j++) {
            if(word1[0]==word2[j]){
                word1.splice(0,1);
                word2.splice(j,1);
                j=-1;
                len--;
            }
        }
    if(word1.length>0 || word2.length>0){
        condition = false;
    }
    else
        condition = true;
}
else 
    condition = false;
if(condition){
    console.log("TRUE");
}
else
    console.log("FALSE");
}
test("something","thinsomer");
test("listen","silent");
test("here","heir");
test("wind","dwine");
