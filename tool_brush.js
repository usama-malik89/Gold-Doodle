//tool property needs to be global to be able to change it using p5.gui sliders
var brushSize = 25;

function brush(){
	//set an icon and a name for the object
	this.icon = "assets/brush.jpg";
    //the string used for the hover popover
    this.popupName = "Paint Brush"
	this.name = "PaintBrush";
    this.startMouseX = -1; //variable set to value -1, will be used for horizontal mouse coordinate
	this.startMouseY = -1; //variable set to value -1, will be used for vertical mouse coordinate
	this.drawing = false; //varaible set to boolean value of "False"
    this.previousMouseX = -1;
	this.previousMouseY = -1;

	this.draw = function(){
        //creates an circular outline when hovering over the canvas
        marker(brushSize,"ellipse")
        
        //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
        if(mouseWithinCanvas()){
            strokeWeight(brushSize + 1.5)
            //sets both stroke and fill to the selected color
            fill(selectedColour)
            stroke(selectedColour)
            
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
		//try and comment out these lines and see what happens!
		else{
			this.previousMouseX = -1;
			this.previousMouseY = -1;
		}
        
    }
    
    this.unselectTool = function(){
		//clear options when unselecting this tool
        //when deselecting the tool it also hides its corresponding p5.gui window
        brushProps.hide()
	};
    
    this.populateOptions = function(){
        //when selecting the tool it unhides its corresponding p5.gui window
        brushProps.show()
	};
}