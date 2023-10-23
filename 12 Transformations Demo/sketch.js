// Basic Transformations Sandbox


let originalSpacing = 20;


function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  drawBasicGrid(220);  //reference default coordinate system


  //transformation one: TRANSLATION
  // push();   //creates a copy of the current coordinates
  // translate(100,100);  //moves the origin
  // drawBasicGrid(100); 
  // rectangleRed(0,0);
  // pop();    //discard coordinate system, return to previous

  // rectangleBlue(0,0);

  //transformation two: SCALE

  // rectMode(CORNER);
  // rectangleRed(40,0);

  // let scaleAmount = map(mouseX,0,width,0.3,6);
  // translate(100,100);
  // scale(scaleAmount); //1 - no change  <1 smaller
  // drawBasicGrid(160);   // >1 larger
  // rectMode(CENTER);
  // rectangleBlue(0,0);


  //transformation three: ROTATION
  //reminder: rotations are measured in radians, not degrees! Functions can help with the conversion...
  // rectMode(CENTER);
  // translate(width/2, height/2);
  // // frameCount > what frame we are on.
  // face(0,0);
  // rotate(radians(frameCount*3));
  // //drawBasicGrid(150);
  // rectangleRed(150,0);



  //Combinations of Transformations
  push();
  rotate(radians(45));
  scale(2);
  translate(50, 50);
  face(200, 200);
  pop();


}


function face(x, y) {
  //draw a face at x,y
  push();
  translate(x, y);
  ellipseMode(CENTER);
  fill(200, 200, 0);
  stroke(0);
  ellipse(0, 0, 80, 80);
  fill(90, 140, 30, 220);
  triangle(-20, 20, 20, 20, 0, 30);
  fill(0);
  ellipse(-25, 0, 10, 10);
  ellipse(25, 0, 10, 10);
  strokeWeight(5);
  line(-30, -10, 30, -10);
  strokeWeight(1);
  pop();

}

function rectangleRed(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(255, 0, 0, 150);
  rect(x, y, 50, 50);

}

function rectangleBlue(x, y) {
  //draw a red rectangle at x,y (sized 50 pixels square) - to visualize what happens to the coordinate system
  //when different basic transformations are applied.
  noStroke();
  fill(0, 0, 255, 150);
  rect(x, y, 50, 50);

}

function drawBasicGrid(shade) {
  //draw the normal cartesian Coordinate Grid, in a light color. Spaced at 20 px by default
  stroke(shade);
  for (let x = 0; x < width; x += 20) {
    line(x, 0, x, height);
  }
  for (let y = 0; y < height; y += 20) {
    line(0, y, width, y);
  }

  //Draw "X" at the origin
  strokeWeight(3);
  stroke(0);
  line(-5, 0, 5, 0);
  line(0, 5, 0, -5);
  strokeWeight(1);
}