/**
 * @problemNumber: 23
 * @problemName: Merge k Sorted Lists
 * @difficulty: Hard
 * @topics: Linked List, Divide and Conquer, Heap
 * @companies: Facebook, Amazon, Google
 */

function ListNode(val, next) {
    this.val = (val === undefined ? 0 : val)
    this.next = (next === undefined ? null : next)
}

/**
 * Approach: Divide and Conquer
 * Time Complexity: O(N log k)
 * Space Complexity: O(1)
 *
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
function mergeKLists(lists) {
    if (!lists || lists.length === 0) return null;

    while (lists.length > 1) {
        const mergedLists = [];
        for (let i = 0; i < lists.length; i += 2) {
            const l1 = lists[i];
            const l2 = i + 1 < lists.length ? lists[i + 1] : null;
            mergedLists.push(mergeTwoLists(l1, l2));
        }
        lists = mergedLists;
    }

    return lists[0];
}

function mergeTwoLists(l1, l2) {
    const dummy = new ListNode(0);
    let tail = dummy;

    while (l1 && l2) {
        if (l1.val <= l2.val) {
            tail.next = l1;
            l1 = l1.next;
        } else {
            tail.next = l2;
            l2 = l2.next;
        }
        tail = tail.next;
    }

    if (l1) tail.next = l1;
    if (l2) tail.next = l2;

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
let l1 = createList([1, 4, 5]);
let l2 = createList([1, 3, 4]);
let l3 = createList([2, 6]);
console.log(toArray(mergeKLists([l1, l2, l3]))); // [1,1,2,3,4,4,5,6]

module.exports = { mergeKLists };
