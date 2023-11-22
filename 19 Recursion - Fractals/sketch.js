// Recursion and Visualization
// Mr. Scott
// Nov 22, 2023
// Creating some recursive imagry (fractals)

function setup() {
  createCanvas(windowWidth, windowHeight);
  //noLoop();
  noFill();
}

function draw() {
  randomSeed(1);  //resets where our random number selection is
  background(255);
  //cCircle(width/2, height/2, width);
  //cantor(width*0.1, height*0.3, width*0.8,9);
  //circles(width/2, height/2, height*0.5);
  fractalRectangles(width/2,height/2,height*0.5,0);
}

function fractalRectangles(x, y, sideLength, angle){
  rectMode(CENTER);
  if(sideLength > 20){
    push();
    translate(x,y);
    rotate(radians(angle+frameCount));
    fill(random(255),random(255),random(255));
    square(0,0,sideLength);
    pop();

    //recursive calls
    fractalRectangles(x-sideLength/2,y-sideLength/2,sideLength/2,angle+15);
    fractalRectangles(x+sideLength/2,y-sideLength/2,sideLength/2,angle+15);
    fractalRectangles(x-sideLength/2,y+sideLength/2,sideLength/2,angle+15);
    fractalRectangles(x+sideLength/2,y+sideLength/2,sideLength/2,angle+15);
    
  }

}


function circles(x, y, d){
  if(d > 2){
    circle(x,y,d);
    //recursive call(s)
    circles(x - d/2, y, d/2);
    circles(x + d/2, y, d/2);
    circles(x, y + d/2, d/2);
  }
  //base case
}


function cantor(x, y, len, depth){
  if(depth > 1){
    line(x,y,x+len,y);
    rect(x,y,len,10);
    cantor(x,y+20,len/3,depth-1);
    cantor(x+len*2/3,y+20,len/3,depth-1);
  }
}






function cCircle(x, y, d){
  print(1);
  if (d > 10){
    //do some work, and recurse
    circle(x,y,d);
    let newD = map(mouseX,0,width,1.01,1.5);
    cCircle(x,y,d/newD);

  }
  //if that wasn't true, function ends (base case)
}
