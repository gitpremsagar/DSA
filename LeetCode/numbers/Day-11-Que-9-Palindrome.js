var isPalindrome = function(x) {
    const reversedX = [];
    const numberString = String(x);    
    let givenNum = x;
    for(i=0;i<numberString.length;i++){
        const lastDigit = givenNum%10;
        reversedX.push(lastDigit);
        givenNum = Math.trunc(givenNum/10);
    }
    return x == parseInt(reversedX.join(""))    
};

console.log(isPalindrome(121))