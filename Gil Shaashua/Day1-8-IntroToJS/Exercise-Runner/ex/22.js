'use strict';
// Exercise 22 - myPow()
// Write a function named myPow() which receives 2 parameters: 
// a base (n), and an exponent (exp) and returns nexp

// Sample unit testing:

// INPUT: 2, 3

// EXPECTED: 8

// ACTUAL: 8


var res = myPow(5, 7);
console.log(res);
console.log('INPUT: 5, 7', 'EXPECTED: 78,125', 'ACTUAL:', res);

function myPow(base, exponent) {
    var counter = 0;
    var res = 1;
    while (counter < exponent) {
        // console.log('counter', counter)
        res = res * base;
        // console.log('res', res)
        counter++;
    }
    return res;
}
