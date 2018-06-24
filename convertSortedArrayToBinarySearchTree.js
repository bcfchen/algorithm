/*
 * Given an array where elements are sorted in ascending order, convert it to a height balanced BST.
 * 
 * For this problem, a height-balanced binary tree is defined as a binary tree in which the depth of the two subtrees  * of every node never differ by more than 1.
 * 
 * Example:
 * 
 * Given the sorted array: [-10,-3,0,5,9],
 * 
 * One possible answer is: [0,-3,9,-10,null,5], which represents the following height balanced BST:
 * 
 *       0
 *      / \
 *    -3   9
 *    /   /
 *  -10  5
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {number[]} nums
 * @return {TreeNode}
 */
//[-10,-3,0,5,9]

var sortedArrayToBST = function(nums) {
    if (nums.length === 0) { return null;}
    
    function traverse(nums, highIndex, lowIndex){
        if (lowIndex > highIndex){
            return null;
        }
        
        let midIndex = Math.floor((highIndex + lowIndex)/2);
        let node = new TreeNode(nums[midIndex]);
        node.left = traverse(nums, midIndex-1, lowIndex);
        node.right = traverse(nums, highIndex, midIndex+1);
        
        return node;
    }
    
    return traverse(nums, nums.length-1, 0);
};