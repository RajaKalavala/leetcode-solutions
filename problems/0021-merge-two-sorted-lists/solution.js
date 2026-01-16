/**
 * @problemNumber: 21
 * @problemName: Merge Two Sorted Lists
 * @difficulty: Easy
 * @topics: Linked List, Recursion
 * @companies: Amazon, Microsoft, Facebook
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Approach: Iterative
 * Time Complexity: O(n + m)
 * Space Complexity: O(1)
 *
 * @param {ListNode} list1
 * @param {ListNode} list2
 * @return {ListNode}
 */
function mergeTwoLists(list1, list2) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (list1 !== null && list2 !== null) {
        if (list1.val <= list2.val) {
            tail.next = list1;
            list1 = list1.next;
        } else {
            tail.next = list2;
            list2 = list2.next;
        }
        tail = tail.next;
    }

    if (list1 !== null) {
        tail.next = list1;
    } else if (list2 !== null) {
        tail.next = list2;
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
let l1 = createList([1, 2, 4]);
let l2 = createList([1, 3, 4]);
console.log(toArray(mergeTwoLists(l1, l2))); // [1,1,2,3,4,4]

module.exports = { mergeTwoLists };
