
let sampleArr = [1, -1, 5, 3, -7, 4, 5, 6, -100, 6];

function longestSubarraySum(a) {
    let currentMax = a[0];
    let maxSumsArr = [];
    maxSumsArr.push(currentMax);
    for (let i = 1; i < a.length; i++) {
        currentMax = Math.max(a[i], currentMax + a[i]);
        maxSumsArr.push(currentMax);
    }
}

console.log(longestSubarraySum(a));