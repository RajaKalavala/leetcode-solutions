# 30. Substring with Concatenation of All Words

**Difficulty:** 🔴 Hard  
**Topics:** Hash Table, String, Sliding Window  
**LeetCode Link:** [https://leetcode.com/problems/substring-with-concatenation-of-all-words/](https://leetcode.com/problems/substring-with-concatenation-of-all-words/)

## Problem Description

You are given a string `s` and an array of strings `words`. All the strings of `words` are of the **same length**.

A **concatenated substring** in `s` is a substring that contains all the strings of any permutation of `words` concatenated.

- For example, if `words = ["ab","cd","ef"]`, then `"abcdef"`, `"abefcd"`, `"cdabef"`, `"cdefab"`, `"efabcd"`, and `"efcdab"` are all concatenated strings. `"acdbef"` is not a concatenated substring because it is not the concatenation of any permutation of `words`.

Return *the starting indices of all the concatenated substrings in `s`*. You can return the answer in **any order**.

### Examples:

**Example 1:**
```text
Input: s = "barfoothefoobarman", words = ["foo","bar"]
Output: [0,9]
Explanation: Since words.length == 2 and words[i].length == 3, the concatenated substring has to be of length 6.
The substring starting at 0 is "barfoo". It is the concatenation of ["bar","foo"] which is a permutation of words.
The substring starting at 9 is "foobar". It is the concatenation of ["foo","bar"] which is a permutation of words.
The output order does not matter. Returning [9,0] is fine too.
```

**Example 2:**
```text
Input: s = "wordgoodgoodgoodbestword", words = ["word","good","best","word"]
Output: []
Explanation: Since words.length == 4 and words[i].length == 4, the concatenated substring has to be of length 16.
There is no substring of length 16 is s that is equal to the concatenation of any permutation of words.
```

**Example 3:**
```text
Input: s = "barfoofoobarthefoobarman", words = ["bar","foo","the"]
Output: [6,9,12]
```

### Constraints:
- `1 <= s.length <= 10^4`
- `1 <= words.length <= 5000`
- `1 <= words[i].length <= 30`
- `s` and `words[i]` consist of lowercase English letters.

---

## Approaches

### Approach 1: Sliding Window with Hash Map
**Intuition:**
All words are the same length `W`. The total length of the substring is `K * W`.
We can maintain a window of size `K * W`. Inside the window, we check if it is composed of exactly the words in `words`.
Since we can start checking from index 0, 1, ..., W-1, we can have `W` passes. In each pass, we jump `W` steps at a time.

**Algorithm:**
1. Create a frequency map `counts` for `words`.
2. Let `n = s.length`, `k = words.length`, `len = words[0].length`.
3. Iterate `i` from `0` to `len - 1` (offsets):
    - Initialize `left = i`, `right = i`.
    - Create `seen` map. `count = 0`.
    - While `right + len <= n`:
        - Extract `sub = s.substring(right, right + len)`.
        - `right += len`.
        - If `sub` is in `words`:
            - `seen[sub]++`, `count++`.
            - While `seen[sub] > counts[sub]`:
                - Remove `left` word from `seen`, `count--`, `left += len`.
            - If `count == k`:
                - Add `left` to result.
        - Else (word not in words):
            - Reset `seen`, `count = 0`, `left = right`.
4. Return result.

**Complexity Analysis:**
- Time Complexity: O(N * len), effectively linear O(N) since `len` is small constant.
- Space Complexity: O(K * len) to store maps.

---

## Key Takeaways
- The fixed length of words is the key constraint that allows "jumping" windows.
