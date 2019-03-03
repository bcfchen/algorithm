/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var hasCycle = function(head) {
    if (!head){
        return false;
    }
    
    if (head.isDirty){
        return true;
    }
    
    head.isDirty = true;
    return hasCycle(head.next);
};