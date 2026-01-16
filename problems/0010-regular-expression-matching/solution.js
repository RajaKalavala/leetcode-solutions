/**
 * @problemNumber: 10
 * @problemName: Regular Expression Matching
 * @difficulty: Hard
 * @topics: String, Dynamic Programming, Recursion
 * @companies: Facebook, Google, Amazon
 */

/**
 * Approach: Dynamic Programming
 * Time Complexity: O(m * n)
 * Space Complexity: O(m * n)
 *
 * @param {string} s
 * @param {string} p
 * @return {boolean}
 */
function isMatch(s, p) {
    const m = s.length;
    const n = p.length;

    // dp[i][j] means s[0...i-1] matches p[0...j-1]
    const dp = Array(m + 1).fill(false).map(() => Array(n + 1).fill(false));

    dp[0][0] = true;

    // Handle patterns like a*, a*b* etc matching empty string
    for (let j = 1; j <= n; j++) {
        if (p[j - 1] === '*') {
            dp[0][j] = dp[0][j - 2];
        }
    }

    for (let i = 1; i <= m; i++) {
        for (let j = 1; j <= n; j++) {
            if (p[j - 1] === '.' || p[j - 1] === s[i - 1]) {
                dp[i][j] = dp[i - 1][j - 1];
            } else if (p[j - 1] === '*') {
                // Case 1: * matches zero of the preceding element
                dp[i][j] = dp[i][j - 2];
                // Case 2: * matches one or more of the preceding element
                if (p[j - 2] === '.' || p[j - 2] === s[i - 1]) {
                    dp[i][j] = dp[i][j] || dp[i - 1][j];
                }
            }
        }
    }

    return dp[m][n];
}

// Test cases
console.log(isMatch("aa", "a"));  // false
console.log(isMatch("aa", "a*")); // true
console.log(isMatch("ab", ".*")); // true

module.exports = { isMatch };
