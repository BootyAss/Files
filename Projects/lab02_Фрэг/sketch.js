var img;
var orig = [];
var resetButton, bwButton, invertButton;

function preload() {
  img = loadImage('https://bootyass.github.io/Files/Photos/Frog.png');
}

function setup() {
  createCanvas(500, 500);

  background(200);

  img.resize(width - 100, height - 100);

  drawImg();

  for (let i = 0; i < img.width; i++) {
    orig[i] = [];
    for (let j = 0; j < img.height; j++) {
      orig[i][j] = img.get(i, j);
    }
  }

  resetButton = createButton('Reset');
  resetButton.size(100, 40);
  resetButton.mousePressed(Reset);

  bwButton = createButton('BW mode');
  bwButton.size(100, 40);
  bwButton.mousePressed(BW);

  invertButton = createButton('Invert mode');
  invertButton.size(100, 40);
  invertButton.mousePressed(Invert);
}


function drawImg() {
  image(img, 50, 50);
}

function BW() {
  clear();
  background(200);

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, (orig[i][j][0] + orig[i][j][1] + orig[i][j][2]) / 3);
    }
  }

  img.updatePixels();
  drawImg();
}

function Invert() {
  clear();
  background(200);

  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, color(255 - orig[i][j][0], 255 - orig[i][j][1], 255 - orig[i][j][2]));
    }
  }

  img.updatePixels();
  drawImg();
}

function Reset() {
  clear();
  background(200);


  for (let i = 0; i < img.width; i++) {
    for (let j = 0; j < img.height; j++) {
      img.set(i, j, orig[i][j]);
    }
  }

  img.updatePixels();
  drawImg();
}