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
  renderGrid();
  //update the array 2x per second
  if(frameCount%5===0){
    grid[int(random(NUM_ROWS))][int(random(NUM_COLS))]=random(255);
  }
}

function renderGrid(){
  //creates a 2D grid of squares using information from our
  //2D array for the corresponding fill values
  for(let x = 0; x < NUM_COLS; x++){
    for(let y = 0; y < NUM_ROWS; y++){
      let fillValue = grid[y][x];
      fill(fillValue);
      //x:    0,   1,   2,  3,   4
      //posx  0   50, 100, 150,200   expression? x→posx
      rect(x*rectWidth, y*rectHeight, rectWidth, rectHeight);
    }
  }
}