class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        const count={}
        for(let x of nums){
            count[x]=(count[x] || 0) + 1
        }
        const entries = Object.entries(count)
        const res = entries.sort((a,b)=> b[1]- a[1])
        return res.map((x, index)=> index < k && x[0]).filter((x) => x)
        
    }
}
