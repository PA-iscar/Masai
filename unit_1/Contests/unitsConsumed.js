function price(amt){
    var units = 0;
    if(amt > 650){
        amt -= 650;
        units += 150+(amt/10);
    }
    else if(amt > 150){
        amt -= 150;
        units += 50+(amt/5);
    }
    else if(amt > 0){
        units += (amt/3);
    }
    return units;

}

function runProgram(input){
    var amt = input-80;
    var units = 0;
    units = price(amt);
    console.log(units);
}

runProgram(230);