'use strict'

// Read 10 numbers from the user. Check each number and print it along 
// with a short message indicating whether it is even or odd.

readNumbers()

function readNumbers() {
    var count = 0
    while (count < 10) {
        // console.log('count', count)
        var num = +prompt('Enter number here')
        if (num % 2 === 0) {
            console.log(num + ' is even')
        } else {
            console.log(num + ' is odd')
        }
        count++
    }
}


