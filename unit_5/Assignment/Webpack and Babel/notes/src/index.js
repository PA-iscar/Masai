import "./index.css"
import icon from "./pencil.png"


const image = document.querySelector("img")
image.src = icon;

const book = document.body.querySelector("form")
const input = book.querySelector("#input")

const addNote = (e) => {
    e.preventDefault()
    let notes = document.body.querySelector("#notes")
    let note = document.createElement("div")
    note.classList.add("note")
    note.textContent = input.value;
    notes.append(note)
}

book.addEventListener("submit", addNote)

