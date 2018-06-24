/*
 * Reverse a singly linked list.
 * 
 * Example:
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 5->4->3->2->1->NULL
 * Follow up:
 * 
 * A linked list can be reversed either iteratively or recursively. Could you implement both?
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
 * @return {ListNode}
 */
var reverseList = function(head) {
    if (!head || !head.next){
        return head;
    }
    let reversedListNode = {};
    
    var traverse = function(currentNode, reversedNode, counter){
        if (!currentNode.next){
            let nodeToReturn = new ListNode(currentNode.val);
            nodeToReturn.next = reversedNode;
            return nodeToReturn;
        }

        let newReversedNode = new ListNode(currentNode.val);
        newReversedNode.next = reversedNode;
        
        /* first normal node = last reversed node
         * last reversed node should have next = null
         */
        if (counter === 0){
            newReversedNode.next = null;            
        }
        counter++;
        return traverse(currentNode.next, newReversedNode, counter);
    }
    
    
    let final = traverse(head, reversedListNode, 0);
    return final;
};