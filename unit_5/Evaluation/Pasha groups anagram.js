function isAnagram(str, str2) {
  str = str.split("").sort().join("");
  str2 = str2.split("").sort().join("");

  return str === str2;
}

function runProgram(input) {
  input = input.split("\n");
  let t = Number(input[0]);
  let ind = 1;
  while (t--) {
    let n = Number(input[ind++]);
    let arr = [];
    for (let i = 0; i < n; i++) {
      arr.push(input[ind + i]);
    }

    ind += n;

    let arr2 = new Array();

    let j = 0;
    while (n > 0) {
      arr2[j] = new Array();
      for (let i = 1; i < n; i++) {
        if (isAnagram(arr[0], arr[i])) {
          arr2[j].push(arr[i]);
          arr.splice(i, 1, "");
        }
      }
      arr2[j].push(arr[0]);
      arr.splice(0, 1, "");
      j++;
      arr = arr.filter((val) => val !== "");
      n = arr.length;
    }

    for(let i=0;i<arr2.length;i++){
        console.log(arr2[i].length)
        console.log(arr2[i].join("\n"))
    }
  }
}

runProgram(`2
6
eat
tea
tan
ate
nat
bat
3
abc
abc
def`);
