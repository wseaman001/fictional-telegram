var bingo = 0
//The setup function only happens once
function setup() {
  createCanvas(800, 800);
  background(228,0,242);
  strokeWeight(2);
}

function draw() {
  if (mouseIsPressed) {
    stroke(255,0,0);
  } else {
    stroke(0, 255, 0);
  }
  line(mouseX - 42, mouseY, mouseX + 42, mouseY);
  line(mouseX, mouseY - 42, mouseX, mouseY + 42);
}
