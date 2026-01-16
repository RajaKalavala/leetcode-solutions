# 6. Zigzag Conversion

**Difficulty:** 🟡 Medium  
**Topics:** String  
**LeetCode Link:** [https://leetcode.com/problems/zigzag-conversion/](https://leetcode.com/problems/zigzag-conversion/)

## Problem Description

The string `"PAYPALISHIRING"` is written in a zigzag pattern on a given number of rows like this: (you may want to display this pattern in a fixed font for better legibility)

```
P   A   H   N
A P L S I I G
Y   I   R
```

And then read line by line: `"PAHNAPLSIIGYIR"`

Write the code that will take a string and make this conversion given a number of rows:

```
string convert(string s, int numRows);
```

### Examples:

**Example 1:**
```text
Input: s = "PAYPALISHIRING", numRows = 3
Output: "PAHNAPLSIIGYIR"
```

**Example 2:**
```text
Input: s = "PAYPALISHIRING", numRows = 4
Output: "PINALSIGYAHRPI"
Explanation:
P     I    N
A   L S  I G
Y A   H R
P     I
```

**Example 3:**
```text
Input: s = "A", numRows = 1
Output: "A"
```

### Constraints:
- `1 <= s.length <= 1000`
- `s` consists of English letters (lower-case and upper-case), `','` and `'.'`.
- `1 <= numRows <= 1000`

---

## Approaches

### Approach 1: Sort by Row
**Intuition:**
Iterate through the string and place each character into the correct row. We can simulate the zigzag movement by keeping track of the `currentRow` and a `direction` flag (going down or going up).

**Algorithm:**
1. If `numRows` is 1, return `s`.
2. Create an array (or list of strings) of size `numRows` to store characters for each row.
3. Initialize `currRow = 0` and `goingDown = false`.
4. Iterate through each character `c` in `s`:
    - Append `c` to the current row's string.
    - If `currRow` is 0 or `currRow == numRows - 1`, toggle `goingDown`.
    - Update `currRow`: increment if `goingDown` is true, else decrement.
5. Join all rows to form the result string.

**Complexity Analysis:**
- Time Complexity: O(n), where n is the length of `s`. We visit every character once.
- Space Complexity: O(n) to store the result strings for each row.

### Approach 2: Visit by Row
**Intuition:**
Instead of simulating the zigzag path, we can deduce which characters belong to row 0, row 1, etc., mathematically. The pattern repeats every `cycleLen = 2 * numRows - 2`.

**Algorithm:**
1. If `numRows` is 1, return `s`.
2. Initialize `cycleLen = 2 * numRows - 2`.
3. Iterate through each row `r` from 0 to `numRows - 1`:
    - Iterate through the string with index `i` stepping by `cycleLen`.
    - Add character at `i + r`.
    - For inner rows (not first or last), checking strictly, we also need to add the character at `i + cycleLen - r` if it exists.
4. Construct and return result.

**Complexity Analysis:**
- Time Complexity: O(n).
- Space Complexity: O(n).

---

## Key Takeaways
- Simulation is often the most intuitive way to solve pattern problems.
- Handling edge cases like `numRows = 1` is critical.
