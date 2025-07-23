// 58. Length of last word
// Given a string s consisting of words and spaces, return the length of the last word in the string.

// A word is a maximal substring consisting of non-space characters only.

 

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
 

// Constraints:

// 1 <= s.length <= 104
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLastWord = function(s="Hello World") {
    let firstIndex = null;//lastIndex=10;firstIndex=6;
    let lastIndex = null;

    for(i=s.length-1;i>=0;i--){//i=10;i=9;i=8;i=7;i=6;i=5
        const cc = s[i];//cc=d;cc=l.....cc=" "
        if( cc == " " ) {//d==" ";l==" ";......" "==" "
            if( lastIndex != null ){
                firstIndex = i+1;
                break;
            }
        } else {
            if( lastIndex == null ){//lastIndex=null;
                lastIndex = i;
            }
        }
    }

    const lastWord = s.slice(firstIndex, lastIndex+1);//becsause lastIndex is not inclusive in slice() 


    return lastWord.length;
};

console.log(lengthOfLastWord());