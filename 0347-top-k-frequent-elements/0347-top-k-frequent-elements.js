/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number[]}
 */
var topKFrequent = function(nums, k) {
        let map = new Map();
        let ans = [];
        for(let i = 0; i < nums.length; i++) {
            if (map.has(nums[i])) {
                map.set(nums[i], map.get(nums[i]) + 1);
            } else {
                map.set(nums[i], 1);
            }
        }
        let arr = [...map];
        arr.sort((a,b)=>a[1]-b[1]);
        let end = arr.length - 1;
        while(k--) {
            ans.push(arr[end--][0]);
        }
        return ans;
};