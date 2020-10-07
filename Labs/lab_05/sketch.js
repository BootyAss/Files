var size = 400;

var start = {
  x: 0,
  y: 0
}

var end = {
  x: 0,
  y: 0
}

var mouseIsReleased = false;

var linesDone = false,
  rectDone = false,
  result = false;

function setup() {
  createCanvas(size, size);
  background(255);

  topLayer = createGraphics(size, size);
  bottomLayer = createGraphics(size, size);
  resLayer = createGraphics(size, size);

  inp = createInput('4');
  inp.style('width', '100px');
  inp.style('margin-left', '50px');
  inp.style('margin-top', '12px'); 

  build = createButton('Lines');
  build.style('width', '50px');
  build.mousePressed(drawStart);
}


function draw() {
  if (linesDone) {
    drawBottom();
    drawTop();

    image(bottomLayer, 0, 0);
    image(topLayer, 0, 0);
  }

  if (linesDone && rectDone) {
    print('r');
    drawRes();
    image(resLayer, 0, 0);
  }
}


function mousePressed() {
  if (linesDone) {
    start.x = mouseX;
    start.y = mouseY;
  }
}

function mouseReleased() {
  if (mouseX < size && mouseY < size && linesDone) {
    end.x = mouseX;
    end.y = mouseY;
    mouseIsReleased = true;
  }
}

function drawBottom() {
  if (mouseIsPressed && linesDone) {
    bottomLayer.background(255);
    bottomLayer.fill(225, 65, 65);
    bottomLayer.rect(start.x, start.y, mouseX - start.x, mouseY - start.y);
  }
}

function drawTop() {
  if (mouseIsReleased && linesDone) {
    bottomLayer.background(255);
    drawRect(start.x, start.y, end.x, end.y);
    mouseIsReleased = false;
  }
}


function randomize() {
  return floor(random(0, size));
}

function drawStart() {
  linesDone = false;
  result = false;

  let amount;
  try {
    amount = int(inp.value());
  } catch (e) {
    return;
  }

  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      topLayer.set(i, j, color(255, 255, 255, 0));
    }
  }

  topLayer.background(255);

  for (let i = 0; i < amount; i++) {
    drawLine(randomize(), randomize(), randomize(), randomize());
  }
  topLayer.updatePixels();

  linesDone = true;
}


function drawLine(x0, y0, x1, y1) {
  var dx = Math.abs(x1 - x0);
  var dy = Math.abs(y1 - y0);
  var sx = (x0 < x1) ? 1 : -1;
  var sy = (y0 < y1) ? 1 : -1;
  var err = dx - dy;

  while (true) {
    if (Math.abs(x0 - x1) < 0.0001 && Math.abs(y0 - y1) < 0.0001)
      break;
    var e2 = 2 * err;
    if (e2 > -dy) {
      err -= dy;
      x0 += sx;
    }
    if (e2 < dx) {
      err += dx;
      y0 += sy;
    }
    topLayer.set(x0, y0, color(0, 0, 0, 255));
  }
}

function drawRect(x0, y0, x1, y1) {
  rectDone = false;
  for (let i = 0; i < size; i++) {
    for (let j = 0; j < size; j++) {
      bottomLayer.set(i, j, color(255, 255, 255));
    }
  }

  if (x0 >= x1) {
    temp = x0;
    x0 = x1;
    x1 = temp;
  }
  if (y0 >= y1) {
    temp = y0;
    y0 = y1;
    y1 = temp;
  }

  for (let x = x0; x <= x1; x++) {
    for (let y = y0; y <= y1; y++) {
      bottomLayer.set(x, y, color(225, 65, 65));
    }
  }
  bottomLayer.updatePixels();

  rectDone = true;
}


function drawRes() {
  result = true;
  background(255);
  linesDone = false;
  rectDone = false;
  
  for (let i = 0; i < size; i++) {
    for (let y = 0; y < size; y++) {
        resLayer.set(i, y, color(255, 255, 255));
    }
  }

  
  for (let i = start.x; i < end.x; i++) {
    for (let y = start.y; y < end.y; y++) {
      f = topLayer.get(i, y)[0] == 0 && topLayer.get(i, y)[1] == 0 && topLayer.get(i, y)[2] == 0 && topLayer.get(i, y)[3] == 255;
      
      s = bottomLayer.get(i, y)[0] == 225 && bottomLayer.get(i, y)[1] == 65 && bottomLayer.get(i, y)[2] == 65 && bottomLayer.get(i, y)[3] == 255;
      
      if (f && s) {
        resLayer.set(i, y, color(65, 65, 225));
      }
    }
  }
  resLayer.updatePixels();
}
