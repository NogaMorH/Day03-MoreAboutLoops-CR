'use strict'

// Read numbers from the user, until the number 999 is entered. For each number:
// Print if it is divisible by 3.
// If it is bigger by more than 10 from the previous number, print a suitable message.
readNumbers()

function readNumbers() {
    var num = +prompt('Enter number here. 999 to exit')
    var prevNum = num
    while (num !== 999) {

        if (num % 3 === 0) console.log(num)

        if (num - prevNum > 10) console.log('Bigger by more than 10')

        prevNum = num
        num = +prompt('Enter number here. 999 to exit')

    }
}