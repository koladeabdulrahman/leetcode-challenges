/**
 * // Definition for a _Node.
 * function _Node(val, left, right, next) {
 *    this.val = val === undefined ? null : val;
 *    this.left = left === undefined ? null : left;
 *    this.right = right === undefined ? null : right;
 *    this.next = next === undefined ? null : next;
 * };
 */

/**
 * @param {_Node} root
 * @return {_Node}
 */
var connect = function(root) {
    if(!root)return null
    let q = [root]
    while(q.length){
        let len = q.length
        for(let i = 0; i<len; i++){
            q[i].next = q[i+1] || null
        }
        while(len--){
            let node = q.shift()
            if(node.left)q.push(node.left)
            if(node.right)q.push(node.right)
        }
    }
    return root
};