function FreehandTool(){
	//set an icon and a name for the object
	this.icon = "assets/freehand.jpg";
    //the string used for the hover popover
    this.popupName = "Pencil"
	this.name = "Pencil";

	//to smoothly draw we'll draw a line from the previous mouse location
	//to the current mouse location. The following values store
	//the locations from the last frame. They are -1 to start with because
	//we haven't started drawing yet.
	this.previousMouseX = -1;
	this.previousMouseY = -1;
    this.lineWeight = 1;

	this.draw = function(){
        
        //sets the colour to the slected color from the pallette
        fill(selectedColour)
        stroke(selectedColour)
        
		//checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
		if(mouseWithinCanvas()){
			//check if they previousX and Y are -1. set them to the current
			//mouse X and Y if they are.
			if (this.previousMouseX == -1){
				this.previousMouseX = mouseX;
				this.previousMouseY = mouseY;
			}
			//if we already have values for previousX and Y we can draw a line from 
			//there to the current mouse location
			else{
                strokeWeight(this.lineWeight)
				line(this.previousMouseX, this.previousMouseY, mouseX, mouseY);
				this.previousMouseX = mouseX;
				this.previousMouseY = mouseY;
			}
		}
		//if the user has released the mouse we want to set the previousMouse values 
		else{
			this.previousMouseX = -1;
			this.previousMouseY = -1;
		}
        loadPixels();
	};
}