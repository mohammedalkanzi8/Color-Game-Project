var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 2550",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square")
pickedColor = colors[3];
colorDisplay = document.getElementById("colorDisplay")
colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++){
	// Add initial Color
	squares[i].style.background = colors[i];
	// Add an Event Listeners
	squares[i].addEventListener("click", function(){
	// Select the colors
		var clickedColor = this.style.background;
		// Compare the color with the picked color
		if (clickedColor === pickedColor) {
			alert("True");
		} else {
			alert("Wrong")
		}

	});
}