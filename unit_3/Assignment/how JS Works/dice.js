var dice = document.createElement("button");

var diceBtn = document.createElement("button");
diceBtn.innerHTML = "Throw Dice";
dice.setAttribute("style", "position: absolute");
dice.style.top = "100px";
dice.style.left = "100px";
dice.style.width = "50px";
dice.style.height = "50px";
dice.style.backgroundColor = "white";
dice.textContent = Math.ceil(Math.random() * 6);
var num = 0;
document.body.appendChild(diceBtn);
document.body.appendChild(dice);
diceBtn.addEventListener("click", function(){
    for(var i=0;i<20;i++){
        time(i);
    }
});
function time(i){
    setTimeout(() => {
        dice.textContent = Math.ceil(Math.random() * 6);
        num = dice.textContent;
        if(num == 1){
            dice.style.backgroundColor = "red"
        }
        else if(num == 2){
            dice.style.backgroundColor = "yellow"
        }
        else if(num == 3){
            dice.style.backgroundColor = "blue"
        }
        else if(num == 4){
            dice.style.backgroundColor = "indigo"
        }
        else if(num == 5){
            dice.style.backgroundColor = "violet"
        }
        else if(num == 6){
            dice.style.backgroundColor = "green"
        }
        
}, 100*i);

}

