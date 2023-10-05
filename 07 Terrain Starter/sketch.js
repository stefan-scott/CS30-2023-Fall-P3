// Terrain Starter Code
// Mr. Scott
// October 5th, 2023

// Global Variables
let rectWidth = 1;

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CORNERS);
  generateTerrain();  //temporary
}

function generateTerrain(){
  // using a loop, create a number of side-by-side
  // rectangles, coming up from the bottom of the canvas
  for (let x = 0; x < width; x+=rectWidth ){
    //pick a random height...change to use noise() instead
    let sectionHeight = random(0,height);


    rect(x, height, x+rectWidth, height-sectionHeight); //100 px from the top
  }
}

function draw() {
  // empty for now
}
