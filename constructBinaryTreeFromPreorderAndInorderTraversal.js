/*
 * Given preorder and inorder traversal of a tree, construct the binary tree.
 * 
 * Note:
 * You may assume that duplicates do not exist in the tree.
 * 
 * For example, given
 * 
 * preorder = [3,9,20,15,7]
 * inorder = [9,3,15,20,7]
 * Return the following binary tree:
 * 
 *     3
 *    / \
 *   9  20
 *     /  \
 *    15   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} preorder
 * @param {number[]} inorder
 * @return {TreeNode}
 */


// explanation of binary tree traversal methods: https://www.cs.cmu.edu/~adamchik/15-121/lectures/Trees/trees.html
// let's use example of 
// * preorder = [3,9,20,15,7]
// * inorder = [9,3,15,20,7]
var buildTree = function(preorder, inorder) {
    let preOrderStart = 0,
        preOrderEnd = preorder.length - 1,
        inOrderStart = 0,
        inOrderEnd = inorder.length - 1;

    
    function traverse(preOrderStart, preOrderEnd, inOrderStart, inOrderEnd){
        if (preOrderStart > preOrderEnd || inOrderStart > inOrderEnd ) { return null; }
        
        // since preorder tree's first node is root, find that value, which is 3 in this case
        let rootValue = preorder[preOrderStart];
        // find where 3 is in inorder array, which is index=1. 
        // we'll use this index to split this array into 2 halves right/left
        // now inorder can be split into [(9) | 3 | (15, 20, 7)] where 3 is the root
        let indexOfRootValueInOrder = inorder.indexOf(rootValue); // this is 1
        // now looking at the tree, number of values on left side is 1 - 0 = 1
        let numberOfValuesOnLeftSide = indexOfRootValueInOrder - inOrderStart;
        let rootNode = new TreeNode(rootValue);
        
        // do the same traversal logic for the left side of the tree. 
        // for preorder array this will start at 1 and end at 0 + 1 = 1
        // for inorder array this will start at 0 and end at 1 - 1 = 0
        rootNode.left = traverse(preOrderStart + 1, preOrderStart + numberOfValuesOnLeftSide, 
                            inOrderStart, indexOfRootValueInOrder-1);
        // do the same traversal logic for the right side of the tree
        rootNode.right = traverse(preOrderStart + numberOfValuesOnLeftSide + 1, preOrderEnd, 
                             indexOfRootValueInOrder + 1, inOrderEnd);
        
        return rootNode;
    }
    
    
    return traverse(preOrderStart, preOrderEnd, inOrderStart, inOrderEnd);
};
