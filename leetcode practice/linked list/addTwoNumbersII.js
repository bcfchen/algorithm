var addTwoNumbers = function (l1, l2) {
    const stack1 = [], stack2 = [];

    while (l1) {
        stack1.push(l1.val);
        l1 = l1.next;
    }

    while (l2) {
        stack2.push(l2.val);
        l2 = l2.next;
    }

    let lsum = new ListNode(0);
    let carry = 0;
    while (stack1.length > 0 || stack2.length > 0) {
        const stack1Val = stack1.length > 0 ? stack1.pop() : 0;
        const stack2Val = stack2.length > 0 ? stack2.pop() : 0;
        const sum = stack1Val + stack2Val + carry;
        carry = Math.floor(sum / 10);

        // deal with sum linked list
        lsum.val = sum % 10;
        const tempPrevNode = new ListNode(0);
        tempPrevNode.next = lsum;
        lsum = tempPrevNode;
    }

    if (carry > 0) {
        lsum.val = carry;
        return lsum;
    } else {
        return lsum.next;
    }
};