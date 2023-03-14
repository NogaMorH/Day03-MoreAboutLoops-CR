'use strict'
//Asterisks!


var symbol = '&'
// var res = getSymbols(7, symbol)
// console.log(res)

function getSymbols(length, symbol) {
    var str = ''
    while (length > 0) {
        str += symbol
        // str = str + symbol
        length--
    }
    return str + '\n'
}

// var res = getTriangle(4)
// console.log(res)

function getTriangle(height) {
    var counter = 1
    var str = ''
    while (counter < height) {
        str += getSymbols(counter, symbol)
        counter++
    }
    while (counter > 0) {
        str += getSymbols(counter, symbol)
        counter--
    }
    return str
}

// var res = getMusicEqualizer(7)
// console.log(res)

function getMusicEqualizer(rowCount) {
    var str = ''
    while (rowCount > 0) {
        var randNum = getRandomInt(1, 10)
        str += getSymbols(randNum, symbol)

        rowCount--
    }
    return str
}

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min) + min);
}

// var res = getBlock(3, 5)
// console.log(res)

function getBlock(rows, cols) {
    var str = ''
    while (rows > 0) {
        str += getSymbols(cols, symbol)
        rows--
    }
    return str
}

var res = getBlockOutline(5, 6)
console.log(res)

function getBlockOutline(rows, cols) {
    var str = ''
    var counter = 1
    while (counter <= rows) {
        if (counter === rows || counter === 1) {
            str += getSymbols(cols, symbol)
        } else {
            str += getEmptyLine(cols, symbol)
        }
        counter++
    }
    return str
}

// var res = getEmptyLine(10, symbol)
// console.log(res)

function getEmptyLine(length, symbol) {
    var str = ''
    var counter = 1
    while (counter <= length) {
        if (counter === length || counter === 1) {
            str += symbol
        } else {
            str += ' '
        }
        counter++
    }
    return str + '\n'
}


