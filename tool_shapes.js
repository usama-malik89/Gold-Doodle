//this file contains the code for the shape tool. Using p5.gui the user can switch which shape they want to draw


//tool properties needs to be global to be able to change it using p5.gui dropdown menu and checkboxes
//an array of all the shapes which is used by p5.gui dropdown window
var shape = ['circle', 'triangle', 'square', 'pentagon', 'star'];
//drawFill is also used by p5.gui. Because the variable is set to a bolean value p5.gui will automatically set it to a check box
var drawFill = false;

function Shapes() {
    //set an icon and a name for the object
	this.icon = "assets/shape.jpg";
    //the string used for the hover popover
    this.popupName = "Shapes"
	this.name = "Shapes";
    this.startMouseX = -1; //variable set to value -1, will be used for horizontal mouse coordinate
	this.startMouseY = -1; //variable set to value -1, will be used for vertical mouse coordinate
	this.drawing = false; //varaible set to boolean value of "False"
    this.lineWeight = 10; //variable to set the default weight of the line
    

	this.draw = function(){ //variable set to a function, so when the variable is called the contents within the function will run
        
        //if the variable drawFill is true then the global fill will be set to the selected color from the pallette.
        if(drawFill){
            fill(selectedColour)
        }
        //otherwise if the variable is false then there will not be a fill in the shapes
        else{
            noFill()
        }
        //stroke will always be visible
        stroke(selectedColour)
        
        //This switch statement is used to perform different actions based on which shape is selected
        switch(shape) {

		  case 'circle':
                
                if(mouseWithinCanvas()){ //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
                    
                    if(this.startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "this.startMouseX" and integer -1.
                        this.startMouseX = mouseX; //sets variable "this.startMouseX" to the horizontal position of the cursor on the canvas
                        this.startMouseY = mouseY; //sets variable "this.startMouseY" to the vertical position of the cursor on the canvas
                        this.drawing = true; //variable this.drawing set to the boolean value of true 
                        loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
                    }
                    else{
                        updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
                        strokeWeight(this.lineWeight); //stroke weight set to this.lineWeight so weighting can be changed
                        ellipse(this.startMouseX, this.startMouseY, 2*(this.startMouseX - mouseX), 2*(this.startMouseY - mouseY)); // draws an ellipse on the canvas but does not get saved only shows where the shape will endup going when the mouse is released
                    }
                }
                else if(this.drawing){ //if the variable "this.drawing" has a boolean value of true the code between the curley brackets will run, in this case this.drawing will only be true when the mouse is pressed.
                    ellipse(this.startMouseX, this.startMouseY, 2*(this.startMouseX - mouseX), 2*(this.startMouseY - mouseY)); // draws an ellipse on the canvas and gets saved onto the canvas
                    this.drawing = false; //variable "this.drawing" is reset bacl to boolean value of false
                    this.startMouseX = -1; //this.startMouseX variable is reset back to -1
                    this.startMouseY = -1; ////this.startMouseY variable is reset back to -1
                    loadPixels();
                }
		    break;

		  case 'square':
                
                rectMode(CENTER);
                if(mouseWithinCanvas()){ //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
                    if(this.startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "this.startMouseX" and integer -1.
                        this.startMouseX = mouseX; //sets variable "this.startMouseX" to the horizontal position of the cursor on the canvas
                        this.startMouseY = mouseY; //sets variable "this.startMouseY" to the vertical position of the cursor on the canvas
                        this.drawing = true; //variable this.drawing set to the boolean value of true 
                        loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
                    }
                    else{
                        updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
                        strokeWeight(this.lineWeight); //stroke weight set to this.lineWeight so weighting can be changed
                        rect(this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX), 2*(mouseY - this.startMouseY)); //draws a rectangle on the canvas but does not get saved only shows where the shape will endup going when the mouse is released
                    }
                }
                else if(this.drawing){ //if the variable "this.drawing" has a boolean value of true the code between the curley brackets will run, in this case this.drawing will only be true when the mouse is pressed.
                    rect(this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX), 2*(mouseY - this.startMouseY)); //draws an ellipse on the canvas and gets saved onto the canvas
                    this.drawing = false; //variable "this.drawing" is reset bacl to boolean value of false
                    this.startMouseX = -1; //this.startMouseX variable is reset back to -1
                    this.startMouseY = -1; ////this.startMouseY variable is reset back to -1
                    loadPixels();
                }
                
            break;

		  case 'triangle':
                
                if(mouseWithinCanvas()){ //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
                    if(this.startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "this.startMouseX" and integer -1.
                        this.startMouseX = mouseX; //sets variable "this.startMouseX" to the horizontal position of the cursor on the canvas
                        this.startMouseY = mouseY; //sets variable "this.startMouseY" to the vertical position of the cursor on the canvas
                        this.drawing = true; //variable this.drawing set to the boolean value of true 
                        loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
                    }
                    else{
                        updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
                        strokeWeight(this.lineWeight); //stroke weight set to this.lineWeight so weighting can be changed
                        ngon(3, this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX)); //draws a 3 sided polygon (triamgle) on the canvas but does not get saved only shows where the shape will endup going when the mouse is released. ngon() function can be found in sketch.js
                    }
                }
                else if(this.drawing){ //if the variable "this.drawing" has a boolean value of true the code between the curley brackets will run, in this case this.drawing will only be true when the mouse is pressed.
                    ngon(3, this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX));//draws a 3 sided polygon (triamgle) on the canvas and gets saved onto the canvas. ngon() function can be found in sketch.js
                    this.drawing = false; //variable "this.drawing" is reset bacl to boolean value of false
                    this.startMouseX = -1; //this.startMouseX variable is reset back to -1
                    this.startMouseY = -1; ////this.startMouseY variable is reset back to -1
                    loadPixels();
                }
                
		    break;

		  case 'pentagon':
                
		    if(mouseWithinCanvas()){ //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
                    if(this.startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "this.startMouseX" and integer -1.
                        this.startMouseX = mouseX; //sets variable "this.startMouseX" to the horizontal position of the cursor on the canvas
                        this.startMouseY = mouseY; //sets variable "this.startMouseY" to the vertical position of the cursor on the canvas
                        this.drawing = true; //variable this.drawing set to the boolean value of true 
                        loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
                    }
                    else{
                        updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
                        strokeWeight(this.lineWeight); //stroke weight set to this.lineWeight so weighting can be changed
                        ngon(5, this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX)); //draws a 5 sided polygon (pentagon) on the canvas but does not get saved only shows where the shape will endup going when the mouse is released. ngon() function can be found in sketch.js
                    }
                }
                else if(this.drawing){ //if the variable "this.drawing" has a boolean value of true the code between the curley brackets will run, in this case this.drawing will only be true when the mouse is pressed.
                    ngon(5, this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX));//draws a 5 sided polygon (pentagon) on the canvas and gets saved onto the canvas. ngon() function can be found in sketch.js
                    this.drawing = false; //variable "this.drawing" is reset bacl to boolean value of false
                    this.startMouseX = -1; //this.startMouseX variable is reset back to -1
                    this.startMouseY = -1; ////this.startMouseY variable is reset back to -1
                    loadPixels();
                }
                
		    break;

		  case 'star':
                
		    if(mouseWithinCanvas()){ //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
                    if(this.startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "this.startMouseX" and integer -1.
                        this.startMouseX = mouseX; //sets variable "this.startMouseX" to the horizontal position of the cursor on the canvas
                        this.startMouseY = mouseY; //sets variable "this.startMouseY" to the vertical position of the cursor on the canvas
                        this.drawing = true; //variable this.drawing set to the boolean value of true 
                        loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
                    }
                    else{
                        updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
                        strokeWeight(this.lineWeight); //stroke weight set to this.lineWeight so weighting can be changed
                        star(5, this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX)/sqrt(4),2*(mouseX - this.startMouseX)); //draws a 5 sided star on the canvas but does not get saved only shows where the shape will endup going when the mouse is released. star() function can be found in sketch.js
                    }
                }
                else if(this.drawing){ //if the variable "this.drawing" has a boolean value of true the code between the curley brackets will run, in this case this.drawing will only be true when the mouse is pressed.
                    star(5, this.startMouseX, this.startMouseY, 2*(mouseX - this.startMouseX)/sqrt(4),2*(mouseX - this.startMouseX));//draws a 5 sided star on the canvas and gets saved onto the canvas. star() function can be found in sketch.js
                    this.drawing = false; //variable "this.drawing" is reset bacl to boolean value of false
                    this.startMouseX = -1; //this.startMouseX variable is reset back to -1
                    this.startMouseY = -1; ////this.startMouseY variable is reset back to -1
                    loadPixels();
                }
                
		    break;

		}
        
        
	}
    
    this.unselectTool = function(){
		//clear options
        //hides the gui when selecting a different tool
		shapeProps.hide()
        shapeProps1.hide()
	};

	this.populateOptions = function(){
		//click handlers
        //when selecting this tool it unhides its corresponding p5.gui window
        shapeProps.show()
        shapeProps1.show()
	};
    
}