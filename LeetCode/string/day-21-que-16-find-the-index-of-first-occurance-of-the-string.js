/**
 * @param {string} haystack
 * @param {string} needle
 * @return {number}
 */
var strStr = function(haystack="sdfljkpremjdslkjp", needle="prem") {
    const needleLength = needle.length;
    let result = -1;

    for(i=0; i<haystack.length; i++){
        const cl = haystack[i];
        if(cl == needle[0]){
            const tempStr = haystack.slice(i,i+(needleLength));
            if(tempStr == needle){
                result = i;
                return result;
            }
        }
    }

    return result; 
};

console.log(strStr());