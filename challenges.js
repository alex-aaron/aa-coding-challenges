let sampleArr = [true, false, false, true, false];

function countTrue(arr) {
    let trueSum = 0;
    for (const element of arr) {
        if (element === true) {
            trueSum += 1;
        }
    }
    return trueSum;
}

console.log(countTrue(sampleArr));