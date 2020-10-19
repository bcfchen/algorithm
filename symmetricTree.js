/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {boolean}
 */
var isSymmetric = function(root) {
    if (root === null){ return true;}
    
    return isMirror(root.left, root.right);
};

function isMirror(nodeLeft, nodeRight){
    if (!nodeLeft && !nodeRight){ return true;} // if both of them are falsy, they are mirror
    if (!nodeLeft || !nodeRight) { return false;} // if only one of them is falsy return false
    if (nodeLeft.val !== nodeRight.val){ return false;}
    
    return isMirror(nodeLeft.left, nodeRight.right) && isMirror(nodeLeft.right, nodeRight.left);
}