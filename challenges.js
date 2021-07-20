let sampleInt = 121;

function isPalindrome(x) {
    let reversedStr = x.toString().split("").reverse().join("");
    let reversedInt = parseInt(reversedStr);
    if (x === reversedInt) {
        return true;
    } else {
        return false;
    }
}

console.log(isPalindrome(sampleInt));
