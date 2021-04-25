let board;
let cell;
let count=1;

function setup() {
	print("Gah");
	createCanvas(600,600);
	cell=new Cell(0,0,50);
	board=new Board(600, 8);
	background(0);
	//board.show();
}

function draw() {
	board.show();
	
}

function mousePressed(){
	//print("HELLO!")
	board.placeQueen(mouseX, mouseY, str(count));
	count++;
	board.score();
}

