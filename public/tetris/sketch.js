//to do
//fix bugs - canvas size bug
//refactor
//add sound
//make menu look nice
//make rounds speed up
//make preview centered
//make rotation centered

//user "changable"
var rows = 20;
var collumns = 10;
var sOffset = 2;
var sideSpace = 200;

var sWidth = null;
var sHeight = null;
var gWCenter = null;
var gHCenter = null;
var sMenuStart = null;
var sMenuCenter = null;
var preDispD = null;
var preDispVertC = null;

var tGrid = new Array(collumns);
var tetros = [];
var pGrid = new Array(4);
var PreViewTetro = null;

var spawnPoint = [collumns/2 - 2, 0];
var myGame = null;
var fastDown = null;

var StartButton = null;
var PauseButton = null;
var UnPauseButton = null;
var ReSetButton = null;


function setup() {
 	createCanvas(300+sideSpace, 600);
 	frameRate(10)

 	//defines the size of the cells
 	sWidth = (width-sideSpace) / collumns;
	sHeight = height / rows;
	//defines the middle of the grid area
	gWCenter = (width-sideSpace) / 2;
	gHCenter = height / 2;
	//defines key aspects of the side bar
	sMenuStart = width - sideSpace;
	sMenuCenter = sMenuStart + (sideSpace/2);
	//sets size for the display for the next tetro
	preDispD = sWidth*4;
	preDispVertC = 20 + (preDispD/2);

	StartButton = new Button(width/2, height/2, 100, 50, "Start", 25, [255, 255, 255], [0, 0, 0], function() {myGame.state = 1; reSet();}, false);
 	PauseButton = new Button(sMenuCenter, preDispVertC + (preDispD/2) + 200, 100, 50, "Pause", 25, [255, 255, 255], [0, 0, 0], function() {myGame.state = 2;}, false);
 	UnPauseButton = new Button(gWCenter, gHCenter+80, 125, 50, "UnPause", 25, [255, 255, 255], [0, 0, 0], function() {myGame.state = 1;}, false);
 	ReSetButton = new Button(width/2, height/2 + 100, 100, 50, "ReStart", 25, [255, 255, 255], [0, 0, 0], reSet, false);

	//build and fill the two grid arrays
 	for (var i = 0; i < collumns; i++) {
 		tGrid[i] = new Array(rows);
 		for (var j = 0; j < rows; j++) {
 			tGrid[i][j] = new Array(3);
 			//makes it an empty cell
 			tGrid[i][j][0] = 0;
 			//defines default color
 			tGrid[i][j][1] = [255, 255, 255];
 			//defines cell's position
 			tGrid[i][j][2] = [sHeight*i, sWidth*j]
 		}
 	}

	//defines the top corner of the preview window
 	var preDispTopC = [sMenuCenter - (preDispD/2), preDispVertC - (preDispD/2)]

 	for (var i = 0; i < 4; i++) {
 		pGrid[i] = new Array(4);
 		for (var j = 0; j < 4; j++) {
 			pGrid[i][j] = new Array(3);
 			//makes it an empty cell
 			pGrid[i][j][0] = 0;
 			//defines default color
 			pGrid[i][j][1] = [255, 255, 255];
 			//defines cell's position
 			pGrid[i][j][2] = [preDispTopC[0] + (sWidth*j), preDispTopC[1] + (sHeight*i)]
 		}
 	}

 	//create the game object with all game data
 	myGame = new GameObj();
}

function draw() {
	background(0);

	if (myGame.state == 0) {
		drawText("Tetris", 60, width/2, 75, [255, 255, 255]);
		StartButton.draw();

	} else if (myGame.state == 1 || myGame.state == 2) {
 		//render grid lines
 		stroke(255);
 		noFill();
 		for (var i = 0; i < collumns; i++) {
 			for (var j = 0; j < rows; j++) {
 				rect(tGrid[i][j][2][0], tGrid[i][j][2][1], sWidth, sHeight);
 			}
 		}

 		//render the tGrid
 		for (var i = 0; i < collumns; i++) {
 			for (var j = 0; j < rows; j++) {
 				if (tGrid[i][j][0] == 1) {
 					stroke(tGrid[i][j][1][0], tGrid[i][j][1][1], tGrid[i][j][1][2]);
 					fill(tGrid[i][j][1][0], tGrid[i][j][1][1], tGrid[i][j][1][2]);
 					rect(tGrid[i][j][2][0] + sOffset, tGrid[i][j][2][1] + sOffset, sWidth - sOffset*2, sHeight - sOffset*2);
 				}
 			}
 		}


 		//Drawing the side menu
 		drawRect(sMenuCenter, preDispVertC, preDispD, preDispD, [155, 155, 155])

 		//render the pGrid
 		for (var i = 0; i < 4; i++) {
 			for (var j = 0; j < 4; j++) {
 				if (pGrid[i][j][0] == 1) {
 					stroke(pGrid[i][j][1][0], pGrid[i][j][1][1], pGrid[i][j][1][2]);
 					fill(pGrid[i][j][1][0], pGrid[i][j][1][1], pGrid[i][j][1][2]);
 					rect(pGrid[i][j][2][0] + sOffset, pGrid[i][j][2][1] + sOffset, sWidth - sOffset*2, sHeight - sOffset*2);
				} 		
 			}
 		}

 		//draw score
 		drawText("Score:", 30, sMenuCenter, preDispVertC + (preDispD/2) + 50, [255, 255, 255])
 		drawText(myGame.score, 30, sMenuCenter, preDispVertC + (preDispD/2) + 80, [255, 255, 255])
 		//draw game time
 		drawText("length:", 30, sMenuCenter, preDispVertC + (preDispD/2) + 110, [255, 255, 255])
 		console.log(myGame.playDuration);
 		drawText(myGame.playDuration, 30, sMenuCenter, preDispVertC + (preDispD/2) + 140, [255, 255, 255])

 		if (myGame.state == 1) {
 			PauseButton.draw();
 		}

 		if (myGame.state == 2) {
 			drawRect(gWCenter, gHCenter, 200, 75, [155, 155, 155]);;
 			drawText("Paused", 50, gWCenter, gHCenter + 15, [255, 255, 255]);
 			UnPauseButton.draw();
 		}

	} else if (myGame.state == 3) {
		drawText("Game", 50, width/2, height/2 - 25, [255, 255, 255]);
		drawText("Over", 50, width/2, height/2 + 25, [255, 255, 255]);
		ReSetButton.draw();
	}
}

function keyPressed() {
	//runs when key is pressed and sends that key press to the falling tetro
	if (keyCode === UP_ARROW) {
		tetros[0].rotate();
	} else if (keyCode === DOWN_ARROW) {
		fastDown = setInterval(moveTetroDown, 50);
	} else if (keyCode === RIGHT_ARROW) {
		tetros[0].right();
	} else if (keyCode === LEFT_ARROW) {
		tetros[0].left();
	} 
}

function keyReleased() {
	if (keyCode === DOWN_ARROW) {
		clearInterval(fastDown);
	}
}

function moveTetroDown() {
	if (myGame.state == 1) {
		tetros[0].moveDown();
	}
}

function tetroStopped() {
	myGame.stopTimer();
	//var fullLines = myGame.checkFullLines
	linesToDelete = myGame.checkFullLines();
	myGame.calcScore(linesToDelete.length);
	for (var i = 0; i < linesToDelete.length; i++) {
		shiftGridDown(linesToDelete[i]);
	}

	if (tetros[0].pos[1] == 0) {
		gameOver();
	} else {
		createNewTetro(false);
	}
}

function createNewTetro(first) {
	if (first) {
		var newTetroId = Math.round(random(0, 6));
		PreViewTetro = new Tetro();
		PreViewTetro.define(newTetroId)
	}

	var newTetroId = Math.round(random(0, 6));

	tetros.unshift(PreViewTetro);
	tetros[0].spawn(newTetroId);

	PreViewTetro = new Tetro();
	PreViewTetro.define(newTetroId)
	for (var i = 0; i < 4; i++) {
 		for (var j = 0; j < 4; j++) {
 			//makes it an empty cell
 			pGrid[i][j][0] = 0;
 			//defines default color
 			pGrid[i][j][1] = [255, 255, 255];
 		}
 	}
 	PreViewTetro.preView();


 	myGame.startTimer();
 	myGame.round++;
}

function shiftGridDown(position) {
	//temp code
	for (var i = 0; i < collumns; i++) {
		tGrid[i][position][0] = 0;
	}

	for (var i = position; i > 0; i--) {
		for (var j = 0; j < collumns; j++) {
			tGrid[j][i][0] = tGrid[j][i-1][0];
			tGrid[j][i][1] = tGrid[j][i-1][1];
		}
	}
}

function gameOver() {
	myGame.stopTimer();
	myGame.stopLengthTimer();
	myGame.state = 3;
}

function reSet() {
	for (var i = tetros.length; i >= 0; i--) {
		tetros.splice(i, 1);
	}

	for (var i = 0; i < collumns; i++) {
 		for (var j = 0; j < rows; j++) {
 			//makes it an empty cell
 			tGrid[i][j][0] = 0;
 			//defines default color
 			tGrid[i][j][1] = [255, 255, 255];
 		}
 	}

	createNewTetro(true);
	myGame.state = 1;
	myGame.playDuration = 0;
	myGame.score = 0;
	myGame.startLengthTimer();
}