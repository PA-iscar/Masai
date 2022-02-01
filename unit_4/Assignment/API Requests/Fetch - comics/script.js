let url = `https://xkcd.now.sh/?comic=`

async function fetchData(num) {
    let data = await fetch(`${url}${num}`)
    return data.json()
}

async function getData() {
    let n = 10;
    let data = new Array(n)
    for(let i=0;i<n;i++){
        data[i] = await fetchData(2575-i);
    }
    displayData(data)
}

function displayData(data) {
    let doc = document.body
    let book = doc.querySelector(".container")

    let n = data.length
    console.log(data)
    for(let i=0;i<n;i++){
        let comic = document.createElement("div")
        let date = document.createElement("p")
        let title = document.createElement("h3")
        let image = document.createElement("img")
        comic.classList.add("comic")

        date.textContent = `${data[i].day}-${data[i].month}-${data[i].year}`
        title.textContent = `${data[i].title}`
        image.src = `${data[i].img}`

        comic.append(title,date,image)
        book.append(comic)
    }
}
getData()