//Find canvas, create a context
var canvas = document.querySelector("#canvas");
var context = canvas.getContext("2d");

//Find input box and disable it until canvas is ready
var input = document.querySelector("#image_text");
input.disabled = true;

// Drawing the image - create an image and set the source
// add callback to know whwn the image is loaded and ready,
// so can draw it to the canvas and enable the input
var image = new Image();
image.src = "image.jpg";

image.addEventListener("load", function () {
    context.drawImage(image, 0, 0);
    input.disabled = false;
})

// Add event listener to input - will fire if the text is changed
input.addEventListener("input", function() {
    // Read the data typed in the input
    // 'this' is the HTML element this function is called for
    var text = this.value;

    context.drawImage(image, 0, 0);     // Need to redraw the image - no way to clear
    context.font = "30px Verdana";  // Set font
    context.fillText(text, 30, 390);    // And draw text.
});

