let barnbr = 0
OLED.init(128, 64)
OLED12864_I2C.init(120)
while (barnbr < 100) {
    OLED.drawLoading(barnbr)
    barnbr += 1
}
OLED.init(128, 64)
OLED.newLine()
OLED.newLine()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        OLED12864_I2C.showNumber(
        58,
        28,
        sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters
        ),
        2
        )
    }
    OLED.clear()
})
