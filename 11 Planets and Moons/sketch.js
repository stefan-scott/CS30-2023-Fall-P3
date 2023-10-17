// Planets and Moons
// Mr. Scott
// October 17, 2023
// A look at re-creating objects, objects IN objects
let myPlanet;

function setup() {
  createCanvas(windowWidth, windowHeight);
  myPlanet = new Planet(width/2, height/2);
}

function draw() {
  background(220);
  myPlanet.display();
}

class Planet{
  constructor(x,y){
    this.x = x;     this.y = y;
    this.s = 100;   this.radius = this.s/2;
    this.moons = [];  //fill with moon objects
  }
  display(){
    circle(this.x, this.y, this.s);
  }
}

class Moon{

}
