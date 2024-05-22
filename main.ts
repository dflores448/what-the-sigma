input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . . . .
        # # # # #
        . . . . .
        `)
    basic.showString("WHAT THE SIGMA")
    record.startRecording(record.BlockingState.Nonblocking)
})
