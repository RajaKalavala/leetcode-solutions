# 17. Letter Combinations of a Phone Number

**Difficulty:** 🟡 Medium  
**Topics:** String, Backtracking  
**LeetCode Link:** [https://leetcode.com/problems/letter-combinations-of-a-phone-number/](https://leetcode.com/problems/letter-combinations-of-a-phone-number/)

## Problem Description

Given a string containing digits from `2-9` inclusive, return all possible letter combinations that the number could represent. Return the answer in **any order**.

A mapping of digits to letters (just like on the telephone buttons) is given below. Note that 1 does not map to any letters.

- 2: "abc"
- 3: "def"
- 4: "ghi"
- 5: "jkl"
- 6: "mno"
- 7: "pqrs"
- 8: "tuv"
- 9: "wxyz"

### Examples:

**Example 1:**
```text
Input: digits = "23"
Output: ["ad","ae","af","bd","be","bf","cd","ce","cf"]
```

**Example 2:**
```text
Input: digits = ""
Output: []
```

**Example 3:**
```text
Input: digits = "2"
Output: ["a","b","c"]
```

### Constraints:
- `0 <= digits.length <= 4`
- `digits[i]` is a digit in the range `['2', '9']`.

---

## Approaches

### Approach 1: Backtracking
**Intuition:**
We need to explore all possible combinations. A recursive backtracking function can build strings character by character.

**Algorithm:**
1. If `digits` is empty, return [].
2. Create a mapping of `digit -> letters`.
3. Define a recursive function `backtrack(index, currentString)`:
    - Base case: if `index == digits.length`, add `currentString` to results and return.
    - Get the letters corresponding to `digits[index]`.
    - Loop through each letter:
        - Call `backtrack(index + 1, currentString + letter)`.
4. Call `backtrack(0, "")`.
5. Return results.

**Complexity Analysis:**
- Time Complexity: O(4^N * N), where N is the length of digits. 4 is the max letters per digit (7 and 9). N is for string building.
- Space Complexity: O(N) due to recursion stack.

---

## Key Takeaways
- Backtracking is the standard approach for generating combinations/permutations.
