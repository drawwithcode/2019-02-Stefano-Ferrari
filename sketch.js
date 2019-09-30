//Variables for each color
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

  //standard size of the square.
  var lato = Math.floor(windowWidth / 100);

  background(10);

  //cycles for the grid of squares
  for (var i = lato / 2; i < windowWidth; i += lato) {
    for (var j = lato / 2; j < windowHeight; j += lato) {

      //"focus" the noise if the mouse btn is clicked.
      if (mouseIsPressed) {
        //random size based on the mouse distance from the square.
        var l = lato * noise(100 / (sqrt(Math.pow(i - mouseX, 2) + Math.pow(j - mouseY, 2))));
      } else {
        //random color.
        R = random(255);
        G = random(255);
        B = random(255);
        fill(R, G, B);

        var l = lato * noise(random(-50, 50));
      }

      rect(i, j, l, l);

    }
  }

  //make a screen of the texture with the spacebar (keycode: 32)
  if (keyIsDown(32)) {
    //actually call the save function.
    screenshot();
  } else {
    //if the spacebar is not already pressed, display a text with the instruction
    //this way, when you press the spacebar, the text disappear from the screenshot.
    fill(10);
    rect((windowWidth / 2) - 1, (windowHeight / 20) - 2, 280, 18);
    fill(255);
    textSize(10);
    textAlign(CENTER);
    text('Click to focus the noise. Press Spacebar to save the texture.', windowWidth / 2, windowHeight / 20);

    //needed to change the color of the squares, each time the mouse is clicked.
    fill(R, G, B);
  }
}

function screenshot() {
  if (keyIsDown(32)) {
    save('texture.jpg');
  }
}
