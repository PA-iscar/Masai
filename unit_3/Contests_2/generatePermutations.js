function permute(str, l, r)
{
    if (l == r)
            console.log(str.join(" "));
        else
        {
            for (let i = l; i <= r; i++)
            {
                str = swap(str, l, i);
                permute(str, l + 1, r);
                str = swap(str, l, i);
            }
        }
}
 
function swap(a, i, j)
{
    let temp;
let charArray = a;
temp = charArray[i] ;
charArray[i] = charArray[j];
charArray[j] = temp;
return (charArray);
}


function runProgram(input){
    input = input.split("\n");
    let n = Number(input[0]);
    let arr = input[1].split(" ").map(Number);
    permute(arr, 0, n-1);
}


runProgram(`3
1 2 3`);