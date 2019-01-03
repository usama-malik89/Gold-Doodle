//this file contains the code for the text tool

var bold = false //bold is also used by p5.gui. Because the variable is set to a bolean value p5.gui will automatically set it to a check box
var font = ['roboto', 'anton', 'gamja'] //an array of all the fonts which is used by p5.gui to create a dropdown window

//tool property needs to be global to be able to change it using p5.gui text input
//this variable is used by p5.gui to create a textbox in the gui element, this can be changed by the user
var textInput = "type text in here";
//this variable is used by p5.gui to allow for the font size to be changed by the user using a slider
var fontSize = 32;
//
var fontWeight;
// both these variables are used so when the mouse is clicked the mouse coordinates get saved, this is to fix a bug where the text would repeat over and over again when the mouse moves. This way the text only draws once
var textPlaceX;
var textPlaceY;

function Text() {
    //set an icon and a name for the object
	this.icon = "assets/text.jpg";
    //the string used for the hover popover
    this.popupName = "Text"
	this.name = "Text";
	this.draw = function(){
        
        this.selectedFont = robotoFont;// the selected font by the user
        
        switch(font) {
                
            case 'roboto':
                
                this.selectedFont = robotoFont;
                
                break
            
            case 'anton':
                
                this.selectedFont = antonFont;
                
                break
            
            case 'gamja':
                
                this.selectedFont = gamjaFont;
                
                break
        
        }
        
        // if the vollean variable is set to true then the fontWeight will be set to the value of 2.5 otherwise it will be set to the default value which is 1 
        if (bold){
            fontWeight = 3
        }
        else{
            fontWeight = 1
        }
        
        //creates a text outline when hovering over the canvas to see where the text will end up drawing
        marker(textInput,"text",this.selectedFont)
        
        if(mouseWithinCanvas()) { //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
            textFont(this.selectedFont)
            textSize(fontSize) //sets the font size to the set variable which can be changed using the p5.gui slider
            strokeWeight(fontWeight) //stroke weight stays the same
            fill(selectedColour) //colour of the text changes to the colour the user has selected from the pallette
            stroke(selectedColour) //colour of the text changes to the colour the user has selected from the pallette
            text(textInput,textPlaceX,textPlaceY); //draws the text with the textInput string which the user can change via the p5.gui text box
            loadPixels()
            }
        }
    
    
    
    this.unselectTool = function(){
		//clear options
        //hides the gui when selecting a different tool
		textProps.hide()
        textProps1.hide()
        textProps2.hide()
        textProps3.hide()
        textHintContent.hide()
	};

	this.populateOptions = function(){
		//click handlers
        //when selecting the tool it unhides its corresponding p5.gui window
        textProps.show()
        textProps1.show()
        textProps2.show()
        textProps3.show()
        textHintContent.show()
        
	};
}

//this function allows the pointers coordinates to be saved once the mouse is clicked, this prevents multiple text to be drawn on the canvas
function mousePressed() {
    textPlaceX = mouseX
    textPlaceY = mouseY
}