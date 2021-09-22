# Digital-Clock
Digital Clock using JS


# App Link
### https://gouravmanna3.github.io/Digital-Clock/clock

# Onload Attribute
Execute a javaScript function immediately after the page is loaded. The onload attribute can be used to check the visitor's browser type and browser version.

When the page is loaded displayTime() function is called and this function calculates the current time using Date object.

Then the current time is added to div with id 'myClockContainer' which makes it visible in the screen.

setTimeout is used to call the displayTime() function after 1 second which updates the latest time in the UI and this works repeatedly just like recursive function.

convertTime() function is used to add zero at the beginning when hours or minutes or seconds is single digit.
