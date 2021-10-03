var doc = document.body.querySelector(".container");
var cList = doc.classList;
var category = "";

if(cList.contains("home")){
    category = ""
}
else if(cList.contains("sports")){
    category = "sports"
}
else if(cList.contains("entertainment")){
    category = "entertainment"
}
else if(cList.contains("technology")){
    category = "technology"
}

var url = `https://newsapi.org/v2/top-headlines?country=in&category=${category}&apiKey=f09330388d054ea8b405c7cb47a9516d`
console.log(url);

function display(data){
    var heading = document.createElement("h2");
    var author = document.createElement("h4");
    var content = document.createElement("p");
    
    author.style.color = "red";
    content.style.color = "blue";

    heading.textContent = data.title;
    author.textContent = `Source: ${data.source.name}`;
    content.textContent = data.content;

    // console.log(data);
    doc.append(heading);
    doc.append(author);
    doc.append(content);
}
async function request() {
    try {
        let res = await fetch(
            `${url}`
        )
        let data = await res.json()
        for(var i=0; i<10;i++){
            display(data.articles[i]);
        }
    }
    catch (err){
        console.log(err,"something went wrong");
    }
}
request();