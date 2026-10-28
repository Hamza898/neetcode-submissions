class Solution {
    /**
     * @param {number[]} nums
     * @param {number} target
     * @return {number[]}
     */
    twoSum(nums, target) {
        const map={}
        for(let i=0; i<nums.length; i++){
            let num = nums[i]
            let complement = target - num;      // 2. target - num
            if (complement in map) {
                return [map[complement], i];
            }
            map[num] = i
        }
    }
}
