// Puzzle Game Starter
// Mr. Scott
// Nov 6, 2023
// A first foray into working with 2D arrays

let grid =
[[50,  100,  150,  200,  255],
 [0,   0,    0,    255,  0  ],
 [100, 100,  0,    100,  0  ],
 [255, 200,  150,  100,  50 ]];

const NUM_ROWS = 4;  const NUM_COLS = 5;
let rectWidth, rectHeight;

function setup() {
  rectWidth = 50;  rectHeight = 50;
  createCanvas(NUM_COLS*rectWidth, NUM_ROWS*rectHeight);
}

function draw() {
  background(220);
}
