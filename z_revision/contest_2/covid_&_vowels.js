function runProgram(input){
    let word = "coronavirus"
    let vowels = {}
    word.split("").forEach(el=>{
        if(el === "a" || el === "e" || el === "i" || el === "o" || el === "u"){
            vowels.push(el)
        }
    })
}

runProgram(`dangerouscovid`);