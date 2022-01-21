function runProgram(input) {
    input = input.split("\n")
    let dim = input[0].split(" ").map(Number);
    let n = dim[0];
    let m = dim[1];
    let k = dim[2];

    let req = input[1].split(" ").map(Number);
    let avil = input[2].split(" ").map(Number);
    req = req.sort((a, b) => a - b)
    avil = avil.sort((a, b) => a - b)
    console.log(req, avil)

    let ind = 0;
    let count = 0;


    for (let i = 0; i < m; i++) {
        if ((avil[i] >= req[ind] - k) && (avil[i] <= req[ind] +k )){
            count++;
        }
        if(avil[i] > req[ind] + k){
            ind++;
            i--
        }
    }

    console.log(count)
}


runProgram(`4 3 5
60 20 80 60
30 60 75`);