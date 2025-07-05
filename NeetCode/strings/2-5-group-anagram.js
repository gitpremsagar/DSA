// Given an array of strings strs, group the anagrams together. You can return the answer in any order.

// Example 1:

// Input: strs = ["eat","tea","tan","ate","nat","bat"]

// Output: [["bat"],["nat","tan"],["ate","eat","tea"]]

// Explanation:

// There is no string in strs that can be rearranged to form "bat".
// The strings "nat" and "tan" are anagrams as they can be rearranged to form each other.
// The strings "ate", "eat", and "tea" are anagrams as they can be rearranged to form each other.
// Example 2:

// Input: strs = [""]

// Output: [[""]]

// Example 3:

// Input: strs = ["a"]

// Output: [["a"]]

// Constraints:

// 1 <= strs.length <= 104
// 0 <= strs[i].length <= 100
// strs[i] consists of lowercase English letters.

/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function (strs) {
  const uniqueLetter = new Map();

  for (i = 0; i < strs.length; i++) {
    const currentWord = strs[i];
    sortedCurrentWord = currentWord.split("").sort().join("");

    if (uniqueLetter.has(sortedCurrentWord)) {
      const existingGroup = uniqueLetter.get(sortedCurrentWord);
      uniqueLetter.set(sortedCurrentWord, [...existingGroup, strs[i]]);
    } else {
      uniqueLetter.set(sortedCurrentWord, [strs[i]]);
    }
  }

  let requiredArray = [];

  for ([key, value] of uniqueLetter) {
    requiredArray.push(value);
  }

  console.log(requiredArray);
//   return requiredArray;
};

groupAnagrams(["eat", "tea", "tan", "ate", "nat", "bat"]);
