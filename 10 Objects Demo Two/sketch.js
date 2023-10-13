// Objects Demo Two
// Mr. Scott
// October 13, 2023
// Looking at objects that can interact with each other

// Global Variables
let points = [];

function setup() {
  createCanvas(windowWidth, windowHeight);
}

function draw() {
  background(255);
  for(let p of points){
    p.move();
    p.display();
  }

}

function mouseClicked(){
  points.push(new MiniPoint(mouseX,mouseY));
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
  move(){
    let xSpeed = noise(this.xTime); //0-1    //-5 to 5
    xSpeed = map(xSpeed,0,1,-this.maxSpeed, this.maxSpeed);
    let ySpeed = noise(this.yTime);
    ySpeed = map(ySpeed,0,1,-this.maxSpeed,this.maxSpeed);
    this.x += xSpeed;   this.y += ySpeed;
    this.xTime += this.timeShift;    
    this.yTime+=this.timeShift;

    //Wrap around code 
    if(this.x < 0) this.x += width;
    if(this.x > width) this.x -= width;
    if(this.y < 0) this.y += height;
    if(this.y > height) this.y -= height;
  }

  display(){
    fill(this.c);
    noStroke();
    circle(this.x, this.y, this.s);
  }
}
