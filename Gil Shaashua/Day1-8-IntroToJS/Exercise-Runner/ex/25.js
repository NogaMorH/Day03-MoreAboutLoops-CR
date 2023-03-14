'use strict';
// Exercise 25 - getRandomInt()
// Write A function named getRandomInt(min, max). 
// The function should generate a random integer between min and up to, 
// but not including, max.

// Tip: use Math.Random() and Math.Floor().

// After you've worked it out, read this page 
// and look at the implementation of the getRandomInt() function.


var res = getRandomInt(1, 19);
console.log('Random int:', res);

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}