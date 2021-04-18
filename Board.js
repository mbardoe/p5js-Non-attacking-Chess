
class Board{

	constructor(width, n){
		//this.offset=u;
		this.dimension=n;
		this.cellSize=int(width/n);
		this.cells=[];
		for (let i=0; i<n; i++){
			for (let j=0; j<n; j++){
				let newCell=new Cell(j*this.cellSize,i*this.cellSize,this.cellSize)
				this.cells.push(newCell);
			}
		}
		//console.log(u);
	}

	getCellByLabel(i, j){
		return this.cells[j*this.dimension+i];
	}

	getCellByCoord(x,y){
		return this.cells[int(y/this.cellSize)*this.dimension+int(x/this.cellSize)];
	}

	placeQueen(x,y, text){
		let cell, pos;
		let over=int(x/this.cellSize);
		//console.log(over);
		let down=int(y/this.cellSize);
		//console.log(down);
		// Get horizontal
		for (let i=0; i<this.dimension; i++){
			cell=this.getCellByLabel((over+i)%this.dimension,down);
			//console.log(cell);
			cell.activate("")
			cell=this.getCellByLabel(over,(down+i)%this.dimension);
			cell.activate("")
			cell=this.getCellByLabel((over+i)%this.dimension,(down+i)%this.dimension);
			cell.activate("")
			if (over-i<0){
				pos=over-i+this.dimension;
			}
			else{
				pos=over-i
			}	
			cell=this.getCellByLabel((pos)%this.dimension,(down+i)%this.dimension);
			cell.activate("")
		}
		cell=this.getCellByLabel(over,down);
		cell.activate(text);

	}
	score(){
		console.log("Horizontal left");
		let cell, score,status;
		score=0;

		for (let i=0; i<self.dimension;i++){
			status=0;
			for (let j=0; j<self.dimension;j++){
				cell=this.getCellByLabel(j,i);
				if (!cell.activated){
					status=1
				}

			}
			score+=status;
		}
		console.log(score);
	}

	show(){
		let over, down, done, dtwo;
		for (let i=0;i<this.dimension*this.dimension;i++){
			over=int(i%this.dimension);
			down=int(i/this.dimension);
			if (down-over<0){
				done=int(down-over+this.dimension);
			}
			else{
				done=int(down-over);
			}	
			if (down+over>=this.dimension){
				dtwo=int(down+over-this.dimension);
			}
			else{
				dtwo=int(down+over);
			}	
			this.cells[i].show(over, down, done, dtwo);
		}
	}
}