'use strict'
//Write a program which generates 10 ascending random numbers 
//(each number is greater than the previously generated number).
//The first number n , should be in the range 0 – 1000,
//and each subsequent number, should be in the range (n+1) – (n+1000)

ascendingNumbers()

function ascendingNumbers() {
    var min = 0
    var max = 1000
    var counter = 0
    while (counter < 10) {

        var randNum = getRandomInt(min, max)
        // console.log('randNum', randNum)

        min = randNum + 1
        // console.log('min', min)
        max = randNum + 1001
        // console.log('max', max)
        counter++
    }
}


function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}