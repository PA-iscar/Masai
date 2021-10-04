var doc = document.body.querySelector(".container");
var cList = doc.classList;
var category = "";
var apiKey = "&apiKey=f09330388d054ea8b405c7cb47a9516d"
var country = "&country=in";
var srch = doc.querySelector(".navbar").querySelector("input");

function chngFunc(){
    // console.log(srch.value);
    request();
}

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
    if(cList.contains("sports")){
        category = "&category=sports"
    }
    else if(cList.contains("entertainment")){
        category = "&category=entertainment"
    }
    else if(cList.contains("technology")){
        category = "&category=technology"
    }
    
    // var url = `https://newsapi.org/v2/top-headlines?pageSize=5${country}${category}${apiKey}`;


    if(cList.contains("home") && srch.value){
        console.log(srch.value);
        var topic = srch.value;
        // url = `https://newsapi.org/v2/everything?q=${topic}&pageSize=5&from=2021-09-04&sortBy=publishedAt&apiKey=f09330388d054ea8b405c7cb47a9516d`
    }
    
    try {
        console.log(url);
        let res = await fetch(
            `${url}`
        )
        let data = await res.json()
        for(var i=0; i<data.articles.length;i++){
            display(data.articles[i]);
        }
    }
    catch (err){
        console.log(err,"something went wrong");
        alert("something went wrong");
    }
}
request();