input.onButtonPressed(Button.A, function () {
    lcd1602.clear()
    for (let index = 0; index < 24; index++) {
        lcd1602.putNumber(
        randint(0, 9),
        randint(0, 15),
        randint(0, 1)
        )
        basic.pause(200)
    }
})
lcd1602.setAddress(
lcd1602.I2C_ADDR.addr1
)
lcd1602.putString(
"Micro:bit",
3,
0
)
lcd1602.set_LCD_Show(lcd1602.visibled.visible)
lcd1602.set_backlight(lcd1602.on_off.on)
basic.pause(50000)
basic.forever(function () {
	
})
