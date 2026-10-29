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
        const arr = [];
        for (let i = 0; i < k; i++) {
            // Grab the number from index 0 of the pair, and convert it back to a Number
            const val = Number(res[i][0]); 
            arr.push(val);
        }
        return arr;
        // return res.map((x, index)=> index < k && x[0]).filter((x) => x)
        
    }
}
