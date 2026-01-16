/**
 * @problemNumber: 25
 * @problemName: Reverse Nodes in k-Group
 * @difficulty: Hard
 * @topics: Linked List, Recursion
 * @companies: Microsoft, Amazon, Facebook
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Approach: Iterative with Counting
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {ListNode} head
 * @param {number} k
 * @return {ListNode}
 */
function reverseKGroup(head, k) {
    if (!head || k === 1) return head;

    const dummy = new ListNode(0);
    dummy.next = head;

    let cur = dummy;
    let nex = dummy;
    let pre = dummy;
    let count = 0;

    // Count nodes
    while (cur.next) {
        cur = cur.next;
        count++;
    }

    while (count >= k) {
        cur = pre.next;
        nex = cur.next;

        // Reverse k-1 links
        for (let i = 1; i < k; i++) {
            cur.next = nex.next;
            nex.next = pre.next;
            pre.next = nex;
            nex = cur.next;
        }

        pre = cur;
        count -= k;
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
let head = createList([1, 2, 3, 4, 5]);
console.log(toArray(reverseKGroup(head, 2))); // [2,1,4,3,5]

module.exports = { reverseKGroup };
