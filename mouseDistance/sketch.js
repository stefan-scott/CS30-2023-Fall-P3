// Mouse Distance
// Mr. Scott
// A bit more with mouse and functions

// Global Variables
let nodeColors = [];  // ["red", "blue", "gree"]
let colorIndex = 1;  // state variable
// 0, 1, ..nodeColors.length-1

function renderNodes() {
  // simple function: no inputs, no return
  // draw two "nodes" as circles, and connect
  // them with a line
  stroke(nodeColors[colorIndex]);
  fill(nodeColors[colorIndex]);
  circle(width / 2, height / 2, 20);
  circle(mouseX, mouseY, 20);
  line(width / 2, height / 2, mouseX, mouseY);
  //display distance
  let d = segmentDistance(mouseX,mouseY,width/2,height/2);
  text(round(d,1), width/2, height * 0.6);
}

function segmentDistance(x1, y1, x2, y2){
  //calculate the distance between 2 points
  //and return the result
  let a = Math.abs(x1-x2);
  let b = Math.abs(y1-y2);
  let c = Math.sqrt(a*a + b*b);
  return c;
}

function mouseWheel(event) {
  //check for mouseWheel event
  //neg → scroll up    pos → scroll down
  print(event.delta);
  if (event.delta < 0) {
    colorIndex += 1;
    if (colorIndex > nodeColors.length - 1) {
      //gone past the end of the array
      colorIndex = 0;
    }
  }
  else {  //reduce colorIndex and maybe wrap around
    //on your own
  }
}

function initColors() {
  // populate our array of colors
  nodeColors.push(color("red"));
  nodeColors.push(color(200, 100, 0));
  nodeColors.push(color("cornflowerblue"));
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  initColors();
  noCursor();
  textAlign(CENTER);
  textSize(24);
}

function draw() {
  background(220);
  renderNodes();
}


