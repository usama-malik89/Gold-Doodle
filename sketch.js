//global variables that will store the toolboxm colour palette
//amnd the helper functions
var toolbox = null;
var colourP = null;
var helpers = null;

function setup() {
    
    robotoFont = loadFont('assets/fonts/Roboto-Regular.ttf')
    antonFont = loadFont('assets/fonts/Anton-Regular.ttf')
    gamjaFont = loadFont('assets/fonts/GamjaFlower-Regular.ttf')
    
    this.customSwatch = '#caa0e5'; //variable set to a hex value so p5.gui recognises it and automatically creates a colour picker
    
    guiElements() //calls the function that creates all p5.gui elements in guiElements.js

    canvasContainer = $('#content'); //create a canvas to fill the content div from index.html
    var c = createCanvas(canvasContainer.innerWidth(), canvasContainer.innerHeight());
    c.parent("content");

   //create helper functions and the colour palette
    helpers = new HelperFunctions();
    colourP = new ColourPalette();
    
    //create a toolbox for storing the tools
    toolbox = new Toolbox();
    
    //add the tools to the toolbox. 
    toolbox.addTool(new FreehandTool());
    toolbox.addTool(new brush());
    toolbox.addTool(new eraser());
    toolbox.addTool(new LineToTool());
    toolbox.addTool(new Text());
    toolbox.addTool(new Shapes());
    toolbox.addTool(new SprayCanTool());
    toolbox.addTool(new mirrorDrawTool());
    
    //lines of code for the fullscreen function
    //When the button is pressed it turns fullscreen
    $("#fullscreen").on("click", function(){
        fs = fullscreen()
        if(fs){
            fullscreen(!fs)
        }
        if(!fs){
            fullscreen(!fs)
        }
        
		}); 
}

function draw() {
    //call the draw function from the selected tool.
    //hasOwnProperty is a javascript function that tests
    //if an object contains a particular method or property
    //if there isn't a draw method the app will alert the user
	if(toolbox.selectedTool.hasOwnProperty("draw")){
    	toolbox.selectedTool.draw();
	}
	else{
		alert("it doesn't look like your tool has a draw method!");
	}
    
    //custom colour swatch click handler
    $(".colourPalette").on("click", "#guiColor", function(){
        var c = customSwatch;
        selectedColour = c;
        fill(c);
        stroke(c);
    })
    //Makes Sure each time a different colour from the color picker is selected the swatch also changes colours
    $("#guiColor").css("background-color", customSwatch);
}

//both ngon and star functions are from one of p5.gui examples on github, makes it easier to create polygons
// draw a regular n-gon with n sides
function ngon(n, x, y, d) {
  beginShape();
  for(var i = 0; i < n; i++) {
    var angle = TWO_PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}


// draw a regular n-pointed star
function star(n, x, y, d1, d2) {
  beginShape();
  for(var i = 0; i < 2 * n; i++) {
    var d = (i % 2 === 1) ? d1 : d2;
    var angle = PI / n * i;
    var px = x + sin(angle) * d / 2;
    var py = y - cos(angle) * d / 2;
    vertex(px, py);
  }
  endShape(CLOSE);
}

//function to check if the mouse is within the canvas
function mouseWithinCanvas(){
    if(mouseIsPressed && (mouseX > 0) && (mouseY < canvasContainer.innerHeight()) && (mouseY > 0)){
        return true
    }
    else {
        return false
    }
}
