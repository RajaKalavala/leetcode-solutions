/**
 * @problemNumber: 28
 * @problemName: Find the Index of the First Occurrence in a String
 * @difficulty: Easy
 * @topics: Two Pointers, String, String Matching
 * @companies: Microsoft, Facebook, Apple
 */

/**
 * Approach: Sliding Window
 * Time Complexity: O(n * m)
 * Space Complexity: O(1)
 *
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
function strStr(haystack, needle) {
    if (needle.length === 0) return 0;

    for (let i = 0; i <= haystack.length - needle.length; i++) {
        let match = true;
        for (let j = 0; j < needle.length; j++) {
            if (haystack[i + j] !== needle[j]) {
                match = false;
                break;
            }
        }
        if (match) return i;
    }

    return -1;
}

// Test cases
console.log(strStr("sadbutsad", "sad")); // 0
console.log(strStr("leetcode", "leeto")); // -1

module.exports = { strStr };
