///////////// Longest Palindromic Substring /////////////

let sampleStr = "a";

function longestPalindrome(s) {
    let longestPal;
    if (s.length === 1) {
        longestPal = s;
    } else {
        let palArray = createPalindromeArr(s);
    let length = palArray[0].length;
    let longestPal = palArray[0];
    for (const element of palArray) {
        if (element.length > length) {
            longestPal = element;
        }
    }
    }
    return longestPal;
}

// HELPER FUNCTIONS //

function createPalindromeArr(s) {
    let palArr = [];
    for (let i = 0; i < s.length; i++) {
        let a = i;
        let z = s.length - 1;
        while (z > 0) {
            console.log("a: " + s[a] + " z: " + s[z]);
            if (s[a] === s[z]) {
                let pal = s.slice(a, z + 1);
                console.log(pal);
                let reversedPal = pal.split("").reverse().join("");
                if (pal === reversedPal) {
                    palArr.push(pal);
                }
                z--;
            } else {
                z--;
            }
        }
    }
    return palArr;
}

console.log(longestPalindrome(sampleStr));

// ITERATION //
