/*
 * Given a singly linked list, determine if it is a palindrome.
 * 
 * Example 1:
 * 
 * Input: 1->2
 * Output: false
 * Example 2:
 * 
 * Input: 1->2->2->1
 * Output: true
 * Follow up:
 * Could you do it in O(n) time and O(1) space?
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/* Explanation:
abba

conditions for palindrome: 
    - arr[1st] = arr[last]
    - arr[2nd] = arr[last - 1]

    1. loop through linked list until next = null, push values into array to generate [a, b, b, a]
    2. loop through linked list again, check node1.val = arr[last], node2.val = arr[last-1] so on
    3. if value not equal, return false else return true
 *
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
    if (!head || !head.next){
        return true;
    }
    
    let valuesArray = [];
    let headCopy = head;
    while(headCopy){
        valuesArray.push(headCopy.val);
        headCopy = headCopy.next;
    }
        
    while(head){
        let popped = valuesArray.pop();
        if(head.val !== popped){
            return false;
        }
        head = head.next;
    }
    
    return true;
};