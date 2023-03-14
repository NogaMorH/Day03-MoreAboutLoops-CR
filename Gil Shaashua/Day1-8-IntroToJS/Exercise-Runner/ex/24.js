'use strict';
// Exercise 24 - myAbs()
// Try playing around with the function Math.abs() and read its documentation on MDN. 
// Implement a function called myAbs(), which mimics the behavior of Math.abs().


var res = myAbs(-5);
console.log('Absolute value:', res);

function myAbs(num) {
    if (num <= 0) {
        num = num * -1;
    }
    return num;
}

console.log('INPUT: -5', 'EXPECTED: 5', 'ACTUAL:', res);