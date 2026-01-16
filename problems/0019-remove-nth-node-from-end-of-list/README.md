# 19. Remove Nth Node From End of List

**Difficulty:** 🟡 Medium  
**Topics:** Linked List, Two Pointers  
**LeetCode Link:** [https://leetcode.com/problems/remove-nth-node-from-end-of-list/](https://leetcode.com/problems/remove-nth-node-from-end-of-list/)

## Problem Description

Given the `head` of a linked list, remove the `n`-th node from the end of the list and return its head.

### Examples:

**Example 1:**
```text
Input: head = [1,2,3,4,5], n = 2
Output: [1,2,3,5]
```

**Example 2:**
```text
Input: head = [1], n = 1
Output: []
```

**Example 3:**
```text
Input: head = [1,2], n = 1
Output: [1]
```

### Constraints:
- The number of nodes in the list is `sz`.
- `1 <= sz <= 30`
- `0 <= Node.val <= 100`
- `1 <= n <= sz`

---

## Approaches

### Approach 1: Two Pointers (One Pass)
**Intuition:**
We can use two pointers, `fast` and `slow`. 
Move `fast` `n` steps ahead.
Then move both `fast` and `slow` one step at a time until `fast` reaches the end.
At this point, `slow` will be pointing to the node *before* the target node.

**Algorithm:**
1. Create a dummy node pointing to `head` (to handle edge cases like removing the head itself).
2. Initialize `fast = dummy`, `slow = dummy`.
3. Move `fast` `n + 1` steps forward.
4. While `fast` is not null:
    - Move `fast` one step.
    - Move `slow` one step.
5. `slow.next = slow.next.next` (remove the nth node).
6. Return `dummy.next`.

**Complexity Analysis:**
- Time Complexity: O(L), where L is the length of list.
- Space Complexity: O(1).

---

## Key Takeaways
- The "dummy node" technique is very useful for linked list problems to handle edge cases where the head changes.
- Two pointers with a fixed gap allow finding "kth from end" in one pass.
