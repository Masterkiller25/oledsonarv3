let barnbr = 0
basic.showLeds(`
    # . . . #
    . . . . .
    . . # . .
    . . . . .
    # . . . #
    `)
OLED.init(128, 64)
OLED12864_I2C.init(60)
while (barnbr < 100) {
    OLED.drawLoading(barnbr)
    barnbr += 1
}
OLED12864_I2C.clear()
OLED.clear()
basic.forever(function () {
    while (input.buttonIsPressed(Button.A)) {
        OLED12864_I2C.zoom(true)
        OLED12864_I2C.showNumber(
        6,
        1,
        sonar.ping(
        DigitalPin.P15,
        DigitalPin.P14,
        PingUnit.Centimeters
        ),
        1
        )
    }
    OLED12864_I2C.clear()
})
