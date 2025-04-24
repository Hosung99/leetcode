/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
            let N = nums.length;
        for(let i = 0; i < N; i++) {
            for(let j = i; j < N - 1; j++) {
                if (nums[i] + nums[j + 1] === target) {
                    return [i, j + 1];
                }
            }
        }
};