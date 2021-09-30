input.onButtonPressed(Button.A, function () {
    basic.showString("Sammy")
    basic.pause(500)
    basic.clearScreen()
})
input.onGesture(Gesture.Shake, function () {
    for (let index = 0; index < 4; index++) {
        basic.showLeds(`
            . # . # .
            # . # . #
            # . . . #
            . # . # .
            . . # . .
            `)
        basic.pause(100)
        basic.showIcon(IconNames.SmallHeart)
        basic.pause(100)
    }
    basic.clearScreen()
})
input.onButtonPressed(Button.B, function () {
    basic.showLeds(`
        # # # # #
        . # # # .
        . # # # .
        . # # # .
        # # # # #
        `)
    basic.pause(1000)
    basic.showIcon(IconNames.Heart)
    basic.pause(500)
    basic.clearScreen()
    basic.showLeds(`
        # # . # #
        # # . # #
        # # . # #
        # # # # #
        . # # # .
        `)
    basic.pause(500)
    basic.clearScreen()
})
