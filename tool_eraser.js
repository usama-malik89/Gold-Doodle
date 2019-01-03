//tool property needs to be global to be able to change it using p5.gui sliders
var eraserSize = 25;

function eraser(){
    //set an icon and a name for the object
	this.icon = "assets/eraser.jpg";
    //the string used for the hover popover
    this.popupName = "Eraser"
	this.name = "Eraser";
    this.startMouseX = -1; //variable set to value -1, will be used for horizontal mouse coordinate
	this.startMouseY = -1; //variable set to value -1, will be used for vertical mouse coordinate
	this.drawing = false; //varaible set to boolean value of "False"
    this.previousMouseX = -1;
	this.previousMouseY = -1;
	this.draw = function(){
        //creates an circular outline when hovering over the canvas
        marker(eraserSize,"ellipse")
        
        //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
        if(mouseWithinCanvas()){
            strokeWeight(eraserSize + 1.5)
            fill(255)
            stroke(255)
            
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (this.previousMouseX == -1){
				this.previousMouseX = mouseX;
				this.previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
				line(this.previousMouseX, this.previousMouseY, mouseX, mouseY);
				this.previousMouseX = mouseX;
				this.previousMouseY = mouseY;
			}
            loadPixels()
		}
        
        //if the user has released the mouse we want to set the previousMouse values 
		//back to -1.
		else{
            this.markerColour = 0;
			this.previousMouseX = -1;
			this.previousMouseY = -1;
		}
        
    }
    
    this.unselectTool = function(){
		//when unselecting the tool it sets the colour to the slected color from the pallette
        fill(selectedColour)
        stroke(selectedColour)
        //when deselecting the tool it also hides its corresponding p5.gui window
        eraserProps.hide()
	};
    
	this.populateOptions = function(){
        //when selecting the tool it unhides its corresponding p5.gui window
		eraserProps.show()
	};
}