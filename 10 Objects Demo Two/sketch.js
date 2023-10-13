// Objects Demo Two
// Mr. Scott
// October 13, 2023
// Looking at objects that can interact with each other

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(220);
}

class MiniPoint{
  //constructor function
  constructor(x,y){  //set up class variables
    this.x = x;    this.y = y;    this.s = 20;
    this.c = color(random(255),random(255),random(255));
    this.xTime = random(10);    this.yTime = random(10);
    this.timeShift = 0.01;   this.maxSpeed = 5; 
  }

  //class functions
  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.s);
  }
}
