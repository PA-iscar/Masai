function CountLongestSubarrays(arr, n, k)
{
    var sum = 0;
    for(var i = 0; i < n; i++)
    {
        sum += arr[i];
    }
    if ((sum % k) != 0)
    {
        return 1;
    }
    else
    {
        var ini = 0;
 
        while (ini < n && arr[ini] % k == 0)
        {
            ++ini;
        }
 
        var fin = n - 1;
 
        while (fin >= 0 && arr[fin] % k == 0)
        {
            --fin;
        }
 
        var len, sum = 0, count = 0;
         
        if (ini == n)
        {
            return -1;
        }
        else
        {
            len = Math.max(n - 1 - ini, fin);
        }
 
        for(i = 0; i < len; i++)
        {
            sum += arr[i];
        }
 
        if (sum % k != 0)
        {
            count++;
        }
         
        for(i = len; i < n; i++)
        {
            sum = sum + arr[i];
            sum = sum - arr[i - len];
             
            if (sum % k != 0)
            {
                count++;
            }
        }
        return count;
    }
}
     
function runProgram(input){
    var input = input.split("\n");
    var dim = input[0].split(" ").map(Number);
    var n = dim[0];
    var k = dim[1];
    var arr = input[1].split(" ").map(Number);
    
    console.log(CountLongestSubarrays(arr, n, k));
}

runProgram(`5 3
2 4 3 5 1`);