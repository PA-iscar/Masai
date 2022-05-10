var addTwoNumbers = function (l1, l2) {
  let temp = l1;
  let carry = 0;
  while (l1 || l2 || carry) {
    if (!l2 && (carry || l1)) {
      l2 = new ListNode(0);
    }
    sum = l1.val + l2.val + carry;
    if (sum <= 9) {
      l1.val = sum;
      carry = 0;
    } else {
      l1.val = sum - 10;
      carry = 1;
    }
    if (l1.next == null && (l2.next != null || carry)) {
      l1.next = new ListNode(0);
    }
    l1 = l1.next;
    l2 = l2.next;
  }
  // console.log(temp,l1,l2)
  return temp;
};
