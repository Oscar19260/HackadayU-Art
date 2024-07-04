let randomR, randomG, randomB;

function setup() {
  createCanvas(400, 400);  
  randomR = floor(random(0, 255));
  randomG = floor(random(0, 255));
  randomB = floor(random(0, 255));
  sizeCir = random(50, 250);
  background(randomR-(255/6), randomG-(255/6), randomB-(255/6));
  noStroke();

  // print(randomR, randomG, randomB)

  fill(randomR, randomG, randomB);
  circle(200, 300, sizeCir);
  // circle(100, 350, 100);
  // circle(300, 350, 100);
  // circle(50, 375, 50);
  // circle(350, 375, 50);

  fill(randomR+(255/6), randomG+(255/6), randomB+(255/6));
  circle(200, 100, sizeCir);
  // circle(100, 50, 100);
  // circle(300, 50, 100)
  // circle(50, 25, 50);
  // circle(350, 25, 50);
}

function draw() { }
