function GameObj() {
	this.gameTimer = null;
	this.playDuration = 0;
	this.lengthTimer = null;
	this.score = 0;
	this.speed = 500;
	this.round = 0;

	this.state = 0;
	//0 = start menue, 1 = running, 2 = paused, 3 = gameOver

	this.tetroOptions =
	[[0, 'line', [0, 255, 255], [[
	[1, 1, 1, 1],
	[0, 0, 0, 0],
	[0, 0, 0, 0],
	[0, 0, 0, 0]], [
	[1, 0, 0, 0],
	[1, 0, 0, 0],
	[1, 0, 0, 0],
	[1, 0, 0, 0]]]],
	[1, 'leftL', [0, 0, 255], [[[1, 0, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[1, 1, 0, 0], [1, 0, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]], [[1, 1, 1, 0], [0, 0, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 1, 0, 0], [0, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]]]],
	[2, 'rightL', [255, 170, 0], [[[0, 0, 1, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[1, 0, 0, 0], [1, 0, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0]], [[1, 1, 1, 0], [1, 0, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[1, 1, 0, 0], [0, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]]]],
	[3, 'square', [255, 255, 0], [[[1, 1, 0, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]]]],
	[4, 'rightZ', [0, 255, 0], [[[0, 1, 1, 0], [1, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[1, 0, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]]]],
	[5, 'leftZ', [255, 0, 0], [[[1, 1, 0, 0], [0, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 1, 0, 0], [1, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]]]],
	[6, 'arrow', [255, 0, 255], [[[0, 1, 0, 0], [1, 1, 1, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[1, 0, 0, 0], [1, 1, 0, 0], [1, 0, 0, 0], [0, 0, 0, 0]], [[1, 1, 1, 0], [0, 1, 0, 0], [0, 0, 0, 0], [0, 0, 0, 0]], [[0, 1, 0, 0], [1, 1, 0, 0], [0, 1, 0, 0], [0, 0, 0, 0]]]]];

	this.startTimer = function() {
		this.gameTimer = setInterval(moveTetroDown, this.speed);
	}

	this.stopTimer = function() {
		clearInterval(this.gameTimer);
	}

	this.startLengthTimer = function() {
		var _this = this;
		this.lengthTimer = setInterval(function() {_this.increaseGameLength();}, 1000);
	}

	this.stopLengthTimer = function() {
		clearInterval(this.lengthTimer);
	}

	this.increaseGameLength = function() {
	if (this.state == 1) {
		this.playDuration = this.playDuration + 1;
		console.log(this.playDuration);
	}
}

		this.checkFullLines = function() {
		linesToDelete = [];
		for (var i = 0; i < rows; i++) {
			lineFull = true;
 			for (var j = 0; j < collumns; j++) {
 				if (tGrid[j][i][0] == 0) {
 					lineFull = false;
 					break;
 				}
 			}
 			if (lineFull) {
 				linesToDelete.push(i);
 			}
 		}
 		return linesToDelete;
	}

	this.calcScore = function(linesDeleted) {
		if (linesDeleted == 4) {
			console.log("Tetris");
			this.score = this.score + 800;
		} else if (linesDeleted < 4) {
			this.score = this.score + 100*linesDeleted;
		}
		console.log(this.score);
	}

}
