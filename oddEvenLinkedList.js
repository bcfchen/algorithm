/*
 * Given a singly linked list, group all odd nodes together followed by the even nodes. Please note here we are  * talking about the node number and not the value in the nodes.
 * 
 * You should try to do it in place. The program should run in O(1) space complexity and O(nodes) time complexity.
 * 
 * Example 1:
 * 
 * Input: 1->2->3->4->5->NULL
 * Output: 1->3->5->2->4->NULL
 * Example 2:
 * 
 * Input: 2->1->3->5->6->4->7->NULL
 * Output: 2->3->6->7->1->5->4->NULL
 * Note:
 * 
 * The relative order inside both the even and odd groups should remain as it was in the input.
 * The first node is considered odd, the second node even and so on ...
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
var oddEvenList = function(head) {
    // null protect
    if (!head){ return null;}
    if (!head.next) { return head;}
    
    // let's use 1->2->3->4->5->NULL as example
    let currentOdd = head;
    // originalEven will always point at "2" node
    let originalEven = head.next;
    // currentEven will hold the up to date "even" node at each given moment. this one 
    // constantly updates
    let currentEven = head.next;
    
    // using currenEven && currentEven.next as condition because it comes later than
    // odd node, AND we need to do curentEven.next.next 
    while(currentEven && currentEven.next){
        // look ahead 2 nodes to retrieve next odd node and assign to current odd node's next
        // ex. oddNode 1's next node will be oddNode 3
        currentOdd.next = currentOdd.next.next;
        currentEven.next = currentEven.next.next;
        // prepare current odd node for the next iteration
        currentOdd = currentOdd.next;
        currentEven = currentEven.next;
    }
    
    // at this point (after while loop finishes) currentOdd will be 5. 
    // then 5's next node should be the first even node, which is 2 (held by originalEven)
    currentOdd.next = originalEven;
    return head;
};