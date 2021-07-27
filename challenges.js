
function concat(...args) {
    let concatArr = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i].length > 1) {
            let subArr = element;
            for (let j = 0; j < subArr.length; j++) {
                concatArr.push(subArr[j]);
            }
        } else {
            concatArr.push(args[i]);
        }
    }
    return concatArr;
}

console.log(concat([1], [2], [3], [4]));