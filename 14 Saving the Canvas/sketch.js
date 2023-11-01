// Saving the Canvas
// Mr. Scott
// October 27th, 2023
// Saving Image Files, Scaling up the Canvas
let scaleFactor = 5;
function setup() {

  createCanvas(600 * scaleFactor  , 200 * scaleFactor);
  noLoop();  noStroke();
}

function draw() {
  background(0);
  for(let i = 0; i < 1000 ; i++){
    let x = random(width); 
    let y = random(height);
    if(y < height*0.7 && y > height*0.3){
      circle(x,y,10*scaleFactor);
    }
  }
  save("myImage.png");

}
