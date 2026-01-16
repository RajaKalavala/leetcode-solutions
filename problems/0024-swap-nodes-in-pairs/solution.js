/**
 * @problemNumber: 24
 * @problemName: Swap Nodes in Pairs
 * @difficulty: Medium
 * @topics: Linked List, Recursion
 * @companies: Microsoft, Amazon, Facebook
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Approach: Iterative
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @return {ListNode}
 */
function swapPairs(head) {
    const dummy = new ListNode(0);
    dummy.next = head;
    let prev = dummy;

    while (prev.next && prev.next.next) {
        let first = prev.next;
        let second = prev.next.next;

        prev.next = second;
        first.next = second.next;
        second.next = first;

        prev = first;
    }

    return dummy.next;
}

// Helper to create list
function createList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper to array
function toArray(head) {
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

// Test cases
let head = createList([1, 2, 3, 4]);
console.log(toArray(swapPairs(head))); // [2,1,4,3]

module.exports = { swapPairs };
