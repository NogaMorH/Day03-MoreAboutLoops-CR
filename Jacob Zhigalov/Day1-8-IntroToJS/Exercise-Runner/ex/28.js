'use strict'
// Write a program which calculates the greatest common divisor (GCD)
//  of two positive integers.

// For example: if the input are 6 and 15, 
// the calculation’s result should be 3.

// Tip: we need a loop that runs from 6 to 2 and checks the modulus…


var a = 60
var b = 6

var res = getGCD(a, b)
console.log('res', res)

function getGCD(num1, num2) {
    var divider = Math.min(num1, num2)
    while (divider > 0) {
        if (num1 % divider === 0 && num2 % divider === 0) {
            console.log('The Greatest common divisor of', num1, 'and', num2, 'is:', divider)
            return divider
        }
        divider--
    }
}



