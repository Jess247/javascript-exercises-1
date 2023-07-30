/*
get two ints as arguments
create sum variable 
sum all numbers starting form the num1 up to num2 and save them in sum variable
return the sum after the loop
*/
const sumAll = function(firstNum, secondNum) {
    if (!Number.isInteger(firstNum) || !Number.isInteger(secondNum)) {
        return "ERROR";
    }
    if (firstNum < 0 || secondNum < 0) {
        return "ERROR";
    }
    let smallerNum = (firstNum < secondNum) ? firstNum : secondNum;
    let higherNum = (firstNum > secondNum) ? firstNum : secondNum;;
    
    let sum = 0;

    
    while (smallerNum <= higherNum) {
        sum += smallerNum;
        smallerNum++;
    }
    return sum;
};

// Do not edit below this line
module.exports = sumAll;
