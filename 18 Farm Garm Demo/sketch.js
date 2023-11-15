// Farm Game Demo
// Mr. Scott
// Nov 15, 2023
// A 2nd look at using 2D arrays for a tile-based game
// with block-pusher mechanics

let tiles = [];  //to store our images
                 //0→ blank  1→ chicken  2→ cow

let level = [
[0, 0, 0, 1, 0],
[0, 1, 0, 0, 0],
[0, 0, 1, 0, 0],
[1, 0, 0, 0, 1],
[0, 1, 0, 0, 0] ];

const COLUMNS = 5; const ROWS = 5; const TILE_SIZE=100;
let playerX = 3,  playerY = 4;


function preload(){  //"0.png" "1.png" "2.png"
  for(let i = 0; i < 3; i++){
    tiles.push(loadImage("assets/" + i + ".png"));
  }
}

function setup() {
  createCanvas(COLUMNS * TILE_SIZE, ROWS * TILE_SIZE);
  level[playerY][playerX] = 2; //add player to level
}

function draw() {
  background(220);
}
