'use strict'

// Read 10 numbers from the user and print:
// The maximum number.
// The minimum number.
// The average.

readNumbers()

function readNumbers() {
    var count = 0
    var maxNum = -Infinity
    var minNum = Infinity
    var sum = 0
    while (count < 10) {
        var num = +prompt('Enter number here')
        if (num > maxNum) maxNum = num
        if (num < minNum) minNum = num
        // sum = sum + num
        sum += num
        count++
    }
    console.log('min', minNum)
    console.log('max', maxNum)
    console.log('avg', sum / count)
}
