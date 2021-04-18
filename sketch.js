let board;
let cell;
let count=1;

function setup() {
	createCanvas(600,600);
	cell=new Cell(0,0,50);
	board=new Board(600,9);
	background(0);
	console.log("HERE");
	//board.show();
}

function draw() {
	board.show();
	
}

function mousePressed(){

	board.placeQueen(mouseX, mouseY, str(count));
	count++;
}

