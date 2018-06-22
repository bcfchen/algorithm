/*
 * Write a program to find the node at which the intersection of two singly linked lists begins.
 * 
 * 
 * For example, the following two linked lists:
 * 
 * A:          a1 → a2
 *                    ↘
 *                      c1 → c2 → c3
 *                    ↗            
 * B:     b1 → b2 → b3
 * begin to intersect at node c1.
 * 
 * 
 * Notes:
 * 
 * If the two linked lists have no intersection at all, return null.
 * The linked lists must retain their original structure after the function returns.
 * You may assume there are no cycles anywhere in the entire linked structure.
 * Your code should preferably run in O(n) time and use only O(1) memory.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} headA
 * @param {ListNode} headB
 * @return {ListNode}
 */

/*
 *let's use example:
 *A:          a1 → a2
 *                   ↘
 *                     c1 → c2 → c3
 *                   ↗            
 *B:     b1 → b2 → b3
*/

var getIntersectionNode = function(headA, headB) {
    if (!headA || !headB){ return null;}
    let lengthA = getListLength(headA),
        lengthB = getListLength(headB);
    
    // in case A is longer than B, keep truncating 
    // A until A is the same length as B
    while(lengthA > lengthB){
        headA = headA.next;
        lengthA--;
    }
    
    // in case B is longer than A, do the same
    // using our example, we would truncate B so that it'll contain only 
    // b2 -> b3 -> c1...etc. and b1 will be chopped off
    while(lengthB > lengthA){
        headB = headB.next;
        lengthB--;
    }
    
    // keep iterating over A and B until find a value that's the same
    while (headA && headB){
        if (headA.val === headB.val){
            return headA;
        }
        
        headA = headA.next;
        headB = headB.next;
    }
    
    return null;
};

function getListLength(node){
    let counter=0;
    while(node){
        node = node.next;
        counter++;
    }
    
    return counter;
}