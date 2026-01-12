/**
 * @problemNumber: 2
 * @problemName: Add Two Numbers
 * @difficulty: Medium
 * @topics: Linked List, Math
 * @companies: Amazon, Google, Microsoft, Meta
 */

/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */

/**
 * Approach: Elementary Math
 * Time Complexity: O(max(m, n))
 * Space Complexity: O(max(m, n))
 * 
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
function addTwoNumbers(l1, l2) {
    const dummy = new ListNode(0);
    let curr = dummy;
    let carry = 0;

    while (l1 !== null || l2 !== null || carry !== 0) {
        let sum = carry;

        if (l1 !== null) {
            sum += l1.val;
            l1 = l1.next;
        }

        if (l2 !== null) {
            sum += l2.val;
            l2 = l2.next;
        }

        carry = Math.floor(sum / 10);
        curr.next = new ListNode(sum % 10);
        curr = curr.next;
    }

    return dummy.next;
}

// Helper class for testing
class ListNode {
    constructor(val, next) {
        this.val = (val === undefined ? 0 : val);
        this.next = (next === undefined ? null : next);
    }
}

// Helper to create list from array
function createList(arr) {
    let dummy = new ListNode(0);
    let curr = dummy;
    for (let val of arr) {
        curr.next = new ListNode(val);
        curr = curr.next;
    }
    return dummy.next;
}

// Helper to print list
function printList(node) {
    let output = [];
    while (node) {
        output.push(node.val);
        node = node.next;
    }
    console.log(output);
}

// Test cases
let l1 = createList([2, 4, 3]);
let l2 = createList([5, 6, 4]);
printList(addTwoNumbers(l1, l2)); // [7,0,8]

module.exports = { addTwoNumbers, ListNode };
