/**
 * @problemNumber: 19
 * @problemName: Remove Nth Node From End of List
 * @difficulty: Medium
 * @topics: Linked List, Two Pointers
 * @companies: Facebook, Amazon, Apple
 */

// Definition for singly-linked list.
function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Approach: One Pass with Two Pointers
 * Time Complexity: O(L)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} n
 * @return {ListNode}
 */
function removeNthFromEnd(head, n) {
    const dummy = new ListNode(0);
    dummy.next = head;

    let first = dummy;
    let second = dummy;

    // Move first pointer n + 1 steps ahead
    for (let i = 0; i <= n; i++) {
        first = first.next;
    }

    // Move both pointers until first reaches the end
    while (first !== null) {
        first = first.next;
        second = second.next;
    }

    // Skip the desired node
    second.next = second.next.next;

    return dummy.next;
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

// Helper to toArray
function toArray(head) {
    let res = [];
    while (head) {
        res.push(head.val);
        head = head.next;
    }
    return res;
}

// Test cases
let head = createList([1, 2, 3, 4, 5]);
console.log(toArray(removeNthFromEnd(head, 2))); // [1,2,3,5]

module.exports = { removeNthFromEnd };
