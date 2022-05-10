let longestSubseq = [];

const isPalindrome = (str) => {
  if (str[0] !== str[str.length - 1]) {
    return false;
  }
  let s = [];
  for (let i = str.length - 1; i >= 0; i--) {
    s.push(str[i]);
  }

  s = s.join("");
  str = str.join("");
  return str == s;
};

const subSeq = (str, s) => {
  if (str.length == 0) {
    if (isPalindrome(s)) {
      if (s.length > longestSubseq.length) {
        longestSubseq = s;
      }
    }
    return;
  }
  // console.log(s);
  subSeq(str.splice(1), [...s, str[0]]);
  subSeq(str.splice(1), [...s]);
};

function runProgram(input) {
  let str = input;
  subSeq(str.split(""), []);
  console.log(longestSubseq.length);
}

runProgram(`AABCDEBAZ`);
