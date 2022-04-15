function check(n) {
  let zeroes = 0;
  let D = 0;

  while (n % 10 == 0) {
    n = n / 10;
    zeroes += 1;
  }

  if (Math.pow(2, Math.log(n) / Math.log(2)) == n) {
    D = Math.log(n) / Math.log(2);
    console.log(Math.pow(2, Math.log(n) / Math.log(2)) == n)
    console.log(Math.pow(2, Math.log(n) / Math.log(2)), n)
    console.log(n, 2, Math.pow(2,Math.log(n)/Math.log(2)), zeroes, D);

    if (zeroes >= D) return true;
  }
  return false;
}

function runProgram(input) {
  input = input.split("\n");
  let t = Number(input[0]);
  let ind = 1;
  while (t--) {
    let n = Number(input[ind++]);
    if(ind-1 === 43)
    console.log(check(n) ? "Yes" : "No");
  }
}

runProgram(`100
1465
591
1789
1197
1826
152
671
137
296
1616
1225
1435
1687
1866
1604
1820
513
450
884
2000
20
1
2
3
4
5
10
20
30
40
50
55
65
64
32
1000
1200
1600
1400
100
98
200
300
400
600
1574
1441
1709
342
69
900
1384
1098
158
1787
548
834
245
236
1661
534
1164
335
745
799
1795
1195
1841
514
1970
277
1511
1729
1814
200
872
479
719
1630
1325
1398
1674
1957
1851
1297
650
1389
1926
1216
927
1119
1430
1219
1523
84
676
1180
1242
1434
422`);
