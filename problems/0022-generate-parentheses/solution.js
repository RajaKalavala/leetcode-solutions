/**
 * @problemNumber: 22
 * @problemName: Generate Parentheses
 * @difficulty: Medium
 * @topics: String, Dynamic Programming, Backtracking
 * @companies: Facebook, Microsoft, Amazon
 */

/**
 * Approach: Backtracking
 * Time Complexity: O(4^n / sqrt(n))
 * Space Complexity: O(n)
 *
 * @param {number} n
 * @return {string[]}
 */
function generateParenthesis(n) {
    const result = [];

    function backtrack(currentStr, openCount, closeCount) {
        if (currentStr.length === 2 * n) {
            result.push(currentStr);
            return;
        }

        if (openCount < n) {
            backtrack(currentStr + "(", openCount + 1, closeCount);
        }

        if (closeCount < openCount) {
            backtrack(currentStr + ")", openCount, closeCount + 1);
        }
    }

    backtrack("", 0, 0);
    return result;
}

// Test cases
console.log(generateParenthesis(3)); // ["((()))","(()())","(())()","()(())","()()()"]
console.log(generateParenthesis(1)); // ["()"]

module.exports = { generateParenthesis };
