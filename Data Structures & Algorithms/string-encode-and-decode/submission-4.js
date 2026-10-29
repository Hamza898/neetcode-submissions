class Solution {
    /**
     * @param {string[]} strs
     * @returns {string}
     */
    encode(strs) {
        let encodedStr = '';
        for (let x of strs) {
            // This handles normal strings AND empty strings automatically!
            encodedStr += `${x.length}#${x}`; 
        }
        return encodedStr;
    }

    /**
     * @param {string} str
     * @returns {string[]}
     */
    decode(str) {
        const decodedArray = [];
        let i=0
        while(i<str.length){
            let j= i
            while (str[j] !='#'){
                j++
            }
            let length = Number(str.substring(i,j))
            i= j+1
            let word = str.substring(i, i + length)
            decodedArray.push(word)
            i += length
        }
        return decodedArray;
    }
}