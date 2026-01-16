/**
 * @problemNumber: 14
 * @problemName: Longest Common Prefix
 * @difficulty: Easy
 * @topics: String
 * @companies: Amazon, Google, Apple
 */

/**
 * Approach: Horizontal Scanning
 * Time Complexity: O(S) where S is sum of all chars
 * Space Complexity: O(1)
 *
 * @param {string[]} strs
 * @return {string}
 */
function longestCommonPrefix(strs) {
    if (strs.length === 0) return "";

    let prefix = strs[0];

    for (let i = 1; i < strs.length; i++) {
        while (strs[i].indexOf(prefix) !== 0) {
            prefix = prefix.substring(0, prefix.length - 1);
            if (prefix === "") return "";
        }
    }

    return prefix;
}

// Test cases
console.log(longestCommonPrefix(["flower", "flow", "flight"])); // "fl"
console.log(longestCommonPrefix(["dog", "racecar", "car"]));    // ""

module.exports = { longestCommonPrefix };
