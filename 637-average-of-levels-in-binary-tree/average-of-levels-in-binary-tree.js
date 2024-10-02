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
var averageOfLevels = function(root) {
    let result = []
    let q = [root]
    while(q.length){
        let len = q.length, sum = 0
        for(let i = 0; i<len; i++){
            sum+=q[i].val
        }
        let avg = sum/len
        result.push(avg)
        while(len--){
            let node = q.shift()
            if(node.left)q.push(node.left)
            if(node.right)q.push(node.right)
        }
    }
    return result
};
