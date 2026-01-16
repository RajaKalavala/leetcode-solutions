/**
 * @problemNumber: 6
 * @problemName: Zigzag Conversion
 * @difficulty: Medium
 * @topics: String
 * @companies: PayPal, Amazon, Google
 */

/**
 * Approach 1: Sort by Row (Simulation)
 * Time Complexity: O(n)
 * Space Complexity: O(n)
 *
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
function convert(s, numRows) {
    if (numRows === 1 || s.length <= numRows) return s;

    const rows = new Array(numRows).fill('');
    let curRow = 0;
    let goingDown = false;

    for (let c of s) {
        rows[curRow] += c;
        if (curRow === 0 || curRow === numRows - 1) goingDown = !goingDown;
        curRow += goingDown ? 1 : -1;
    }

    return rows.join('');
}

// Test cases
console.log(convert("PAYPALISHIRING", 3)); // "PAHNAPLSIIGYIR"
console.log(convert("PAYPALISHIRING", 4)); // "PINALSIGYAHRPI"
console.log(convert("A", 1));              // "A"

module.exports = { convert };
