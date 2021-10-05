let doc = document.body;
let searchBar = doc.querySelector(".searchBar");
let search = searchBar.querySelector(".search");
let form = search.querySelector("form");
let input = form.querySelector("input");
let button = form.querySelector("button");
let container = doc.querySelector(".container");

let url = `https://youtube.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&chart=mostPopular&regionCode=IN&maxResults=20&key=AIzaSyAI4N4mOoGyIV5BZ6kiwkPsYmzjFHOQ2aQ`;

let myFunc = (e) =>{
    e.preventDefault();
    
    if(input.value){
        url = `https://www.googleapis.com/youtube/v3/search?part=snippet&maxResults=20&key=AIzaSyAI4N4mOoGyIV5BZ6kiwkPsYmzjFHOQ2aQ&type=video&q=${input.value}`
        // console.log(input.value);
        request();
    }
}

let display = (data) =>{
    // console.log(data);
    let content = doc.querySelector(".content");
    if(content){
        content.remove();
    }
    // content = document.createElement("div");
    // content.setAttribute("class","content")
    // data.forEach((el) => {
        
    //     let div = document.createElement("div");
    //     // console.log(el.id);
    //     div.style.margin = "20px";
    //     div.innerHTML = `<iframe width="560" height="315" src="https://www.youtube.com/embed/${el.id}">`;
    //     content.append(div);
    //     // console.log(container);
    // })

    content = document.createElement("table");
    content.setAttribute("class", "content");
    content.setAttribute("style", "margin: auto");

    for(var i=0;i<data.length;i+=4){
        let row = document.createElement("tr");
        for(var j=i;j<i+4 && j<data.length;j++){
            let vid = data[j].id;

            if(typeof vid != "string"){
                vid = vid.videoId;
            }
            // console.log(vid);
            let col = document.createElement("td");
            col.style.margin = "20px";
            col.innerHTML = `<iframe width="400" height="200" src="https://www.youtube.com/embed/${vid}">`;
            row.append(col);            
        }
        content.append(row);
    }

    container.append(content);
}


let request = async () => {
    try{
        let res = await fetch(`${url}`);
        let data = await res.json();
        // console.log(data);
        let {items} = data;
        // console.log(items);
        display(items)
    }
    catch (err){
        console.log(err);
    }
}

request();

button.addEventListener("click",myFunc);