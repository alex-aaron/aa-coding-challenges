let sampleStr = ["flow", "flower", "flight"];

function longestCommonPrefix(arr) {
    let minPrefix = true;
    let outputStr = "";
    let comparisonStr = arr[0];
    for (const element of arr) {
        if (element[0] !== comparisonStr[0]) {
            minPrefix = false;
        }

    }
    if (minPrefix === true) {
        
    }
 
}

console.log(longestCommonPrefix(sampleStr));