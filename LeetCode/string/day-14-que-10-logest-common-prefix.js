// Write a function to find the longest common prefix string amongst an array of strings.

// If there is no common prefix, return an empty string "".

 

// Example 1:

// Input: strs = ["flower","flow","flight"]
// Output: "fl"
// Example 2:

// Input: strs = ["dog","racecar","car"]
// Output: ""
// Explanation: There is no common prefix among the input strings.
 

// Constraints:

// 1 <= strs.length <= 200
// 0 <= strs[i].length <= 200
// strs[i] consists of only lowercase English letters if it is non-empty.

/**
 * @param {string[]} strs
 * @return {string}
 */
var longestCommonPrefix = function(strs) {

    const commonPrefix = [];

    for(k=0;k<strs[0].length;k++){
        const letter = strs[0][k];
        commonPrefix.push(letter);
    }

    for(i=1;i<strs.length;i++){
        const word = strs[i];
        if(commonPrefix.length > word.length){
            commonPrefix.splice(word.length,commonPrefix.length);
        }
        for(j=0;j<word.length;j++){
            const letter = word[j];
            if(letter != commonPrefix[j]){
                commonPrefix.splice(j,commonPrefix.length);
                break;
            }
        }
    }

    const cpString = commonPrefix.join("");

    console.log(cpString)
    return cpString;
};

longestCommonPrefix(["flower","flow"])