/**
 * @problemNumber: 12
 * @problemName: Integer to Roman
 * @difficulty: Medium
 * @topics: Hash Table, Math, String
 * @companies: Amazon, Google, Adobe
 */

/**
 * Approach: Greedy with Predefined Values
 * Time Complexity: O(1)
 * Space Complexity: O(1)
 *
 * @param {number} num
 * @return {string}
 */
function intToRoman(num) {
    const valueSymbols = [
        [1000, "M"],
        [900, "CM"],
        [500, "D"],
        [400, "CD"],
        [100, "C"],
        [90, "XC"],
        [50, "L"],
        [40, "XL"],
        [10, "X"],
        [9, "IX"],
        [5, "V"],
        [4, "IV"],
        [1, "I"]
    ];

    let result = "";

    for (const [value, symbol] of valueSymbols) {
        while (num >= value) {
            num -= value;
            result += symbol;
        }
    }

    return result;
}

// Test cases
console.log(intToRoman(3749)); // "MMMDCCXLIX"
console.log(intToRoman(58));   // "LVIII"
console.log(intToRoman(1994)); // "MCMXCIV"

module.exports = { intToRoman };
