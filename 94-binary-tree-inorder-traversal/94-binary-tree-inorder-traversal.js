/**
 * Definition for a binary tree node.
 * function TreeNode(val, left, right) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.left = (left===undefined ? null : left)
 *     this.right = (right===undefined ? null : right)
 * }
 */
/**
 * @param {TreeNode} root
 * @return {number[]}
 */
var inorderTraversal = function(root) {
    //recursice
    
    // if (root === null) return []
    // const result = [];
    // function traverse(node){
    //     if(node.left) traverse(node.left);
    //     result.push(node.val)
    //     if(node.right) traverse(node.right);
    // }
    // traverse(root)
    // return result
    
    //iteratively
    
    if(root === null) return [];
    let node = root;
    const result = []
    
    while(node){
        if(!node.left){
            result.push(node.val)
            node= node.right;
        }else{
            const prev = findPrev(node)
            if(prev.right === node){
                prev.right = null
                result.push(node.val)
                node = node.right;
            }else{
                prev.right = node
                node = node.left
            }
        }
    }
    
    return result
};

function findPrev(root){
    let node = root.left
    while(node.right && node.right!== root){
        node = node.right
    }
    return node
}