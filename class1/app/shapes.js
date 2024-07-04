function setup() {
  createCanvas(400, 400);
  background(220);         // (black 2 white) - (red, green, blue)
  fill(100);               // (black 2 white) - (red, green, blue)
  // noStroke();           // Do not show the stroke
  strokeWeight(5);         // Weight of the stroke
  stroke(255);             // (black 2 white) - (red, green, blue)
  circle(150, 70, 60);     // (xpos, ypos, diameter)
  square(300, 300, 50);    // (xpos, ypos, length)
  triangle(200, 200, 100, 240, 180, 150);  // (x1, y1, x2, y2, x3, y3)
}
  
function draw() { }
  