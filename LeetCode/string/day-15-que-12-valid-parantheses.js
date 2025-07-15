// Given a string s containing just the characters '(', ')', '{', '}', '[' and ']', determine if the input string is valid.

// An input string is valid if:

// Open brackets must be closed by the same type of brackets.
// Open brackets must be closed in the correct order.
// Every close bracket has a corresponding open bracket of the same type.
 

// Example 1:

// Input: s = "()"

// Output: true

// Example 2:

// Input: s = "()[]{}"

// Output: true

// Example 3:

// Input: s = "(]"

// Output: false

// Example 4:

// Input: s = "([])"

// Output: true

 

// Constraints:

// 1 <= s.length <= 104
// s consists of parentheses only '()[]{}'.

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    const stack = [];
    const validPara = new Map();
    validPara.set("}","{");
    validPara.set("]","[");
    validPara.set(")","(");

    for(i=0;i<s.length;i++){
        stack.push(s[i]);//(,)
        if( validPara.has(s[i]) && validPara.get(s[i]) == stack[stack.length-2] ){
            stack.pop();
            stack.pop();
        }
    }

    if(stack.length == 0){
        return true;
    }       

    return false;
};

console.log(isValid());