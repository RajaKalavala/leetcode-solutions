/**
 * @problemNumber: 8
 * @problemName: String to Integer (atoi)
 * @difficulty: Medium
 * @topics: String
 * @companies: Microsoft, Facebook, Amazon
 */

/**
 * Approach: Linear Scan with Overflow Check
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function myAtoi(s) {
    let index = 0;
    let sign = 1;
    let total = 0;
    const n = s.length;
    const INT_MAX = 2147483647;
    const INT_MIN = -2147483648;

    // 1. Remove leading whitespace
    while (index < n && s[index] === ' ') {
        index++;
    }

    if (index === n) return 0;

    // 2. Handle sign
    if (s[index] === '+' || s[index] === '-') {
        sign = s[index] === '+' ? 1 : -1;
        index++;
    }

    // 3. Convert number
    while (index < n) {
        const charCode = s.charCodeAt(index);
        // '0' is 48, '9' is 57
        if (charCode < 48 || charCode > 57) {
            break;
        }

        const digit = charCode - 48;

        // Check overflow
        if (total > Math.floor(INT_MAX / 10) ||
            (total === Math.floor(INT_MAX / 10) && digit > 7)) {
            return sign === 1 ? INT_MAX : INT_MIN;
        }

        total = total * 10 + digit;
        index++;
    }

    return total * sign;
}

// Test cases
console.log(myAtoi("42"));              // 42
console.log(myAtoi("   -42"));          // -42
console.log(myAtoi("4193 with words")); // 4193

module.exports = { myAtoi };
