'use strict';
// Exercise 23 - Factorial!
// Write the function getFactorial which receives a number and returns n! 


var res = getFactorial(6);
console.log('Factorial', res);

function getFactorial(num) {
    if (num < 0) return NaN

    var res = 1;
    while (num > 1) {
        res = res * num;
        num--
    }
    return res;
}
