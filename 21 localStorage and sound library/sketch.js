// Local Storage + Sound Library
// Mr. Scott
// Nov 27, 2023

// Global Variables
let ball;  
let totalBounces = 0;

function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width/2, height/2);
}

function draw() {
  background(220);
  ball.move();
  ball.display();
}

class Ball{ //a ball that bounces on the canvas edges
  constructor(x,y){
    this.pos = createVector(x,y);
    this.vel = createVector(random(-6,6), random(-6,6));
  }
  display(){
    circle(this.pos.x, this.pos.y, 30);
  }
  move(){
    this.pos.add(this.vel);
    //check for wall collisions
    if(this.pos.x<0 || this.pos.x>width){
      this.vel.x *= -1;
      totalBounces += 1;
    }
    if(this.pos.y<0 || this.pos.y>height){
      this.vel.y *= -1;
      totalBounces +=1;
    }
  }
}
