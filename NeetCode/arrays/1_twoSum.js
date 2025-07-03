// Problem Statement
// Check for Duplicates in an Array

// Given an array of integers, determine whether the array contains any duplicate elements. Your task is to return whether any value appears at least twice in the array, or all values are distinct.

// Input
// An integer array nums of length n (where 1 ≤ n ≤ 10^5).

// Each element of nums is an integer in the range -10^9 to 10^9.

// Output
// Return "Yes" if there are any duplicate elements in the array.

// Return "No" if all elements are unique.

// Example Test Cases
// Test Case 1
// yaml
// Copy
// Edit
// Input: [1, 2, 3, 4, 5]
// Output: No
// Test Case 2
// yaml
// Copy
// Edit
// Input: [1, 2, 3, 2]
// Output: Yes
// Test Case 3
// yaml
// Copy
// Edit
// Input: [10]
// Output: No
// Test Case 4
// yaml
// Copy
// Edit
// Input: [-5, -10, -5, 0, 5, 10]
// Output: Yes
// Test Case 5
// yaml
// Copy
// Edit
// Input: [1000000000, -1000000000, 0]
// Output: No

// ===================================================================================
//brut force approach
// time complexity = O(n^2)
// function hasDuplicates(nums) {
//   //nums[3,4,2,5,3]
//   for(i=0;i<=nums.length-1;i++){
//     const currentItem = nums[i];
//     for(j=i+1;j<=nums.length;j++){
//         const itemToCompare = nums[j];
//         if(currentItem==itemToCompare){
//             return "Yes";
//         }
//     }
//   }

//   return "No";
// }

// ===================================================================================
//time complexity = O (n)
function hasDuplicates(nums){
    const uniqueSet = new Set();
    for(i=0;i<nums.length;i++){
        if(uniqueSet.has(nums[i])){
            return "Yes";
        }
        uniqueSet.add(nums[i]);
    }
    return "No";
}


//test cases
function testHasDuplicates() {
  const testCases = [
    {
      input: [1, 2, 3, 4, 5],
      expected: "No"
    },
    {
      input: [1, 2, 3, 2],
      expected: "Yes"
    },
    {
      input: [10],
      expected: "No"
    },
    {
      input: [-5, -10, -5, 0, 5, 10],
      expected: "Yes"
    },
    {
      input: [1000000000, -1000000000, 0],
      expected: "No"
    }
  ];

  let allPassed = true;

  testCases.forEach((testCase, index) => {
    const result = hasDuplicates(testCase.input);
    if (result === testCase.expected) {
      console.log(`Test case ${index + 1}: PASSED`);
    } else {
      console.log(`Test case ${index + 1}: FAILED`);
      console.log(`   Input: ${JSON.stringify(testCase.input)}`);
      console.log(`   Expected: ${testCase.expected}`);
      console.log(`   Got: ${result}`);
      allPassed = false;
    }
  });

  if (allPassed) {
    console.log("✅ All test cases passed!");
  } else {
    console.log("❌ Some test cases failed.");
  }
}

testHasDuplicates();