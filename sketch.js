let board;
let cell;
let count=1;

function setup() {
	createCanvas(600,600);
	cell=new Cell(0,0,50);
	board=new Board(600,10);
	background(0);
	//board.show();
}

function draw() {
	board.show();
	
}

function mousePressed(){

	board.placeQueen(mouseX, mouseY, str(count));
	count++;
}
