def on_forever():
    if input.button_is_pressed(Button.A):
        basic.show_icon(IconNames.HAPPY)
    else:
        pass
    if input.button_is_pressed(Button.B):
        basic.show_icon(IconNames.SAD)
    if input.button_is_pressed(Button.AB):
        basic.show_icon(IconNames.SILLY)
basic.forever(on_forever)
