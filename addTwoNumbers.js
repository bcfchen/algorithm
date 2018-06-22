/*
 * You are given two non-empty linked lists representing two non-negative integers. The digits are stored in reverse  * order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.
 * 
 * You may assume the two numbers do not contain any leading zero, except the number 0 itself.
 * 
 * Example
 * 
 * Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
 * Output: 7 -> 0 -> 8
 * Explanation: 342 + 465 = 807.
*/

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
var addTwoNumbers = function(l1, l2) {
    if (!l1 || !l2) { return l1 || l2; }
    
    let result = new ListNode(0);
    let currentNode = result;
    let carriedVal = 0;
    
    while(l1 || l2){
        let listNode1Val, listNode2Val;
        // if l1 exists then give listNode1Val the value of l1 and move to next node in l1
        // if it doesn't exist then simply set listNode1Val to 0 since you need a 0 to sum with l2
        if (l1){
            listNode1Val = l1.val;
            l1 = l1.next;
        } else {
            listNode1Val = 0;
        }
        
        // do the same with l2 as l1
        if (l2){
            listNode2Val = l2.val;
            l2 = l2.next;
        } else {
            listNode2Val = 0;
        }
        
        
        // figure out the sum of these and carried value (if needed)
        let sum = listNode1Val + listNode2Val + carriedVal;
        
        // if sum is 10 or more there is carriedVal of 1 to the next digit
        // say sum is 12 then carriedVal is 1 and current digit is 2
        if (sum > 9){
            carriedVal = 1;
            sum = sum % 10;
        } else {
            carriedVal = 0;
        }
        
        // this algorithm uses lookahead. the very first node of result will have val=0
        // and the real values will come in the 2nd node
        currentNode.next = new ListNode(sum);
        currentNode = currentNode.next;
    }
    
    // if there is a carriedVal leftover, it means there should be a "1" in front
    // of your summed digits 
    if (carriedVal > 0){
        currentNode.next = new ListNode(1);
    }
    
    // ignore first value in linked list since it always has val = 0
    return result.next;
};
