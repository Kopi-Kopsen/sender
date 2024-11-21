input.onPinTouchEvent(TouchPin.P1, input.buttonEventDown(), function () {
    radio.sendString("K")
})
// Setzt die Funkgruppe auf 1
input.onButtonPressed(Button.A, function () {
    // Sende Befehl für "Links"
    radio.sendString("L")
})
input.onGesture(Gesture.Shake, function () {
    radio.sendString("S")
})
input.onButtonPressed(Button.AB, function () {
    // Sende Befehl für "Stop"
    radio.sendString("F")
})
input.onButtonPressed(Button.B, function () {
    // Sende Befehl für "Rechts"
    radio.sendString("R")
})
input.onPinTouchEvent(TouchPin.P0, input.buttonEventDown(), function () {
    radio.sendString("B")
})
input.onPinTouchEvent(TouchPin.P2, input.buttonEventDown(), function () {
    radio.sendString("K")
})
// Setzt die Funkgruppe auf 1
radio.setGroup(10)
radio.setTransmitPower(7)
