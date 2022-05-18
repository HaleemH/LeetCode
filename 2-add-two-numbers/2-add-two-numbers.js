/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function(l1, l2) {
    let carry =0;
    let prevNode = new ListNode();
    const head = prevNode;
    while(l1 || l2 || carry){
        let l1Val = 0;
        let l2Val = 0;
        if(l1){
            l1Val = l1.val;
            l1 = l1.next;
        }
        if(l2){
            l2Val = l2.val;
            l2 = l2.next;
        }
        const sum = l1Val + l2Val + carry;
        carry = sum > 9? 1 : 0;
        const singleDigit = sum%10;
        const currentNode = new ListNode(singleDigit);
        prevNode.next = currentNode;
        prevNode = currentNode;
    }
    return head.next
    
};