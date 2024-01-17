// Final Challenge Review

let gorillaIdle = [];
let gorillaSwipe = [];

let gorillaX, gorillaY;
let idleIndex = 0; let swipeIndex = 0;

function preload() { //to ensure all images are loaded
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
    image(gorillaSwipe[swipeIndex], gorillaX, gorillaY);
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

}
