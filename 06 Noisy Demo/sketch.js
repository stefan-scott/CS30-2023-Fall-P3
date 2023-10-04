// Working with Noise
// Mr. Scott
// October 4, 2023
//
// Psuedo-random Numbers:   Uniform Distribution, Perlin Noise
                          // random()

//Global Variables
let segmentLength = 5;
let ballY = 200;
let noisePositionRound = 50; //abritrary starting spot
let noisePositionLine = 200;
let noisePositionBallY = 0;


const noiseShift = 0.2; //the larger this value, the more
                 // unrelated the noise results are
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

    //option 2 - using noise()
    lineValue = noise(noisePositionLine); //0-1
    lineValue = map(lineValue,0,1,0,255);
    noisePositionLine += noiseShift;

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

  //option 2 - using noise()
  roundedAmount = noise(noisePositionRound); //0-1
  roundedAmount = map(roundedAmount,0,1,2,70);
  noisePositionRound += noiseShift;

  rect(width * 0.2, height/2, width * 0.5, height * 0.2, roundedAmount);
}

function moveBall(){
  //option 1 - random()
  //ballY += random(-20,20);

  //option 2 - noise()
  let dY = noise(noisePositionBallY); //0-1
  dY = map(dY,0,1,-20,20);
  noisePositionBallY += noiseShift;
  ballY += dY;

  circle(width * 0.75, ballY, 30);
}

function draw() {
  background(220);
  wastefulLine();
  rectangleOnLine();
  moveBall();
}
