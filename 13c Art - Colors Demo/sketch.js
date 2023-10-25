// Generative Art - Colors Demo
// Mr. Scott
// Oct 25, 2023

let rectWidth = 50; let rectHeight = 10;
let colors = ["#B9C386", "#CCBD86", "#624E33",
  "#9CA3BD", "#FED9A2"];
//RRGGBB  
function setup() {
  createCanvas(windowWidth, windowHeight);
  noStroke();
  drawColRGB(width * 0.1);  //col at 10% across canvas
  drawColHSB(width * 0.4);  //col at 40% across
  drawColCustom(width * 0.7); //col 70% across
}

function drawColCustom(xPos) {
  colorMode(RGB);
  let counter = 0;
  for (let y = 0; y < height; y += rectHeight) {
    //Option 1: Cycle through Palette
    fill(colors[counter % 5]);  // %5 → 0, 1, 2, 3, 4
    
    //Option 2: Random Selection
    fill(colors[Math.floor(random(colors.length))]);
    
    rect(xPos, y, rectWidth, rectHeight);
    counter++;
  }
}

function drawColHSB(xPos) {
  colorMode(HSB, 360);
  for (let y = 0; y < height; y += rectHeight) {
    //fill  HUE 0-360,   SATURATION,  BRIGHTNESS
    // y 0 - 800
    // y % 360 → y (y<360)
    // m % n →  0-(n-1)   
    fill(y % 360, 360, 360);
    rect(xPos, y, rectWidth, rectHeight);
  }
}

function drawColRGB(xPos) {
  colorMode(RGB); //back to the default
  for (let y = 0; y < height; y += rectHeight) {
    fill(random(255), random(255), random(255));
    rect(xPos, y, rectWidth, rectHeight);
  }
}


