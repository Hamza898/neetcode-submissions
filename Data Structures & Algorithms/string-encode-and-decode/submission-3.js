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
        for (let i = 0; i < str.length; i) {
            let num = '';
            while (str[i] != '#') {
                num += str[i];
                i++;
            }
            i++; // Skip the '#'
            
            let word = '';
            let length = Number(num);
            
            for (let y = 0; y < length; y++) {
                word += str[i];
                i++;
            }
            
            // Push an empty string if length is 0, otherwise push the word
            num === '0' ? decodedArray.push('') : decodedArray.push(word);
        }
        return decodedArray;
    }
}