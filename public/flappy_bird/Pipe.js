
function Pipe() {
	this.top;
	this.bottom;
	this.pos;
	this.x = width;

	this.w = 25;
	this.speed = 6;
	this.gap = 80;
	//area from the top and bottom where the pipe cant be
	this.space = 200;

	this.birdPassed = false;
	this.ScoreCounted = false;
	this.hitCounted = false;
	this.color = []

	this.hit = function(bird) {
		//checks if the bird is horizontally inside the pipe
		if (bird.x + bird.W > this.x && bird.x < this.x + this.w) {
			bird.passAndWaiting = true;
			//checks if the bird is vertically inside the pipe, and not the gap
			if (bird.y < this.top || bird.y + bird.H > this.bottom) {
				if (bird.hit == false) {
					bird.hit = true;
					return true;
				}
			}
		}
		return false;
	}

	this.setup = function(colorR, colorG, colorB) {
		//sets the pipe color
		this.color = [colorR, colorG, colorB]
		//creates the center of the gap in the pipe
		this.pos = random(this.space, height - this.space)
		//defines the top and bottom of the gap
		this.top = this.pos - this.gap/2
		this.bottom = this.pos + this.gap/2	
	}

	this.setup(255, 255, 255);

	this.scoreAdd = function(bird) {
		//checks if the bird is inside of the pipe
		if (bird.x > this.x && bird.x < this.x + this.w) {
			bird.lastInside = bird.currentInside;
			bird.currentInside = true;
		} else if (bird.x < this.x || bird.x > this.x + this.w) {
			bird.lastInside = bird.currentInside;
			bird.currentInside = false;
		}
		//checks if conditions are right to add the score
		if (bird.lastInside == true && bird.currentInside == false && bird.hit == false){return true;
		} else {return false;}
	}

	this.colorSet = function(){
		//Sets the color pased on the player's score
		if (highCurrentScore == 0) {this.color = [255, 255, 255]
		} else if (highCurrentScore >= 5 && highCurrentScore < 10) {this.color = [155, 155, 255]
		} else if (highCurrentScore >= 10 && highCurrentScore < 20) {this.color = [100, 100, 255]
		} else if (highCurrentScore >= 20 && highCurrentScore < 30) {this.color = [100, 155, 255]
		} else if (highCurrentScore >= 30 && highCurrentScore < 40) {this.color = [100, 255, 255]
		} else if (highCurrentScore >= 40 && highCurrentScore < 50) {this.color = [255, 255, 100]
		}
	}

	this.show = function() {
		//No outLine
		noStroke();
		//Sets color
		fill(this.color[0],this.color[1],this.color[2]);
		//Draws the top and bottom
		rect(this.x, 0, this.w, this.top);
		rect(this.x, this.bottom, this.w, height);  
	}

	this.update = function() {
		this.colorSet();
		//Moves the pipe
		this.x -= this.speed;
	}

	this.offScreen = function() {
		//Checks if the pipe is off screen and needs to be deleted
		if (this.x < -this.w) { return true; } else { return false; }
	}

}