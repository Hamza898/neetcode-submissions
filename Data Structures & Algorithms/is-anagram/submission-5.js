class Solution {
    /**
     * @param {string} s
     * @param {string} t
     * @return {boolean}
     */
    isAnagram(s, t) {
        if(s.length != t.length) return false
        const count={}
        for (let x of s){
             count[x] = (count[x] || 0) + 1
        }
        for(let x of t){
            if (!count[x]){
                return false
            }
            count[x]--
        }
        // if (Object.keys(count).length){
        //     return false
        // }
        return true
    }
        
}
