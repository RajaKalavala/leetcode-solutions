/**
 * @problemNumber: 5
 * @problemName: Longest Palindromic Substring
 * @difficulty: Medium
 * @topics: String, Dynamic Programming
 * @companies: Amazon, Google, Microsoft, Meta
 */

/**
 * Approach: Expand Around Center
 * Time Complexity: O(n²)
 * Space Complexity: O(1)
 * 
 * @param {string} s
 * @return {string}
 */
function longestPalindrome(s) {
    if (!s || s.length < 1) return "";

    let start = 0;
    let end = 0;

    for (let i = 0; i < s.length; i++) {
        const len1 = expandAroundCenter(s, i, i);
        const len2 = expandAroundCenter(s, i, i + 1);
        const len = Math.max(len1, len2);

        if (len > end - start) {
            start = i - Math.floor((len - 1) / 2);
            end = i + Math.floor(len / 2);
        }
    }

    return s.substring(start, end + 1);
}

function expandAroundCenter(s, left, right) {
    while (left >= 0 && right < s.length && s[left] === s[right]) {
        left--;
        right++;
    }
    return right - left - 1;
}

// Test cases
console.log(longestPalindrome("babad")); // "bab" or "aba"
console.log(longestPalindrome("cbbd"));  // "bb"

module.exports = longestPalindrome;
