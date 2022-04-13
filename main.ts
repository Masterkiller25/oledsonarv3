OLED.init(128, 64)
OLED.newLine()
OLED.newLine()
OLED.drawLoading(64)
basic.forever(function () {
    OLED.writeNumNewLine(sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    ))
    basic.pause(1000)
    OLED.clear()
})
