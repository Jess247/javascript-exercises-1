const reverseString = function(str) {
    let strArr = str.split("").reverse();
    const reversedStr = strArr.join("");
    return reversedStr;
};

// Do not edit below this line
module.exports = reverseString;
