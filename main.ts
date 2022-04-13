OLED.init(128, 64)
basic.forever(function () {
    OLED.writeStringNewLine("" + sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    ))
    basic.pause(100)
    OLED.clear()
})
