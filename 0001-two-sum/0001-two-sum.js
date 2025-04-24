/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
        let N = nums.length;
        let obj = {};
        for(let i = 0; i < N; i++) {
            let num = nums[i];
            let reverse = target - num;
            if (obj[num] !== undefined) {
                return [obj[num], i];
            }
            obj[reverse] = i;
        }
};