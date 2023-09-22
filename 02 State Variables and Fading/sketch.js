// State Variables and Fading
// Mr. Scott
// A bit more practice with state
// variables. Also a fading effect.

// Global Variables
let mouseSide; //numbers would be better
let fillValue = 255;  

function setup() {
  createCanvas(windowWidth, windowHeight);
  updateMouseState();
}

function draw() {
  background(220);
  updateMouseState();
  renderSquares();
}

function updateMouseState(){
  //figure out if mouse is left/right
  if(mouseX>width/2){
    mouseSide="right";
  }
  else mouseSide="left";
  print(mouseSide);
}

function renderSquares(){
  //draw the two rectangles on either half of canvas
  if(mouseSide==="left"){
    fill(0);
  }
  else fill(255);
  rect(0,0,width/2,height);  //left half
  
  if(mouseSide==="right"){
    fillValue = 0;
  }
  else{
    fillValue += 10;
  }
  fillValue = constrain(fillValue,0,255);
  fill(fillValue);
  rect(width/2,0,width/2,height); //right half
  print(fillValue);
}
