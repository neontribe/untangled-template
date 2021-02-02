let w;
let mean;
let sd;

class Walker {
  constructor() {
    this.x = windowWidth / 2;
    this.y = windowHeight / 2;
  }

  display() {
    noStroke();
    fill(0);
    circle(this.x, this.y, 2, 2);
  }

  step() {
    let choice = Math.floor(random(0, 4));
    if (choice === 1) {
      this.x = this.x + randomGaussian(1, 3); //right
    } else if (choice === 2) {
      this.x = this.x - randomGaussian(1, 3); // left
    } else if (choice === 3) {
      this.y = this.y - randomGaussian(1, 3); // down
    } else {
      this.y = this.y + randomGaussian(1, 3); // up
    }
    // sd = 2;
    // mean = windowWidth / 2;
    // this.x = this.x + randomGaussian(mean, sd);
    // this.y = this.y + randomGaussian(mean, sd);
    // console.log(this.x, this.y);
  }
}

function setup() {
  // create a canvas
  createCanvas(windowWidth, windowHeight);
  background(220);

  // create a walker
  w = new Walker();
}

function draw() {
  // colour the background black
  w.step();
  w.display();
}
