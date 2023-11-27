// Local Storage + Sound Library
// Mr. Scott
// Nov 27, 2023

// Global Variables
let ball;  
let totalBounces = 0;
let bounceSound, music;
let start = false;

// localStorage.getItem("bounces") === null
// localStorage.setItem("bounces", 0)

function preload(){  //waits here until all loads are complete
  music = loadSound("assets/background.mp3");
  bounceSound = loadSound("assets/bounceSound.wav");
}


function setup() {
  createCanvas(windowWidth, windowHeight);
  ball = new Ball(width/2, height/2);
  if(localStorage.getItem("bounces")===null){  //no key yet
    localStorage.setItem("bounces", 0);
  }
  else{
    totalBounces = int(localStorage.getItem("bounces"));
  }

}

function draw() {
  background(220);
  
  if(start===false){
    textSize(15);  textAlign(CENTER);
    text("Click to Begin", width/2, height/2);
    if(mouseIsPressed){
      start = true;
      music.setVolume(0.3);  //0-1
      music.loop();
    }
  }
  else{
    ball.move();
  ball.display();
  //display the total number of bounces
  textSize(30);  textAlign(CENTER);
  text(totalBounces, width/2,height/2);
  }
  
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
      localStorage.setItem("bounces", totalBounces);
      bounceSound.play();
    }
    if(this.pos.y<0 || this.pos.y>height){
      this.vel.y *= -1;
      totalBounces +=1;
      localStorage.setItem("bounces", totalBounces);
      bounceSound.play();
    }
  }
}

function keyPressed(){
  if(key==="r"){
    localStorage.setItem("bounces",0);
    totalBounces = 0;
  }
}
