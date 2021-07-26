let sampleStr = ["flow", "flower", "flight"];

function longestCommonPrefix(arr) {
    let minPrefix = true;
    let comparisonStr = arr[0];
    for (const element of arr) {
        if (element[0] !== comparisonStr[0]) {
            minPrefix = false;
        }
    }
    if (minPrefix === true) {
        for (let i = 1; i < arr.length; i++) {
            if ()
        }
    }
 
}

console.log(longestCommonPrefix(sampleStr));