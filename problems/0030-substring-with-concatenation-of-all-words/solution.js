/**
 * @problemNumber: 30
 * @problemName: Substring with Concatenation of All Words
 * @difficulty: Hard
 * @topics: Hash Table, String, Sliding Window
 * @companies: Amazon, Facebook, Google
 */

/**
 * Approach: Sliding Window with Hash Map
 * Time Complexity: O(n * len)
 * Space Complexity: O(m)
 *
 * @param {string} s
 * @param {string[]} words
 * @return {number[]}
 */
function findSubstring(s, words) {
    if (!s || !words || words.length === 0) return [];

    const wordLen = words[0].length;
    const wordCount = words.length;
    const totalLen = wordLen * wordCount;
    const wordMap = {};

    for (const w of words) {
        wordMap[w] = (wordMap[w] || 0) + 1;
    }

    const result = [];

    for (let i = 0; i < wordLen; i++) {
        let left = i;
        let right = i;
        let seen = {};
        let count = 0;

        while (right + wordLen <= s.length) {
            const w = s.substring(right, right + wordLen);
            right += wordLen;

            if (wordMap[w]) {
                seen[w] = (seen[w] || 0) + 1;
                count++;

                while (seen[w] > wordMap[w]) {
                    const leftW = s.substring(left, left + wordLen);
                    seen[leftW]--;
                    count--;
                    left += wordLen;
                }

                if (count === wordCount) {
                    result.push(left);
                }
            } else {
                seen = {};
                count = 0;
                left = right;
            }
        }
    }

    return result;
}

// Test cases
console.log(findSubstring("barfoothefoobarman", ["foo", "bar"])); // [0,9]
console.log(findSubstring("wordgoodgoodgoodbestword", ["word", "good", "best", "word"])); // []

module.exports = { findSubstring };
