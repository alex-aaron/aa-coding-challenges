let sampleInt = 3;

function intToRoman(num) {
    return sampleInt;
}

////// HELPER FUNCTIONS ////////

function singleDigitIntToRoman(x) {
    let letter = "";
    let romanNumArr = [];
    let count;
    let romanNum;
    if (x < 5) {
        let count = x;
        while (count > 0) {
            letter += "I";
            romanNumArr.push(romanNum);
            count--;
        }
    }
    romanNum = romanNumArr.join("");
    return romanNum;
}

function doubleDigitIntToRoman(x) {

}

function tripleDigitIntToRoman(x) {

}

function quadrupleDigitIntToRoman(x) {

}

console.log(singleDigitIntToRoman(sampleInt));