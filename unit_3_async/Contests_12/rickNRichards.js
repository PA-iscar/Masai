function runProgram(input) {
    input = input.split("\n");
    let t = Number(input[0]);
    let index = 1;
    while (t--) {
        let n = Number(input[index++]);
        let arr = input[index++].split(" ").map(Number);

        let i = 1;
        let j = n - 2;

        let count = 1;
        let x = arr[0];
        let y = 2 * arr[n - 1];
        while (i <= j) {
            if (x <= y) {
                x += arr[i];
                i++
                count++
            } else {
                y += 2 * arr[j];
                j--;
            }
        }
        console.log(count, n - count)
    }
}

runProgram(`1
5
2 9 8 2 7`);