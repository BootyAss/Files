var Cube = {
  curAngle : 0,
  r : 200,
  a : 50,
  x : 0, 
  y : 200,
  on : false
}


function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);
  
  fill(0, 0, 0);
  textSize(20);
  textAlign(CENTER);
  text("Press the mouse :)", width/2, height/2);  
  
  
  fill(200, 0, 0);
  rectMode(CENTER);
  rect(width/2 + Cube.x, height/2 + Cube.y, Cube.a , Cube.a);
  
  if (Cube.on) {
    Cube.x = sin(Cube.curAngle) * Cube.r;
    Cube.y = cos(Cube.curAngle) * Cube.r;

    Cube.curAngle += 0.05;
  }
}

function mousePressed() {
  Cube.on = !Cube.on;
}