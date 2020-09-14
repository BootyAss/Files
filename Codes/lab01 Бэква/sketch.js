var on = 0;

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(255);

  fill(0, 0, 0);
  noStroke();
  textSize(20);
  textAlign(CENTER);
  text("Press the mouse :)", width / 2, 100);
  
  strokeWeight(10);
  stroke(50, 50, 200);
  switch (on) {
    case 3:
      line(width / 2 - 20, height / 2 + 50, width / 2 - 50, height / 2 + 120);
    case 2:
      line(width / 2, height / 2 - 50, width / 2, height / 2 + 120);
    case 1:
      noFill();
      arc(width / 2, height / 2, 100, 100, HALF_PI, PI + HALF_PI);
      break;
  }
}

function mousePressed() {
  if (on < 3)
    on++;
}