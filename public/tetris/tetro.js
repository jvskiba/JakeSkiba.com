function Tetro() {
	 
	this.type = null;
	this.pos = spawnPoint.slice();
	this.oldPos = spawnPoint.slice();
	this.rotation = 0;
	this.oldRotation = 0;
	this.stop = false;
	
	this.relPoses = [];
	this.relBodyPos = [];
	this.relBottomPos = [];
	this.relLeftPos = [];
	this.relRightPos = [];

	this.define = function(tetroNum) {
		this.type = myGame.tetroOptions[tetroNum];
	}

	this.spawn = function() {
		this.updateSides();
		this.update(this.oldPos, this.pos, this.rotation, this.rotation);
	}

	this.preView = function() {
		for (var i = 0; i < 4; i++) {
 			for (var j = 0; j < 4; j++) {
 				if (this.type[3][this.rotation][i][j] == 1) {
 					pGrid[j][i][0] = this.type[3][this.rotation][i][j];
 					pGrid[j][i][1] = this.type[2];
 				}
 			}
 		}
	}

	this.updateSides = function() {
		this.relPoses = this.findSides(this.rotation);
		this.relBottomPos = this.relPoses[0];
		this.relLeftPos = this.relPoses[1];
		this.relRightPos = this.relPoses[2];
		this.relBodyPos = this.relPoses[3];
	}

	this.findSides = function(rotation) {
		relBody = [];
		relBottom = [];
		relLeft = [];
		relRight = [];

		for (var i = 0; i < 4; i++) {
 			for (var j = 0; j < 4; j++) {
				if (this.type[3][rotation][i][j] == 1) {
					//finds body
					relBody.push([j, i]);

					//finding bottom
					if (i !== 3) {
						if (this.type[3][rotation][i+1][j] == 0) {
							relBottom.push([j, i]);
						} 
					}else {
						relBottom.push([j, i]);
					}

					//finding left side
					if (j !== 0) {
						if (this.type[3][rotation][i][j-1] == 0) {
							relLeft.push([j, i]);
						} 
					}else {
						relLeft.push([j, i]);
					}

					//finding right side
					if (j !== 3) {
						if (this.type[3][rotation][i][j+1] == 0) {
							relRight.push([j, i]);
						} 
					}else {
						relRight.push([j, i]);
					}

				}
			}
		}

		return [relBottom, relLeft, relRight, relBody];

	}

	this.update = function(erasePos, paintPos, eraseRotation, paintRotation) {
		if (this.stop == false) {
			this.deleteOldPos(erasePos, eraseRotation);
			this.addNewPos(paintPos, paintRotation);

 			this.oldRotation = this.rotation;
 		}
	}

	this.deleteOldPos = function(erasePos, eraseRotation) {
		for (var i = 0; i < 4; i++) {
 			for (var j = 0; j < 4; j++) {
 				if (this.type[3][eraseRotation][i][j] == 1) {
 					tGrid[erasePos[0]+j][erasePos[1]+i][0] = 0;
					tGrid[erasePos[0]+j][erasePos[1]+i][1] = [255, 255, 255];
 				}
 			}
		}
	}

	this.addNewPos = function(paintPos, paintRotation) {
		for (var i = 0; i < 4; i++) {
 			for (var j = 0; j < 4; j++) {
 				if (this.type[3][paintRotation][i][j] == 1) {
 					tGrid[paintPos[0]+j][paintPos[1]+i][0] = this.type[3][paintRotation][i][j];
 					tGrid[paintPos[0]+j][paintPos[1]+i][1] = this.type[2];
 				}
 			}
 		}
	}

	this.moveDown = function() {

		if (!this.checkIfTouching("vertical", this.rotation, this.relBottomPos, this.relLeftPos, this.relRightPos, this.relBodyPos)) {
			this.oldPos = this.pos.slice();
			this.pos[1] = this.pos[1] + 1;
		} else {
			tetroStopped();
		}
		this.update(this.oldPos, this.pos, this.rotation, this.rotation);
	}

	this.checkIfTouching = function(look, possRotation, bottom, left, right, body) {
		//check if touching bottom
		bottomPos = new Array(bottom.length)
		leftPos = new Array(left.length)
		rightPos = new Array(right.length)
		bodyPos = new Array(body.length)

		cantMove = false;


		this.deleteOldPos(this.pos, this.rotation);

			//check if can't move anymore to the side
		if (look == "horizontalLeft") {
			for (var i = 0; i < left.length; i++) {
				leftPos[i] = new Array(2)
				leftPos[i][0] = left[i][0] + this.pos[0];
				leftPos[i][1] = left[i][1] + this.pos[1];
			}

			for (var i = 0; i < leftPos.length; i++) {
				if (leftPos[i][0] == 0) {
					cantMove = true;
				} else if (tGrid[ leftPos[i][0]-1 ][ leftPos[i][1] ][0] == 1) {
					cantMove = true;
				}

			}
		}

		
		if (look == "horizontalRight") {
			for (var i = 0; i < right.length; i++) {
				rightPos[i] = new Array(2)
				rightPos[i][0] = right[i][0] + this.pos[0];
				rightPos[i][1] = right[i][1] + this.pos[1];
			}

			for (var i = 0; i < rightPos.length; i++) {
				if (rightPos[i][0] == collumns - 1) {
					cantMove = true;
				} else if (tGrid[ rightPos[i][0]+1 ][ rightPos[i][1] ][0] == 1) {
					cantMove = true;
				}

			}
		}

	
		if (look == "vertical" || look == "rotate") {
			for (var i = 0; i < bottom.length; i++) {
				bottomPos[i] = new Array(2)
				bottomPos[i][0] = bottom[i][0] + this.pos[0];
				bottomPos[i][1] = bottom[i][1] + this.pos[1];
			}

			for (var i = 0; i < bottomPos.length; i++) {
				if (bottomPos[i][1] == rows - 1) {
					//check if touching the bottom
					cantMove = true;

				} else if (bottomPos[i][1] < 20) {
					if (tGrid[bottomPos[i][0]][bottomPos[i][1]+1][0] == 1) {
						//check if touching another tetro^
						cantMove = true;

					}
				}
			}
		}

		if (look == "rotate") {
			for (var i = 0; i < 4; i++) {
 				bodyPos[i] = new Array(2)
				bodyPos[i][0] = body[i][0] + this.pos[0];
				bodyPos[i][1] = body[i][1] + this.pos[1];
 			}

 			for (var i = 0; i < bodyPos.length; i++) {
				if (tGrid[ bodyPos[i][0] ][ bodyPos[i][1] ][0] == 1) {
					//check if allready blocks where trying to move
					cantMove = true;
				}
			}
		}

		this.addNewPos(this.pos, this.rotation);

		if (cantMove && look == "vertical") {
			this.stop = true;
			return true;
		} else if (cantMove) {
			return true;
		} else {
			return false;
		}

	}

	//doing an action if a key is pressed
	this.rotate = function() {
		newRotation = null;
		testRelPoses = [];

		if (this.rotation < this.type[3].length - 1) {
			newRotation = this.rotation + 1;
		} else {
			newRotation = 0;
		}

		testRelPoses = this.findSides(newRotation);
		if (!this.checkIfTouching("rotate", newRotation, testRelPoses[0], testRelPoses[1], testRelPoses[2], testRelPoses[3])) {
			this.oldRotation = this.rotation;
			this.rotation = newRotation;
			this.updateSides();

			this.update(this.pos, this.pos, this.oldRotation, this.rotation);
		}
	}

	this.right = function() {
		if (!this.checkIfTouching("horizontalRight", this.rotation, this.relBottomPos, this.relLeftPos, this.relRightPos, this.relBodyPos)) {
			this.oldPos = this.pos.slice();
			this.pos[0] = this.pos[0] + 1;

			this.update(this.oldPos, this.pos, this.rotation, this.rotation);
		}
	}
	this.left = function() {
		if (!this.checkIfTouching("horizontalLeft", this.rotation, this.relBottomPos, this.relLeftPos, this.relRightPos, this.relBodyPos)) {
			this.oldPos = this.pos.slice();
			this.pos[0] = this.pos[0] - 1;

			this.update(this.oldPos, this.pos, this.rotation, this.rotation);
		}
	}

}