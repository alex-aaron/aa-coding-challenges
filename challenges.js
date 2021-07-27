
function concat(...args) {
    let concatArr = [];
    for (let i = 0; i < args.length; i++) {
        if (args[i].length > 1) {
            let subArr = args[i];
            for (let j = 0; j < subArr.length; j++) {
                concatArr.push(subArr[j]);
            }
        } else {
            concatArr.push(args[i][0]);
        }
    }
    return concatArr;
}

console.log(concat(['a'], ['b', 'c']));