/**
 * // Definition for a Node.
 * function Node(val, next, random) {
 *    this.val = val;
 *    this.next = next;
 *    this.random = random;
 * };
 */

/**
 * @param {Node} head
 * @return {Node}
 */
var copyRandomList = function (head) {
    if (!head) { return head; }
    const dict = new Map();
    let oldNode = head;
    const newHead = new Node(head.val);
    let newNode = newHead;

    // DONT FORGET THIS!!!
    dict.set(oldNode, newNode);

    while (oldNode) {
        newNode.next = createOrGetNewNode(oldNode.next, dict);
        newNode.random = createOrGetNewNode(oldNode.random, dict);

        newNode = newNode.next;
        oldNode = oldNode.next;
    }

    return newHead;
};

function createOrGetNewNode(oldNode, dict) {
    if (oldNode === null) { return null; }

    if (!dict.has(oldNode)) {
        const newNode = new Node(oldNode.val);
        dict.set(oldNode, newNode);
    }

    return dict.get(oldNode);
}
