// Vector Basics
// Mr. Scott
// Nov 1, 2023

// Global Variables
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  movers.push(new Mover(mouseX,mouseY));
}

function draw() {
  background(220);
  for(let m of movers){
    m.move();   m.display();
  }
}

class Mover{
  //constrcutor and class properties
  constructor(x,y){
    this.position = createVector(x,y);  this.s = 20;
  }
  //class methods
  move(){
  }

  display(){
    push();
    translate(this.position.x, this.position.y);
    circle(0, 0, this.s);
    pop();
  }
}
