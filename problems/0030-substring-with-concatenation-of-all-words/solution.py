"""
Problem Number: 30
Problem Name: Substring with Concatenation of All Words
Difficulty: Hard
Topics: Hash Table, String, Sliding Window
Companies: Amazon, Facebook, Google
"""

from typing import List
from collections import Counter

class Solution:
    def findSubstring(self, s: str, words: List[str]) -> List[int]:
        """
        Approach: Sliding Window with Hash Map
        Time Complexity: O(n * len)
        Space Complexity: O(m)
        """
        if not s or not words:
            return []
        
        word_len = len(words[0])
        word_count = len(words)
        total_len = word_len * word_count
        word_map = Counter(words)
        res = []
        
        for i in range(word_len):
            left = i
            right = i
            seen = Counter()
            count = 0
            
            while right + word_len <= len(s):
                w = s[right : right + word_len]
                right += word_len
                
                if w in word_map:
                    seen[w] += 1
                    count += 1
                    
                    while seen[w] > word_map[w]:
                        left_w = s[left : left + word_len]
                        seen[left_w] -= 1
                        count -= 1
                        left += word_len
                    
                    if count == word_count:
                        res.append(left)
                else:
                    seen.clear()
                    count = 0
                    left = right
                    
        return res

# Test cases
if __name__ == "__main__":
    solution = Solution()
    print(solution.findSubstring("barfoothefoobarman", ["foo","bar"])) # [0,9]
    print(solution.findSubstring("wordgoodgoodgoodbestword", ["word","good","best","word"])) # []
