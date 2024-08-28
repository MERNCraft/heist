# Heist - a CSS-only activity with no clicking #

[Demo](https://MERNCraft.github.io/heist)

This pure CSS mini activity uses only :hover to move the story forward. Each action is performed in a nested `<div>` and the nesting gets deeper as the story progresses, so that the innermost element with a `:hover` pseudo-class maintains  a `:hover` pseudo-class on all its parents. In this way, any changes made at one level continue to apply to the inner levels.

On touchscreen devices, the innermost element with a `:hover` pseudo-class retains this class even after the contact with the touchscreen ceases. If a child `<div>` is activated by a touch on its parent, the child `<div>` does not immediately receive a `:hover` pseudo-class. (With a mouse, the child `<div>` will receive its pseudo-class as soon as the mouse moves, if not sooner.)