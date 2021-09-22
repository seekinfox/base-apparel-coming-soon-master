
function verify() {
    "use strict";
    var regex = /\S+@\S+\.\S+/,
        value = document.getElementById("email").value,
        validate = regex.test(value);
    var text;
    var outline;
    var opacity;
    var color;
    if (!validate) {
        text = "Please provide a valid email";
        outline = "1px solid var(--Soft-Red)";
        opacity = "1";
    } else {
        opacity = "0";
        outline = "1px solid hsla(0, 36%, 70%, 0.7)";
        text = "beep one";
    }
    document.getElementById("demo").innerHTML = text;
    document.getElementById("demo").style.opacity = opacity;
    document.getElementById("email").style.outline = outline;
    document.getElementById("dot").style.opacity = opacity;

}
