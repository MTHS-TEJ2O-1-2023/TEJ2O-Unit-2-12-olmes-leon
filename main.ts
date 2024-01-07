/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Leon
 * Created on: Oct 2023
 * This program reads light Levels and shows the light Level and lights up a led
*/

// variables
let distanceToObject: number = 0
let neopixelStrip: neopixel.Strip = null

// setup
basic.clearScreen()
neopixelStrip = neopixel.create(DigitalPin.P16, 4, NeoPixelMode.RGB)
neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Black))
neopixelStrip.show()
basic.showIcon(IconNames.Duck)

input.onButtonPressed(Button.A, function () {
  basic.clearScreen()
  distanceToObject = sonar.ping(
      DigitalPin.P1,
      DigitalPin.P2,
      PingUnit.Centimeters
  )
  if (distanceToObject < 10) {
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Red))
      neopixelStrip.show()
  } else {
      neopixelStrip.setPixelColor(0, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.setPixelColor(1, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.setPixelColor(2, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.setPixelColor(3, neopixel.colors(NeoPixelColors.Green))
      neopixelStrip.show()
    }
})
