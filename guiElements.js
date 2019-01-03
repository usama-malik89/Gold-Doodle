//this file is mainly to populate all p5.gui elements

//created function so it can be called in sketch.js in setup()
function guiElements(){
    
    var optionsY = 100; //Standard Y position of the options
    
    var optionsX = 330; //Standard X position of the options
    
    //p5.gui window can be created using the syntax below
    colourProps = createGui('Custom Swatch',optionsX, windowHeight - optionsY);
    //this adds a color picker to this gui windows, the global 'customSwatch' assigned to this gui element is set to a hexidecimal color value which p5.gui automatically detects and creates the colour picker within this window.
    colourProps.addGlobals('customSwatch');
    
    shapeProps = createGui('Shape Properties',optionsX + 210, windowHeight - optionsY)
    //this adds a drop down menu because the global variable 'shape' is set to an array of shape names which p5.gui automatically detects and creates the drop down menu within this window.
    shapeProps.addGlobals('shape')
    shapeProps.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    shapeProps1 = createGui('Shape Properties',optionsX + 420, windowHeight - optionsY)
    //this adds a tick box because within this window the global variable 'drawFill' is set to a bollean value which p5.gui automatically detects and creates the tick box within this window.
    shapeProps1.addGlobals('drawFill')
    shapeProps1.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    brushProps = createGui('Brush Properties', optionsX + 210, windowHeight - optionsY);
    //this adds a value slider within the window because the global variable 'brushSize' is set to a integer value which p5.gui automatically detects and creates the value slider within this window.
    brushProps.addGlobals('brushSize');
    brushProps.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    eraserProps = createGui('Eraser Properties', optionsX + 210, windowHeight - optionsY);
    //this adds a value slider within the window because the global variable 'eraserSize' is set to a integer value which p5.gui automatically detects and creates the value slider within this window.
    eraserProps.addGlobals('eraserSize');
    eraserProps.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    lineProps = createGui('Line Properties',optionsX + 210, windowHeight - optionsY)
    //this adds a value slider within the window because the global variable 'lineWeight' is set to a integer value which p5.gui automatically detects and creates the value slider within this window.
    lineProps.addGlobals('lineWeight');
    lineProps.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    sprayProps = createGui('Spray Properties', optionsX + 210, windowHeight - optionsY)
    //this adds a value slider within the window because the global variable 'sprayCanSpread' is set to a integer value which p5.gui automatically detects and creates the value slider within this window.
    sprayProps.addGlobals('sprayCanSpread');
    sprayProps.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    textProps = createGui('Text Properties', optionsX + 210, windowHeight - optionsY)
    //this adds a text box within the window because the global variable 'textInput' is set to a string value which p5.gui automatically detects and creates the text box within this window.
    textProps.addGlobals('textInput');
    textProps.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    textProps1 = createGui('Text Properties', optionsX + 420, windowHeight - optionsY)
    //this adds a value slider within the window because the global variable 'fontSize' is set to a integer value which p5.gui automatically detects and creates the value slider within this window.
    textProps1.addGlobals('fontSize');
    textProps1.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    textProps2 = createGui('Text Properties', optionsX + 630, windowHeight - optionsY)
    //this adds a value slider within the window because the global variable 'fontSize' is set to a integer value which p5.gui automatically detects and creates the value slider within this window.
    textProps2.addGlobals('font');
    textProps2.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    textProps3 = createGui('Text Properties', optionsX + 630, windowHeight - optionsY - 30)
    //this adds a value slider within the window because the global variable 'fontSize' is set to a integer value which p5.gui automatically detects and creates the value slider within this window.
    textProps3.addGlobals('bold');
    textProps3.hide() //as soon as the p5.gui window is created it hides the window straight away. This way it can be shown when the corresponding tool is selected thus reducing cluster
    
    /////// ALL HINTS AND TIPS ///////
    //here the hints code is written, it essentially uses p5.gui but doesnt assign a global variable so only the title is used
    
    colourHintTitle = createGui('Colour Hint',windowWidth - 250, windowHeight - optionsY - 10)
    
    colourHintContent = createGui('After choosing the colour make sure you click on the custom color swatch again',windowWidth - 250, windowHeight - optionsY + 20)
    
    textHintContent = createGui('Type Text In Here',optionsX + 210, windowHeight - optionsY - 30)
    textHintContent.hide()
}