/**
 * @problemNumber: 29
 * @problemName: Divide Two Integers
 * @difficulty: Medium
 * @topics: Math, Bit Manipulation
 * @companies: Facebook, Google, Amazon
 */

/**
 * Approach: Bit Manipulation
 * Time Complexity: O(log n)
 * Space Complexity: O(1)
 *
 * @param {number} dividend
 * @param {number} divisor
 * @return {number}
 */
function divide(dividend, divisor) {
    const MAX = 2147483647;
    const MIN = -2147483648;

    if (dividend === MIN && divisor === -1) {
        return MAX;
    }

    const sign = (dividend > 0) === (divisor > 0) ? 1 : -1;

    let a = Math.abs(dividend);
    let b = Math.abs(divisor);
    let result = 0;

    // We can't use standard bitwise operators directly on potentially large numbers (JS bitwise is 32-bit)
    // So we use normal math for the iteration logic or subtraction.
    // However, JS numbers are double precision floats, safe up to 2^53.
    // We can simulate shifting by multiplying by 2.

    while (a >= b) {
        let temp = b;
        let multiple = 1;

        while (a >= (temp + temp) && (temp + temp) > 0) { // Check overflow for temp+temp? In JS doubles, it won't overflow 32bit range quickly.
            temp += temp;
            multiple += multiple;
        }

        a -= temp;
        result += multiple;
    }

    result = sign === 1 ? result : -result;

    if (result > MAX) return MAX;
    if (result < MIN) return MIN;
    return result;
}

// Test cases
console.log(divide(10, 3));  // 3
console.log(divide(7, -3));  // -2

module.exports = { divide };
