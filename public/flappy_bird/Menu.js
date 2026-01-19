function Button(x, y, sizeX, sizeY, word, size, rectColor, textColor, func, selectable) {
	//All color vars are set with ARRAYS
	//the function should be called in the arguments like this: function(){Real func should go here}

	//centers the button on the x and y position
	this.rx = x - sizeX/2;
	this.ry = y - sizeY/2;
	this.selected = false;

	this.draw = function() {
		//Checks if the mouse is in the button and if it is pressed down.
		if (mouseIsPressed == true) {
			if (mouseX > this.rx && mouseX < x+(sizeX/2) && mouseY > this.ry && mouseY < y+(sizeY/2)) {
				if (this.selected == false) {
					func()
					if (selectable) {
						this.selected = true;
					}
					console.log(word);
				}
			}
		}


		//sets inside color
		stroke(rectColor[0], rectColor[1], rectColor[2]);
		fill(rectColor[0], rectColor[1], rectColor[2]);
		//draws the button's rectangle
		rect(this.rx, this.ry, sizeX, sizeY, 15);

		//Finds where to put the text inside the rect
		this.tx = this.rx + sizeX/2;
		this.ty = this.ry + sizeY - sizeY/4;

		//Draws the text
		if (this.selected){ drawText('Selected', size, this.tx, this.ty, textColor);
		} else {drawText(word, size, this.tx, this.ty, textColor)}

	}

}

function drawText(word, size, posX, posY, color) {
  //All color vars are set with ARRAYS

  //Draws text in a place you define it to be
  textSize(size);
  textAlign(CENTER);
  stroke(color[0], color[1], color[2]);
  fill(color[0], color[1], color[2]);
  text(word, posX, posY);
}

function drawRect(x, y, sizeX, sizeY, rectColor) {
	//sets color of rectangle
	stroke(rectColor[0], rectColor[1], rectColor[2]);
	fill(rectColor[0], rectColor[1], rectColor[2]);
	//draws the button's rectangle
	rect(x - sizeX/2, y - sizeY/2, sizeX, sizeY, 15);
}