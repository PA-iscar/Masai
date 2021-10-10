var doc = document.body.querySelector(".container");
var cList = doc.classList;
var category = "";
var apiKey = "&apiKey=f09330388d054ea8b405c7cb47a9516d"
var country = "&country=in";
var srch = doc.querySelector(".navbar").querySelector("input");
var currentPage = 1;

function chngFunc(){
    console.log(srch.value);
    request();
}

function createPagination(){
    const pagination = document.createElement("div");
    pagination.setAttribute("class", "pagination");
    const prev = document.createElement("button");
    const curr = document.createElement("button");
    const next = document.createElement("button");

    prev.textContent = "previous";
    next.textContent = "next";
    curr.textContent = currentPage;

    prev.name = currentPage-1;
    curr.name = currentPage;
    next.name = currentPage+1;

    if(currentPage == 1){
        prev.disabled = true;
    }

    pagination.append(prev,curr,next);
    doc.append(pagination);
}

function display(data){
    // console.log(data);
    if(doc.querySelector(".cont")){
        doc.querySelector(".cont").remove();
    }
    if(doc.querySelector(".pagination")){
        doc.querySelector(".pagination").remove();
    }
    var cont = document.createElement("div");
    cont.setAttribute("class", "cont");
    for(var i=0;i<data.articles.length;i++){
        
        var heading = document.createElement("h2");
        var author = document.createElement("h4");
        var content = document.createElement("p");
        
        author.style.color = "red";
        content.style.color = "blue";
    
        heading.textContent = data.articles[i].title;
        author.textContent = `Source: ${data.articles[i].source.name}`;
        content.textContent = data.articles[i].content;
    
        // console.log(data);
        cont.append(heading);
        cont.append(author);
        cont.append(content);
    }
    doc.append(cont);
    
    createPagination();
    doc.querySelector(".pagination").addEventListener("click", handleChange);
    
}

function handleChange(){
    currentPage = Number(event.target.name);
    console.log(event.target.name);
    request();
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
    
    var url = `https://newsapi.org/v2/top-headlines?pageSize=5&page=${currentPage}${country}${category}${apiKey}`;


    if(cList.contains("home") && srch.value){
        console.log(srch.value);
        var topic = srch.value;
        url = `https://newsapi.org/v2/everything?q=${topic}&pageSize=5&page=${currentPage}&language=en&from=2021-09-10&sortBy=publishedAt&apiKey=f09330388d054ea8b405c7cb47a9516d`
    }
    
    try {
        // console.log(url);
        let res = await fetch(
            `${url}`
        )
        let data = await res.json()
        // for(var i=0; i<data.articles.length;i++){
        //     display(data.articles[i]);
        // }
        display(data)
    }
    catch (err){
        console.log(err,"something went wrong");
        alert("something went wrong");
    }
}
window.addEventListener("load", function(){
    request();
})
