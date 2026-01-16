# 24. Swap Nodes in Pairs

**Difficulty:** 🟡 Medium  
**Topics:** Linked List, Recursion  
**LeetCode Link:** [https://leetcode.com/problems/swap-nodes-in-pairs/](https://leetcode.com/problems/swap-nodes-in-pairs/)

## Problem Description

Given a linked list, swap every two adjacent nodes and return its head. You must solve the problem without modifying the values in the list's nodes (i.e., only nodes themselves may be changed.)

### Examples:

**Example 1:**
```text
Input: head = [1,2,3,4]
Output: [2,1,4,3]
```

**Example 2:**
```text
Input: head = []
Output: []
```

**Example 3:**
```text
Input: head = [1]
Output: [1]
```

### Constraints:
- The number of nodes in the list is in the range `[0, 100]`.
- `0 <= Node.val <= 100`

---

## Approaches

### Approach 1: Iterative
**Intuition:**
Use a dummy node to point to the head. Iterate through the list 2 steps at a time.
Maintain `prev`, `first` and `second`.
Rearrange pointers: `prev.next = second`, `second.next = first`, `first.next = second.next`.
Update `prev` to `first`.

**Algorithm:**
1. Create `dummy` node pointing to `head`.
2. `prev = dummy`.
3. While `prev.next` and `prev.next.next` exist:
    - `first = prev.next`
    - `second = prev.next.next`
    - `prev.next = second`
    - `first.next = second.next`
    - `second.next = first`
    - `prev = first`
4. Return `dummy.next`.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(1).

### Approach 2: Recursive
**Intuition:**
Swap the first two nodes, then recursively call the function for the rest of the list (starting from the 3rd node).

**Algorithm:**
1. Base case: if `head` or `head.next` is null, return `head`.
2. `first = head`, `second = head.next`.
3. `first.next = swapPairs(second.next)`.
4. `second.next = first`.
5. Return `second`.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(n) stack space.

---

## Key Takeaways
- Pointer manipulation is error-prone. Drawing it out usually helps.
- Dummy node is again very helpful.
