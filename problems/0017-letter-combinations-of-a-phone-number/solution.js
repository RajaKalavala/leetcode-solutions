/**
 * @problemNumber: 17
 * @problemName: Letter Combinations of a Phone Number
 * @difficulty: Medium
 * @topics: String, Backtracking
 * @companies: Amazon, Google, Facebook
 */

/**
 * Approach: Backtracking
 * Time Complexity: O(4^n)
 * Space Complexity: O(n)
 *
 * @param {string} digits
 * @return {string[]}
 */
function letterCombinations(digits) {
    if (digits.length === 0) return [];

    const map = {
        '2': 'abc',
        '3': 'def',
        '4': 'ghi',
        '5': 'jkl',
        '6': 'mno',
        '7': 'pqrs',
        '8': 'tuv',
        '9': 'wxyz'
    };

    const result = [];

    function backtrack(index, currentStr) {
        if (index === digits.length) {
            result.push(currentStr);
            return;
        }

        const letters = map[digits[index]];
        for (const char of letters) {
            backtrack(index + 1, currentStr + char);
        }
    }

    backtrack(0, "");
    return result;
}

// Test cases
console.log(letterCombinations("23")); // ["ad","ae","af","bd","be","bf","cd","ce","cf"]
console.log(letterCombinations(""));   // []
console.log(letterCombinations("2"));  // ["a","b","c"]

module.exports = { letterCombinations };
