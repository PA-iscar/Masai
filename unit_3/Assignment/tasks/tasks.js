var tCounter = 0;


function tasks(name) {
    this.name = name;
    this.date = new Date();
    this.status = false;
}

var doc = document.body.querySelector("form");
var field = document.querySelector("input");
var index = 0;

var tab = document.createElement("table");
var thead = document.createElement("tr");
var th1 = document.createElement("th");
var th2 = document.createElement("th");
var th3 = document.createElement("th");

tab.setAttribute("border", "1");
tab.setAttribute("style", "margin:auto");

th1.innerHTML = "NAME";
th2.innerHTML = "Creation Date";
th3.innerHTML = "Current Status";

thead.appendChild(th1);
thead.appendChild(th2);
thead.appendChild(th3);
tab.appendChild(thead);

function myFunc() {
    tCounter++;
    counter.innerHTML = tCounter;
    var t1 = new tasks(field.value);
    field.value = "";
    
    var row = document.createElement("tr");
    
    var c1 = document.createElement("td");
    c1.innerHTML = t1.name;
    var c2 = document.createElement("td");
    c2.innerHTML = t1.date;
    var c3 = document.createElement("td");
    
    var btn = document.createElement("button");
    btn.setAttribute("class", "cngBtn");
    btn.setAttribute("style", "background: none;border: none;width: 100%");
    c3.appendChild(btn);
    
    btn.innerHTML = t1.status;

    var btn1 = document.createElement("button");
    var btn2 = document.createElement("button");
    btn1.innerHTML = "Done";
    btn2.innerHTML = "Remove";
    btn1.setAttribute("class", "btn1");
    btn2.setAttribute("class", "btn2");

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);

    row.appendChild(btn1);
    row.appendChild(btn2);
    
    tab.appendChild(row);
    document.body.appendChild(tab);
}

function toggle_task(e){
    if(!e.target.classList.contains('cngBtn')){
        return;
    }

    var btn = e.target;
    if(btn.innerHTML == "false"){
        btn.innerHTML = "true";
    }
    else
        btn.innerHTML = "false";
}

function done(e){
    if(!e.target.classList.contains('btn1')){
        return;
    }
    var btn = e.target.parentElement;
    btn.setAttribute("style", "background-color: green");
    var ch = btn.getElementsByTagName("td");
    ch[0].setAttribute("style", "text-decoration: line-through;");
    ch[1].setAttribute("style", "text-decoration: line-through;");
    ch[2].querySelector("button").style.textDecoration = "line-through";
}

function remove(e){
    if(!e.target.classList.contains('btn2')){
        return;
    }
    var btn = e.target.parentElement;
    btn.remove();
    tCounter--;
    counter.innerHTML = tCounter;
}

tab.addEventListener('click', toggle_task);
tab.addEventListener('click', done);
tab.addEventListener('click', remove);

var counter = document.createElement("h1");
counter.innerHTML = tCounter;
counter.setAttribute("style", "position: absolute");
counter.style.right = "5%";
document.body.appendChild(counter);
