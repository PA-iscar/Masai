export let navbar = () => {
    return `<div id="navbar">
    <div class="home">
        <a href="foodApp1.html">HOME</a>
    </div>
    
    <div class="options">
        <a href="foodApp2.html">Recipe of the Day</a>
        <a href="foodApp3.html">Latest Recipe</a>
    </div>
</div>`;
}

export function search() {
    return `<form action="" id="search">
    <input type="search" id="recipe">
    <button type="submit">search</button>
</form>`;
}

export function displayData(data) {
    let cont = document.body.querySelector(".container");
    if(cont){
        document.body.querySelector(".container").remove();
    }
    cont = document.createElement("div");
    cont.setAttribute("class","container");

    for(const el in data){
        let info = data[el];
        // console.log(info);
        let card = document.createElement("div");
        card.style.padding = "1%";
        card.style.outline = "1px solid black";
        
        for(const key in info){
            if(info[key]){
                let item = document.createElement("div");
                item.style.display = "inline-block";
                item.style.outline = "1px solid blue";
                item.style.margin = "10px";
                item.textContent = `${info[key]}`;
                card.append(item);
            }
        }
        document.body.append(card);
    }

    document.body.append(cont);
}

export async function requestData(url) {
    try {
        let res = await fetch(
            `${url}`
        )
        // console.log(url);
        let data = await res.json();
        // console.log(data);
        displayData(data.meals);
    }
    catch (err) {
        console.log(err);
    }
}