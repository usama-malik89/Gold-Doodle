//this file contains all the codes to create the outline of any brush so users can see what size brush they are drawing before they actually draw onto the canvas


//the function has 2 parameters, 'input' so the brush size can be set to any global variable, and parameter 'shape' because the marker can be set to either a circle or text so the user can see where their text is going to go on the canvas. Both parameters are used so this function can be used multiple times for multiple tools so the marker size corresponds to the bursh size value of the tool
function marker(input,shape,font){
    //variable set to parameter 'input' so the marker size is always the correct size for the corresponding tool
    this.ellipseSize = input;
    this.outline = true;
    
    //when the mouse is pressed and the user is drawing the marker essentially disappears, this is so the marker outline doesn't get drawn onto the canvas
    if(mouseIsPressed){
        this.outline = false;
    }
    else{
        this.outline = true;
    }
    
    noFill() //noFill() so user can see underneath the marker to get a better sense of where the bursh will draw
    
    //if outline is true the stroke gets set to black, if it is false then there is no stroke on the marker
    if(this.outline){
        stroke(0)
    }
    else{
        noStroke()
    }
    
    strokeWeight(0.5) //stroke weight stays the same no matter what the size of the marker is
    
    //if the parameter 'shape' is set to 'ellipse' then a simple circular marker will be displayed over the cursor 
    if(shape == "ellipse"){
        
        if(this.startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "this.startMouseX" and integer -1.
            this.startMouseX = mouseX; //sets variable "this.startMouseX" to the horizontal position of the cursor on the canvas
            this.startMouseY = mouseY; //sets variable "this.startMouseY" to the vertical position of the cursor on the canvas
            this.drawing = true; //variable this.drawing set to the boolean value of true 
            loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
        }
        else{
            updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
            ellipse(mouseX,mouseY,this.ellipseSize,this.ellipseSize); // draws a line between two coordinates in the canvas, in this case the two coordinates are (this.startMouseX, this.startMouseY) and (mouseX, mouseY)
        }
    }
    
    //if the parameter 'shape' is set to 'text' then a text outline marker will be displayed over the cursor
    if(shape == "text"){
        textFont(font) //so the marker is set the same as the selected font
        if(this.startMouseX == -1){ //"==" compares two values and only runs the code between the curley brackets if both values are equal, in this case it is comparing the variable "this.startMouseX" and integer -1.
            this.startMouseX = mouseX; //sets variable "this.startMouseX" to the horizontal position of the cursor on the canvas
            this.startMouseY = mouseY; //sets variable "this.startMouseY" to the vertical position of the cursor on the canvas
            this.drawing = true; //variable this.drawing set to the boolean value of true 
            loadPixels();// loads the pixel data for the canvas into an array named"pixels[]", in this case it removes all the previous lines so only 1 line can be seen on the canvas
        }
        else{
            updatePixels();// updates the canvas when the data in the "pixels[]" array has been modified
            textSize(fontSize)
            strokeWeight(1)
            text(input,mouseX,mouseY); // draws a line between two coordinates in the canvas, in this case the two coordinates are (this.startMouseX, this.startMouseY) and (mouseX, mouseY)
        }
    }
}