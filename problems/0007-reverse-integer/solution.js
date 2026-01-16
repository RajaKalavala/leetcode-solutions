/**
 * @problemNumber: 7
 * @problemName: Reverse Integer
 * @difficulty: Medium
 * @topics: Math
 * @companies: Apple, Adobe, Bloomberg
 */

/**
 * Approach: Pop and Push Digits & Check for Overflow
 * Time Complexity: O(log(x))
 * Space Complexity: O(1)
 *
 * @param {number} x
 * @return {number}
 */
function reverse(x) {
    let rev = 0;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    while (x !== 0) {
        // Javascript modulus operator can return negative.
        // parseInt or Math.trunc to remove decimals after division
        const pop = x % 10;
        x = x > 0 ? Math.floor(x / 10) : Math.ceil(x / 10);

        // Check for positive overflow
        if (rev > INT_MAX / 10 || (rev === Math.floor(INT_MAX / 10) && pop > 7)) {
            return 0;
        }
        // Check for negative overflow
        if (rev < INT_MIN / 10 || (rev === Math.ceil(INT_MIN / 10) && pop < -8)) {
            return 0;
        }

        rev = rev * 10 + pop;
    }

    return rev;
}

// Test cases
console.log(reverse(123));  // 321
console.log(reverse(-123)); // -321
console.log(reverse(120));  // 21
console.log(reverse(1534236469)); // 0 (overflow)

module.exports = { reverse };
