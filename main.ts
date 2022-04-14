let barnbr = 0
OLED.init(128, 64)
while (barnbr < 100) {
    OLED.drawLoading(barnbr)
    barnbr += 1
}
OLED.init(64, 128)
OLED.newLine()
OLED.newLine()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        OLED.drawLoading(sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters
        ) / 4)
    }
    OLED.clear()
})
