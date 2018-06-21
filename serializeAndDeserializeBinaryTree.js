/*
 * Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.
 * 
 * Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.
 * 
 * Example: 
 * 
 * You may serialize the following tree:
 * 
 *     1
 *    / \
 *   2   3
 *      / \
 *     4   5
 * 
 * as "[1,2,3,null,null,4,5]"
 * Clarification: The above format is the same as how LeetCode serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
 * 
 * Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */

var serialize = function(root) {
    let results = [];
    traverseSerialize(root, results);
    // results will look like [1,2,#,#,3,4,#,#,5,#,#] since we always go left first and add left node's value to array,
    // then only when we encounter the first "left=null" scenario do we look right on the current parent node (parent of the left=null)
    return results.join(",");
};

function traverseSerialize(node, resultsArr){
    if (node === null) {
        resultsArr.push("#");
        return;
    }
    resultsArr.push(node.val);
    traverseSerialize(node.left, resultsArr);
    traverseSerialize(node.right, resultsArr);
}


/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */var deserialize = function(data) {
    data = data.split(",");
    var index = 0;
    /*
     * note that this RECURSIVE function uses the "index" variable from its parent scope rather than 
     * passing it down as a method param. this is because we need "index" to be constantly updated
     * for instance, by the time after line 54 is executed at the very top level (meaning the first recursion on 54 has completed), index should be 2. if we had gone with passing index in like traverseDeserialize(data, index) 
     * at that point index would still be 1 which is NOT correct. we need the indexes to be run sequentially [0, 1, 2, 3 etc]
    */
    function traverseDeserialize(data) {
        if(index > data.length || data[index] === "#") {
            return null;
        }
        var node = new TreeNode(parseInt(data[index]));
        index++;
        node.left = traverseDeserialize(data);
        index++;
        node.right = traverseDeserialize(data);
        return node;
    }
     
    return traverseDeserialize(data);
};

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */