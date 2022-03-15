const canvas = document.getElementById("gameArea");
const ctx = canvas.getContext("2d");

let x = 100;
let y = 100;
let radius = 90;
let speed = 10;

let upPressed = false;
let downPressed = false;
let leftPressed = false;
let rightPressed = false;

var boy = new Image();
boy.src = "images/boy.jpg";
var boy1 = new Image();
boy1.src = "images/boy1.jpg";
var boy2 = new Image();
boy2.src = "images/boy2.jpg";
var boy3 = new Image();
boy3.src = "images/boy3.jpg";
var boy4 = new Image();
boy4.src = "images/boy4.jpg";

imgs = [boy1, boy2, boy3, boy4];
pos = 0;

function drawGame() {
  requestAnimationFrame(drawGame);
  clearScreen();
  inputs();
  boundryCheck();
  drawBoy();
  
  
}

function boundryCheck() {
  //up
  if (y <  radius) {
    y = radius;
  }
  //down
  if (y > canvas.height - radius) {
    y = canvas.height - radius;
  }
  //left
  if (x < radius) {
    x = radius;
  }
  //right
  if (x > canvas.width - radius) {
    x = canvas.width - radius;
  }
}

function inputs() {
  if (upPressed) {
    y = y - speed;
  }
  if (downPressed) {
    y = y + speed;
  }
  if (leftPressed) {
    x = x - speed;
  }
  if (rightPressed) {
    x = x + speed;
  }
}

function drawBoy() {
  
  ctx.fillStyle = ctx.drawImage(boy, x, y,100, 100);

  
  if (upPressed) {
    ctx.fillStyle = ctx.drawImage(boy1, x, y, 100, 100);
  }

  if (downPressed) {
    ctx.fillStyle = ctx.drawImage(boy2, x, y, 100, 100);
  }
  if (leftPressed) {
    
    ctx.fillStyle = ctx.drawImage(imgs[pos], x, y, 100, 100);
    pos++;
    if(pos==3){
      pos=0
    }
  }
  if (rightPressed) {

    ctx.fillStyle = ctx.drawImage(imgs[pos], x, y, 100, 100);
    pos++;
    if(pos==3){
      pos=0
    }
    
  }
  ctx.beginPath();

   ctx.fill();

}


function clearScreen() {
  ctx.fillStyle = "black";
  ctx.fillRect(0, 0, canvas.width, canvas.height);
}

document.body.addEventListener("keydown", keyDown);
document.body.addEventListener("keyup", keyUp);

function keyDown(event) {
  //up
  if (event.keyCode == 38) {
    upPressed = true;
  }

  //down
  if (event.keyCode == 40) {
    downPressed = true;
  }
  //left
  if (event.keyCode == 37) {
    leftPressed = true;
  }

  //right
  if (event.keyCode == 39) {
    rightPressed = true;
  }
}

function keyUp(event) {
  //up
  if (event.keyCode == 38) {
    upPressed = false;
  }

  //down
  if (event.keyCode == 40) {
    downPressed = false;
  }
  //left
  if (event.keyCode == 37) {
    leftPressed = false;
  }

  //right
  if (event.keyCode == 39) {
    rightPressed = false;
  }
}

drawGame();
