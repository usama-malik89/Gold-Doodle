//tool property needs to be global to be able to change it using p5.gui sliders
var lineWeight = 1;

function LineToTool(){ //creates a function with name "LineToTool" so the function can be called when needed
	this.icon = "assets/lineTo.jpg"; //variable "icon" has been set to a jpg image, "this." is there because its making a variable within the function itself.
    //the string used for the hover popover
    this.popupName = "Line"
	this.name = "Line"; //variable named "name" set to the string "LineTo"

	var startMouseX = -1; //variable set to value -1, will be used for horizontal mouse coordinate
	var startMouseY = -1; //variable set to value -1, will be used for vertical mouse coordinate
	var drawing = false; //varaible set to boolean value of "False"
    

	this.draw = function(){ //variable set to a function, so when the variable is called the contents within the function will run
        
        //sets the colour to the slected color from the pallette to make sure its the colour that is selected
        fill(selectedColour)
        stroke(selectedColour)

		if(mouseWithinCanvas()){ //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
            
			if(startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "startMouseX" and integer -1.
				startMouseX = mouseX; //sets variable "startMouseX" to the horizontal position of the cursor on the canvas
				startMouseY = mouseY; //sets variable "startMouseY" to the vertical position of the cursor on the canvas
				drawing = true; //variable drawing set to the boolean value of true 
				loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
			}

			else{
				updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
                strokeWeight(lineWeight); //stroke weight set to lineWeight so weighting can be changed
				line(startMouseX, startMouseY, mouseX, mouseY); // draws a line between two coordinates in the canvas, in this case the two coordinates are (startMouseX, startMouseY) and (mouseX, mouseY)
			}

		}

		else if(drawing){ //if the variable "drawing" has a boolean value of true the code between the curley brackets will run, in this case drawing will only be true when the mouse is pressed.
			line(startMouseX, startMouseY, mouseX, mouseY); //draws a line between two coordinates in the canvas, in this case the two coordinates are (startMouseX, startMouseY) and (mouseX, mouseY)
			drawing = false; //variable "drawing" is reset bacl to boolean value of false
			startMouseX = -1; //startMouseX variable is reset back to -1
			startMouseY = -1; ////startMouseY variable is reset back to -1
            loadPixels();
		}
	};
    
    this.unselectTool = function(){
		//clear options when unselecting this tool
        //hides the gui when selecting a different tool
		lineProps.hide()
	};
 
	this.populateOptions = function() {
        //when selecting the tool it unhides its corresponding p5.gui window
        lineProps.show()
	};

}