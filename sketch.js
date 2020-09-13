let img;

function preload() {
  img = loadImage('Frog.png');
}

function setup() {
  createCanvas(600, 600);
}

function draw() {
  background(220);
  image(img, 50, 50, img.width/2, img.height/2);
}
