var numSquare = 6;
var colors = generateRandomColors(numSquare);
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.getElementById("message");
var h1 = document.querySelector("h1");
var resetButton = document.getElementById("reset");
var easyBtn = document.getElementById("easyBtn");
var hardBtn = document.getElementById("hardBtn");

// *********************************************************
// Easy Button
// *********************************************************
easyBtn.addEventListener("click", function(){
	easyBtn.classList.add("selected")
	hardBtn.classList.remove("selected")
	// Generate the 3 colores
	numSquare = 3;
	colors = generateRandomColors(numSquare);
	// pick a new random colors
	pickedColor = pickColor();
	// change text content colors rgb
	colorDisplay.textContent = pickedColor;
	// Reset the button
	resetButton.textContent = "New Colors";
	// Reset the span
	messageDisplay.textContent = "";
	// Change the h1 backgrond to defualt
	h1.style.background = "steelblue";
	// change the squares colors
	for(var i = 0; i < squares.length; i++){
	// If condition to select first 3 elements
	if (colors[i]) {
		squares[i].style.background = colors[i];
	} else {
		squares[i].style.display = "none";
	};
		
	}
});
// *********************************************************
// Hard Button
// *********************************************************
hardBtn.addEventListener("click", function(){
	hardBtn.classList.add("selected")
	easyBtn.classList.remove("selected")
	// Generate the 6 colores
	numSquare = 6;
	colors = generateRandomColors(numSquare);
	// pick a new random colors
	pickedColor = pickColor();
	// change text content colors rgb
	colorDisplay.textContent = pickedColor;
	// Reset the button
	resetButton.textContent = "New Colors";
	// Reset the span
	messageDisplay.textContent = "";
	// Change the h1 backgrond to defualt
	h1.style.background = "steelblue";
	// change the squares colors
	for(var i = 0; i < squares.length; i++){
	// If condition to select first 3 elements
		squares[i].style.background = colors[i];
		squares[i].style.display = "block";
	};
});
// *********************************************************
// Reaset Button
// *********************************************************
resetButton.addEventListener("click", function(){
	// Generate all new colors
	colors = generateRandomColors(numSquare);
	// pick a new random colors
	pickedColor = pickColor();
	// change text content colors rgb
	colorDisplay.textContent = pickedColor;
	// Reset the button
	resetButton.textContent = "New Colors";
	// Reset the span
	messageDisplay.textContent = "";
	// Change the h1 backgrond to defualt
	h1.style.background = "steelblue";
	// change the squares colors
	for(var i = 0; i < squares.length; i++){
	// Add initial Color
	squares[i].style.background = colors[i];
	}
});

colorDisplay.textContent = pickedColor;
// *********************************************************
// For Loob to Loop Through the array Elements
// *********************************************************
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
			h1.style.background = clickedColor;
			resetButton.textContent = "Play Again?";
		} else {
			this.style.background = "#232323";
			messageDisplay.textContent = "Try Again";
		}

	});
}
// *********************************************************
// All the squares match the correct color
// *********************************************************
function changeColor(color) {
	// Loop through colors
	for(var i = 0; i < squares.length; i++) {
		squares[i].style.background = color;
		
	}
}
// *********************************************************
// Random function to pick a color
// ********************************************************* 
function pickColor(){
	var random = Math.floor(Math.random() * colors.length);
	return colors[random];
}
// *********************************************************
// Repeat for num times and push to array
// *********************************************************
function generateRandomColors(num){
	// Make an Array
	var arr = [];
	// repeat for num times
	for (var i = 0; i < num; i++){
		arr.push(randomColor())
	}
	// return num
	return arr;
}
// *********************************************************
// // Generate Random Colors
// *********************************************************
function randomColor () {
	// Generate Red from 0 - 255
	var r = Math.floor(Math.random() * 256);
	// Generate Green from 0 - 255
	var g = Math.floor(Math.random() * 256);
	// Generate Blue from 0 - 255
	var b = Math.floor(Math.random() * 256);
	return "rgb(" + r + ", " + g + ", " + b + ")"
}