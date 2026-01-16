/**
 * @problemNumber: 13
 * @problemName: Roman to Integer
 * @difficulty: Easy
 * @topics: Hash Table, Math, String
 * @companies: Facebook, Amazon, Apple
 */

/**
 * Approach: Right to Left Pass
 * Time Complexity: O(n)
 * Space Complexity: O(1)
 *
 * @param {string} s
 * @return {number}
 */
function romanToInt(s) {
    const map = {
        'I': 1,
        'V': 5,
        'X': 10,
        'L': 50,
        'C': 100,
        'D': 500,
        'M': 1000
    };

    let total = 0;
    let prevValue = 0;

    for (let i = s.length - 1; i >= 0; i--) {
        const currentValue = map[s[i]];

        if (currentValue < prevValue) {
            total -= currentValue;
        } else {
            total += currentValue;
        }
        prevValue = currentValue;
    }

    return total;
}

// Test cases
console.log(romanToInt("III"));      // 3
console.log(romanToInt("LVIII"));    // 58
console.log(romanToInt("MCMXCIV"));  // 1994

module.exports = { romanToInt };
