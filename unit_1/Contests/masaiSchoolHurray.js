function runProgram(input){
    var n = Number(input);
    if(n%35==0){
        console.log("Masai School");
    }
    else if(n%7==0){
        console.log("Masai");
    }
    else if(n%5==0){
        console.log("School");
    }
    else 
        console.log("Hurray!")
}
runProgram(7);