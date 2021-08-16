/**
 * // Definition for a Node.
 * function Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {Node} root
 * @return {Node}
 */

var connect = function (parentNode) {
    if (!parentNode) {
        return parentNode;
    }

    if (parentNode.left) {
        parentNode.left.next = parentNode.right || getNext(parentNode.next);
    }

    if (parentNode.right) {
        parentNode.right.next = getNext(parentNode.next);
    }

    connect(parentNode.right);
    connect(parentNode.left);

    return parentNode;
};

function getNext(node) {
    if (!node) { return node; }
    if (node.left) { return node.left; }
    if (node.right) { return node.right; }

    return getNext(node.next);
}