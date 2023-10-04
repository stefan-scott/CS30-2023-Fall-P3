// Working with Noise
// Mr. Scott
// October 4, 2023
//
// Psuedo-random Numbers:   Uniform Distribution, Perlin Noise
                          // random()

//Global Variables
let segmentLength = 5;
let ballY = 200;

function setup() {
  createCanvas(500, 500);
  frameRate(10);
}

function wastefulLine(){
  // using a loop, let's draw a horizontal line made up of little segments
  let x = 0;
  strokeWeight(20);
  while(x < width){
    //option 1 - using random()
    let lineValue = random(0,255);

    stroke(lineValue);
    line(x, height/2, x+segmentLength, height/2);
    x += segmentLength;
  }
}

function rectangleOnLine(){
  //draw a rectangle which always sits on the line
  rectMode(CORNERS);
  strokeWeight(2);
  stroke(0);

  //option 1 - using random() [uniform distribution]
  let roundedAmount = random(2,70);

  rect(width * 0.2, height/2, width * 0.5, height * 0.2, roundedAmount);
}

function moveBall(){
  //option 1 - random()
  ballY += random(-20,20);
  
  circle(width * 0.75, ballY, 30);
}

function draw() {
  background(220);
  wastefulLine();
  rectangleOnLine();
  moveBall();
}
