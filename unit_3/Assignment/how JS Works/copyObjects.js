function duplicate(arr){
    var arr2 = {};              //* An empty object is created to store the copy
    Object.assign(arr2,arr);    //* Object.assign is used to assign all the values of arr to arr2 
    return arr2;                //* A copy of the orginal argument is returned

}
var arr = {0:1,1:2,'g':3};              //* An array is created with some default values 
console.log(duplicate(arr));    //* duplicate function is invoked with arr as argument