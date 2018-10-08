var colors = [
	"rgb(255, 0, 0)",
	"rgb(255, 255, 0)",
	"rgb(0, 255, 0)",
	"rgb(0, 255, 255)",
	"rgb(0, 0, 2550",
	"rgb(255, 0, 255)",
]

var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");

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
			messageDisplay.textContent = "Correct";
			changeColor(clickedColor);
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});
}
// All the squares match the correct color
function changeColor(color) {
	// Loop through colors
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
		
	}
}
// Random function to pick a color 
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}