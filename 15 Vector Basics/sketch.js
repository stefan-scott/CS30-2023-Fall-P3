// Vector Basics
// Mr. Scott
// Nov 1, 2023

// Global Variables
let movers = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function mousePressed(){
  //movers.push(new Mover(mouseX,mouseY));
}

function draw() {
  background(220);
  movers.push(new Mover(mouseX,mouseY));
  for(let i=0; i<movers.length; i++){
    let m = movers[i];
    m.move();   m.display();
    if(!m.alive){
      movers.splice(i,1);
      i--;
    }
  }
}

class Mover{
  //constrcutor and class properties
  constructor(x,y){
    this.position = createVector(x,y);  this.s = 20;
    this.velocity = createVector(random(-3,3), random(-5,-3));
    this.gravity = createVector(0,0.1);
    this.lifetime = Math.floor(random(100,200));
    this.alive = true;  this.c = color(0, 100, random(100,255),100);
  }
  //class methods
  move(){
    //Apply forces first (modify our velocity)
    this.velocity.add(this.gravity);
    //Then apply our velocity to position
    this.position.add(this.velocity);
    //↑ is a MUTATOR method
    this.lifetime --;
    if(this.lifetime === 0) this.alive = false;
  }

  display(){
    push();
    fill(this.c);
    noStroke();
    translate(this.position.x, this.position.y);
    circle(0, 0, this.s);
    pop();
  }
}
