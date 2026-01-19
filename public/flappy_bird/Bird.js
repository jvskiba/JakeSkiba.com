function Bird(COLOR, pos) {
	this.baseColor = COLOR;
	this.x = pos;
	this.highScore = 0;

	this.setUp = function() {
		this.y = height/2;
		this.H = 20;
		this.W = 30;

		//Changable settings
		this.gravity = 0.63;
		this.airResistance = 0.92;
		this.velocity = 0;
		this.upForce = -13;
		
		this.color = this.baseColor;
		this.score = 0;

		this.hit = false;
		this.passAndWaiting = false;
		this.scoreCountedAW = false;
		this.currentInside = false; 
		this.lastInside = false; 

	}

	this.show = function() {
		//sets the color
		fill(this.color[0], this.color[1], this.color[2]);
		//Draws the bird
		rect(this.x, this.y, this.W, this.H, 15);
	}

	this.think = function() {
		//The bot brain
		if (this.velocity > -6) {
			var spot = 0;	
			if (this.y > pipes[spot].bottom - 27) {this.up();}
		}
	}

	this.checkHigh = function() {
		//Sets the highscore to the score if the score is higher
  		if (this.highScore < this.score) {this.highScore = this.score;}
	}

	this.update = function() {
		//makes the gravity happen
		this.velocity += this.gravity;
		//makes air resistance
		this.velocity *= this.airResistance;
		this.y += this.velocity;

		//Prevents the bird from passing the top of the screen
		if (this.y + this.H > height) {
			this.velocity = 0;
			this.y = height - this.H;
		}
		//Prevents the bird from passing the bottom of the screen
		if (this.y < 0) {
			this.velocity = 0;
			this.y = 0;
		}
		//Makes the bird 'think' when bot mode is on.
		if (pipes.length > 0) {
			if (botGame == true) {
				this.think();
			}
		}
		//Makes the bird change color when hit
		if (this.hit == true) {this.color = [255, 0, 0]}
		//Sets the highscore of the session to the score if the score is higher
		//used to change the color of the pipes
		if (this.score > highCurrentScore) {highCurrentScore = this.score}
	}

	this.up = function() {
		//Makes the bird jump
		if (this.hit == false) {this.velocity += this.upForce;}
	}

	this.setUp();
}
