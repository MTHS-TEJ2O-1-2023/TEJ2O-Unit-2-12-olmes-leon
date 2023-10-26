/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Leon
 * Created on: Oct 2023
 * This program reads light Levels and shows the light Level and lights up a led
*/

// variables
let neopixelStrip: neopixel.Strip = null
let distansetoObject: number = 0


// cleanup
basic.clearScreen()
neopixelStrip=neopixel.create(DigitalPin.P16,4,NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0,neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1,neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2,neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3,neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()

// setup
basic.showIcon(IconNames.Silly)

// finding distanse from sonar
input.onButtonPressed(Button.A, function () {
    basic.clearScreen()
    distansetoObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    basic.showNumber(distansetoObject)
    basic.showIcon(IconNames.Duck)
})

// finding if distanse Level is greater or less then the goal
if (true) {
    
} else {
    
}