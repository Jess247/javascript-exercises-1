const leapYears = function(year) {
/*
is year divisible by four
is year not divisible by 100 but by 400
*/
return (year % 4 === 0 && year % 100 != 0 || year % 400 === 0);

};

// Do not edit below this line
module.exports = leapYears;
