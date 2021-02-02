let x;
let mean;
let sd;
let num;
function setup() {
  // create a canvas
  createCanvas(windowWidth, windowHeight);
  background(220);
}

function draw() {
  sd = 100;
  mean = windowWidth / 2;
  x = randomGaussian(mean, sd);
  y = randomGaussian(mean, sd);

  noStroke();
  fill(40, 40, randomGaussian(210, 30));
  ellipse(x, y, 10, 10);
}
