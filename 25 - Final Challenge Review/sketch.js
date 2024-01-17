// Final Challenge Review

let gorillaIdle = [];
let gorillaSwipe = [];
let spiralImages = [];

let spirals = []; //spiral objects

let gorillaX, gorillaY;
let idleIndex = 0; let swipeIndex = 0;

function preload() { //to ensure all images are loaded
  //SPIRALS  00 - 09   10- 15
  for (let i = 0; i < 16; i++) {
    if (i < 10) {
      spiralImages.push(loadImage("assets/Circle/Circle Animation0" + i + ".png"));
    }
    else {
      spiralImages.push(loadImage("assets/Circle/Circle Animation" + i + ".png"));
    }
  }

  //IDLE   idle1.png  →6
  for (let i = 1; i < 7; i++) {
    gorillaIdle.push(loadImage("assets/Gorilla/idle" + i + ".png"));
  }
  //SWIPE 
  for (let i = 1; i < 7; i++) {
    gorillaSwipe.push(loadImage("assets/Gorilla/swipe" + i + ".png"));
  }
}

function setup() {
  createCanvas(windowWidth, windowHeight);
  imageMode(CENTER);
  gorillaX = width / 2; gorillaY = height / 2;
}

function draw() {
  background(220);
  if (keyIsPressed && key === " ") {  //SWIPE
    image(gorillaSwipe[swipeIndex], gorillaX, gorillaY, 300, 300);
    if (frameCount % 4 === 0) {
      swipeIndex++;
      if (swipeIndex > 5) swipeIndex = 0;
    }
  }
  else {  //IDLE
    image(gorillaIdle[idleIndex], gorillaX, gorillaY);
    if (frameCount % 10 === 0) {
      idleIndex++;
      if (idleIndex > 5) idleIndex = 0;
    }
  }
  //SPIRALS  []  i==3
  for (let i = 0; i < spirals.length; i++) {
    let s = spirals[i]; //current spiral
    s.display();
    if (s.active === false) {
      spirals.splice(i,1);
      i--; //needed if looping left→right
    }
  }
}

  function mousePressed() {
    spirals.push(new Spiral(mouseX, mouseY));
  }


  class Spiral {
    constructor(x, y) {
      this.pos = createVector(x, y);
      this.currentFrame = 0; //0-15
      this.active = true; //for deletion
    }
    display() {
      if (this.currentFrame > 15) {
        this.active = false;
      }
      else {
        image(spiralImages[this.currentFrame], this.pos.x, this.pos.y);
        if (frameCount % 4 === 0) {
          this.currentFrame++;
        }
      }
    }


  }
