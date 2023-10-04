// Working with Noise
// Mr. Scott
// October 4, 2023
//
// Psuedo-random Numbers:   Uniform Distribution, Perlin Noise
                          // random()

//Global Variables
let segmentLength = 5;

function setup() {
  createCanvas(500, 500);
}

function wastefulLine(){
  // using a loop, let's draw a horizontal line made up of little segments
  let x = 0;
  while(x < width){

    line(x, height/2, x+segmentLength, height/2);
    x += segmentLength;
  }
}

function rectangleOnLine(){
  //draw a rectangle which always sits on the line
  rectMode(CORNERS);
  strokeWeight(2);
  stroke(0);

  rect(width * 0.2, height/2, width * 0.5, height * 0.2);
}

function draw() {
  background(220);
  wastefulLine();
  rectangleOnLine();
}
