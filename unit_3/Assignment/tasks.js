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
    var t1 = new tasks(field.value);
    field.value = "";

    var row = document.createElement("tr");

    var c1 = document.createElement("td");
    c1.innerHTML = t1.name;
    var c2 = document.createElement("td");
    c2.innerHTML = t1.date;
    var c3 = document.createElement("td");
    
    var btn = document.createElement("button");
    btn.setAttribute("class", "delBtn");
    c3.appendChild(btn);

    btn.innerHTML = t1.status;

    row.appendChild(c1);
    row.appendChild(c2);
    row.appendChild(c3);
    tab.appendChild(row);
    document.body.appendChild(tab);
}

function toggle_task(e){
    if(!e.target.classList.contains('delBtn')){
        return;
    }

    var btn = e.target;
    if(btn.innerHTML == "false"){
        btn.innerHTML = "true";
    }
    else
        btn.innerHTML = "false";
}

tab.addEventListener('click', toggle_task);