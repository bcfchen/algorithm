/*
 * Given a linked list, remove the n-th node from the end of list and return its head.
 * 
 * Example:
 * 
 * Given linked list: 1->2->3->4->5, and n = 2.
 * 
 * After removing the second node from the end, the linked list becomes 1->2->3->5.
 * Note:
 * 
 * Given n will always be valid.
 * 
 * Follow up:
 * 
 * Could you do this in one pass?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
var removeNthFromEnd = function(head, n) {
    if (!head.next){ return null; }
    
    let counter = 0;
    function traverse(node){
        if (!node){
            return;
        }
        traverse(node.next);
        counter++;
    }
    
    traverse(head);
    
    let indexToRemove = counter - n;
    let currentNode = head;
    let removalCounter=0;
    let prevNode = null;
    
    function traverseToRemove(node){
        if (removalCounter === indexToRemove){
            if (node.next){
                node.val = node.next.val;
                node.next = node.next.next;
            } else {
                prevNode.next = null;
            }
            return;
        }
        
        removalCounter++;        
        prevNode = node;
        traverseToRemove(node.next);
    }
    
    traverseToRemove(currentNode);
    
    return head;
};