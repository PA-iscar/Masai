const buyCandy = (points) => {
  let candy = 0;
  while (points > 0) {
    candy++;
    if (candy % 10 == 0) {
      points++;
    }
    points--;
  }
  return candy;
};

function runProgram(input) {
  input = input.split("\n").map(Number);
  let n = input[0];
  for (let i = 1; i <= n; i++) {
    let candy = buyCandy(input[i]);
    console.log(candy);
  }
}

runProgram(`6
1
10
19
9876
12345
1000000000`);
