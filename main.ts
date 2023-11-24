// Capture the input of button a pressing
input.onButtonPressed(Button.A, function () {
	
})
function move_forward_for_5_seconds () {
    // wait 5 secs
    control.waitMicros(0.5 * MICROSECOND_PER_SECOND)
    pins.servoWritePin(AnalogPin.P1, P1_FORWARD)
    pins.servoWritePin(AnalogPin.P2, P2_FORWARD)
    control.waitMicros(5 * MICROSECOND_PER_SECOND)
    pins.servoWritePin(AnalogPin.P1, P1_STOP)
    pins.servoWritePin(AnalogPin.P2, P2_STOP)
}
let P2_STOP = 0
let P1_STOP = 0
let P2_FORWARD = 0
let P1_FORWARD = 0
let MICROSECOND_PER_SECOND = 0
// ===== Unchengeable constants =====
MICROSECOND_PER_SECOND = 1000000
// ===== Individual buggy constants =====
// you should know this from the forward calibrator
P1_FORWARD = 71
P2_FORWARD = 180
let DEGREES_PER_SECOND = 251
// ===== Individual buggy constants =====
// you should know this from the forward calibrator
P1_STOP = 90
P2_STOP = 90
