OLED.init(64, 32)
basic.forever(function () {
    OLED.writeStringNewLine("" + sonar.ping(
    DigitalPin.P15,
    DigitalPin.P14,
    PingUnit.Centimeters
    ) + "cm")
})
