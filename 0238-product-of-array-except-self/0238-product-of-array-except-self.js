/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
        let sum = 1;
        let zeroFlag = false;
        let ans = [];
        for(let i = 0 ; i < nums.length; i++) {
            if (nums[i] !== 0) {
                sum *= nums[i];
            } else {
                if (zeroFlag) {
                    sum = 0;
                    break;
                }
                zeroFlag = true;
            }
        }
        nums.forEach((item)=>{
            if (item === 0) {
                ans.push(sum);
            } else if (zeroFlag) {
                ans.push(0);
            } else {
                ans.push((sum / item) >> 0);
            }
        });
        return ans;
};