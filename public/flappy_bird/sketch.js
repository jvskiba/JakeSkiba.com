var birds = [];
var pipes = [];
var buttons = [];

var highCurrentScore = 0;
var highScore = 0;
var gameState = 0;
var players = 0;
var botGame = false;

var pipeFrequency = 50;
//KeyBinds are all capital
var player1KeyBind = 'L';
var player2KeyBind = 'A';

function setup() {
  //Runs only once
  createCanvas(700, 600);
  pipes.push(new Pipe())

   //makes the buttons and defins where they are. Defined like this:
   //Button(x, y, sizeX, sizeY, word, size, rectColor, textColor, func)
   buttons[0] = new Button(width/2-150, 410, 200, 75, "1 Player", 45, [100, 255, 255], [0, 0, 0], function(){players = 1; addBirds();}, true);
   buttons[1] = new Button(width/2+150, 410, 200, 75, "2 Player", 45, [100, 255, 255], [0, 0, 0], function(){players = 2; addBirds();}, true);
   buttons[2] = new Button(width/2, 500, 125, 40, "Turn Bot on",20, [100, 255, 255], [0, 0, 0], function(){botGame = true;}, true);
}

function addBirds() {
  //Called in the main menue under the button, chooses how many players there are.
  //Can be expanded
  if (players > 0) {birds[0] = new Bird([0, 255, 0], 35);}
  if (players > 1) {birds[1] = new Bird([0, 0, 255], 5);}
}

function draw() {
  //runs every frame

  //clears the frame
  background(0);
  
  if (gameState == 0) {
    //Main menue
    drawText('Flapppy Bird', 100, width/2, 85, [50, 50, 255]);
    drawText('Press SHIFT to start or restart', 40, width/2, 175, [50, 50, 255]);
    drawText('Player 1(Green) press L to jump', 40, width/2, 250, [50, 50, 255]);
    drawText('Player 2(Blue) press A to jump', 40, width/2, 300, [50, 50, 255]);
    drawText('Made by: Jake Skiba', 25, width/2, height - 25, [255, 255, 255]);
    //drawText(word, size, posX, posY, color)
    //draws the buttons for choosing mode
    for (var i = 0; i < buttons.length; i++){
      buttons[i].draw()
    }

  } else if (gameState == 1) {
    //The Game
    for (var I = 0; I < birds.length; I++) {
      birds[I].update();
      birds[I].show();
    }

    handlePipes();
    drawScore();
    } else {
    //End screen
    drawText('Game', 200, width/2, 250, [255, 0, 0]);
    drawText('Over', 200, width/2, 450, [255, 0, 0]);
    drawScore();
  }
}

function handlePipes() {
  if (frameCount % pipeFrequency == 0) {
    pipes.push(new Pipe());
  }
  for (var i = pipes.length-1; i >= 0; i--) {
    pipes[i].show();
    pipes[i].update();

  if (pipes[0].offScreen()) {
      pipes.splice(0, 1);
    }
    
  }
  if (pipes.length > 0) {
    var birdsHit = 0;
    for (var I = 0; I < birds.length; I++) {
     if (pipes[0].hit(birds[I])) {
         birds[I].hit = true;
      }
      if (pipes[0].scoreAdd(birds[I])) {
        birds[I].score += 1;
        birds[I].checkHigh();
      }
      if (birds[I].hit == true) {birdsHit++}
    }
    if (birdsHit == players) {gameState = 2;}
  }
}

function drawScore() {
  textSize(20);
  textAlign(CENTER);
  fill(100, 255, 255);
  for (var I = 0; I < birds.length; I++) {
    playerNum = I + 1;
    text(playerNum + ' Score: ' + birds[I].score, 75, 25 + I * 25);
    text(playerNum + ' High Score: ' + birds[I].highScore, 250, 25 + I * 25);
  }
}

function reSet() {
  birds[0].setUp();
  if (players == 2) {birds[1].setUp();}
  pipes.length = 0;
  highCurrentScore = 0;
  gameState = 1;
}

function keyPressed() {
  //the key binds for jumping and restarting the game
	if (key == player1KeyBind) {if (players > 0) {if (gameState == 1){birds[0].up();}}}
  if (key == player2KeyBind ) {if (players > 1) {if (gameState == 1){birds[1].up();}}}
  if (keyCode == SHIFT) {if (gameState !== 1) {reSet();}}
}