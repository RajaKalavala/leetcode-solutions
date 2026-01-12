/**
 * @problemNumber: 3
 * @problemName: Longest Substring Without Repeating Characters
 * @difficulty: Medium
 * @topics: Hash Table, String, Sliding Window
 * @companies: Amazon, Google, Microsoft, Meta, Bloomberg
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n)
 * Space Complexity: O(min(m, n))
 * 
 * @param {string} s
 * @return {number}
 */
function lengthOfLongestSubstring(s) {
    let charSet = new Set();
    let left = 0;
    let maxLength = 0;

    for (let right = 0; right < s.length; right++) {
        while (charSet.has(s[right])) {
            charSet.delete(s[left]);
            left++;
        }

        charSet.add(s[right]);
        maxLength = Math.max(maxLength, right - left + 1);
    }

    return maxLength;
}

// Test cases
console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb"));    // 1
console.log(lengthOfLongestSubstring("pwwkew"));   // 3

module.exports = lengthOfLongestSubstring;
