/* Copyright (c) 2023 MTHS All rights reserved
 *
 * Created by: Mr. Leon
 * Created on: Oct 2023
 * This program reads light Levels and shows the light Level and lights up a led
*/

let distansetoObject: number = 0

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
