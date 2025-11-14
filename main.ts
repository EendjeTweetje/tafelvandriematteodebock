let getal = 0
basic.forever(function () {
    if (getal <= 12) {
        basic.showNumber(getal)
        getal += 3
        basic.clearScreen()
    } else {
        basic.clearScreen()
    }
})
