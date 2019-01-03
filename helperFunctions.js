function HelperFunctions(){
	
	//Jquery click events. Notice that there is no this. at the
	//start we don't need to do that here because the event will
	//be added to the button and doesn't 'belong' to the object

	//event handler for the clear button event. Clears the screen
	$("#clearButton").on("click", function(){
        //creates a window popup to confirm if the user wants to clear the canvas
        if (confirm("Are you sure you want to clear?")) {
            //sets the canvas to the color white (clearing the canvas)
            background(255);
            //call loadPixels to update the drawing state
            loadPixels();
        }
	});

	//event handler for the save image button. saves the canvas to the
	//local file system. 
	$("#saveImageButton").on("click", function(){
		save('MyCanvas.png');
	});
}