/**
 * @param {string} word
 * @return {number}
 */
var possibleStringCount = function (word) {
  let characters = word.split("");
  let lastCheckedChar = "";
  let repeatedCharacter = [];

  let possibleStrings = [];
  //[
  // abbcccc
  // abbccc
  //]

  //abbccc

  //loop through characters to find repeated characters
  for (i = characters.length - 1; i >= 0; i--) {
    //i=6
    //i=5
    console.log("i = ", i);
    currentChar = characters[i];
    if (lastCheckedChar !== "" && currentChar === lastCheckedChar) {
      repeatedCharacter.push(currentChar);
      const currentPosStr = new Array(characters);
      const lastIndexNumber = i + 1;
      currentPosStr.splice(lastIndexNumber, 1); //i+1 = 6
      possibleStrings.push(currentPosStr.join(""));
    } else {
      //possibleStrings.push(word);
    }
    lastCheckedChar = currentChar;
    console.log("possibleStrings", possibleStrings);
  }

  const posStrCnt = possibleStrings.length;

  return posStrCnt;
};

console.log(possibleStringCount("abbcccc"));
