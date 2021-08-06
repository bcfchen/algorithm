/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
var reverseKGroup = function (head, k) {
    let revHead = null, revTail = null, newHead = null;
    let pointer = head;

    while (pointer) {
        // 1. move pointer to start of next segment
        let counter = 0;
        while (counter < k && pointer) {
            pointer = pointer.next;
            counter++
        }

        if (counter == k) {
            // 2. reverse current segment
            revHead = reverse(head, k);

            if (!newHead) { newHead = revHead; }

            // 3. if previous segment exist, connect prev segment's tail to current
            // segment's head
            if (revTail) {
                revTail.next = revHead;
            }

            // 4. move prev segment's tail to current segment's tail
            revTail = head;
            // 5. move head to start of next segment
            head = pointer;
        }
    }

    revTail.next = head;

    return newHead;
}

function reverse(head, k) {
    let prev = null, current = head;
    let counter = 0;
    while (counter < k) {
        const temp = current.next;
        current.next = prev;
        prev = current;
        current = temp;
        counter++;
    }

    return prev;
}
