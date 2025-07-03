
// Problem:
// Write a function sortNumbers that takes an array of integers as input and returns a new array containing the same numbers sorted in ascending order.

// Example:
// Given the input:

// javascript
// Copy
// Edit
// [3, 2, 5, 1, 7, 4, 8, 4, 3]
// The function should return:

// javascript
// Copy
// Edit
// [1, 2, 3, 3, 4, 4, 5, 7, 8]

const sortNumbers = function (nums){
    const arr = [1,2,3,4]
    return arr;
}

function runSortTests(sortNumbers) {
  const tests = [
    {
      input: [3, 2, 5, 1, 7, 4, 8, 4, 3],
      expected: [1, 2, 3, 3, 4, 4, 5, 7, 8],
    },
    {
      input: [],
      expected: [],
    },
    {
      input: [10],
      expected: [10],
    },
    {
      input: [1, 2, 3, 4, 5],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [5, 4, 3, 2, 1],
      expected: [1, 2, 3, 4, 5],
    },
    {
      input: [-3, 0, 2, -1, 5],
      expected: [-3, -1, 0, 2, 5],
    },
    {
      input: [7, 7, 7, 7],
      expected: [7, 7, 7, 7],
    },
  ];

  let passed = 0;

  tests.forEach((test, index) => {
    const result = sortNumbers(test.input.slice()); // slice to avoid mutation
    const passedTest = arraysEqual(result, test.expected);

    if (passedTest) {
      console.log(`✅ Test ${index + 1} passed.`);
      passed++;
    } else {
      console.error(`❌ Test ${index + 1} failed.`);
      console.error(`   Input:    ${JSON.stringify(test.input)}`);
      console.error(`   Expected: ${JSON.stringify(test.expected)}`);
      console.error(`   Got:      ${JSON.stringify(result)}`);
    }
  });

  console.log(`\n${passed} / ${tests.length} tests passed.`);
}

function arraysEqual(a, b) {
  if (a.length !== b.length) return false;
  for (let i = 0; i < a.length; i++) {
    if (a[i] !== b[i]) return false;
  }
  return true;
}

runSortTests();