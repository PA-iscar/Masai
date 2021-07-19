var user = {
    name : "Ironman",
    year_of_birth : 1974,
    printage(){
        var currenYear = new Date().getFullYear();
        console.log(currenYear - this.year_of_birth);
    }
}
user.printage();