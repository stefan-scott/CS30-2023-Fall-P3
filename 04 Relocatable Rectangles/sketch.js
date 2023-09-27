// Relocatable Rectangles
// Mr. Scott
// Sept 27, 2023
// Hover Effect + Mousedrag objects

// Global Variables
let x, y, rHeight, rWidth;  //(x,y) center referenced
let rLeft, rRight, rTop, rBottom; //edge positions
let mouseOver = false; // are we hovering over the rect?

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  x = width/2;  y = height/2;
  rHeight = 100;  rWidth = 200;
}

function updateEdgePositions(){
  //updates the right/left/top/bottom for our rect.
  rLeft = x - rWidth/2;  rRight = x + rWidth/2;
  rTop = y - rHeight/2; rBottom = y + rHeight/2;
}

function drawRectangle(){
  //renders rectangle and checks for mouse interactions
  updateEdgePositions();
  print(rLeft + " " + rRight + " " + rTop + " " + rBottom);

  //are we in the region?
  if(mouseX>rLeft && mouseX<rRight && mouseY>rTop && mouseY <rBottom){
    fill(70,230,130);
    mouseOver = true;
  }
  else{
    fill(30,70,170);
    mouseOver = false;
  }

  //draw the rectangle
  rect(x,y,rWidth,rHeight);
}

function draw() {
  background(220);
  drawRectangle();
}
