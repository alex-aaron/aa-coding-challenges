
let sampleInput = [1, [2, 3]];

function getLength(a) {
    let nonNestedElements;
    if (a.length === 0) {
        return 0;
    }
    for (let i = 0; i < a.length; i++) {
        if (typeof a[i] === 'object')
        return true;
    }
}

console.log(getLength(sampleInput));