let randomR, randomG, randomB

function setup() {
  createCanvas(400, 400);
  background(220);

  randomR = floor(random(0, 255));
  randomG = floor(random(0, 255));
  randomB = floor(random(0, 255));

  // print(randomR, randomG, randomB);

  /* ------------------------------------------------------------------------------------------
     ____           _                    ____            _          _     _                
    / ___|   ___   | |   ___    _ __    |  _ \    __ _  | |   ___  | |_  | |_    ___   ___ 
   | |      / _ \  | |  / _ \  | '__|   | |_) |  / _` | | |  / _ \ | __| | __|  / _ \ / __|
   | |___  | (_) | | | | (_) | | |      |  __/  | (_| | | | |  __/ | |_  | |_  |  __/ \__ \
    \____|  \___/  |_|  \___/  |_|      |_|      \__,_| |_|  \___|  \__|  \__|  \___| |___/
                                                                                               
  ------------------------------------------------------------------------------------------ */

  noStroke();
  
  // Monochromatic 
  // fill(randomR, randomG, randomB);
  // circle(150, 150, 60);
  // fill(randomR+50, randomG+50, randomB+50);
  // circle(250, 150, 60);
  // fill(randomR-50, randomG-50, randomB-50);
  // circle(150, 250, 60);

  // Complementary
  fill(randomR, randomG, randomB);
  circle(150, 150, 60);
  fill(255-randomR, 255-randomG, 255-randomB);
  circle(250, 150, 60);

  // Triad
  // fill(randomR, randomG, randomB);
  // circle(150, 150, 60);
  // fill((2*255/3)-randomR, (2*255/3)-randomG, (2*255/3)-randomB);
  // circle(250, 150, 60);
  // fill((2*255/3)+randomR-70, (2*255/3)+randomG-70, (2*255/3)+randomB-70);
  // circle(150, 250, 60);

  // Analogous
  // fill(randomR, randomG, randomB);
  // circle(150, 150, 60);
  // fill((255/6)-randomR+100, (255/6)-randomG+100, (255/6)-randomB+100);
  // circle(250, 150, 60);
  // fill((255/6)+randomR-70, (255/6)+randomG-70, (255/6)+randomB-70);
  // circle(150, 250, 60);
}

function draw() { }
