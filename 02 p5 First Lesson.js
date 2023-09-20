// Global Variables
let x = 0;
let xSpeed = 5;

function setup() 
{ //Set runs ONE TIME, at the start
  createCanvas(400, 400);
  print(width)
}

function draw() 
{ background(255);  
  
  noStroke();
  fill(0); //fill black
  ellipse(mouseX,mouseY,40,20);
 
 //movement
  x = x+xSpeed;
  if(x > width) xSpeed = xSpeed * -1;
  
  fill(225, 235, 52);
  stroke(0,200,30);
  strokeWeight(5);
  ellipse(x,100, 90);  //fixed 
}

function keyPressed(){
  background(255);
}







//WARM-UP Practice CodingJS Middle3

// let word = "halibut";
// let centerIndex = (word.length - 1) / 2;

// let center = word.substring(centerIndex - 1, centerIndex + 2);
// console.log(center);
