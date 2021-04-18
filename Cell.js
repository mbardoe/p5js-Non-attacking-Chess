class Cell{
	
	constructor(x,y,size){
		this.activated=false;
		this.text="";
		this.position=createVector(x,y);
		this.size=size;
	}

	activate(text){
		this.activated=true;
		this.text=text;
	}

	deactivate(){
		this.activated=false;
	}

	show(i,j){
		strokeWeight(4);
		stroke(255);
		if (this.activated){
			fill(125);
		}
		else{
			fill(0);
			//console.log(this.position.x);
		}
		rect(this.position.x, this.position.y, this.size, this.size);

		fill(0);
		textSize(int(this.size/6));
		textAlign(CENTER);
		text(str(i),this.position.x+9, this.position.y+9)
		text(str(j),this.position.x-9+this.size, this.position.y+9)
		text(str(abs(i-j)), this.position.x+9, this.position.y-9+this.size)
		if (this.activated){
			fill(0);
			textSize(10);
			textAlign(CENTER);
			text(this.text, this.position.x+this.size/2, 
				this.position.y+this.size/2);
		}
	}
}