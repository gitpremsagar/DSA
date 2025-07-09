// Given an integer array nums, return an array answer such that answer[i] is equal to the product of all the elements of nums except nums[i].

// The product of any prefix or suffix of nums is guaranteed to fit in a 32-bit integer.

// You must write an algorithm that runs in O(n) time and without using the division operation.

 

// Example 1:

// Input: nums = [1,2,3,4]
// Output: [24,12,8,6]
// Example 2:

// Input: nums = [-1,1,0,-3,3]
// Output: [0,0,9,0,0]
 

// Constraints:

// 2 <= nums.length <= 105
// -30 <= nums[i] <= 30
// The input is generated such that answer[i] is guaranteed to fit in a 32-bit integer.

function productOfArraysExceptSelf(nums = [1,2,3,4]){
    const answer = [];

    const right = [];
    const left = [];
    for(i=0;i<nums.length;i++){
        console.log(i);
        const lastIndexOfLeft = left.length-1;
        const prevProd = left[lastIndexOfLeft] == undefined ? 1 : left[lastIndexOfLeft];
        const prevNumsIndex = i-1;
        const prevNum = nums[prevNumsIndex] == undefined ? 1:  nums[prevNumsIndex];
        left.push(prevNum * prevProd);
    }

    for(i=nums.length-1;i>=0;i--){
        console.log(i);
        const nextNumIndex = i+1;
        const nextNum = nums[nextNumIndex] == undefined ? 1: nums[nextNumIndex];
        const lastProd = right[0] == undefined ?1 : right[0];
        right.unshift(nextNum * lastProd);
    }

    for(i=0;i<nums.length;i++){
        answer.push(right[i]*left[i])
    }

    console.log(left,right,answer);
}

productOfArraysExceptSelf([-1,1,0,-3,3]);