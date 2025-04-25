/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
        let N = strs.length;
        let map = new Map();
        let ans = [];

        for(let i = 0; i < N; i++) {
            let word = strs[i].split("").sort().join("");
            if (map.has(word)) {
                let arr = map.get(word);
                arr.push(strs[i]);
            } else  {
                map.set(word, [strs[i]]);
            }
        }
        for(let str of map) {
            ans.push(str[1]);
        }
        return ans;
};