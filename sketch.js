var n = 0;
var R;
var G;
var B;

function preload() {

}

function setup() {
  createCanvas(windowWidth, windowHeight);
  rectMode(CENTER);
  noStroke();

}

function draw() {

  var lato = Math.floor(windowWidth / 100);

  background(10);


  for (var i = lato / 2; i < windowWidth; i += lato) {
    for (var j = lato / 2; j < windowHeight; j += lato) {

      if (mouseIsPressed) {
        var l = lato * noise(100 / (sqrt(Math.pow(i - mouseX, 2) + Math.pow(j - mouseY, 2))));
      } else {
        R = random(255);
        G = random(255);
        B = random(255);
        fill(R, G, B);
        var l = lato * noise(random(-50, 50));
      }

      rect(i, j, l, l);

    }
  }
  if (keyIsDown(32)) {
    screenshot();
  }else{
  fill(10);
  rect((windowWidth/2)-1,(windowHeight/20)-2,280,18);
  fill(255);
  textSize(10);
  textAlign(CENTER);
  text('Click to focus the noise. Press Spacebar to save the texture.', windowWidth/2, windowHeight/20);
  fill(R, G, B);
}
}

function screenshot() {
if (keyIsDown(32)) {
  save('texture.jpg');
}
}
