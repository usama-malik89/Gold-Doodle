//tool property needs to be global to be able to change it using p5.gui sliders
//spread describes how far to spread the paint from the mouse pointer
var sprayCanSpread = 10;

function SprayCanTool() {
    //the string used for the hover popover
    this.popupName = "Spray Can"
    this.name = "SprayCan",
    this.icon = "assets/sprayCan.jpg",
    //points holds how many pixels of paint for each mouse press.
    this.points = 10 * sprayCanSpread,
    this.draw = function(){
        
        //checks if the cursor is within the canvas. mouseWithinCanvas() function can be found in sketch.js
        if(mouseWithinCanvas()){
            for(var i = 0; i < this.points; i++){
                strokeWeight(1)
                point(random(mouseX-sprayCanSpread, mouseX + sprayCanSpread), random(mouseY-sprayCanSpread, mouseY+sprayCanSpread));
            }
            loadPixels()
        }
        else{
            updatePixels()
        }
    }
    
    this.unselectTool = function(){
		//clear options
        //hides the gui when selecting a different tool
		sprayProps.hide()
	};
 
	this.populateOptions = function(){
        //when selecting the tool it unhides its corresponding p5.gui window
		sprayProps.show()
	};
};