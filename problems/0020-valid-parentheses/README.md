# 20. Valid Parentheses

**Difficulty:** 🟢 Easy  
**Topics:** String, Stack  
**LeetCode Link:** [https://leetcode.com/problems/valid-parentheses/](https://leetcode.com/problems/valid-parentheses/)

## Problem Description

Given a string `s` containing just the characters `'('`, `')'`, `'{'`, `'}'`, `'['` and `']'`, determine if the input string is valid.

An input string is valid if:
1. Open brackets must be closed by the same type of brackets.
2. Open brackets must be closed in the correct order.
3. Every close bracket has a corresponding open bracket of the same type.

### Examples:

**Example 1:**
```text
Input: s = "()"
Output: true
```

**Example 2:**
```text
Input: s = "()[]{}"
Output: true
```

**Example 3:**
```text
Input: s = "(]"
Output: false
```

### Constraints:
- `1 <= s.length <= 10^4`
- `s` consists of parentheses only `()[]{}`.

---

## Approaches

### Approach 1: Stack
**Intuition:**
We process the string char by char. If we see an opening bracket, we push it onto the stack. If we see a closing bracket, we check if the top of the stack is the matching opening bracket. If so, pop. If not, invalid. At the end, stack must be empty.

**Algorithm:**
1. Initialize an empty stack.
2. Create a map of matching pairs: `) -> (, } -> {, ] -> [`.
3. Iterate through string:
    - If char is opening `(`, `{`, `[`, push to stack.
    - If char is closing:
        - If stack is empty or `stack.pop() != map[char]`, return false.
4. Return `stack.length == 0`.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(n).

---

## Key Takeaways
- Stack is the canonical data structure for parsing nested structures or balanced symbols.
