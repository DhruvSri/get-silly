basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showIcon(IconNames.Happy)
    }
    if (input.buttonIsPressed(Button.B)) {
        basic.showIcon(IconNames.Sad)
    }
    if (input.buttonIsPressed(Button.AB)) {
        basic.showIcon(IconNames.Silly)
    }
})
