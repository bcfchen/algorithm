/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
    if (!l1 || !l2) { return null; }

    let lsum = new ListNode(0), carry = 0;
    let currentSumNode = lsum;
    while (l1 || l2) {
        const l1Val = l1 ? l1.val : 0;
        const l2Val = l2 ? l2.val : 0;
        const sum = carry + l1Val + l2Val;
        carry = Math.floor(sum / 10);
        currentSumNode.val = sum % 10;

        // move to the right if exists
        if (l1) { l1 = l1.next; }
        if (l2) { l2 = l2.next; }

        if (l1 || l2) {
            currentSumNode.next = new ListNode(0);
            currentSumNode = currentSumNode.next;
        }
    }

    if (carry > 0) {
        currentSumNode.next = new ListNode(carry);
    }

    return lsum;
}
