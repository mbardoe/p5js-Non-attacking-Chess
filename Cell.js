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

	show(){
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

		if (this.activated){
			fill(0);
			textSize(10);
			textAlign(CENTER);
			text(this.text, this.position.x+this.size/2, this.position.y+this.size/2);
		}
	}
}