/**
 * @problemNumber: 9
 * @problemName: Palindrome Number
 * @difficulty: Easy
 * @topics: Math
 * @companies: Facebook, Apple, Google
 */

/**
 * Approach 1: Revert Half of the Number
 * Time Complexity: O(log10(n))
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {boolean}
 */
function isPalindrome(x) {
    // Special cases:
    // x < 0: Negative numbers are not palindromes
    // x % 10 == 0 && x != 0: Numbers ending in 0 are not palindromes (except 0)
    if (x < 0 || (x % 10 === 0 && x !== 0)) {
        return false;
    }

    let revertedNumber = 0;
    while (x > revertedNumber) {
        revertedNumber = revertedNumber * 10 + (x % 10);
        x = Math.floor(x / 10);
    }

    // When the length is an odd number, we can get rid of the middle digit by revertedNumber/10
    // Example: x = 12321, at the end x = 12, revertedNumber = 123
    return x === revertedNumber || x === Math.floor(revertedNumber / 10);
}

// Test cases
console.log(isPalindrome(121));  // true
console.log(isPalindrome(-121)); // false
console.log(isPalindrome(10));   // false

module.exports = { isPalindrome };
