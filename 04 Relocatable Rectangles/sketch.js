// Relocatable Rectangles
// Mr. Scott
// Sept 27, 2023
// Hover Effect + Mousedrag objects

// Global Variables
let x, y, rHeight, rWidth;  //(x,y) center referenced
let rLeft, rRight, rTop, rBottom; //edge positions

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
}

function draw() {
  background(220);
  drawRectangle();
}
